export default function decorate(block) {
  const rows = [...block.children];
  const addressWrapper = document.createElement('div');
  addressWrapper.className = 'address-wrapper';

  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length >= 2) {
      const addressCard = document.createElement('div');
      addressCard.className = 'address-card';
      
      const title = cols[0].textContent.trim();
      const content = cols[1];
      
      const titleEl = document.createElement('h3');
      titleEl.textContent = title;
      addressCard.appendChild(titleEl);
      
      const contentEl = document.createElement('div');
      contentEl.className = 'address-content';
      contentEl.innerHTML = content.innerHTML;
      addressCard.appendChild(contentEl);
      
      addressWrapper.appendChild(addressCard);
    }
  });

  block.textContent = '';
  block.appendChild(addressWrapper);
}