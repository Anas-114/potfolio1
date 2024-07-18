function sendMail(){

    var params={
        name:document.getElementById("fullname").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value
    }
const serviceID ="service_cs7aidv"
const templateID ="template_yxb0fo8"


emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("fullname").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
        console.log(res);
        alert("your message sent successfully");
})
.catch((err)=> console.log(err));
}

