
$(document).ready(function(){  
    $("#acerca").click(function () {
       $("#parrafo_acerca").toggle("slow");
    });
});

$(document).ready(function(){
	$("#caracteristicas").click(function(){
	  $("#parrafo_caracteristicas").animate({
		height: 'toggle'
	  });
	});
  });

  $(document).ready(function(){
	$("button").hover(function(){
	  $(".parrafo").hide();
	});
  });
       

  
       
