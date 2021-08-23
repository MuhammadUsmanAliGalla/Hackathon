let logOut = () => {
    firebase.auth().signOut()
        .then(function() {
            location.href = "./login.html"
        })
        .catch(function(er) {
            console.log(er);
        })
}