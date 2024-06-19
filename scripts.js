document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            document.getElementById('contact-form').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
    });

    document.getElementById('feedback-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('feedback-name').value;
        const email = document.getElementById('feedback-email').value;
        const message = document.getElementById('feedback-message').value;

        fetch('http://localhost:5000/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            document.getElementById('feedback-form').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the feedback.');
        });
    });
});
