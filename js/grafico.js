var ctx = document.getElementById('myChart').getContext('2d');
var cir = document.getElementById('cir');

var lab =[];
var dt =[];
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{        
            backgroundColor: [
                'hsla(200, 100%, 50%, 0.8)',
                'hsla(200, 100%, 50%, 0.6)',
                'hsla(200, 100%, 50%, 0.4)',
                'hsla(200, 100%, 50%, 0.2)',
                'hsla(200, 100%, 50%, 0.05)'
            ],
            borderColor: [
                'hsla(200, 100%, 50%, 0.8)',
                'hsla(200, 100%, 50%, 0.6)',
                'hsla(200, 100%, 50%, 0.4)',
                'hsla(200, 100%, 50%, 0.2)',
                'hsla(200, 100%, 50%, 0.05)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins:{
            legend:{
                position: 'bottom',
            },
            tooltip:{
                callbacks:{
                    beforeTitle: function(context){
                            return '# de Repeticiones'
                    }
                }
            }
        }
    }
});

//Agregar los datos
function addData(chart) {
    var datos = document.getElementById('datos').value;
    //Datos obtenidos mediante el Input String
    var numeros = datos.split(',');
    //Ordenar los numeros ingresados
    var ordenado = numeros.sort();
    
    if(datos != ''){
        //Filtra los valores del array 
        var unicos =  Array.from(new Set(ordenado));
        for(i=0;i<unicos.length;i++){
            //Ingresa los datos a los Labels del grafico
            chart.data.labels.push(unicos[i]);
            lab.push(unicos[i]);
        }

        chart.data.datasets.forEach((dataset) => {
            var newData = [];
            //Contador
            var contador=0;
            //Array auxiliar
            var aux = ordenado[0];
            //Cantidad de Veces que se repite
            for(var i=0; i<ordenado.length+1; i++){
                if(aux == ordenado[i]){
                    contador ++;
                }else{
                    newData.push(contador)
                    contador = 1;
                    aux = ordenado[i];
                }
            }
            //Ingresa los datos a los DataSets del grafico
            dataset.data = newData
            //Envia los datos a los Tooltips del grafico
            for(var i=0; i<newData.length; i++){
                if(newData[i] == 1){
                    dt.push(newData[i] + ' vez')
                }else{
                    dt.push(newData[i] + ' veces')
                }
            }
        });
        
        chart.update();
        cir.classList.toggle('active');
    }else{
        chart.data.labels.push.value='';
    }
}

// Remover los datos
function removeData(chart) {
    for(var i=0; i<dt.length; i++){
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        console.clear();
        cir.classList.remove('active');
        chart.update();
    }
    dt.length=0;
    lab.length=0;
}
