
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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
            label: 'Humedad relativa',
            data: [69.9, 70.4, 70.87],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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


