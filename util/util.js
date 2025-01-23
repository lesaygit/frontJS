function isUserLoggedIn() {
    return !!sessionStorage.getItem('username');
};
function getUsername() {
    return sessionStorage.getItem('username');
};

function clearSession(){
    sessionStorage.clear();
}

export{isUserLoggedIn,getUsername,clearSession}