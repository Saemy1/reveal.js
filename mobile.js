var pages = [];

Reveal.addEventListener( 'ready', function(event) {
	
	
	// console.log("Current Slide:" + event.indexh);
	
	 $('#nav a').each(function() {
	 	var hash  = this.href.split("#")[1];
	 	hash = hash.split('/')[1];	
	 	//console.log(hash);
	 	pages.push("/reveal.js/server/data/" + hash + ".html");
	 });
	 
	 for(var i = 1; i<pages.length;i++) {
	 	 if(event.indexh === i) {
	 	 	var scopedIndex = i;
	 	 	 $("#" + scopedIndex).load(pages[scopedIndex], function() {
	 	 	 	//console.log("loaded #"+scopedIndex + " > section");
	 	 	 	 $("#"+scopedIndex + " > section").addClass("present");
	 	 	 });
		 	
		 } else {
		 	 $("#"+i).load(pages[i]);
		 	 
		 }
	 	
		
	 }

	 
    Reveal.hideMenuButton();
    Reveal.hideCloseButton();
}, false );

Reveal.addEventListener( 'slidechanged', function( event ) {

   console.log("SLIDE CHANGE");
} );

/*
Reveal.addEventListener( 'overview', function() {
  Reveal.setState("overview");
  //Hide Menu-Button
  Reveal.hideMenuButton();
  //Hide Close
  Reveal.hideCloseButton();
  //Hide Controls
  Reveal.hideControls();
}, false );

Reveal.addEventListener( 'show', function() {
Reveal.setState("show");
  //Show Menu-Button
    Reveal.showMenuButton();
  //Hide Close
    Reveal.hideCloseButton();
  //Show Controls
	Reveal.showControls();
}, false );


Reveal.addEventListener( 'isolate', function(event) {
	Reveal.setState("isolate");
	
//	if($(event).data("state") === "isolate") {
//		slide.style.display = "block";
//	}
}, false );

*/
