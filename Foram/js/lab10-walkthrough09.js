// $(function()	{
//     $("#consume").click(function()	{
//                                 var	url	=				
//     "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";
//     $.get(url,	function	(data,	status)	{
//                                                                                         var	list	=	"";
//                                                                                         //	loop	through	JSON	data	and	add	each	city	to	list
//                                                                                         for	(var	i=0;	i	<	data.length;	i++)	{
//                                                                                                         list	+=	data[i].name	+	"<br>";
//                                                                                         }
//     $("#results").html(list);
//                                                                             });
//     });		
//     });

//     if	(status	==	"success")	{
//         var	list	=	"";
//         for	(var	i=0;	i	<	data.length;	i++)	{
//                         list	+=	data[i].name	+	"<br>";
//         }
//         $("#results").html(list);
// }

$("#consume").click(function()	{
    var	url	=	
"http://www.randyconnolly.com/funwebdev/services/travel/cities.php";
    $("#results").html("<ul></ul>");
    $.get(url,	function	(data,	status)	{
                                    $.each(data,	function(index,value)	{
                                                    var	li	=	$('<li/>').html(value.name);
                                                    li.appendTo("div#results	ul");																
                                    });																
                    }
    });
});