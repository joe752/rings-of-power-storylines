(() => {
  'use strict';
  const nav = performance.getEntriesByType?.('navigation')?.[0];
  if (nav?.type !== 'reload') return;
  const url = new URL(location.href);
  url.searchParams.set('episode', '1');
  history.replaceState(null, '', `${url.pathname}?${url.searchParams}`);
})();
