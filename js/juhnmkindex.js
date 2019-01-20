var ascii =
  String.raw`            __                          __<br>`+         
  String.raw`__         /\ \                        /\ \<br>`+        
 String.raw`/\_\  __  __\ \ \___     ___     ___ ___\ \ \/'\<br>`+    
 String.raw`\/\ \/\ \/\ \\ \  _ \ /' _ \ /' __ __\ \ , <<br>`+    
  String.raw`\ \ \ \ \_\ \\ \ \ \ \/\ \/\ \/\ \/\ \/\ \ \ \\\<br>`+  
  String.raw`_\ \ \ \____/ \ \_\ \_\ \_\ \_\ \_\ \_\ \_\ \_\ \_\<br>`+
 String.raw`/\ \_\ \/___/   \/_/\/_/\/_/\/_/\/_/\/_/\/_/\/_/\/_/<br>`+ 
 String.raw`\ \____/<br>`+                                            
  String.raw`\/___/                                         .com`

  

console.log(ascii)

var heading = document.getElementById('title');


 function text1() {
        var x = document.getElementById("juhnmktext");
        if (x.innerText === "stheory") {
        	x.style.color="red";
        } else {
        	x.style.color="yellow";
        }
      
    }

    function text2() {
        var x = document.getElementById("juhnmktext");
         if (x.innerText === "stheory") {
        	x.style.color="transparent";
        } else {
        	x.style.color="grey";
        }
       //placeholder for now. find a way to revert back to ascii code, or find a way to flow over to a new function
    }

     function text3() {
        var x = document.getElementById("juhnmktext");
        var y = document.getElementById("navtext");
        x.innerText ="stheory"
        x.style.color = "transparent"
  
		}

function text4() {
        var x = document.getElementById("juhnmktext");
        var y =document.getElementById("artist_text")
        x.style.color = 'grey';
        y.innerText = ""
        y.style.color = "grey"
    }


     function artisttext() {
   	 	var x = document.getElementById("juhnmktext")
   	 	x.style.color = 'black';
   	 	var y = document.getElementById("artist_text")
   	 	y.innerText = "strain theory";

    }

     function alttext() {
     	 var x = document.getElementById("juhnmktext");
         x.style.color="grey"
         var y = document.getElementById("artist_text")
         y.innerText = "";
         y.style.color="lightblue"

     }

  function keytext() {
        var x = document.getElementById("emailkey");
        x.innerText ="straintheory.key@gmail.com"
        x.style.color = "black"
      const copyToClipboard = str => {
      const el = document.createElement('textarea');
      el.value = "straintheory.key@gmail.com";
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
};
        }



(function fairyDustCursor() {
  
  var possibleColors = ["white"]
  var width = window.innerWidth;
  var height = window.innerHeight;
  var cursor = {x: width/2, y: width/2};
  var particles = [];
  
  function init() {
    bindEvents();
    loop();
  }
  
  // Bind events that are needed
  function bindEvents() {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchstart', onTouchMove);
    
    window.addEventListener('resize', onWindowResize);
  }
  
  function onWindowResize(e) {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  
  function onTouchMove(e) {
    if( e.touches.length > 0 ) {
      for( var i = 0; i < e.touches.length; i++ ) {
        addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleColors[Math.floor(Math.random()*possibleColors.length)]);
      }
    }
  }
  
  function onMouseMove(e) {    
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    
    addParticle( cursor.x, cursor.y, possibleColors[Math.floor(Math.random()*possibleColors.length)]);
  }
  
  function addParticle(x, y, color) {
    var particle = new Particle();
    particle.init(x, y, color);
    particles.push(particle);
  }
  
  function updateParticles() {
    
    // Updated
    for( var i = 0; i < particles.length; i++ ) {
      particles[i].update();
    }
    
    // Remove dead particles
    for( var i = particles.length -1; i >= 0; i-- ) {
      if( particles[i].lifeSpan < 0 ) {
        particles[i].die();
        particles.splice(i, 1);
      }
    }
    
  }
  
  function loop() {
    requestAnimationFrame(loop);
    updateParticles();
  }
  
  /**
   * Particles
   */
  
  function Particle() {

    this.character = ascii;
    this.lifeSpan = 100; //ms
    this.initialStyles ={
      "position": "absolute",
      "display": "block",
      "pointerEvents": "none",
      "z-index": "100",
      "fontSize": "5.5px",
      "fontFamily": "monospace",
      "backgroundColor": "black"

    };

    // Init, and set properties
    this.init = function(x, y, color) {

      this.velocity = {
        x:  (Math.random() < 0.3 ? 3 : 0.2) * (Math.random() / 0.5),
        y: 1
      };
      
      this.position = {x: x - 10, y: y - 20};
      this.initialStyles.color = color;

      this.element = document.createElement('span');
      this.element.innerHTML = this.character;
      applyProperties(this.element, this.initialStyles);
      this.update();
      
      document.body.appendChild(this.element);
    };
    
    this.update = function() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.lifeSpan--;
      
      this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 200) + ")";
    }
    
    this.die = function() {
      this.element.parentNode.removeChild(this.element);
    }
    
  }
  
  /**
   * Utils
   */
  
  // Applies css `properties` to an element.
  function applyProperties( target, properties ) {
    for( var key in properties ) {
      target.style[ key ] = properties[ key ];
    }
  }
  
  init();
})();

