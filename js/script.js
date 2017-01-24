$(document).ready(function(e) {
    
	 
   var owl1 = $(".gallery");
  owl1.owlCarousel({

      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1100,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [800,2], //2 items between 600 and 0
      itemsMobile : [599,1],// itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next1").click(function(){
    owl1.trigger('owl.next');
  })
  $(".prev1").click(function(){
    owl1.trigger('owl.prev');
  });
  



$(".tabs_btn li a").click(function(){
 
 $(".tabbing_details .tabs").addClass("hide");
 var rel =$(this).attr("rel");
 $("#" + rel).removeClass("hide");
 });
 
 
 $(".child_slider li a").click(function(){
 $(".child_slider li").removeClass("active");
 $(this).parent().addClass("active");
 
 $(".video_tabs_box .video_tabs").addClass("video_hide");
 var rel =$(this).attr("rel");
 $("#" + rel).removeClass("video_hide");
 });
 
 
 
 $(".menu-icon").click(function(){
 $(this).next().slideToggle(); 
 });
	  	

$('.fancybox').fancybox();

    $(".video_popup_fancybox").fancybox({
    fitToView : true,
    wrapCSS : 'popup_wrapp' // add a class selector to the fancybox wrap
  });
  
   $(".login_fancybox").fancybox({
    fitToView : true,
    wrapCSS : 'popup_wrapp2' // add a class selector to the fancybox wrap
  });
  
  
      $(".gallery_pop").fancybox({
                  'overlayShow': false,
                  'frameWidth': 780, // set the width
                  'frameHeight': 480, // set the height
				  'autoSize' : false,
                  'type': 'image', // tell the script to create an iframe
                   wrapCSS : 'popup_wrapp img_fixed' // add a class selector to the fancybox wrap
				   
				   
  });
  
  
  $(".right_details h3").click(function(){
	  
	 if($(this).next().is(":visible")){

		$(this).next().slideUp(); 
		
		$(this).parent().removeClass("active");
		
		
		 }
		 
		 else{
			 
			 $(".right_details h3").parent().removeClass("active");
			 
			$(".right_details h3").next().slideUp(); 
		    $(this).next().slideDown();	 
			$(this).parent().addClass("active");
			 
			 
			 }
	  
	  });
	  
	  
	  $(".disorder_points_accordain .quest").click(function(){
	  
	 if($(this).next().is(":visible")){

		$(this).next().slideUp(); 
		
		$(this).parent().removeClass("active");
		
		
		 }
		 
		 else{
			 
			 $(".disorder_points_accordain .quest").parent().removeClass("active");
			 
			$(".disorder_points_accordain .quest").next().slideUp(); 
		    $(this).next().slideDown();	 
			$(this).parent().addClass("active");
			 
			 
			 }
	  
	  });
	  
	  
	  
      $(".deatils_scroll").mCustomScrollbar();
		
	
		  
		  
		  $(".eveloution_accord .quest").click(function(){
	  
	    if($(this).next().is(":visible")){

		$(this).next().slideUp(); 
		
		$(this).parent().removeClass("active");
		
		
		 }
		 
		 else{
			 
			 $(".eveloution_accord .quest").parent().removeClass("active");
			 
			$(".eveloution_accord .quest").next().slideUp(); 
		    $(this).next().slideDown();	 
			$(this).parent().addClass("active");
			 
			 
			 }
	  
	  });
	  
	  
	  

	  
  			
	
});

