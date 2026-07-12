/*
  Safety net for automatic entity linking.
  The app intentionally linkifies known names, but short names such as "Men"
  must not become links inside larger words such as "fragment".
*/
(() => {
  'use strict';

  const wordChar = (ch) => !!ch && /[\p{L}\p{N}_]/u.test(ch);

  function adjacentText(node, direction) {
    let current = direction < 0 ? node.previousSibling : node.nextSibling;
    while (current) {
      if (current.nodeType === Node.TEXT_NODE && current.textContent) {
        return direction < 0 ? current.textContent.at(-1) : current.textContent[0];
      }
      if (current.nodeType === Node.ELEMENT_NODE && current.textContent) {
        return direction < 0 ? current.textContent.at(-1) : current.textContent[0];
      }
      current = direction < 0 ? current.previousSibling : current.nextSibling;
    }
    return '';
  }

  function fixLink(link) {
    if (!(link instanceof HTMLElement) || !link.classList.contains('inline-link')) return;
    const text = link.textContent || '';
    if (!text) return;

    const before = adjacentText(link, -1);
    const after = adjacentText(link, 1);
    const embeddedLeft = wordChar(text[0]) && wordChar(before);
    const embeddedRight = wordChar(text.at(-1)) && wordChar(after);

    if (embeddedLeft || embeddedRight) link.replaceWith(document.createTextNode(text));
  }

  function scan(root = document) {
    if (root instanceof HTMLElement && root.classList.contains('inline-link')) fixLink(root);
    root.querySelectorAll?.('.inline-link').forEach(fixLink);
  }

  scan();
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) scan(node);
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
