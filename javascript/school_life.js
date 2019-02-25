window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goTop").style.display = "block";
    } else {
        document.getElementById("goTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function resizeText(multiplier) {
	var el = document.getElementById('whole');
	var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
	var fontSize = parseFloat(style); 
	/*el.style.fontSize = (fontSize + 1) + 'px';*/
	
  if (multiplier === 0) {
	el.style.fontSize = '1em';
    /*document.body.style.fontSize = "1.0em";*/
	return 0;
  }
  el.style.fontSize = fontSize + (multiplier * 5) + 'px';
  /*document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";*/
}
   
   
   
// when the users click the 重填 button , the information which the user input to the forms will be clear

function clearForm(){
    
    document.getElementById("Namebox").value = "" ;
    document.getElementById("Emailbox").value = "" ;
    document.getElementById("Phonebox").value = "" ;
    document.getElementById("subject").value = "" ;
    
    document.getElementById("checkName").innerText = "";
    document.getElementById("checkEmail").innerText = "";
    document.getElementById("checkPhone").innerText = "";
    document.getElementById("checkSubject").innerText = "";
}

// when the users click the 提交button , the function will check whether the information is inputed or not.

function checkAll(){
    var a = document.getElementById("Namebox");
    var b = document.getElementById("Emailbox");
    var c = document.getElementById("Phonebox");
    var d = document.getElementById("subject");
   
    
    var form  = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
     // Each time the user tries to send the data, we check
        if (a.validity.valueMissing || b.validity.valueMissing || c.validity.valueMissing || d.validity.valueMissing){
            event.preventDefault();
         } 
        if (a.validity.valueMissing){
            document.getElementById("checkName").innerText = "必須填寫";
         } 
         else{
             document.getElementById("checkName").innerText = "";
             }
        if( b.validity.valueMissing){
            document.getElementById("checkEmail").innerText = "必須填寫";
        }
        else{
            document.getElementById("checkEmail").innerText = "";
            }
        if(c.validity.valueMissing ){
            document.getElementById("checkPhone").innerText = "必須填寫";

        }
        else{
            document.getElementById("checkPhone").innerText = "";
            }
        if(d.validity.valueMissing) {
            document.getElementById("checkSubject").innerText = "必須填寫";
        }
        else{
           document.getElementById("checkSubject").innerText = ""; 
        }
        // And we prevent the form from being sent by canceling the event
        
        
    }, false);
    
}


/*school Life*/
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
