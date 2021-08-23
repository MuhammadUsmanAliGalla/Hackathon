let signup = (event) => {
    console.log('event :', event)
    event.preventDefault();
    
    
    let resname = document.getElementById('resname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let country = document.getElementById('country').value
    let city = document.getElementById('city').value
    let phone = document.getElementById('phone').value
    const resData = {
        resname,
        email,
        password,
        country,
        city,
        phone,
    }
    console.log('resData :', resData)
    
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log('user :', user)

            // firestore me data set krwane k lye
            firebase.firestore().collection("resturants").doc(user.uid).set({
                resname: resname,
                email: email,
                uid: user.uid,
                password: password,
                country:country,
                city:city,
                phone:phone
            })

            .then(function() {
                console.log("Data Succesfull");
            }).catch(error => {
                console.log(error);
            })
            
            swal({
                title: "Good job!",
                text: "Successfully sign up",
                icon: "success",
                button: "next",
            }).then((value) => {
                location.href = "./login.html"
            })

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorMessage)
            swal("Oops! Login Failed", errorMessage, "error");


            // ..
        });



}


// var button =function (){
//     console.log('working');

// }