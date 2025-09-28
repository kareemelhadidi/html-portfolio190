 document.getElementById("cv").addEventListener("click", cvPdf);
 function cvPdf(){
    window.open("cv.pdf", "_blank");
 }
 document.getElementById("contact_me").addEventListener("click", contact);
 function contact(){
   window.open("./contact.html", "_self");
 }