var rndColor = Math.floor(Math.random()*16777215).toString(16)

$(document).ready(function() {
    for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            var square = $("<div class='square'></div>");
            square.appendTo('#container');
		
		$( ".square" ).on('mouseover',function() {
  				$(this).css('background-color', rndColor);
			});
            
        }
    }
});


