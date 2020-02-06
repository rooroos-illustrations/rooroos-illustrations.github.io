// Run after the HTML document has finished loading
document.addEventListener("DOMContentLoaded", function() {
  // Get our lazy-loaded images
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
	console.log(lazyImages);
  // Do this only if IntersectionObserver is supported
		if ("IntersectionObserver" in window) {
			console.log("inwinnd");
		  // Create new observer object
		  let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
		      // Loop through IntersectionObserverEntry objects
		      entries.forEach(function(entry) {
		        // Do these if the target intersects with the root
		        if (entry.isIntersecting) {
		          let lazyImage = entry.target;
		          lazyImage.src = lazyImage.dataset.src;
		          lazyImage.classList.remove("lazy");
		          lazyImageObserver.unobserve(lazyImage);
		        }
		      });
		  });

		  // Loop through and observe each image
		  lazyImages.forEach(function(lazyImage) {
		    lazyImageObserver.observe(lazyImage);
		  });
		}else {
			function backup (item){
				item.src= item.dataset.src;
				item.classList.remove("lazy");
			}
			lazyImages.forEach(backup);
		}

		console.log('ev list');
});
