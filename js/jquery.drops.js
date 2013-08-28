
(function($) {
    "use strict";

//***********************************************
// Dropdown Menus
//***********************************************
shredit.dropDown = function(e) {
    var $el = e.parent();
    var $dropdown = $('.dropdown', $el);
    var $text = $('input[type="text"]', $el);
    
    if($($el).hasClass('active')){//If is currently active, hide it
        $el.removeClass('active');
        $('.dropdown', $el).removeClass('active');
        return false;
    }
    else if($('.dropdown').hasClass('active')){
        $('.dropdown').each(function(i){
            $(this).removeClass('active');
            $(this).parent().removeClass('active');
        });
    }     
    
    $('.dropdown').removeClass('active');//remove active states from currently open dropdowns
    $el.addClass('active');
    $('.dropdown', $el).addClass('active');
    $text.focus();
    $('#wrapper').unbind('click').bind('click', shredit.closeDropDown);            
    $dropdown.click(function(e){
        e.stopPropagation();
    }); 
};
shredit.closeDropDown = function() {
    $('.dropdown').each(function(i) {
        $(this).removeClass('active');
        $(this).parent().removeClass('active');
    });
};

//Dropdown links
$('.dropdown').each(function(i){
    var $el = $(this).parent('li');
    $('> a', $el).click(function(e){
        var e = $(this);
        shredit.dropDown(e);
        return false;
    });
});

})(jQuery);