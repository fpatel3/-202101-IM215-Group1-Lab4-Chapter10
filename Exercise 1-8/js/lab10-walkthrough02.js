/* try the different selection calls here */
var	msg	=	$('#msgArea');
msg.val("here	is	some	new	text");

// $('#first').html("new	Title"); // replaced the message area with new title 

$('#msgArea').val("My	class	is	"	+	$('#msgArea').attr("class") ); // it replaced your message will show up here with the class name.

// var	buttons	=	$('button');
// buttons.css('background-color',	'red');// changed the button colour to red.

var	temp	=	$('body');
temp.css("background-color","ivory"); // changed the button colour to ivory.


$('.center-icons').addClass('selected'); // it changes the background colour of the the center-icons

