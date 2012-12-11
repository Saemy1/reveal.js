var pages = [];

Reveal.addEventListener( 'ready', function(event) {
	 $('#nav a').each(function() {
	 	var hash  = this.href.split("#")[1];
	 	hash = hash.replace('overflow/','');
	 	hash = hash.split('/')[1];	
	 	pages.push("/reveal.js/server/data/" + hash + ".html");
	 });
	 
	 //Pages laden
	 for(var i = 0; i<pages.length;i++) {
		 $("#"+(i+1)).load(pages[i]);
	 }

    Reveal.hideMenuButton();
    Reveal.hideCloseButton();
}, false );

Reveal.addEventListener( 'slidechanged', function( event ) {
   console.log("SLIDE CHANGE");
} );
