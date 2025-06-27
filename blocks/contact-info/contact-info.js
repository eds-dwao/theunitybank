/**
 * loads and decorates the contact info block
 * @param {Element} block The contact info block element
 */
export default function decorate(block) {
  const rows = [...block.children];
  
  // Create contact grid container
  const contactGrid = document.createElement('div');
  contactGrid.className = 'unity-contact-grid';
  
  rows.forEach((row) => {
    const card = document.createElement('div');
    card.className = 'unity-card';
    
    const cols = [...row.children];
    if (cols.length >= 2) {
      const title = cols[0].textContent.trim();
      const content = cols[1].innerHTML;
      
      card.innerHTML = `
        <h3>${title}</h3>
        <div class="contact-info">${content}</div>
      `;
    }
    
    contactGrid.appendChild(card);
  });
  
  block.innerHTML = '';
  block.appendChild(contactGrid);
  
  // Add special styling for partner section
  const partnerCard = [...contactGrid.children].find(card => 
    card.querySelector('h3')?.textContent.includes('Partner'));
  
  if (partnerCard) {
    partnerCard.className += ' partner-section';
    const content = partnerCard.querySelector('.contact-info');
    if (content) {
      content.className += ' partner-content';
      
      // Convert bullet points to proper list
      const text = content.innerHTML;
      if (text.includes('•')) {
        const items = text.split('•').filter(item => item.trim());
        const list = document.createElement('ul');
        list.className = 'partner-benefits';
        
        items.forEach(item => {
          if (item.trim()) {
            const li = document.createElement('li');
            li.textContent = item.trim().replace(/^[^\w]*/, '');
            list.appendChild(li);
          }
        });
        
        content.innerHTML = '';
        content.appendChild(list);
      }
    }
  }
}