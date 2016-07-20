
document.addEventListener("DOMContentLoaded" , function(e){
	var object0 = document.getElementById("onepage"); 
	var bowla1= document.getElementById("bowl-uno");
	var bowla2= document.getElementById("bowl-dos");

	var didScroll;
	var partial = window.innerHeight;

	bowla1.onclick = function(){
			object0.style.background="#DC3B42";
			bowla2.style.background="rgba(255,255,255,.5)";
			bowla1.style.background="white";
		//Direccionando scroll 	
			window.scrollBy(partial,0);
			scrollTo(partial,0);
	}

	bowla2.onclick=function(){
		object0.style.background="#13DF80";
		bowla1.style.background="rgba(255,255,255,.5)";
		bowla2.style.background="white";
		//Direccionando scroll 	
		window.scrollBy(0,partial-100);
		scrollTo(0,partial);
	}
	window.onscroll = function(e) {
		didScroll=true;
		//efecto parallax texto
		var s = window.scrollY;

		function parallaxFront(t){
			var elemento = document.getElementById("prueba");
			elemento.style.position="relative";
			elemento.style.top=-(s*t)+'px';
			var elemento2 = document.getElementById("prueba2");
			elemento2.style.position="relative";
			elemento2.style.top=-(s*t)+'px';

		}
		parallaxFront(.4);		

		//body transition
		object0.style.background="#13DF80";
		bowla1.style.background="rgba(255,255,255,.5)";
		bowla2.style.background="white";
		if(window.scrollY==0){
			object0.style.background="#DC3B42";
			bowla2.style.background="rgba(255,255,255,.5)";
			bowla1.style.background="white";
		}
	}

	setInterval(function(){
		var partial = window.innerHeight;
		if(didScroll){
			if(window.scrollY >0 && window.scrollY<partial-100){
				window.scrollBy(0,partial-100);
				scrollTo(0,partial);
				didScroll=false;
			}
			if( window.scrollY==partial-100){
				window.scrollBy(partial,0);
				scrollTo(partial,0);
				didScroll=false;
			}
		}

	},10)
	

});

