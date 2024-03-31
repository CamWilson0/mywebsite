
function sendEmail() {
    const userEmailInput = document.getElementById('userName, userEmail, userSite, userMsg').value;
  
    emailjs.send('service_0mwo08a', 'template_9b1fi2l', {
      message: userEmailInput
    }, 'gAzssANDnMj2p-7Tn')
      .then(function(response) {
        console.log('Email sent:', response.status, response.text);
  
        // Display confirmation message
        const confirmationMessage = document.getElementById('confirmation');
        confirmationMessage.style.display = 'block';
  
        // Clear input after sending email
        document.getElementById('userName, userEmail, userSite, userMsg').value = '';
      }, function(error) {
        console.error('Email not sent:', error);
      });
  }
  