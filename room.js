function logout(){
    localStorage.removeItem("user");
    window.location.replace("index.html");
}