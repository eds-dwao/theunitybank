export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];
  
  if (rows.length === 0) return;
  
  // Clear the block
  block.innerHTML = '';
  
  // Create header container
  const header = document.createElement('header');
  header.className = 'unity-header';
  
  // Create main navigation container
  const nav = document.createElement('nav');
  nav.className = 'unity-nav';
  
  // Create left section with logo
  const leftSection = document.createElement('div');
  leftSection.className = 'unity-nav-left';
  
  // Logo
  const logoContainer = document.createElement('div');
  logoContainer.className = 'unity-logo';
  
  const logoSymbol = document.createElement('div');
  logoSymbol.className = 'unity-logo-symbol';
  logoSymbol.innerHTML = '#';
  
  const logoText = document.createElement('div');
  logoText.className = 'unity-logo-text';
  logoText.innerHTML = `
    <span class="unity-brand">UNITY</span>
    <span class="unity-tagline">Small<br>Financial<br>Bank</span>
  `;
  
  logoContainer.appendChild(logoSymbol);
  logoContainer.appendChild(logoText);
  leftSection.appendChild(logoContainer);
  
  // Create center section with navigation
  const centerSection = document.createElement('div');
  centerSection.className = 'unity-nav-center';
  
  const navList = document.createElement('ul');
  navList.className = 'unity-nav-list';
  
  // Parse navigation items from markdown
  rows.forEach(row => {
    const cells = row.querySelectorAll('div');
    if (cells.length >= 2) {
      const navItem = document.createElement('li');
      navItem.className = 'unity-nav-item';
      
      const link = document.createElement('a');
      link.href = cells[1].textContent.trim() || '#';
      link.textContent = cells[0].textContent.trim();
      link.className = 'unity-nav-link';
      
      // Check if it has dropdown indicator
      if (cells[0].textContent.includes('▼') || cells.length > 2) {
        link.classList.add('has-dropdown');
        const dropdownIcon = document.createElement('span');
        dropdownIcon.className = 'dropdown-icon';
        dropdownIcon.innerHTML = '▼';
        link.appendChild(dropdownIcon);
      }
      
      navItem.appendChild(link);
      navList.appendChild(navItem);
    }
  });
  
  centerSection.appendChild(navList);
  
  // Create right section with utilities
  const rightSection = document.createElement('div');
  rightSection.className = 'unity-nav-right';
  
  // Location icon
  const locationBtn = document.createElement('button');
  locationBtn.className = 'unity-utility-btn';
  locationBtn.innerHTML = '📍';
  locationBtn.setAttribute('aria-label', 'Find locations');
  
  // Language selector
  const langBtn = document.createElement('button');
  langBtn.className = 'unity-utility-btn';
  langBtn.innerHTML = '🌐';
  langBtn.setAttribute('aria-label', 'Language selector');
  
  // Get App dropdown
  const getAppBtn = document.createElement('button');
  getAppBtn.className = 'unity-utility-btn unity-get-app';
  getAppBtn.innerHTML = 'Get App ▼';
  
  // Login button
  const loginBtn = document.createElement('button');
  loginBtn.className = 'unity-login-btn';
  loginBtn.innerHTML = 'Login ▼';
  
  // Mobile menu toggle
  const mobileToggle = document.createElement('button');
  mobileToggle.className = 'unity-mobile-toggle';
  mobileToggle.innerHTML = '☰';
  mobileToggle.setAttribute('aria-label', 'Toggle menu');
  
  rightSection.appendChild(locationBtn);
  rightSection.appendChild(langBtn);
  rightSection.appendChild(getAppBtn);
  rightSection.appendChild(loginBtn);
  rightSection.appendChild(mobileToggle);
  
  // Assemble navigation
  nav.appendChild(leftSection);
  nav.appendChild(centerSection);
  nav.appendChild(rightSection);
  
  header.appendChild(nav);
  block.appendChild(header);
  
  // Add mobile menu functionality
  mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
  });
  
  // Add dropdown functionality
  const dropdownLinks = block.querySelectorAll('.has-dropdown');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Toggle dropdown logic here
    });
  });
}
