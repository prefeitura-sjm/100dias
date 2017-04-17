google.charts.load('current', {'packages':['corechart', 'bar']});
     google.charts.setOnLoadCallback(drawChart);
     google.charts.setOnLoadCallback(drawChart2);
     function drawChart() {
     var data = google.visualization.arrayToDataTable([
        ['Ano', 'Atendimentos', { role: 'style' }],
        ['2016 - PAM Meriti', 50, 'red'],
        ['100 Dias de 2017 - PAM Meriti', 800, 'blue'],
        ['2016 - PAM Éden', 25, 'red'],
        ['100 Dias de 2017 - PAM Éden', 400, 'blue']
     ]);
     var options = {'title':'Aumento da Capacidade de Atendimentos',
                    legend: { position: 'none'},
                    isStacked: false,
                    animation: {
                      duration: 1000,
                      easing: 'in',
                      startup: true
                    }
                  };
     var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));
      chart.draw(data, options);
  }
  function drawChart2() {
  var data = google.visualization.arrayToDataTable([
     ['Mês', 'Atendimentos', { role: 'style' }],
     ['Dezembro/16', 150, 'red'],
     ['Janeiro/17', 290, 'blue'],
     ['Fevereiro/17', 400, 'blue'],
     ['Março/17', 450, 'blue']
  ]);
  var options = {'title':'Nova Central de Ambulância Aumenta o Número de Atendimentos',
                 legend: { position: 'none'},
                 isStacked: false,
                 animation: {
                   duration: 1000,
                   easing: 'in',
                   startup: true
                 }
               };
  var chart2 = new google.visualization.ColumnChart(
     document.getElementById('chart_div_2'));
   chart2.draw(data, options);
}
var inView = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#charts')) {
        if (inView) { return; }
        inView = true;
        drawChart();
        drawChart2();
    } else {
        inView = false;
    }
});
