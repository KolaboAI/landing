document.getElementById('waitlist-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the email value from the form
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // Validate email (basic validation)
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Prepare data to send
    const data = {
        email: email
    };

    try {
        // Use Fetch API to send form data to the backend (replace URL with your server endpoint)
        const response = await fetch('/submit-waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // If the submission was successful, show a success message
            document.getElementById('waitlist-message').style.display = 'block';
            emailInput.value = ''; // Clear the email field
        } else {
            throw new Error("Failed to submit");
        }
    } catch (error) {
        console.error("There was an error submitting the form:", error);
        alert("There was an error. Please try again later.");
    }
});

// Basic email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}