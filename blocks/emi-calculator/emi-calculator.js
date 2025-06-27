export default function decorate(block) {
  block.innerHTML = `
    <div class="emi-calculator-container">
      <div class="emi-calculator-form">
        <div class="calculator-tabs">
          <button class="tab-button active" data-tab="emi">EMI Calculator</button>
          <button class="tab-button" data-tab="eligibility">Check Eligibility</button>
        </div>
        
        <div class="calculator-inputs">
          <div class="input-group">
            <div class="input-header">
              <label>Home Loan Amount</label>
              <div class="amount-display">
                <span class="currency">₹</span>
                <span class="amount">20,00,000</span>
                <div class="amount-label">20 LAKHS</div>
              </div>
            </div>
            <div class="slider-container">
              <input type="range" id="loanAmount" min="300000" max="7500000" value="2000000" class="slider">
              <div class="slider-labels">
                <span>3L</span>
                <span>50L</span>
                <span>1Cr</span>
                <span>50Cr</span>
                <span>75Cr</span>
              </div>
            </div>
          </div>
          
          <div class="input-group">
            <div class="input-header">
              <label>Loan Tenure</label>
              <div class="amount-display">
                <span class="amount">180</span>
                <span class="currency">Months</span>
                <div class="amount-label">15 YEARS</div>
              </div>
            </div>
            <div class="slider-container">
              <input type="range" id="loanTenure" min="60" max="300" value="180" class="slider">
              <div class="slider-labels">
                <span>60M</span>
                <span>120M</span>
                <span>180M</span>
                <span>240M</span>
                <span>300M</span>
              </div>
            </div>
          </div>
          
          <div class="input-group">
            <div class="input-header">
              <label>Rate of Interest (Per Annum)</label>
              <div class="amount-display">
                <span class="amount">8.01</span>
                <span class="currency">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="emi-calculator-result">
        <div class="result-card">
          <div class="result-header">
            <div class="emi-amount">
              <h3>Your EMI</h3>
              <div class="emi-value">₹ 2,346 / Month</div>
            </div>
          </div>
          
          <div class="result-details">
            <div class="detail-item">
              <h4>Repayment Amount</h4>
              <div class="detail-value">₹ 20,00,000</div>
            </div>
            <div class="detail-item">
              <h4>Interest Amount</h4>
              <div class="detail-value">₹ 7,34,000</div>
            </div>
          </div>
          
          <div class="result-footer">
            <div class="disclaimer">
              <span class="info-icon">ℹ</span>
              <p>Calculated values are for reference only. Exact figures depend on your full financial profile.</p>
            </div>
            
            <div class="action-buttons">
              <button class="btn-primary">Apply Now</button>
              <button class="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Add event listeners for calculator functionality
  const loanAmountSlider = block.querySelector('#loanAmount');
  const loanTenureSlider = block.querySelector('#loanTenure');
  const amountDisplay = block.querySelector('.amount');
  const tenureDisplay = block.querySelector('.input-group:nth-child(2) .amount');
  const emiDisplay = block.querySelector('.emi-value');

  function calculateEMI() {
    const principal = parseInt(loanAmountSlider.value);
    const tenure = parseInt(loanTenureSlider.value);
    const rate = 8.01 / 100 / 12; // Monthly interest rate

    const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    
    return Math.round(emi);
  }

  function updateDisplay() {
    const loanAmount = parseInt(loanAmountSlider.value);
    const tenure = parseInt(loanTenureSlider.value);
    
    // Update amount display
    amountDisplay.textContent = (loanAmount / 100000).toFixed(0) + ',00,000';
    
    // Update tenure display
    tenureDisplay.textContent = tenure;
    
    // Update EMI
    const emi = calculateEMI();
    emiDisplay.textContent = `₹ ${emi.toLocaleString('en-IN')} / Month`;
  }

  loanAmountSlider.addEventListener('input', updateDisplay);
  loanTenureSlider.addEventListener('input', updateDisplay);

  // Tab functionality
  const tabButtons = block.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
}