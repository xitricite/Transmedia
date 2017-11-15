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
        text: "Facts",
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
      labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
      datasets: [
        {
          label: "Number of Seaweed Plants",
          backgroundColor: "rgba(211, 164, 36,0.2)",
          borderColor: "rgba(211, 164, 36,1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(211, 164, 36,0.4)",
          hoverBorderColor: "rgba(211, 164, 36,1)",
          data: [6750, 300, 167, 400, 410, 375, 216, 315],
        },
        {
          label: "Number",
          backgroundColor: "rgba(211, 164, 36,0.2)",
          borderColor: "rgba(211, 164, 36,1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(77, 144, 254,0.4)",
          hoverBorderColor: "rgba(77, 144, 254,1)",
          data: [670, 30, 17, 40, 41, 35, 26, 35],
        }
      ]
    }
  });

});