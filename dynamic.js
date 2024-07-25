
const database={};

function register()
{   
    var name=document.getElementById("name").value.trim();
    var pass=document.getElementById("pass").value.trim();
    var c_pass=document.getElementById("con_pass").value.trim();
        if(pass!==c_pass)
            {
                alert("Both password and confirm password should be same!");
                document.getElementById("pass").value = '';
                document.getElementById("con_pass").value= '';
                return false;
            }
        else if(name==="" || pass==="" || c_pass==="")
            {
            alert("input should not be empty")
            return false;
         }
        else{
                
            database[name]=pass;
            document.getElementById("name").value = '';
            document.getElementById("pass").value = '';
            document.getElementById("con_pass").value = '';
            console.log(database);
            alert("Registration Successful");
            document.getElementById("exist").textContent="Now you can login👉 ";
            
            }

}

function check()
{
    var lname=document.getElementById("username").value.trim();
    var lpass=document.getElementById("password").value.trim();
    var mess=document.getElementById("message");
    console.log(lname,lpass)
    if(lname in database)
        {  if(database[lname]==lpass)
            {
            mess.textContent="Login Successful 🎉";
            mess.style.color="blue";
            setTimeout(function(){
            window.open("https://www.pngkey.com/png/detail/357-3576955_06-nov-2018-login-successful.png", "_blank")},2000)
            return false;
            }
        }

        mess.textContent="wrong name or password";
        mess.style.color="red";
        console.log(database);
        return false;
        

}

function logi(){
    document.getElementById('register').style.display='none';
    document.getElementById('login').style.display='block';
    return false;
}

function reg(){
    document.getElementById('register').style.display='block';
    document.getElementById('login').style.display='none';
    return false;
}