// Clases
// FIXME - Modularizar cada clase para no tener problema
class Alumno{
    constructor(nombre, carnet){
        this.nombre = nombre;
        this.carnet = carnet;
    }

    get datos(){
        return({
            nombre: this.nombre,
            carnet: this.carnet
        });
    }
}
let datosGrafica = [];
class Estacion{
    constructor(apiLink){
        this.__link = apiLink;

    }

    get datosEstacion(){
        fetch(this.__link)
            .then(res => res.json())
            .catch(err => console.log(err))
            .then(data => { 
                datosGrafica.push(data.feeds[0].field1);
            });
    }
    get nuevoDato(){
        fetch(this.__link)
            .then(res => res.json())
            .catch(err => console.log(err))
            .then(data => { 
                return(data.feeds[0].field1);
            });
    }
}


// NOTE - Instanciando clases.
// Instanciando alumnos
const bryan = new Alumno('Bryan Arévalo', 201945176);
const luis = new Alumno('Luis Pinzón', 5213581);

// Instanciando estaciones
var linkBryan = 'https://api.thingspeak.com/channels/1147595/feeds.json?results=2';
const estacionBryan = new Estacion(linkBryan);    

// Creando las gráficas
var ctx = document.getElementById('myChart');
var label = [];
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: 'Humedad del aire',
            data: datosGrafica,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 10
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


// Actualizando las gráficas
function addData(chart, nData) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(nData);
    });
    chart.data.labels.push(contador);
    chart.update();
}

let contador = 1;
setInterval(function(){ ;
    
    addData(myChart, estacionBryan.datosEstacion);
    console.log('object')
    contador += .5;
}, 5000);

