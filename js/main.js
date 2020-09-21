// NOTE - Acá van las gráficas


// SECTION - Gráficas Bryan

// ANCHOR - Gráfica de temperatura y humedad
new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'temperaturaBryan',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 20, value2: 30 },
    { year: '2009', value: 10, value2: 40 },
    { year: '2010', value: 5, value2: 50 },
    { year: '2011', value: 5, value2: 10 },
    { year: '2012', value: 20, value2: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value', 'value2'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['temperatura', 'humedad'],
  resize: true,
  lineColors: ['#3498db', '#2CB4AC'],
  lineWidth: 2,
  hideHover: true

});
  // ANCHOR - Gráfica de partículas

new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'particulasBryan',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 3000},
    { year: '2009', value: 4500},
    { year: '2010', value: 3500},
    { year: '2011', value: 3800},
    { year: '2012', value: 2500}
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Partículas por millón: '],
  resize: true,
  lineColors: ['#3498db', '#2CB4AC'],
  lineWidth: 2,
  hideHover: true

});


// SECTION - Gráficas Luis

// ANCHOR - Gráfica de temperatura y humedad


new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'temperaturaLuis',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 20, value2: 30 },
    { year: '2009', value: 10, value2: 3 },
    { year: '2010', value: 5, value2: 5 },
    { year: '2011', value: 5, value2: 10 },
    { year: '2012', value: 20, value2: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value', 'value2'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['temperatura', 'humedad'],
  resize: true,
  lineColors: ['#3498db', '#2CB4AC'],
  lineWidth: 2,
  hideHover: true

});

  // ANCHOR - Gráfica de partículas

new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'particulasLuis',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 3900},
    { year: '2009', value: 3100},
    { year: '2010', value: 2500},
    { year: '2011', value: 400},
    { year: '2012', value: 1500}
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value', 'value2'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Partículas por millón: '],
  resize: true,
  lineColors: ['#3498db', '#2CB4AC'],
  lineWidth: 2,
  hideHover: true
});