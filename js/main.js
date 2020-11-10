
// NOTE - Función scroll página
let btn = document.querySelector('.fBtn');
window.onscroll = () => {
  if (document.documentElement.scrollTop >= 100) {
    btn.style.display = 'inline';

  } else {
    btn.style.display = 'none';

  }
}

// NOTE - Acá van las gráficas

// ANCHOR - Gráfica humedad
var ctx = document.getElementById('Humedad');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Nivel del suelo', '1 metro', '2 metros'],
        datasets: [{
            label: 'Humedad relativa',
            data: [69.9, 70.4, 70.87],
            backgroundColor: [
                'rgba(46, 204, 113, 0.5)',
                'rgba(231, 76, 60,0.5)',
                'rgba(255, 206, 86, 0.5)'
            ],
            borderColor: [
                'rgba(46, 204, 113,1.0)',
                'rgba(231, 76, 60,1.0)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// ANCHOR - Gráfica Partículas
var ctx = document.getElementById('Particulas');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Nivel del suelo', '1 metro', '2 metros'],
        datasets: [{
            label: 'Partículas por millón',
            data: [3063.2, 2531, 2177.13],
            backgroundColor: [
                'rgba(41, 128, 185, 0.5)',
                'rgba(211, 84, 0, 0.5)',
                'rgba(142, 68, 173,0.5)'
            ],
            borderColor: [
                'rgba(41, 128, 185,1.0)',
                'rgba(211, 84, 0,1.0)',
                'rgba(142, 68, 173,1.0)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


