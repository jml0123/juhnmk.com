

var heading = document.getElementById('title');


 function text1() {
        var x = document.getElementById("juhnmktext");
        x.style.color="magenta"
      
    }

    function text2() {
        var x = document.getElementById("juhnmktext");
        x.innerHTML="<img src=\"https://i.pinimg.com/originals/52/3e/2b/523e2b427e7b93a4ab73b4c901a8ec13.jpg\" width=\"400px\" height=\"150px\">"
       //placeholder for now. find a way to revert back to ascii code, or find a way to flow over to a new function
    }

     function text3() {
        var x = document.getElementById("juhnmktext")
        var y = document.getElementById("navtext");
        x.innerText = "juhnmk.";
    }

function text4() {
        var x = document.getElementById("juhnmktext");
        var y =document.getElementById("artist_text")
        x.style.color = 'black';
        y.style.color = "black"
    }


     function artisttext() {
   	 	var x = document.getElementById("juhnmktext")
   	 	x.style.color = 'black';
   	 	var y = document.getElementById("artist_text")
   	 	y.innerText = "strain theory";

    }

     function alttext() {
     	 var x = document.getElementById("juhnmktext");
         x.style.color="white"
         var y = document.getElementById("artist_text")
         y.innerText = "strain theory";
     }


//Cursor code copied from http://www.javascriptkit.com/script/script2/cursortrail.shtml
//might change cursor image

var trailLength = 5 // The length of trail (8 by default; put more for longer "tail")
var path = "cursor.gif" // URL of your image

var standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body //create reference to common "body" across doctypes
var i,d = 0

function initTrail() { // prepares the script
	images = new Array() // prepare the image array
	for (i = 0; i < parseInt(trailLength); i++) {
		images[i] = new Image()
		images[i].src = path
	}
	storage = new Array() // prepare the storage for the coordinates
	for (i = 0; i < images.length*3; i++) {
		storage[i] = 0
	}
	for (i = 0; i < images.length; i++) { // make divs for IE and layers for Navigator
		document.write('<div id="obj' + i + '" style="position: absolute; z-Index: 100; height: 0; width: 0"><img src="' + images[i].src + '"></div>')
	}
	trail()
}
function trail() { // trailing function
	for (i = 0; i < images.length; i++) { // for every div/layer
		document.getElementById("obj" + i).style.top = storage[d]+'px' // the Y-coordinate
		document.getElementById("obj" + i).style.left = + storage[d+1]+'px' // the X-coordinate
		d = d+2
	}
	for (i = storage.length; i >= 2; i--) { // save the coordinate for the div/layer that's behind
		storage[i] = storage[i-2]
	}
	d = 0 // reset for future use
	var timer = setTimeout("trail()",10) // call recursively 
}
function processEvent(e) { // catches and processes the mousemove event 
	if (window.event) { // for IE
		storage[0] = window.event.y+standardbody.scrollTop+10
		storage[1] = window.event.x+standardbody.scrollLeft+10
	} else {
		storage[0] = e.pageY+12
		storage[1] = e.pageX+12
	}
}

	initTrail() 
	document.onmousemove = processEvent // start capturing


//$(document).ready(function(){
//  $(".crt").mouseenter(function(){
//      alert("This is a glitch. W.I.P.");
//   });
//}); 

$(document).ready(function(){
	$("#sidenavright").mouseenter(function(){
        $(".crt").hide();

})})

$(document).ready(function(){
	$("#sidenavright").mouseleave(function(){
        $(".crt").show();

})})


//$(document).ready(function(){
//	$(".crt").mouseenter(function(){
//        $("#sidenavright").hide();
//
//})})
//
//$(document).ready(function(){
//	$(".crt").mouseleave(function(){
//        $("#sidenavright").show();
//
//})})


	



 
//Functions tested through page refresh and interaction as well as development console


