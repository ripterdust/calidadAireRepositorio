// Gráficas Bryan
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
    lineColors: ['#C14D9F', '#2CB4AC'],
    lineWidth: 2
  });


//   Gráficas Luis
new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'temperaturaLuis',
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
    lineColors: ['#C14D9F', '#2CB4AC'],
    lineWidth: 2
  });