jQuery(document).ready(function ($) {
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() { 
        $(this).css('background-color','');
        $("#result").slideUp();
    });
});
