$("span").click(function(){
    $(".ul").slideToggle();
});
function pritesh(){
    var om = document.getElementById("om").value;
    var ph = document.getElementById("ph").value;
    var Email = document.getElementById("Email").value;
    var Dep = document.getElementById("Dep").value;
    var Doc = document.getElementById("Doc").value;
    var date = document.getElementById("date").value;

    if(om==""){
       document.getElementById("omai").innerHTML="Enter Patient Name";
       return false;
    }
    if(ph==""){
        document.getElementById("phon").innerHTML="Enter Phone Number";
        return false;
     }

    if(Email==""){
        document.getElementById("Emaili").innerHTML="Enter Email Address";
        return false;
     }
    if(Dep=="Department"){
        document.getElementById("Depa").innerHTML="Select Department";
        return false;
     }

    if(Doc=="Doctors"){
        document.getElementById("Doct").innerHTML="Select Doctors";
        return false;
     }
    if(date==""){
        document.getElementById("datefinal").innerHTML="Select Date";
        return false;
     }

     else{
         document.write("<h1> Congrtutalations Your Appointment successful</h1>");
         return false;
     }



}