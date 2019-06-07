$(document).ready(function() {

  $("#form").submit(function(event){

  var q1 = parseInt($("#q1").val());
  var q2 = parseInt($("#q2").val());
  var q3 = parseInt($("#q3").val());
  var q4 = parseInt($("#q4").val());
  var q5 = parseInt($("#q5").val());
  var q6 = parseInt($("#q6").val());

  event.preventDefault();

  var combine = function(q1, q2, q3, q4, q5, q6) {
      return q1 + q2 + q3 + q4 + q5 + q6;
}
    var result = combine(q1, q2, q3, q4, q5, q6);

    if (result < 5) {
      $("#Java").show();
      $("#C").hide();
      $("#Ruby").hide();
      $("#Python").hide();
      $("#Rust").hide();
    } else if (result >5 && result  <13) {
      $("#Java").show();
      $("#C").show();
      $("#Ruby").hide();
      $("#Python").hide();
      $("#Rust").hide();
    } else if (result >5 && result  <13) {
      $("#Java").show();
      $("#C").show();
      $("#Ruby").hide();
      $("#Python").hide();
      $("#Rust").hide();
    }

});
});
