export default function decorate(block) {
  const rows = [...block.children];
  
  if (rows.length > 0) {
    const partnerWrapper = document.createElement('div');
    partnerWrapper.className = 'partner-wrapper';
    
    const contentCol = rows[0].children[0];
    const imageCol = rows[0].children[1];
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'partner-content';
    contentDiv.innerHTML = contentCol.innerHTML;
    
    const imageDiv = document.createElement('div');
    imageDiv.className = 'partner-image';
    imageDiv.innerHTML = imageCol.innerHTML;
    
    partnerWrapper.appendChild(contentDiv);
    partnerWrapper.appendChild(imageDiv);
    
    block.textContent = '';
    block.appendChild(partnerWrapper);
  }
}