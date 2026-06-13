// CSES Tracker Popup

const TOTAL_PROBLEMS = 300;
const RING_CIRCUMFERENCE = 314.16; // 2 * π * 50

// Palette for category bars (cycles if more categories than colors)
const CAT_COLORS = [
  '#22c55e', '#3b82f6', '#a855f7', '#f97316',
  '#ef4444', '#06b6d4', '#eab308', '#ec4899',
  '#14b8a6', '#8b5cf6', '#64748b', '#84cc16',
  '#f472b6', '#fb923c', '#38bdf8',
];

document.addEventListener('DOMContentLoaded', function () {

  const solvedCountEl    = document.getElementById('solved-count');
  const totalProblemsEl  = document.getElementById('total-problems');
  const progressPctEl    = document.getElementById('progress-pct');
  const lastUpdatedEl    = document.getElementById('last-updated');
  const statusBadgeEl    = document.getElementById('status-badge');
  const ringFillEl       = document.getElementById('ring-fill');
  const pbarFillEl       = document.getElementById('pbar-fill');
  const refreshBtn       = document.getElementById('refresh-btn');
  const refreshIcon      = document.getElementById('refresh-icon');
  const visitSiteBtn     = document.getElementById('visit-site-btn');
  const toggleCatsBtn    = document.getElementById('toggle-cats');
  const catsPanel        = document.getElementById('cats-panel');
  const catsEmpty        = document.getElementById('cats-empty');
  const catList          = document.getElementById('cat-list');

  let catsVisible = true;

  // ── Data loading ─────────────────────────────────

  function loadData() {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(
        ['solvedCount', 'lastUpdated', 'detailedBreakdown'],
        function (result) {
          if (chrome.runtime.lastError) {
            loadFromLocalStorage();
            return;
          }
          updateDisplay(
            result.solvedCount       || 0,
            result.lastUpdated       || null,
            result.detailedBreakdown || []
          );
        }
      );
    } else {
      loadFromLocalStorage();
    }
  }

  function loadFromLocalStorage() {
    try {
      const raw = localStorage.getItem('cses-tracker-data');
      const d   = raw ? JSON.parse(raw) : {};
      updateDisplay(d.solvedCount || 0, d.lastUpdated || null, d.detailedBreakdown || []);
    } catch (_) {
      updateDisplay(0, null, []);
    }
  }

  // ── Display update ────────────────────────────────

  function updateDisplay(solvedCount, lastUpdated, detailedBreakdown) {
    // Number
    solvedCountEl.textContent = solvedCount;
    totalProblemsEl.textContent = TOTAL_PROBLEMS;

    // Percentage
    const pct = Math.min((solvedCount / TOTAL_PROBLEMS) * 100, 100);
    progressPctEl.textContent = pct.toFixed(1) + '%';

    // Ring
    const offset = RING_CIRCUMFERENCE - (pct / 100) * RING_CIRCUMFERENCE;
    ringFillEl.style.strokeDashoffset = offset;

    // Progress bar
    pbarFillEl.style.width = pct + '%';

    // Last updated
    if (lastUpdated) {
      const diff = Math.floor((Date.now() - lastUpdated) / 60000);
      if (diff < 1)       lastUpdatedEl.textContent = 'now';
      else if (diff < 60) lastUpdatedEl.textContent = diff + 'm ago';
      else                lastUpdatedEl.textContent = Math.floor(diff / 60) + 'h ago';
      statusBadgeEl.textContent = 'Live';
      statusBadgeEl.classList.add('live');
    } else {
      lastUpdatedEl.textContent = 'never';
      statusBadgeEl.textContent = 'No data';
      statusBadgeEl.classList.remove('live');
    }

    // Pop animation
    solvedCountEl.classList.remove('updated');
    void solvedCountEl.offsetWidth; // reflow
    solvedCountEl.classList.add('updated');

    // Categories
    renderCategories(detailedBreakdown);
  }

  // ── Category bars ─────────────────────────────────

  function renderCategories(breakdown) {
    if (!breakdown || breakdown.length === 0) {
      catsEmpty.style.display = 'block';
      catList.innerHTML = '';
      return;
    }
    catsEmpty.style.display = 'none';

    const maxSolved = Math.max(...breakdown.map(c => c.total), 1);

    catList.innerHTML = breakdown
      .filter(c => c.total > 0)
      .map((c, i) => {
        const pct    = c.total > 0 ? (c.solved / c.total) * 100 : 0;
        const color  = CAT_COLORS[i % CAT_COLORS.length];
        const pctBar = (c.total / maxSolved) * 100; // bar width relative to largest section
        return `
          <div class="cat-item">
            <div class="cat-name" title="${c.name}">${c.name}</div>
            <div class="cat-bar">
              <div class="cat-fill" style="width:${pct.toFixed(1)}%; background:${color}"></div>
            </div>
            <div class="cat-count">${c.solved}/${c.total}</div>
          </div>`;
      })
      .join('');
  }

  // ── Toggle categories ─────────────────────────────

  toggleCatsBtn.addEventListener('click', function () {
    catsVisible = !catsVisible;
    catsPanel.classList.toggle('hidden', !catsVisible);
    toggleCatsBtn.textContent = catsVisible ? 'Hide' : 'Show';
  });

  // ── Refresh ───────────────────────────────────────

  function setRefreshLoading(on) {
    refreshBtn.classList.toggle('loading', on);
    refreshIcon.classList.toggle('spinning', on);
    refreshIcon.textContent = on ? '↻' : '↻';
  }

  function refreshData() {
    setRefreshLoading(true);

    if (typeof chrome === 'undefined' || !chrome.tabs) {
      setRefreshLoading(false);
      return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (chrome.runtime.lastError || !tabs[0]) {
        setRefreshLoading(false);
        return;
      }

      const tab = tabs[0];

      if (tab.url && tab.url.includes('cses.fi')) {
        chrome.tabs.sendMessage(tab.id, { action: 'refresh' }, function () {
          if (chrome.runtime.lastError) {
            // Content script not ready — inject it
            if (chrome.scripting && chrome.scripting.executeScript) {
              chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['leetcode-mapping.js', 'content.js']
              });
            }
          }
          setTimeout(() => {
            loadData();
            setRefreshLoading(false);
          }, 1200);
        });
      } else {
        setRefreshLoading(false);
        // Silently open CSES in a new tab so user can get data
        chrome.tabs.create({ url: 'https://cses.fi/problemset/list/', active: false });
      }
    });
  }

  refreshBtn.addEventListener('click', refreshData);

  // ── Visit CSES ────────────────────────────────────

  visitSiteBtn.addEventListener('click', function () {
    chrome.tabs.create({ url: 'https://cses.fi/problemset/list/' });
    window.close();
  });

  // ── Message listener ──────────────────────────────

  chrome.runtime.onMessage.addListener(function (request) {
    if (request.action === 'updateCount') {
      loadData();
    }
  });

  // ── Init ──────────────────────────────────────────

  loadData();
  setInterval(loadData, 30000);
});
