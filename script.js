function checkit(){
    const pwd1 = document.getElementById('pass').value;
    const pwd2 = document.getElementById('rep_pass').value;
    if(pwd1 !== pwd2){
        alert("Please! fill same password");
        return false;
    }
}


//for taking user data
//#1 we are setting user data to local storage of browser

handleSubmit = () =>{
    const user = document.getElementById('user').value;
    const emailAddress = document.getElementById('emailads').value;
    const user_pwd = document.getElementById('pass').value;

    localStorage.setItem("Name", user);
    localStorage.setItem("password", user_pwd);
    localStorage.setItem("Email", emailAddress);

    return;
}

//#2 now we are fatching that data to render on another page from localstorage of browser
window.addEventListener('load', () => {
    // const params = (new URL(document.location)).searchParams;
    // const name = params.get('user');
    // const Emailaddress = params.get('emailads');

    const name = localStorage.getItem('Name');
    const Emailaddress = localStorage.getItem('Email');    

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-email').innerHTML = Emailaddress;
})


//function to login ,(only if user has an account)
chechkLogin = () =>{
    //getting setted data from localstorage
    const user_name = localStorage.getItem('Name');
    const user_pwd =  localStorage.getItem('password');

    //now check the data of localstorage and user given are mactches or not
    const old_username = document.getElementById('olduser').value;
    const old_userpwd = document.getElementById('oldpass').value;
    
    if(old_username !== user_name){
        alert("Username is not matching.");
        return false;
    }
    if(old_userpwd !== user_pwd){
        alert("password is not matching.");
        return false;
    }
    return;
}