/*
var mesaaudio = new Audio('audio/mesa5.wav');

$(document).ready(function(){
$(".playbox").mouse(function(){
  mesaaudio.play();
})
});
*/

//$(document).ready(function(){
//  $(".crt").mouseenter(function(){
//      alert("This is a glitch. W.I.P.");
//   });
//}); 

$(document).ready(function(){
	$("#sidenavright").mouseenter(function(){
        $(".bgimagetransparent").show();

})})

$(document).ready(function(){
  $("#emailkey").click(function(){
        keytext();

})})
//$(document).ready(function(){
//	$("#sidenavright").mouseleave(function(){
//        $(".crt").show();

//})})

$(document).ready(function(){
	$(".limesa5").mouseenter(function(){
        $(".mesa5").fadeIn("slow");
        $(".crt").fadeOut(200);
        $(".tracks").fadeOut(5);
        $(".bgimagetransparent").fadeOut("slow");

})})
$(document).ready(function(){
	$(".limesa5").mouseleave(function(){
        $(".mesa5").fadeOut(10);
        $(".crt").fadeIn(10);
        $(".tracks").fadeIn(2);
        $(".bgimagetransparent").fadeIn(10);

})})


$(document).ready(function(){
	$(".lidoom").mouseenter(function(){
        $(".doom").fadeIn("slow");
        $(".crt").fadeOut(200);
        $(".tracks").fadeOut(5);
        $(".form").fadeOut(250);
        $(".bgimagetransparent").fadeOut("slow");

})})
$(document).ready(function(){
	$(".lidoom").mouseleave(function(){
        $(".doom").fadeOut(34);
        $(".crt").fadeIn(60)
        $(".tracks").fadeIn("slow");
        $(".bgimagetransparent").fadeIn(39);

})})

$(document).ready(function(){
	$(".liemail").mouseenter(function(){
        $(".email").fadeIn("slow");
        $(".crt").fadeOut(200);
        $(".tracks").fadeOut(5);
        $(".form").fadeOut(250);
        $(".bgimagetransparent").fadeOut("slow");

})})
$(document).ready(function(){
	$(".liemail").mouseleave(function(){
        $(".email").fadeOut(50);
         $(".crt").fadeIn(55)
         $(".tracks").fadeIn(250);
        $(".bgimagetransparent").fadeIn(50);

})})


$(document).ready(function(){
	$(".libio").mouseenter(function(){
        $(".bio").fadeIn("slow");
        $(".tracks").fadeOut(5);
        $(".bgimagetransparent").fadeOut(150);


})})
$(document).ready(function(){
	$(".libio").mouseleave(function(){
        $(".bio").fadeOut(50);
        $(".tracks").fadeIn(250);
        $(".bgimagetransparent").fadeIn(50);

})})



$(document).ready(function(){
    $(".liindex").mouseenter(function(){
         $(".tracks").fadeOut(5);
       
    //    $(".crt").fadeOut("slow");


})})

$(document).ready(function(){
    $(".liindex").mouseleave(function(){
         $(".tracks").fadeIn(250);
   //    $(".crt").fadeIn(50);

})})


$(document).ready(function(){
var audio = $("#mesa5audio")[0];
$(".limesa5").mouseenter(function() {
 $("#mesa5audio")[0].play();
  
})})

$(document).ready(function(){
var audio = $("#mesa5audio")[0];
$(".limesa5").mouseleave(function() {
  $("#mesa5audio")[0].pause();
  audio.currentTime ="0";


  
})})


$(document).ready(function(){
var audio = $("#frictionaudio")[0];
$(".lidoom").mouseenter(function() {
 $("#frictionaudio")[0].play();
  
})})

$(document).ready(function(){
var audio = $("#frictionaudio")[0];
$(".lidoom").mouseleave(function() {
  $("#frictionaudio")[0].pause();
  audio.currentTime ="0";

})})


$(document).ready(function(){
var audio = $("#lifebloodaudio")[0];
$(".liemail").mouseenter(function() {
 $("#lifebloodaudio")[0].play();
  
})})

$(document).ready(function(){
var audio = $("#lifebloodaudio")[0];
$(".liemail").mouseleave(function() {
  $("#lifebloodaudio")[0].pause();
	audio.currentTime ="0";

 })})



$(document).ready(function(){
var audio = $("#glossaudio")[0];
$(".libio").mouseenter(function() {
 $("#glossaudio")[0].play();
  
})})

$(document).ready(function(){
var audio = $("#glossaudio")[0];
$(".libio").mouseleave(function() {
  $("#glossaudio")[0].pause();
  audio.currentTime =0;
  
})})



$(document).ready(function(){
var audio = $("#indexaudio")[0];
$(".liindex").mouseenter(function() {
 $("#indexaudio")[0].play();
  
})})

$(document).ready(function(){
var audio = $("#indexaudio")[0];
$(".liindex").mouseleave(function() {
  $("#indexaudio")[0].pause();
  audio.currentTime =0;
  
})})


// Change background and music upon hover



	



 
//Functions tested through page refresh and interaction as well as development console


