window.onload = function () {

    let button = document.getElementsByClassName("btn")[1];
    button.addEventListener("click", function (event) {

        event.preventDefault();
        console.log("submission button clicked");
        var email = document.getElementById('email').value.trim();


        if (email.length==0) {
            console.log("field is empty");
            document.getElementsByClassName("message").innerText = "Email field must not be empty";
            //alert('You must fill in your an email address');
            //displayErrorMessage(email, "You must fill in your email");
        } else if (!isEmail(email)) {
            console.log("email invalid");
            document.getElementsByClassName("message").innerText = "Incorrect Email format!";
            // alert('Incorrect format for email.');
            //displayErrorMessage(email, "Incorrect format for email address.");

        } else {
            console.log("email valid");
            document.getElementsByClassName("message").innerText = "Thank you! Your email address: " + email  + " has been added to our mailing list!";
        }

    });
    
}

/**
 * Check if a valid email address was entered.
 */
function isEmail(emailAddress) {
            return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|io|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(emailAddress);
        }

/**
 * Check if value for a field is empty.
 */
function isEmpty(fieldValue) {
            if (fieldValue.length == 0) {
                console.log('field is empty');
                return true;
            }
            return false;
        }