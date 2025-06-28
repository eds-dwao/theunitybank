import { getMetadata } from '../../scripts/aem.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const resp = await fetch(`${footerPath}.plain.html`);

  if (resp.ok) {
    const html = await resp.text();
    const footer = document.createElement('div');
    footer.innerHTML = html;
    
    // Add Unity Bank footer structure
    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';
    footerContent.innerHTML = `
      <div class="footer-section">
        <h4>Personal</h4>
        <ul>
          <li><a href="/save">Save</a></li>
          <li><a href="/spend">Spend</a></li>
          <li><a href="/nri-account">NRI Account</a></li>
          <li><a href="/fixed-account">Fixed Account</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Business</h4>
        <ul>
          <li><a href="/current-account">Current Account</a></li>
          <li><a href="/nri-current-account">NRI Current Account</a></li>
          <li><a href="/operating-banking">Operating Banking</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="/about-unity">About Unity</a></li>
          <li><a href="/treasury-services">Treasury Services</a></li>
          <li><a href="/our-team">Our Team</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="/mobile-banking">Mobile Banking</a></li>
          <li><a href="/netbanking">NetBanking</a></li>
          <li><a href="/investment-documents">Investment Documents</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Connect with us</h4>
        <ul>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/feedback-form">Feedback Form</a></li>
        </ul>
      </div>
    `;
    
    const footerBottom = document.createElement('div');
    footerBottom.className = 'footer-bottom';
    footerBottom.innerHTML = `
      <div class="footer-logo">
        <img src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=60" alt="Unity Bank" />
        <p>Unity Bank Ltd is registered</p>
      </div>
      <div class="footer-legal">
        <p>© 2024 Unity Bank</p>
        <div class="footer-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/grievances">Grievances</a>
        </div>
      </div>
    `;
    
    block.textContent = '';
    block.appendChild(footerContent);
    block.appendChild(footerBottom);
  }
}