$(document).ready(function() {
	// Add click event listener to the download button
	$('#download-button').click(function() {
	  // Create a new box element with the April Fools message
	  var box = $('<div>').addClass('box').text('April Fools!');
  
	  // Append the box element to the body
	  $('body').append(box);
	});
  });
  