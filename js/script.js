$( document ).ready(function() {

	$(".tile").click(function(e){

	    var location = $(this).attr("data-id")

	    window.location.href = location;

	    return false;

	}); 


});