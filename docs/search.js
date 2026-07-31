// Simple client-side search over the pre-built search-index.json
(function() {
  let searchIndex = null;
  let currentResults = [];
  let activeIndex = -1;

  async function loadIndex() {
    if (searchIndex) return searchIndex;
    const res = await fetch('search-index.json');
    searchIndex = await res.json();
    return searchIndex;
  }

  function score(entry, query) {
    const q = query.toLowerCase();
    const title = entry.title.toLowerCase();
    const text = entry.text.toLowerCase();
    let s = 0;
    if (title.includes(q)) s += 10;
    if (title.startsWith(q)) s += 5;
    const textIdx = text.indexOf(q);
    if (textIdx !== -1) s += 3;
    // word-boundary bonus
    const wordRe = new RegExp('\\b' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    if (wordRe.test(title)) s += 4;
    if (wordRe.test(text)) s += 2;
    return s;
  }

  function snippet(entry, query) {
    const q = query.toLowerCase();
    const text = entry.text;
    const idx = text.toLowerCase().indexOf(q);
    if (idx === -1) return text.slice(0, 140) + (text.length > 140 ? '…' : '');
    const start = Math.max(0, idx - 50);
    const end = Math.min(text.length, idx + q.length + 90);
    let snip = (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
    return snip;
  }

  function highlight(text, query) {
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    return text.replace(re, '<mark>$1</mark>');
  }

  function renderResults(results, query, container) {
    container.innerHTML = '';
    if (results.length === 0) {
      container.innerHTML = '<div class="search-empty">No results for "' + query + '"</div>';
      container.classList.add('open');
      return;
    }
    results.slice(0, 8).forEach((r, i) => {
      const a = document.createElement('a');
      a.href = r.entry.page + (r.entry.anchor ? '#' + r.entry.anchor : '');
      a.className = 'search-result' + (i === activeIndex ? ' active' : '');
      const pageLabel = r.entry.page.replace('.html', '').replace(/-/g, ' ');
      a.innerHTML = '<span class="search-result-title">' + highlight(r.entry.title, query) + '</span>' +
                    '<span class="search-result-page">' + pageLabel + '</span>' +
                    '<span class="search-result-snippet">' + highlight(snippet(r.entry, query), query) + '</span>';
      container.appendChild(a);
    });
    container.classList.add('open');
  }

  async function doSearch(query, container) {
    if (!query || query.length < 2) {
      container.classList.remove('open');
      container.innerHTML = '';
      currentResults = [];
      activeIndex = -1;
      return;
    }
    const idx = await loadIndex();
    const scored = idx
      .map(entry => ({ entry, s: score(entry, query) }))
      .filter(r => r.s > 0)
      .sort((a, b) => b.s - a.s);
    currentResults = scored;
    activeIndex = -1;
    renderResults(scored, query, container);
  }

  function init() {
    const input = document.getElementById('site-search-input');
    const container = document.getElementById('site-search-results');
    if (!input || !container) return;

    let debounceTimer;
    input.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      const q = e.target.value.trim();
      debounceTimer = setTimeout(() => doSearch(q, container), 100);
    });

    input.addEventListener('keydown', (e) => {
      if (!container.classList.contains('open')) return;
      const max = Math.min(currentResults.length, 8);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = Math.min(activeIndex + 1, max - 1);
        renderResults(currentResults, input.value.trim(), container);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = Math.max(activeIndex - 1, 0);
        renderResults(currentResults, input.value.trim(), container);
      } else if (e.key === 'Enter') {
        if (activeIndex >= 0 && currentResults[activeIndex]) {
          const r = currentResults[activeIndex].entry;
          window.location.href = r.page + (r.anchor ? '#' + r.anchor : '');
        } else if (currentResults.length > 0) {
          const r = currentResults[0].entry;
          window.location.href = r.page + (r.anchor ? '#' + r.anchor : '');
        }
      } else if (e.key === 'Escape') {
        container.classList.remove('open');
        input.blur();
      }
    });

    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !container.contains(e.target)) {
        container.classList.remove('open');
      }
    });

    input.addEventListener('focus', () => {
      if (input.value.trim().length >= 2 && currentResults.length > 0) {
        container.classList.add('open');
      }
    });

    // Keyboard shortcut: "/" focuses search
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== input &&
          !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        input.focus();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
