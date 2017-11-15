$(function() {
  // elements
  var $page = $('.page');

  $('.menu_toggle').on('click', function() {
    $page.toggleClass('shazam');
  });
  $('.content').on('click', function() {
    $page.removeClass('shazam');
  });

  // http://jsfiddle.net/dizel3d/1eamwt4e/
  // // handle links with @href started with '#' only
  // $(document).on('click', 'a[href^="#"]', function(e) {
  //   // target element id
  //   var id = $(this).attr('href');

  //   // target element
  //   var $id = $(id);
  //   if ($id.length === 0) {
  //     return;
  //   }

  //   // prevent standard hash navigation (avoid blinking in IE)
  //   e.preventDefault();

  //   // top position relative to the document
  //   var pos = $id.offset().top;

  //   // animated top scrolling
  //   $('body, html').animate({ scrollTop: pos });
  // });

  Chart.Bar("chart", {
    options: {
      maintainAspectRatio: true,
      title: {
        display: true,
        text: "List of Foods By Energy Required to Produce One Pound",
        fontSize: 18
      },
      scales: {
        yAxes: [{
          stacked: true,
          gridLines: {
            display: true,
            color: "rgba(211, 164, 36,0.2)"
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
    },
    data: {
      labels: ["Corn", "Milk", "Apples", "Eggs", "Chicken", "Cheese", "Pork", "Beef"],
      datasets: [{
        label: "Dataset #1",
        backgroundColor: "rgba(211, 164, 36,0.2)",
        borderColor: "rgba(211, 164, 36,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(211, 164, 36,0.4)",
        hoverBorderColor: "rgba(211, 164, 36,1)",
        data: [0.43, 0.75, 1.67, 4, 4.4, 6.75, 12.6, 31.5]
      }]
    }
  });

});