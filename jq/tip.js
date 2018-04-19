// $(document).ready(function() {
//   $("[href='#']").hover(function() {
//     $("a div").fadeIn("slow");
//   })
// })

function tipIn(a) {
  $(a).children().slideDown("slow")
}

function tipOut(a) {
  $(a).children().fadeOut("slow")
}