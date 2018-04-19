$(document).ready(function() {
  $("#jq1").click(function() {
    $("#test1").toggle();
  });
});

$(document).ready(function() {
  $("#jq2").click(function() {
    $("#test2").fadeToggle("slow");
  });
});

$(document).ready(function() {
  $("#jq3").click(function() {
    $("#test3").slideToggle("slow");
  });
});

// 必需的 params 参数定义形成动画的 CSS 属性。
//
// 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
//
// 可选的 callback 参数是动画完成后所执行的函数名称。

//当使用 animate() 时，必须使用 Camel 标记法书写所有的属性名，比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。
$(document).ready(function() {
  $("#jq4").click(function() {
    $("#test4").animate({
      fontSize: "+=10px", //jQuery animate() - 使用相对值
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});
// 可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
//
// 可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
//
// 因此，默认地，stop() 会清除在被选元素上指定的当前动画。
$(document).ready(function() {
  $("#jq5").click(function() {
    $("#test5").slideUp(5000);
    $("#test5").fadeOut(5000);
  });
  $("#stop").click(function() {
    $('#test5').stop();
  })
});

$(document).ready(function() {
  $("#jq6").click(function() {
    $("#test6").hide(1000, function() {
      alert('callback done');
    });
  });
});

$(document).ready(function() {
  $("#jq7").click(function() {
    $("#test7").css('color', 'red').slideUp('slow').slideDown('slow').fadeOut().slideDown(5000);
  });
});