const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
    sidebar.classList.toggle('show')
}

const errorMessaging = document.getElementById('errorMessaging');

function errorMessage() {
    errorMessaging.classList.toggle('appear');
}



const bitcoinAddress = document.getElementById('bitcoin-address');

document.getElementById('bitcoin-address-container').onclick = function() {
  const text = bitcoinAddress.textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert('Bitcoin address copied to clipboard!');
  }).catch((error) => {
    console.error('Error copying text:', error);
  });
}
