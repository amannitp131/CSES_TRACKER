// CSES Tracker Popup Script
document.addEventListener('DOMContentLoaded', function() {
    const solvedCountEl = document.getElementById('solved-count');
    const totalProblemsEl = document.getElementById('total-problems');
    const progressFillEl = document.getElementById('progress-fill');
    const progressPercentageEl = document.getElementById('progress-percentage');
    const lastUpdatedEl = document.getElementById('last-updated');
    const refreshBtn = document.getElementById('refresh-btn');
    const visitSiteBtn = document.getElementById('visit-site-btn');
    const chartSection = document.getElementById('chart-section');
    const toggleChartBtn = document.getElementById('toggle-chart');
    const progressChart = document.getElementById('progress-chart');
    
    let currentChart = null;
    let chartVisible = false;

    // Load stored data with error handling
    function loadData() {
        if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
            try {
                chrome.storage.local.get(['solvedCount', 'lastUpdated', 'sectionBreakdown', 'detailedBreakdown'], function(result) {
                    if (chrome.runtime.lastError) {
                        console.log('CSES Tracker: Storage error:', chrome.runtime.lastError);
                        loadFromLocalStorage();
                        return;
                    }
                    const solvedCount = result.solvedCount || 0;
                    const lastUpdated = result.lastUpdated || null;
                    const sectionBreakdown = result.sectionBreakdown || '';
                    const detailedBreakdown = result.detailedBreakdown || [];
                    
                    updateDisplay(solvedCount, lastUpdated, sectionBreakdown, detailedBreakdown);
                });
            } catch (error) {
                console.log('CSES Tracker: Chrome storage error:', error);
                loadFromLocalStorage();
            }
        } else {
            loadFromLocalStorage();
        }
    }

    // Fallback to localStorage
    function loadFromLocalStorage() {
        try {
            const data = localStorage.getItem('cses-tracker-data');
            if (data) {
                const parsed = JSON.parse(data);
                updateDisplay(parsed.solvedCount || 0, parsed.lastUpdated || null, parsed.sectionBreakdown || '', parsed.detailedBreakdown || []);
            } else {
                updateDisplay(0, null, '', []);
            }
        } catch (error) {
            console.log('CSES Tracker: LocalStorage error:', error);
            updateDisplay(0, null, '', []);
        }
    }

    // Create and display chart
    function createChart(detailedBreakdown) {
        if (!detailedBreakdown || detailedBreakdown.length === 0) {
            // Create a simple chart with total solved
            drawSimpleChart(progressChart.getContext('2d'));
            return;
        }
        
        const ctx = progressChart.getContext('2d');
        
        // Use detailed breakdown data directly
        const sections = detailedBreakdown.filter(s => s.total > 0);
        
        if (sections.length === 0) {
            drawSimpleChart(ctx);
            return;
        }
        
        // Create bar chart
        drawBarChart(ctx, sections);
    }
    
    // Draw simple chart when no section data available
    function drawSimpleChart(ctx) {
        const canvas = ctx.canvas;
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);
        
        // Draw title
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Problems Solved: ' + (solvedCountEl.textContent || '0'), width / 2, 30);
        
        // Draw circular progress
        const centerX = width / 2;
        const centerY = height / 2 + 20;
        const radius = 60;
        const solved = parseInt(solvedCountEl.textContent || '0');
        const total = 300; // Estimated total
        const progress = (solved / total) * 2 * Math.PI;
        
        // Background circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 8;
        ctx.stroke();
        
        // Progress arc
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + progress);
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 8;
        ctx.stroke();
        
        // Center text
        ctx.fillStyle = '#333';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(solved.toString(), centerX, centerY + 7);
    }
    
    // Draw bar chart for sections
    function drawBarChart(ctx, sections) {
        const canvas = ctx.canvas;
        const width = canvas.width;
        const height = canvas.height;
        const padding = 40;
        const chartHeight = height - padding * 2;
        const chartWidth = width - padding * 2;
        
        ctx.clearRect(0, 0, width, height);
        
        // Calculate bar dimensions
        const barWidth = chartWidth / sections.length - 10;
        const maxSolved = Math.max(...sections.map(s => s.solved));
        const scale = maxSolved > 0 ? chartHeight / maxSolved : 1;
        
        // Draw bars
        sections.forEach((section, index) => {
            const x = padding + index * (barWidth + 10);
            const barHeight = section.solved * scale;
            const y = height - padding - barHeight;
            
            // Draw bar
            ctx.fillStyle = '#4CAF50';
            ctx.fillRect(x, y, barWidth, barHeight);
            
            // Draw section name (abbreviated)
            ctx.fillStyle = '#333';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            const shortName = section.name.length > 8 ? section.name.substring(0, 8) + '...' : section.name;
            ctx.fillText(shortName, x + barWidth / 2, height - 5);
            
            // Draw count
            ctx.fillStyle = '#666';
            ctx.font = 'bold 12px Arial';
            ctx.fillText(section.solved.toString(), x + barWidth / 2, y - 5);
        });
        
        // Draw title
        ctx.fillStyle = '#333';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Problems by Category', width / 2, 20);
    }
    
    // Toggle chart visibility
    function toggleChart(detailedBreakdown) {
        chartVisible = !chartVisible;
        
        if (chartVisible) {
            chartSection.style.display = 'block';
            toggleChartBtn.textContent = 'Hide Chart';
            createChart(detailedBreakdown);
        } else {
            chartSection.style.display = 'none';
            toggleChartBtn.textContent = 'Show Chart';
        }
    }

    // Update display with current data
    function updateDisplay(solvedCount, lastUpdated, sectionBreakdown, detailedBreakdown) {
        solvedCountEl.textContent = solvedCount;
        
       
        const totalProblems = 400; 
        const progressPercent = Math.min((solvedCount / totalProblems) * 100, 100);
        
        progressFillEl.style.width = progressPercent + '%';
        progressPercentageEl.textContent = progressPercent.toFixed(1) + '%';
        
        // Update last updated time
        if (lastUpdated) {
            const updateTime = new Date(lastUpdated);
            const now = new Date();
            const diffMinutes = Math.floor((now - updateTime) / (1000 * 60));
            
            if (diffMinutes < 1) {
                lastUpdatedEl.textContent = 'Just now';
            } else if (diffMinutes < 60) {
                lastUpdatedEl.textContent = `${diffMinutes} min ago`;
            } else {
                const diffHours = Math.floor(diffMinutes / 60);
                lastUpdatedEl.textContent = `${diffHours}h ago`;
            }
        } else {
            lastUpdatedEl.textContent = 'Never';
        }

        // Add animation to updated number
        solvedCountEl.classList.add('updated');
        setTimeout(() => {
            solvedCountEl.classList.remove('updated');
        }, 600);
        
        // Update total problems display to be more dynamic
        totalProblemsEl.textContent = `${totalProblems}`;
        
        // Update chart if visible
        if (chartVisible) {
            createChart(detailedBreakdown);
        }
    }

    // Refresh data from content script with error handling
    function refreshData() {
        refreshBtn.classList.add('loading');
        
        if (typeof chrome !== 'undefined' && chrome.tabs) {
            try {
                // Query the active tab for CSES
                chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                    if (chrome.runtime.lastError) {
                        console.log('CSES Tracker: Tabs query error:', chrome.runtime.lastError);
                        refreshBtn.classList.remove('loading');
                        return;
                    }
                    
                    const currentTab = tabs[0];
                    
                    if (currentTab.url && currentTab.url.includes('cses.fi')) {
                        // Execute content script to refresh data
                        if (chrome.tabs.sendMessage) {
                            chrome.tabs.sendMessage(currentTab.id, { action: 'refresh' }, function(response) {
                                if (chrome.runtime.lastError) {
                                    console.log('Content script not ready, injecting...');
                                    // Content script might not be loaded, inject it
                                    if (chrome.scripting && chrome.scripting.executeScript) {
                                        chrome.scripting.executeScript({
                                            target: { tabId: currentTab.id },
                                            files: ['content.js']
                                        });
                                    }
                                }
                                
                                // Reload data after a short delay
                                setTimeout(() => {
                                    loadData();
                                    refreshBtn.classList.remove('loading');
                                }, 1000);
                            });
                        } else {
                            refreshBtn.classList.remove('loading');
                        }
                    } else {
                        // Not on CSES site
                        refreshBtn.classList.remove('loading');
                        alert('Please navigate to cses.fi/problemset to refresh data');
                    }
                });
            } catch (error) {
                console.log('CSES Tracker: Refresh error:', error);
                refreshBtn.classList.remove('loading');
            }
        } else {
            refreshBtn.classList.remove('loading');
            alert('Chrome extension API not available');
        }
    }

    // Open CSES website
    function visitSite() {
        chrome.tabs.create({ url: 'https://cses.fi/problemset/list/' });
        window.close();
    }

    // Event listeners
    refreshBtn.addEventListener('click', refreshData);
    visitSiteBtn.addEventListener('click', visitSite);
    
    // Add click event to solved count to show/hide chart
    solvedCountEl.addEventListener('click', function() {
        // Get the current detailedBreakdown from storage
        if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
            chrome.storage.local.get(['detailedBreakdown'], function(result) {
                toggleChart(result.detailedBreakdown || []);
            });
        } else {
            try {
                const data = localStorage.getItem('cses-tracker-data');
                const parsed = data ? JSON.parse(data) : {};
                toggleChart(parsed.detailedBreakdown || []);
            } catch (error) {
                toggleChart([]);
            }
        }
    });
    
    toggleChartBtn.addEventListener('click', function() {
        toggleChart([]);
    });

    // Load initial data
    loadData();

    // Auto-refresh every 30 seconds if popup is open
    setInterval(loadData, 30000);
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'updateCount') {
        // Reload display when content script updates
        loadData();
    }
});
