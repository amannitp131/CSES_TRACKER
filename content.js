    'use strict';

(function() {
    // Only run on /problemset/list or /problemset/ (not on /task/ pages)
    const isListPage = window.location.pathname.startsWith('/problemset/list');
    const isSummaryPage = window.location.pathname === '/problemset/' || window.location.pathname === '/problemset';
    if (!(isListPage || isSummaryPage)) {
        console.log('CSES Tracker: Not on problemset list or summary page, skipping initialization');
        return;
    }

    const leetCodeMapping = window.csesLeetCodeMapping || {};

    const problemCategories = {
        'all': 'All Categories',
        'introductory': 'Introductory Problems',
        'sorting-searching': 'Sorting and Searching',
        'dynamic-programming': 'Dynamic Programming',
        'graph-algorithms': 'Graph Algorithms',
        'range-queries': 'Range Queries',
        'tree-algorithms': 'Tree Algorithms',
        'mathematics': 'Mathematics',
        'string-algorithms': 'String Algorithms',
        'geometry': 'Geometryy',
        'advanced-techniques': 'Advanced Techniques',
        'sliding-window': 'Sliding Window Problems',
        'interactive': 'Interactive Problems',
        'bitwise': 'Bitwise Operations',
        'construction': 'Construction Problems',
        'advanced-graph': 'Advanced Graph Problems',
        'counting': 'Counting Problems',
        'additional-i': 'Additional Problems I',
        'additional-ii': 'Additional Problems II'
    };

    function createCategoryFilter() {
        const existingFilter = document.getElementById('cses-category-filter');
        if (existingFilter) {
            existingFilter.remove();
        }

        const filterContainer = document.createElement('div');
        filterContainer.id = 'cses-category-filter';
        filterContainer.className = 'category-filter';

        const currentFilter = localStorage.getItem('cses-category-filter') || 'all';

        filterContainer.innerHTML = `
            <label class="filter-label" for="category-select">Filter by Category:</label>
            <select class="filter-select" id="category-select">
                ${Object.entries(problemCategories).map(([key, name]) => 
                    `<option value="${key}" ${key === currentFilter ? 'selected' : ''}>${name}</option>`
                ).join('')}
            </select>
            <span class="filter-count" id="filter-count">0</span>
        `;

        const solvedCounter = document.getElementById('cses-solved-counter');
        if (solvedCounter && solvedCounter.parentNode) {
            solvedCounter.parentNode.insertBefore(filterContainer, solvedCounter.nextSibling);
        }

        const selectElement = filterContainer.querySelector('#category-select');
        selectElement.addEventListener('change', function() {
            const selectedCategory = this.value;
            localStorage.setItem('cses-category-filter', selectedCategory);
            window.location.reload();
        });

        applyFilter(currentFilter);
        updateFilterCount();
    }

    function applyFilter(category) {
        const sections = document.querySelectorAll('h2');
        sections.forEach(section => {
            const sectionName = section.textContent.trim();
            const nextElement = section.nextElementSibling;
            if (nextElement && nextElement.classList.contains('task-list')) {
                let shouldShow = category === 'all';
                if (!shouldShow) {
                    const categoryMapping = {
                        'introductory': 'Introductory Problems',
                        'sorting-searching': 'Sorting and Searching',
                        'dynamic-programming': 'Dynamic Programming',
                        'graph-algorithms': 'Graph Algorithms',
                        'range-queries': 'Range Queries',
                        'tree-algorithms': 'Tree Algorithms',
                        'mathematics': 'Mathematics',
                        'string-algorithms': 'String Algorithms',
                        'geometry': 'Geometry',
                        'advanced-techniques': 'Advanced Techniques',
                        'sliding-window': 'Sliding Window Problems',
                        'interactive': 'Interactive Problems',
                        'bitwise': 'Bitwise Operations',
                        'construction': 'Construction Problems',
                        'advanced-graph': 'Advanced Graph Problems',
                        'counting': 'Counting Problems',
                        'additional-i': 'Additional Problems I',
                        'additional-ii': 'Additional Problems II'
                    };
                    const targetName = categoryMapping[category];
                    shouldShow = targetName && sectionName === targetName;
                }
                if (shouldShow) {
                    section.style.display = 'block';
                    nextElement.style.display = 'block';
                    section.style.opacity = '1';
                    nextElement.style.opacity = '1';
                } else {
                    section.style.display = 'none';
                    nextElement.style.display = 'none';
                }
            }
        });
        console.log(`Applied filter: ${category}`);
    }

    function updateFilterCount() {
        const visibleSections = document.querySelectorAll('h2');
        let totalProblems = 0;
        let solvedProblems = 0;

        visibleSections.forEach(section => {
            if (section.style.display !== 'none') {
                const nextElement = section.nextElementSibling;
                if (nextElement && nextElement.classList.contains('task-list')) {
                    const tasks = nextElement.querySelectorAll('.task');
                    totalProblems += tasks.length;
                    solvedProblems += nextElement.querySelectorAll('.task-score.icon.full').length;
                }
            }
        });

        const countElement = document.getElementById('filter-count');
        if (countElement) {
            countElement.textContent = `${solvedProblems} / ${totalProblems}`;
            countElement.title = `${solvedProblems} solved out of ${totalProblems} problems in selected category`;
        }

        console.log(`Updated filter count: ${solvedProblems} solved / ${totalProblems} problems`);
    }

     
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

    
    function countSolvedProblems() {
        
        const fullySolvedElements = document.querySelectorAll('.task-score.icon.full');
        const fullySolvedCount = fullySolvedElements.length;
        
        
        const partiallyCompletedElements = document.querySelectorAll('.task-score.icon:not(.full):not(.zero):not([class="task-score icon"])');
        let partialCount = 0;
        
        
        partiallyCompletedElements.forEach(element => {
            const classList = element.className;
            if (classList.includes('icon') && !classList.includes('zero') && classList !== 'task-score icon') {
                partialCount++;
            }
        });
        
        
        const totalSolved = fullySolvedCount;
        
        console.log(`CSES Tracker: Found ${fullySolvedCount} fully solved problems`);
        return totalSolved;
    }

    
    function displaySolvedCounter() {
        
        const existingCounter = document.getElementById('cses-solved-counter');
        if (existingCounter) {
            existingCounter.remove();
        }

        const solvedCount = countSolvedProblems();
        
        
        const nav = document.querySelector('.nav, .title-block');
        if (!nav) return;

        
        const counter = document.createElement('div');
        counter.id = 'cses-solved-counter';
        counter.className = 'solved-counter';
        counter.innerHTML = `
            <div class="counter-content">
                <i class="fas fa-trophy"></i>
                <span class="counter-text">Problems Solved: <strong>${solvedCount}</strong></span>
            </div>
        `;

        
        nav.parentNode.insertBefore(counter, nav.nextSibling);

        
        chrome.storage.local.set({ solvedCount: solvedCount });
    }

    
    function analyzeProblemTable() {
        
        const fullySolvedElements = document.querySelectorAll('.task-score.icon.full');
        const fullySolvedCount = fullySolvedElements.length;
        
        
        const partialElements = document.querySelectorAll('.task-score.icon');
        let partialCount = 0;
        
        partialElements.forEach(element => {
            const classList = element.className;
            
            if (classList.includes('icon') && 
                !classList.includes('full') && 
                !classList.includes('zero') && 
                classList !== 'task-score icon') {
                partialCount++;
            }
        });
        
        console.log(`CSES Tracker - Analysis: ${fullySolvedCount} full, ${partialCount} partial`);
        
        
        return fullySolvedCount;
    }

    
    function getEnhancedSolvedCount() {
        
        const fullySolvedElements = document.querySelectorAll('.task-score.icon.full');
        const primaryCount = fullySolvedElements.length;
        
        
        const secondaryCount = analyzeProblemTable();
        
        
        const basicCount = countSolvedProblems();
        
        console.log(`CSES Tracker counts - Primary: ${primaryCount}, Secondary: ${secondaryCount}, Basic: ${basicCount}`);
        
        
        return primaryCount;
    }

    
    function displayEnhancedCounter() {
        const existingCounter = document.getElementById('cses-solved-counter');
        if (existingCounter) {
            existingCounter.remove();
        }

        const solvedCount = getEnhancedSolvedCount();
        
        
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

    
    function extractProblemId(url) {
        const match = url.match(/\/problemset\/task\/(\d+)/);
        return match ? match[1] : null;
    }

    
    function addModernStyling() {
        
        document.body.classList.add('cses-modern-enabled');
        
        
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

    
    function addLeetCodeSuggestions() {
        const taskLists = document.querySelectorAll('.task-list');
        console.log('Found task lists:', taskLists.length);
        
        taskLists.forEach(taskList => {
            
            if (!taskList.previousElementSibling || !taskList.previousElementSibling.classList.contains('task-list-header')) {
                const header = document.createElement('div');
                header.className = 'task-list-header';
                header.innerHTML = '<span>Problem</span><span>Score</span><span>LeetCode Practice</span>';
                taskList.parentNode.insertBefore(header, taskList);
            }
            
            const tasks = taskList.querySelectorAll('.task');
            console.log('Found tasks in this list:', tasks.length);
            
            tasks.forEach((task, index) => {
                const skeleton = task.querySelector('.leetcode-skeleton');
                if (task.querySelector('.leetcode-suggestions')) {
                    if (skeleton) skeleton.remove();
                    return;
                }
                if (skeleton) skeleton.remove();
                
                const link = task.querySelector('a');
                if (!link) return;
                
                const problemName = link.textContent.trim();
                const problemId = extractProblemId(link.href);
                console.log('Processing problem:', problemName, 'ID:', problemId);
                
                
                let mapping = leetCodeMapping[problemId];
                
                
                if (!mapping) {
                    mapping = {
                        name: problemName,
                        category: "Algorithm Practice",
                        leetcode: "Not mentioned"
                    };
                }
                
                console.log('Using mapping:', mapping);
                
                
                const leetcodeEl = document.createElement('div');
                leetcodeEl.className = 'leetcode-suggestions';
                
                
                let problemsHtml = '';
                
                if (Array.isArray(mapping.leetcode)) {
                    
                    const problemLinks = mapping.leetcode.map(problem => 
                        `<a href="${problem.url}" target="_blank" rel="noopener noreferrer" class="leetcode-link">${problem.name}</a>`
                    ).join(', ');
                    problemsHtml = problemLinks;
                } else if (mapping.leetcode === "Not mentioned") {
                    problemsHtml = '<span class="no-mapping">No specific LeetCode problems mapped yet</span>';
                } else {
                    problemsHtml = mapping.leetcode;
                }
                
                leetcodeEl.innerHTML = `
                    <span class="category">${mapping.category}</span>
                    <div class="problems">${problemsHtml}</div>
                `;
                
                task.appendChild(leetcodeEl);
                console.log('Added LeetCode suggestions to:', problemName);
            });
        });
    }

    function injectLoadingSkeletons() {
        const tasks = document.querySelectorAll('.task-list .task');
        tasks.forEach(task => {
            if (task.querySelector('.leetcode-suggestions') || task.querySelector('.leetcode-skeleton')) return;
            const skeleton = document.createElement('div');
            skeleton.className = 'leetcode-skeleton';
            task.appendChild(skeleton);
        });
    }


    function createModernToggle() {
        
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
                toggle.textContent = 'Classic View';
                toggle.classList.add('disabled');
                document.body.classList.remove('cses-modern-enabled');
                
                
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
            
            
            setTimeout(addLeetCodeSuggestions, 100);
        });

        updateToggleState();
        document.body.appendChild(toggle);
    }

    

    let observerDebounce = null;
    function observeChanges() {
        const observer = new MutationObserver(() => {
            clearTimeout(observerDebounce);
            observerDebounce = setTimeout(() => {
                displayEnhancedCounter();
                addLeetCodeSuggestions();
                const currentFilter = localStorage.getItem('cses-category-filter') || 'all';
                applyFilter(currentFilter);
                updateFilterCount();
            }, 800);
        });
        observer.observe(document.body, { childList: true, subtree: false });
    }

    function showSummaryOnMainPage() {
        // Only run on /problemset/ summary page
        if (!isSummaryPage) return;
        // Try to get solved data from localStorage (set by list page)
        let solvedData = null;
        try {
            solvedData = JSON.parse(localStorage.getItem('cses-tracker-data'));
        } catch (e) {}
        // If not available, fallback to basic
        if (!solvedData) {
            try {
                solvedData = JSON.parse(localStorage.getItem('cses-tracker-basic'));
            } catch (e) {}
        }
        // If still not available, just show a message
        let summaryHtml = '';
        if (solvedData && solvedData.detailedBreakdown && solvedData.detailedBreakdown.length) {
            summaryHtml = `<div class="cses-summary-table" style="margin:20px 0;padding:16px;background:#f8fafc;border-radius:8px;box-shadow:0 2px 8px #0001;max-width:600px;">
                <h2 style="margin-bottom:12px;font-size:1.2em;">CSES Section Progress</h2>
                <table style="width:100%;border-collapse:collapse;">
                    <thead><tr><th style="text-align:left;padding:4px 8px;">Section</th><th style="text-align:right;padding:4px 8px;">Solved / Total</th></tr></thead>
                    <tbody>
                        ${solvedData.detailedBreakdown.map(row => {
                            const solved = typeof row.solved === 'number' ? row.solved : 0;
                            const total = typeof row.total === 'number' ? row.total : 0;
                            return `<tr><td style='padding:4px 8px;'>${row.name}</td><td style='text-align:right;padding:4px 8px;'><b>${solved}</b> / ${total}</td></tr>`;
                        }).join('')}
                    </tbody>
                </table>
                <div style="margin-top:8px;font-size:0.95em;opacity:0.7;">Last updated: ${solvedData.lastUpdated ? new Date(solvedData.lastUpdated).toLocaleString() : ''}</div>
            </div>`;
        } else {
            summaryHtml = `<div class="cses-summary-table" style="margin:20px 0;padding:16px;background:#f8fafc;border-radius:8px;box-shadow:0 2px 8px #0001;max-width:600px;">
                <b>Section progress will appear here after you visit the <a href='/problemset/list/'>problem list</a> page once.</b>
            </div>`;
        }
        // Insert at the top of the main content
        const mainContent = document.querySelector('.content, .main-content, main, body');
        if (mainContent) {
            mainContent.insertAdjacentHTML('afterbegin', summaryHtml);
        }
    }

    function init() {
        try {
            if (isListPage) {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', function() {
                        injectLoadingSkeletons();
                        setTimeout(() => {
                            displayEnhancedCounter();
                            createCategoryFilter();
                            createModernToggle();
                            addLeetCodeSuggestions();
                        }, 1000);
                    });
                } else {
                    injectLoadingSkeletons();
                    setTimeout(() => {
                        displayEnhancedCounter();
                        createCategoryFilter();
                        createModernToggle();
                        addLeetCodeSuggestions();
                    }, 1000);
                }
                observeChanges();
                setInterval(() => {
                    displayEnhancedCounter();
                    addLeetCodeSuggestions();
                    const currentFilter = localStorage.getItem('cses-category-filter') || 'all';
                    applyFilter(currentFilter);
                    updateFilterCount();
                }, 30000);
                console.log('CSES Tracker: Initialized successfully with modern styling');
            } else if (isSummaryPage) {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', function() {
                        setTimeout(showSummaryOnMainPage, 500);
                    });
                } else {
                    setTimeout(showSummaryOnMainPage, 500);
                }
            }
        } catch (error) {
            console.log('CSES Tracker: Initialization error:', error);
        }
    }

    
    init();

    
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
