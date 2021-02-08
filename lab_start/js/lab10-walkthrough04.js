/* put your event code here */
$(function () {

	//	chaining	handlers

	$(".panel")

		.on("mousemove", function (e) {

			$("#message").html("x=" + e.pageX + "	y=" + e.pageY);

		})

		.on("mouseleave", function (e) {

			$("#message").html("goodbye!");

		})

		.on("click", function () {

			$("#message").html("stopped	move	reporting");

			//$("#message").html("You	clicked	in	the	panel");

			$(".panel").off("mousemove");

		});

});	 //done by vaidehi 
