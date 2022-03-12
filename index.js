

var name,College_name,nam,coll;
let canvas=document.getElementById('qr');
let ctx=canvas.getContext("2d");
let datauri;
canvas.width=3508;
canvas.height=2480;
let mebid = document.getElementById('dwnld');
mebid.style.visibility = 'hidden';

function setvalues()
{

var names = document.getElementById("name").value;
var college = document.getElementById("College_name").value;
localStorage.setItem('name', names);
localStorage.setItem('college', college);
localStorage.setItem('image', 'myCat.png');
var nam=localStorage.getItem('name');
var coll=localStorage.getItem('college');
//document.getElementById("nam").innerHTML=nam;
//document.getElementById("coll").innerHTML=coll;
mebid.style.visibility = 'visible';



var img = new Image();   // Create new img element
img.src = 'Participation.png'; // Set source path
img.onload = function() {
ctx.drawImage(img, 50, 50,3508,2480);

ctx.font = "130px Allura";
ctx.textAlign = "center";
ctx.fillText(nam, 2380,1080);
ctx.textAlign = "center";
ctx.fillText(coll, 1800,1270);
datauri=canvas.toDataURL();

}

}

//console.log(datauri);

function myFunction() {
    var link = document.createElement('a');
    link.download = "certificate.png";
    link.href = datauri ;
    link.click();
  }

  

  


