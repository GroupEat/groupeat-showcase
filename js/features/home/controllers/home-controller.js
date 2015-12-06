/**
*  Defines the HomeController controller
*
*  @author  groupeat
*  @date    Dec 5, 2015
*
*/
'use strict';
var HomeController = function($scope) {

  function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;
    if(element_class != '.top-content') {
      element_class += '-container';
      scroll_to = $(element_class).offset().top - nav_height;
    }
    if($(window).scrollTop() != scroll_to) {
      $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
    }
  }


  jQuery(document).ready(function() {

    /*
    Navigation
    */
    $('a.scroll-link').on('click', function(e) {
      e.preventDefault();
      scroll_to($(this), 0);
    });

    /*
    Background slideshow
    */
    $('.top-content').backstretch("img/backgrounds/1.jpg");
    $('.how-it-works-container').backstretch("img/backgrounds/1.jpg");
    $('.call-to-action-container').backstretch("img/backgrounds/1.jpg");
    $('.testimonials-container').backstretch("img/backgrounds/1.jpg");

    $('#top-navbar-1').on('shown.bs.collapse', function(){
      $('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
      $('.top-content').backstretch("resize");
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function() {
      $('.testimonials-container').backstretch("resize");
    });

    /*
    Modals
    */
    $('.launch-modal').on('click', function(e){
      e.preventDefault();
      $( '#' + $(this).data('modal-id') ).modal();
    });

  });


  jQuery(window).load(function() {

    /*
    Loader
    */
    $(".loader-img").fadeOut();
    $(".loader").delay(1000).fadeOut("slow");

    /*
    Hidden images
    */
    $(".modal-body img, .testimonial-image img").attr("style", "width: auto !important; height: auto !important;");

  });


  $scope.$on('$destroy', function() {});
};

export default [
  '$scope',
  HomeController
];
