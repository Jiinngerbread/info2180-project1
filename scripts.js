window.onload = function () {

    let button = document.getElementsByClassName("btn")[1];
    button.addEventListener("click", function (event) {

        event.preventDefault();
        console.log("submission button clicked");
        var email = document.getElementById('email').value.trim();
        msg = document.getElementById("message");
        var child = document.getElementById("temp");
        console.log(child);
        
        

        if (email.length==0) {
            if (child != null) {
                msg.removeChild(child);
            }
            console.log("field is empty");
            var p = document.createElement("p");
            var n = document.createTextNode("Email field must not be empty");
            p.appendChild(n)
            p.setAttribute("id", "temp");
            msg.appendChild(p)
            //alert('You must fill in your an email address');
        } else if (!isEmail(email)) {
            if (child != null) {
                msg.removeChild(child);
            }
            console.log("email invalid");
            var p = document.createElement("p");
            var n = document.createTextNode("Incorrect Email format!");
            p.appendChild(n)
            p.setAttribute("id", "temp");
            msg.appendChild(p)
    
            //alert('Incorrect format for email.');

        } else {
            if (child != null) {
                msg.removeChild(child);
            }
            console.log("email valid");
            console.log("email invalid");
            var p = document.createElement("p");
            var n = document.createTextNode("Thank you! Your email address: " + email + " has been added to our mailing list!");
            p.appendChild(n)
            p.setAttribute("id", "temp");
            msg.appendChild(p)
            //alert("Thank you! Your email address: " + email  + " has been added to our mailing list!");


        }

    });
    
}

/**
 * Check if a valid email address was entered.
 */
function isEmail(emailAddress) {
    return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|io|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(emailAddress);
}


