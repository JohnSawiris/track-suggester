$(document).ready(function() {
  $("#overlay-btn").click(function() { //to hide overlay on click
    $(".overlay").fadeOut(500);
  });//Click overlay-btn end

  $("#first-question").submit(function(event) {
    event.preventDefault();
    //below to check if an option is selected
    if ($("#q-1-input1").is(":checked") || $("#q-1-input2").is(":checked")) {
      $("#first-form").addClass("hide");
      $("#second-form").slideDown(800);;
    } else {
      $(".overlay").fadeIn(800); //display an overlay msg
    }
  });//Submit first-form end

  $("#second-form").submit(function(event) {
    event.preventDefault();
    if ($("#q-2-input1").is(":checked") || $("#q-2-input2").is(":checked")) {
      $(this).hide();
      $("#third-form").slideDown(800);;
    } else {
      $(".overlay").fadeIn(800);
    }
  });//Submit second-form end

  $("#third-form").submit(function(event) {
    event.preventDefault();
    if ($("#q-3-input1").is(":checked") || $("#q-3-input2").is(":checked")){
      $(this).hide();
      $("#fourth-form").slideDown(800);;
    } else {
      $(".overlay").fadeIn(800);
    }
  });//Submit third-form end

  $("#fourth-form").submit(function(event) {
    event.preventDefault();
    if ($("#q-4-input1").is(":checked") || $("#q-4-input2").is(":checked")) {
      $(this).hide();
      $("#fifth-form").slideDown(800);
    } else {
      $(".overlay").fadeIn(800);
    }
  });//Submit fourth-form end

  $("#fifth-form").submit(function(event) {
    event.preventDefault();
    if ($("#q-5-input1").is(":checked") || $("#q-5-input2").is(":checked")) {
      $(this).hide();
      $("#suggestions").css({ //add inline styles to display inline-flex
        opacity:0,
        display: 'inline-flex',
        margin: '5px'
      }).animate({opacity:1}, 700);
    } else {
      $(".overlay").fadeIn(800);
    }
  });//Submit fifth-form end
});//Ready end
