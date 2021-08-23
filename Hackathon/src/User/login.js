let login = (event) => {
    console.log('event :', event)
    event.preventDefault();
    
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    
    const userData = {
        email,
        password
    };
    console.log('userData :', userData)
    
    
    firebase.auth().signInWithEmailAndPassword(email, password)
  
        .then((userCredential) => {
         // Signed in
         var user = userCredential.user;
         // ...
         console.log(user)
         console.log("User Sucessfully login")
        
            swal({
            title: "Good job!",
            text: "Successfully Login!",
            icon: "success",
            button: "next",
        })
        .then((value) => {
            location.href = "./dashboard.html"
        })
})
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        swal("Oops! Login Failed", errorMessage, "error");

});

}

