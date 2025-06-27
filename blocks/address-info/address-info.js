/**
 * loads and decorates the address info block
 * @param {Element} block The address info block element
 */
export default function decorate(block) {
  const rows = [...block.children];
  
  // Create address grid container
  const addressGrid = document.createElement('div');
  addressGrid.className = 'unity-address-grid';
  
  rows.forEach((row) => {
    const card = document.createElement('div');
    card.className = 'unity-card';
    
    const cols = [...row.children];
    if (cols.length >= 2) {
      const title = cols[0].textContent.trim();
      const content = cols[1].innerHTML;
      
      card.innerHTML = `
        <h3>${title}</h3>
        <div class="address-info">${content}</div>
      `;
    }
    
    addressGrid.appendChild(card);
  });
  
  block.innerHTML = '';
  block.appendChild(addressGrid);
}