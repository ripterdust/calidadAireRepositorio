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
}


// NOTE - Instanciando clases.
// Instanciando alumnos
const bryan = new Alumno('Bryan Arévalo', 201945176);
const luis = new Alumno('Luis Pinzón', 5213581);


// Instanciando estaciones
var linkBryan = 'https://api.thingspeak.com/channels/1147595/feeds.json?results=2';
const estacionBryan = new Estacion(linkBryan);    

// Creando las gráficas
// Actualizando las gráficas
// setInterval(function(){ 
//     estacionBryan.datosEstacion
//     console.log(datosGrafica)
// }, 1000);

