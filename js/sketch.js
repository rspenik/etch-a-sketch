var cellWidth = 20;

$(document).ready(function() {
	addDivs(30);
	
	/*$('.tile').mouseleave(function() {
		$(this).css("background-color", "#fff");
	});*/
	$('#reset').click(function() {
		resetDivs();
	});

	$(document).on('mouseenter', '.tile', function() {
		$(this).css("background-color", "#000");
	});
});

function addDivs(num) {
	var tempWidth = cellWidth * (num);
	console.log(tempWidth);
	$("#wrapper").width(String(tempWidth));
	$("#wrapper").height(String(tempWidth));
	$("#wrapper").css("border", "2px solid #000");
	$("#wrapper").css("font-size", "0px");
	$("#wrapper").css("margin-left", "auto");
	$("#wrapper").css("margin-right", "auto");
	for (var i = 0; i < num; i++) {
		for (var j = 0; j < num; j++) {
			console.log("Inserted div " + i + ", " + j);
			$('#wrapper').append(makeDiv());
		}
	}
}

function makeDiv() {
	$d = $('<div></div>');
	$d.height(String(cellWidth));
	$d.width(String(cellWidth));
	$d.css("display", "inline-block");
	$d.css("background-color", "#fff");
	$d.addClass('tile');

	return $d;
}

function resetDivs() {
	var newSize = prompt("How wide do you want the drawing area to be?");
	$("#wrapper").empty();
	addDivs(newSize);
}