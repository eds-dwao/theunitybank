export default function decorate(block) {
  const rows = [...block.children];
  const contactWrapper = document.createElement('div');
  contactWrapper.className = 'contact-wrapper';

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length >= 2) {
      const contactCard = document.createElement('div');
      contactCard.className = 'contact-card';
      
      const title = cols[0].textContent.trim();
      const content = cols[1];
      
      const titleEl = document.createElement('h3');
      titleEl.textContent = title;
      contactCard.appendChild(titleEl);
      
      const contentEl = document.createElement('div');
      contentEl.className = 'contact-content';
      contentEl.innerHTML = content.innerHTML;
      contactCard.appendChild(contentEl);
      
      contactWrapper.appendChild(contactCard);
    }
  });

  block.textContent = '';
  block.appendChild(contactWrapper);
}