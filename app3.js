const sidebar = document.getElementById('sidebar');

function toggleSide() {
    sidebar.classList.toggle('show')
}


const paypalButton = document.getElementById('paypal-button');
const bitcoinButton = document.getElementById('bitcoin-button');
const errorMessage = document.getElementById('error-message');

// PayPal Button Click Event
paypalButton.addEventListener('click', () => {
  // Simulate "Service Provider Unavailable" message
  errorMessage.style.display = 'block';
  errorMessage.innerHTML = '<img class="error-message-icon" src="icons8-error-30.png" alt="error-icon"> <p><span>Service Provider is currently Unavailable. Please use Bitcoin instead.</span></p>';
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 3000);
});

// Bitcoin Button Click Event
bitcoinButton.addEventListener('click', () => {
  // Add Bitcoin payment logic here
  alert('Bitcoin payment selected');
});
// Add credit button click event
document.querySelector('.booknow').addEventListener('click', () => {
    // Add payment processing logic here
    alert('Add credit button clicked');
  });



  const bitcoinRadio = document.getElementById('bitcoin-button');
  const addCreditButton = document.getElementById('add-credit-button');
  
  bitcoinRadio.addEventListener('change', function() {
    if (this.checked) {
      addCreditButton.disabled = false;
      addCreditButton.style.backgroundColor = 'blue'; // Change to your desired color
    }
  });
  