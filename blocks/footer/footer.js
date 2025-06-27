import { getMetadata, decorateIcons } from '../../scripts/aem.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer') || '/footer';
  const footerPath = footerMeta.startsWith('http') ? new URL(footerMeta, window.location).pathname : footerMeta;
  const resp = await fetch(`${footerPath}.plain.html`);
  if (resp.ok) {
    const html = await resp.text();
    const footer = document.createElement('div');
    footer.innerHTML = html;
    decorateIcons(footer);
    block.append(footer);
  }
}