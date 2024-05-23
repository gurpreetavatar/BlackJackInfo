


// Accordians script

$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
});





// Sticky Header Script
		$(document).on("scroll",function(){
			if($(document).scrollTop()>550){ 
				$(".sticky-header").removeClass("sticky-hide").addClass("sticky-show");
				}
			else{
				$(".sticky-header").removeClass("sticky-show").addClass("sticky-hide");
				}
			});





// Recommendations Equal Height

/*$(document).ready(function() {
        var height = Math.max($(".recommendation").height(), $(".recommendation-left").height());
        $(".recommendation-left").height(height);
});*/

$(document).ready(function() {
        var height = Math.max($("ul.recommendation li").height(), $("ul.recommendation li .logo").height());
        $("ul.recommendation li .logo").height(height);
});



// Tab focus --------- //


jQuery(document).ready(function() {

	jQuery('li a').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');
		
		if(jQuery(e.target).is('.active')) {
			
		}else {
			// Open up the hidden content panel
			jQuery('.lessons  ' + currentAttrValue).addClass('active'); 
			
			var $anchor = $(this);
        $("body, html").animate({ 
      scrollTop: $('.tab-content').offset().top -59
	  
    }, 600);
	
		}
		
		e.preventDefault();
	});
});



// Active Class on Both tabs --------- //

jQuery('.blackjack-school-list li a').click(function (e) {     
    //get selected href
    var href = $(this).attr('href');
    
    // show tab for all tabs that match href
    jQuery('.blackjack-school-list li a[href="' + href + '"]').tab('show');
})




// UL Expand --------- //

jQuery('ul.expandible').each(function(){
    var $ul = $(this),
        $lis = $ul.find('li:gt(3)'),
        isExpanded = $ul.hasClass('expanded');
    $lis[isExpanded ? 'show' : 'hide']();
    
    if($lis.length > 0){
        $ul
            .append($('<li class="expand"><span>' + (isExpanded ? 'Hide' : 'Show more') + '</span></li>')
            .click(function(event){
                var isExpanded = $ul.hasClass('expanded');
                event.preventDefault();
                $(this).text(isExpanded ? 'Show more' : 'Hide');
                $ul.toggleClass('expanded');
                $lis.toggle("slow");
            }));
    }
});



// Image Resize --------- //
        $(".cover-img").each(function(){
    // Uncomment the following if you need to make this dynamic
	
    var refH = $(this).height();
    var refW = $(this).width();
    var refRatio = refW/refH;
    var imgH = $(this).children("img").height();
    var imgW = $(this).children("img").width();

    if ( (imgW/imgH) < refRatio ) { 
        $(this).addClass("portrait");
    } else {
        $(this).addClass("landscape");
    }
	
})

// Home Blog Summery Length --------- //
var txt= $('.blog-summery').text();
if(txt.length > 155)
    $('.blog-summery').text(txt.substring(0,150) + '...');	
	
	





