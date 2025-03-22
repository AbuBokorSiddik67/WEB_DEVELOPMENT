document.getElementById("login-btn").addEventListener("click",
    function (event) {
        event.preventDefault();
        let userId = document.getElementById("userId").value;
        let userEmail = document.getElementById("email").value;
        let userPass = document.getElementById("pass").value;

        if (userId.length >= 6 && userEmail && userPass.length >= 8) {
            window.location.href = "main.html";
        } else {
            alert("Please fill up your form");
        }
    });