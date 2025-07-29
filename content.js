// CSES Problem Tracker Content Script
(function() {
    'use strict';

    // CSES to LeetCode Problem Mapping
    const leetCodeMapping = {
        // Introductory Problems
        "Weird Algorithm": {
            category: "Simulation (Collatz Conjecture)",
            similar: ["Collatz Sequence problems"]
        },
        "Missing Number": {
            category: "Math-based Array Pattern",
            similar: ["Missing Number", "First Missing Positive", "Set Mismatch", "Find the Duplicate Number"]
        },
        "Repetitions": {
            category: "Longest Consecutive Repeating Characters", 
            similar: ["Max Consecutive Ones", "Consecutive Characters", "Max Consecutive Ones III"]
        },
        "Increasing Array": {
            category: "Make Array Non-Decreasing with Minimum Operations",
            similar: ["Best Time to Buy and Sell Stock", "Minimum Time to Make Rope Colorful"]
        },
        "Permutations": {
            category: "Generate All Permutations",
            similar: ["Permutations", "Permutations II", "Next Permutation"]
        },
        "Number Spiral": {
            category: "2D Matrix Pattern Recognition",
            similar: ["Spiral Matrix", "Spiral Matrix II", "Spiral Matrix III"]
        },
        "Two Knights": {
            category: "Combinatorics and Chess Positioning",
            similar: ["N-Queens", "N-Queens II", "Valid Sudoku"]
        },
        "Two Sets": {
            category: "Subset Sum and Partitioning",
            similar: ["Partition Equal Subset Sum", "Partition to K Equal Sum Subsets"]
        }
    };

     // Function to observe changes in the problem list
    function observeChanges() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Re-count and re-style when new content is added
                    setTimeout(() => {
                        displayEnhancedCounter();
                        addLeetCodeSuggestions();
                    }, 500);
                }
            });
        });

        const targetNode = document.querySelector('.content, .skeleton, body');
        if (targetNode) {
            observer.observe(targetNode, {
                childList: true,
                subtree: true
            });
        }
    }

    // Check if extension context is valid
    function isExtensionContextValid() {
        try {
            return typeof chrome !== 'undefined' && 
                   chrome.runtime && 
                   chrome.runtime.id && 
                   !chrome.runtime.lastError;
        } catch (error) {
            return false;
        }
    }

    // Function to count solved problems across all sections
    function countSolvedProblems() {
        // Count problems with "full" status (fully solved)
        const fullySolvedElements = document.querySelectorAll('.task-score.icon.full');
        const fullySolvedCount = fullySolvedElements.length;
        
        // Also count any other solved indicators
        const partiallyCompletedElements = document.querySelectorAll('.task-score.icon:not(.full):not(.zero):not([class="task-score icon"])');
        let partialCount = 0;
        
        // Check for any other possible solved indicators
        partiallyCompletedElements.forEach(element => {
            const classList = element.className;
            if (classList.includes('icon') && !classList.includes('zero') && classList !== 'task-score icon') {
                partialCount++;
            }
        });
        
        // Total count of solved problems
        const totalSolved = fullySolvedCount;
        
        console.log(`CSES Tracker: Found ${fullySolvedCount} fully solved problems`);
        return totalSolved;
    }

    // Function to create and display the counter
    function displaySolvedCounter() {
        // Remove existing counter if present
        const existingCounter = document.getElementById('cses-solved-counter');
        if (existingCounter) {
            existingCounter.remove();
        }

        const solvedCount = countSolvedProblems();
        
        // Find the navigation area to add our counter
        const nav = document.querySelector('.nav, .title-block');
        if (!nav) return;

        // Create counter element
        const counter = document.createElement('div');
        counter.id = 'cses-solved-counter';
        counter.className = 'solved-counter';
        counter.innerHTML = `
            <div class="counter-content">
                <i class="fas fa-trophy"></i>
                <span class="counter-text">Problems Solved: <strong>${solvedCount}</strong></span>
            </div>
        `;

        // Insert after the navigation
        nav.parentNode.insertBefore(counter, nav.nextSibling);

        // Store the count in chrome storage
        chrome.storage.local.set({ solvedCount: solvedCount });
    }

    // Function to observe changes in the problem list
    function observeChanges() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Re-count when new content is added
                    setTimeout(displaySolvedCounter, 500);
                }
            });
        });

        const targetNode = document.querySelector('.content, .skeleton, body');
        if (targetNode) {
            observer.observe(targetNode, {
                childList: true,
                subtree: true
            });
        }
    }

    // Function to analyze problem status from all sections
    function analyzeProblemTable() {
        // Count all problems with "task-score icon full" class (fully solved)
        const fullySolvedElements = document.querySelectorAll('.task-score.icon.full');
        const fullySolvedCount = fullySolvedElements.length;
        
        // Count problems with partial progress (non-zero, non-empty)
        const partialElements = document.querySelectorAll('.task-score.icon');
        let partialCount = 0;
        
        partialElements.forEach(element => {
            const classList = element.className;
            // Count elements that have some progress but aren't fully solved or zero
            if (classList.includes('icon') && 
                !classList.includes('full') && 
                !classList.includes('zero') && 
                classList !== 'task-score icon') {
                partialCount++;
            }
        });
        
        console.log(`CSES Tracker - Analysis: ${fullySolvedCount} full, ${partialCount} partial`);
        
        // Return count of fully solved problems
        return fullySolvedCount;
    }

    // Enhanced problem counting - focuses on the specific CSES pattern
    function getEnhancedSolvedCount() {
        // Primary method: count elements with "task-score icon full" class
        const fullySolvedElements = document.querySelectorAll('.task-score.icon.full');
        const primaryCount = fullySolvedElements.length;
        
        // Secondary method: analyze all task elements
        const secondaryCount = analyzeProblemTable();
        
        // Tertiary method: basic count as fallback
        const basicCount = countSolvedProblems();
        
        console.log(`CSES Tracker counts - Primary: ${primaryCount}, Secondary: ${secondaryCount}, Basic: ${basicCount}`);
        
        // Return the primary count (most reliable for CSES)
        return primaryCount;
    }

    // Update the display function to use enhanced counting
    function displayEnhancedCounter() {
        const existingCounter = document.getElementById('cses-solved-counter');
        if (existingCounter) {
            existingCounter.remove();
        }

        const solvedCount = getEnhancedSolvedCount();
        
        // Get section breakdown for display
        const sections = document.querySelectorAll('h2');
        let sectionBreakdown = '';
        let detailedBreakdown = [];
        
        sections.forEach(section => {
            const sectionName = section.textContent.trim();
            if (sectionName && sectionName !== 'General') {
                const nextElement = section.nextElementSibling;
                if (nextElement && nextElement.classList.contains('task-list')) {
                    const sectionSolved = nextElement.querySelectorAll('.task-score.icon.full').length;
                    const sectionTotal = nextElement.querySelectorAll('.task').length;
                    if (sectionTotal > 0) {
                        // Shorten section names for display
                        const shortName = sectionName.replace('Problems', '').replace('Algorithms', 'Algo').trim();
                        sectionBreakdown += `${shortName}: ${sectionSolved}/${sectionTotal} `;
                        detailedBreakdown.push({
                            name: shortName,
                            solved: sectionSolved,
                            total: sectionTotal
                        });
                    }
                }
            }
        });
        
        const titleBlock = document.querySelector('.title-block');
        if (!titleBlock) return;

        const counter = document.createElement('div');
        counter.id = 'cses-solved-counter';
        counter.className = 'solved-counter';
        counter.innerHTML = `
            <div class="counter-content">
                <i class="fas fa-trophy"></i>
                <span class="counter-text">Problems Solved: <strong class="solved-number">${solvedCount}</strong></span>
                <div class="counter-details">
                    <small>Last updated: ${new Date().toLocaleTimeString()}</small>
                    <div class="section-breakdown" style="margin-top: 5px; font-size: 11px; opacity: 0.8;">
                        ${sectionBreakdown ? sectionBreakdown : 'Click to refresh'}
                    </div>
                </div>
            </div>
        `;

        titleBlock.appendChild(counter);

        // Store in chrome storage with timestamp (with error handling)
        if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
            try {
                chrome.storage.local.set({ 
                    solvedCount: solvedCount,
                    lastUpdated: Date.now(),
                    sectionBreakdown: sectionBreakdown,
                    detailedBreakdown: detailedBreakdown
                }, function() {
                    if (chrome.runtime.lastError) {
                        console.log('CSES Tracker: Storage error:', chrome.runtime.lastError);
                    }
                });
            } catch (error) {
                console.log('CSES Tracker: Chrome storage not available:', error);
                // Store in localStorage as fallback
                try {
                    localStorage.setItem('cses-tracker-data', JSON.stringify({
                        solvedCount: solvedCount,
                        lastUpdated: Date.now(),
                        sectionBreakdown: sectionBreakdown,
                        detailedBreakdown: detailedBreakdown
                    }));
                } catch (localError) {
                    console.log('CSES Tracker: LocalStorage also failed:', localError);
                }
            }
        } else {
            // Fallback to localStorage if chrome API is not available
            try {
                localStorage.setItem('cses-tracker-data', JSON.stringify({
                    solvedCount: solvedCount,
                    lastUpdated: Date.now(),
                    sectionBreakdown: sectionBreakdown,
                    detailedBreakdown: detailedBreakdown
                }));
            } catch (error) {
                console.log('CSES Tracker: LocalStorage failed:', error);
            }
        }
        
        console.log(`CSES Tracker: Displayed ${solvedCount} solved problems`);
    }

    // Function to extract problem ID from URL
    function extractProblemId(url) {
        const match = url.match(/\/problemset\/task\/(\d+)/);
        return match ? match[1] : null;
    }

    // Function to add modern styling to CSES
    function addModernStyling() {
        // Add CSS classes to enable modern styling
        document.body.classList.add('cses-modern-enabled');
        
        // Apply modern classes to elements
        const taskLists = document.querySelectorAll('.task-list');
        taskLists.forEach(taskList => {
            taskList.classList.add('cses-modern-list');
        });
        
        const tasks = document.querySelectorAll('.task-list .task');
        tasks.forEach(task => {
            task.classList.add('cses-modern-task');
        });
        
        console.log('Modern styling classes applied');
    }

    // Function to add LeetCode suggestions to problems
    function addLeetCodeSuggestions() {
        const taskLists = document.querySelectorAll('.task-list');
        console.log('Found task lists:', taskLists.length);
        
        taskLists.forEach(taskList => {
            // Add header if not exists
            if (!taskList.previousElementSibling || !taskList.previousElementSibling.classList.contains('task-list-header')) {
                const header = document.createElement('div');
                header.className = 'task-list-header';
                header.innerHTML = `
                    <div>Problem</div>
                    <div>Statistics</div>
                    <div>Status</div>
                    <div>Similar LeetCode</div>
                `;
                taskList.parentNode.insertBefore(header, taskList);
                console.log('Added header to task list');
            }
            
            const tasks = taskList.querySelectorAll('.task');
            console.log('Found tasks in this list:', tasks.length);
            
            tasks.forEach((task, index) => {
                // Skip if already processed
                if (task.querySelector('.leetcode-suggestions')) return;
                
                const link = task.querySelector('a');
                if (!link) return;
                
                const problemName = link.textContent.trim();
                console.log('Processing problem:', problemName);
                
                // Check our mapping first by problem name
                let mapping = leetCodeMapping[problemName];
                
                // If not found by name, try by problem ID
                if (!mapping) {
                    const problemId = extractProblemId(link.href);
                    console.log('Problem ID:', problemId);
                    mapping = Object.values(leetCodeMapping).find(m => m.csesId === problemId);
                }
                
                // Default mapping if none found
                if (!mapping) {
                    mapping = {
                        category: "Algorithm Practice",
                        similar: ["Practice similar problems on LeetCode"]
                    };
                }
                
                console.log('Using mapping:', mapping);
                
                // Create LeetCode suggestions element
                const leetcodeEl = document.createElement('div');
                leetcodeEl.className = 'leetcode-suggestions';
                leetcodeEl.innerHTML = `
                    <span class="category">${mapping.category}</span>
                    <div class="problems">${Array.isArray(mapping.similar) ? mapping.similar.join(', ') : mapping.similar || 'No specific problems mapped'}</div>
                `;
                
                task.appendChild(leetcodeEl);
                console.log('Added LeetCode suggestions to:', problemName);
            });
        });
    }

    // Function to create modern styling toggle button
    function createModernToggle() {
        // Remove existing toggle if present
        const existingToggle = document.getElementById('cses-modern-toggle');
        if (existingToggle) {
            existingToggle.remove();
        }

        const toggle = document.createElement('button');
        toggle.id = 'cses-modern-toggle';
        toggle.className = 'cses-modern-toggle';
        toggle.textContent = 'Modern View';
        toggle.title = 'Toggle modern CSES styling';

        let modernEnabled = localStorage.getItem('cses-modern-enabled') !== 'false';
        
        function updateToggleState() {
            if (modernEnabled) {
                toggle.textContent = 'Classic View';
                toggle.classList.remove('disabled');
                document.body.classList.add('cses-modern-enabled');
                addModernStyling();
            } else {
                toggle.textContent = 'Modern View';
                toggle.classList.add('disabled');
                document.body.classList.remove('cses-modern-enabled');
                
                // Remove modern classes
                const taskLists = document.querySelectorAll('.task-list');
                taskLists.forEach(taskList => {
                    taskList.classList.remove('cses-modern-list');
                });
                
                const tasks = document.querySelectorAll('.task-list .task');
                tasks.forEach(task => {
                    task.classList.remove('cses-modern-task');
                });
            }
        }

        toggle.addEventListener('click', function() {
            modernEnabled = !modernEnabled;
            localStorage.setItem('cses-modern-enabled', modernEnabled.toString());
            updateToggleState();
            
            // Re-add LeetCode suggestions regardless of styling
            setTimeout(addLeetCodeSuggestions, 100);
        });

        updateToggleState();
        document.body.appendChild(toggle);
    }

    // Initialize the extension with error handling
    function init() {
        try {
            // Wait for page to fully load
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    setTimeout(() => {
                        displayEnhancedCounter();
                        createModernToggle();
                        addLeetCodeSuggestions();
                    }, 1000);
                });
            } else {
                setTimeout(() => {
                    displayEnhancedCounter();
                    createModernToggle();
                    addLeetCodeSuggestions();
                }, 1000);
            }

            // Set up observer for dynamic content
            observeChanges();

            // Refresh counter and styling every 30 seconds
            setInterval(() => {
                displayEnhancedCounter();
                addLeetCodeSuggestions();
            }, 30000);
            
            console.log('CSES Tracker: Initialized successfully with modern styling');
        } catch (error) {
            console.log('CSES Tracker: Initialization error:', error);
        }
    }

    // Start the extension
    init();

    // Add refresh button functionality with error handling
    document.addEventListener('click', function(e) {
        try {
            if (e.target.closest('#cses-solved-counter')) {
                displayEnhancedCounter();
            }
        } catch (error) {
            console.log('CSES Tracker: Click handler error:', error);
        }
    });

})();
