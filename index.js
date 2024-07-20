function checkEligibility(event) {
    event.preventDefault(); // Add this line to prevent form submission
    const licenseNumber = document.getElementById('licenseNumber').value;
    const age = parseInt(licenseNumber.substring(0, 2));

    if (age >= 18) {
        document.getElementById('result').innerHTML = 'Congratulations! You are eligible  to drive.';
        resultElement.style.color = 'green'; // Set text color to green
    } else {
        document.getElementById('result').innerHTML = 'Sorry, you are not eligible to drive yet.';
        resultElement.style.color = 'red'; // Set text color to red
    }
    
    setTimeout(function() {
        document.getElementById('result').innerHTML = '';
    }, 10000); // 10000 milliseconds = 10 seconds
    
}



