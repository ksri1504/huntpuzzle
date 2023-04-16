const signup = e=>{
   
    let name= document.getElementById("Username").value;
     email=document.getElementById("Email").value;
     pass=document.getElementById("Password").value;
    
     let formdata= JSON.parse(localStorage.getItem('formdata')) || [];
     let exist= formdata.length && 
     JSON.parse(localStorage.getItem('formdata')).some( data => 
        data.email.toLowerCase()== email.toLowerCase());
    if(!exist){
        formdata.push({name, email, pass});
        localStorage.setItem('formdata', JSON.stringify(formdata));
        document.querySelector('form').reset();
        document.querySelector('email').focus();
        alert("Account created!")
       
    }
    else{
        alert("ooopppssss... Duplicate found!!")
    }
    e.preventDefault();
   }

   function login(){
    let name= document.getElementById('nm').value,
    pass= document.getElementById('pwd').value
    let formdata= JSON.parse(localStorage.getItem('formdata')) || [];
    let exist= formdata.length && 
     JSON.parse(localStorage.getItem('formdata')).some( data => 
        data.name.toLowerCase()== name.toLowerCase() && data.pass.toLowerCase()==pass);
        if(name=="admin12" && pass=="admin@123"){
           window.location ="/project.html";
            alert("LOGIN SUCCESSFULL")
        }
        else if(!exist){
            alert("Incorrect login")
        }else{
            window.location ="/project.html";
            alert("LOGIN SUCCESSFULL")
        }
       
   }

