// LAB 2 Emmily To DA558A

// Get the form element by ID
var form = document.getElementById("mochiquiz");

//Adding a submit event listener to the form
form.addEventListener("submit", function (event) {
    // Prevent the default form submission behaviour 
    event.preventDefault();

    // Validate personal information
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var email = document.getElementById('email');

    // Check if any of the personal information are empty
    if (firstname.value === "" || lastname.value === "" || email.value === "") {

        // If empty, display alert message & prevent form submission
        alert('Please fill in all your contact information');
        return false;
    }

    // Validate quiz answers
    if (!validateQuizAnswers()) {

        //display alert message & prevent form submission
        alert("Please answer exactly two required questions");
        return false;
    } else {

        //display success message if validation is okay 
         alert("Success! Answers submitted.");
      }   
});


function validateQuizAnswers() {
    // Check if these exactly two required questions are answered (in this case, q1 and q2)
    var answeredQuestion1 = document.querySelector('input[name = "question1"]:checked').value;
    var q2Select = document.getElementById("q2select");
    var answeredQuestion2 = q2Select.value;

    // Log the answers to the console for debugging
    console.log('Answer 1:', answeredQuestion1);
    console.log('Answer 2:', answeredQuestion2);

    // Check if both questions are answered
    if (answeredQuestion1 !== null && answeredQuestion2 !== null) {
        return true;
    } else {
        return false;
    }
}

