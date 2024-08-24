function sendEmail(event) {
    event.preventDefault();

    const form = document.getElementById('contact_form');
    const formData = new FormData(form);

    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            mobile: formData.get('mobile')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show success or failure message
        form.reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem sending the email.');
    });
}