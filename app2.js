const sidebar = document.getElementById('sidebar');

function toggleSide() {
    sidebar.classList.toggle('show')
}


function toggleSidebar() {
    if (!inputField.checkValidity()) {
      // Input field is invalid, display custom error message
      errorMessage.innerHTML = `
        <img class="error-message-icon" src="icons8-error-30.png" alt="error-icon">
        <p><span>Please fill in all the input field</span></p>
      `;
      errorMessage.classList.add('show');
      return;
    } else {
      // Input field is valid, display original error message
      errorMessage.innerHTML = `
        <img class="error-message-icon" src="icons8-error-30.png" alt="error-icon">
        <p><span>You do not have enough credits</span></p>
        <p><a href="mySite.html">Click here to buy credits</a></p>
      `;
      errorMessage.classList.toggle('show');
    }
  }

  const errorMessaging = document.getElementById('errorMessaging');

  function secondErrorMessage() {
    errorMessaging.classList.toggle('appear');
  }

  const thirdErrorMessaging = document.getElementById('thirdErrorMessaging');

  function thirdMessage() {
    thirdErrorMessaging.classList.toggle('appear');
  }


  let likeCount = 38;
  let hasLiked = false;
  
  function likeCounter() {
    if (!hasLiked) {
      likeCount++;
      document.querySelector('.like-count').innerHTML = `(${likeCount})`;
      hasLiked = true;
    } else {
      console.log("You've already liked!");
    }
  }

  let likeCounttwo = 28;
  let hasLikedtwo = false;
  
  function likeCountertwo() {
    if (!hasLikedtwo) {
      likeCounttwo++;
      document.querySelector('.like-counttwo').innerHTML = `(${likeCounttwo})`;
      hasLikedtwo = true;
    } else {
      console.log("You've already liked!");
    }
  }
  

  let likeCountthree = 61;
  let hasLikedthree = false;
  
  function likeCounterthree() {
    if (!hasLikedthree) {
      likeCountthree++;
      document.querySelector('.like-countthree').innerHTML = `(${likeCountthree})`;
      hasLikedthree = true;
    } else {
      console.log("You've already liked!");
    }
  }

  let likeCountfour = 39;
  let hasLikedfour = false;
  
  function likeCounterfour() {
    if (!hasLikedfour) {
      likeCountfour++;
      document.querySelector('.like-countfour').innerHTML = `(${likeCountfour})`;
      hasLikedfour = true;
    } else {
      console.log("You've already liked!");
    }
  }

  let likeCountfive = 51;
  let hasLikedfive = false;
  
  function likeCounterfive() {
    if (!hasLikedfive) {
      likeCountfive++;
      document.querySelector('.like-countfive').innerHTML = `(${likeCountfive})`;
      hasLikedfive = true;
    } else {
      console.log("You've already liked!");
    }
  }
  let likeCountsix = 58;
  let hasLikedsix = false;
  
  function likeCountersix() {
    if (!hasLikedsix) {
      likeCountsix++;
      document.querySelector('.like-countsix').innerHTML = `(${likeCountsix})`;
      hasLikedsix = true;
    } else {
      console.log("You've already liked!");
    }
  }


  const videoPerWeek = document.getElementById('videoPerWeek');
  const seeMoreButton = document.querySelector('button');
  
  function seeMore() {
    videoPerWeek.classList.toggle('show');
    seeMoreButton.textContent = videoPerWeek.classList.contains('show') ? 'See Less' : 'See More';
  }



  function showErrorMessage(element) {
    const paymentMessage = element.querySelector('.payment-message');
    paymentMessage.style.display = 'block';
    setTimeout(() => {
    paymentMessage.style.display = 'none';
    }, 3000); // Hide error message after 3 seconds
    }
    


    // Get elements
const checkbox = document.getElementById('checkMe');
const makePaymentButton = document.getElementById('makePaymentButton');
const amountInput = document.querySelector('.amount input[type="tel"]');

// Initialize make payment button state
makePaymentButton.disabled = true;
makePaymentButton.style.backgroundColor = 'gray';
makePaymentButton.style.cursor = 'not-allowed';

// Checkbox event listener
checkbox.addEventListener('change', () => {
  checkRequirements();
});

// Amount input event listener
amountInput.addEventListener('input', () => {
  checkRequirements();
});
// Function to check requirements
function checkRequirements() {
  const amount = parseFloat(amountInput.value);
  if (checkbox.checked && amount >= 100) {
    makePaymentButton.disabled = false;
    makePaymentButton.style.backgroundColor = 'blue';
    makePaymentButton.style.cursor = 'pointer';
  } else {
    makePaymentButton.disabled = true;
    makePaymentButton.style.backgroundColor = 'gray';
    makePaymentButton.style.cursor = 'not-allowed';
  }
}

// Make payment button event listener
makePaymentButton.addEventListener('click', () => {
  window.location.href = 'paynow.html';
});






  

const bitcoinAddress = document.getElementById('bitcoin-address');

document.getElementById('bitcoin-address-container').onclick = function() {
  const text = bitcoinAddress.textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert('Bitcoin address copied to clipboard!');
  }).catch((error) => {
    console.error('Error copying text:', error);
  });
}
