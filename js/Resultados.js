
/*================== FUNCIÓN RESULTADOS ==================*/
function ingreso() {
  
  var datos = document.getElementById('datos').value;
  var valoresnoAceptados = /^[aA-zZ]+$/;
  /*================== Datos Iguales a '' ==================*/
  if(datos == '' || datos ==" "  || datos == '.'){
    Swal.fire({
      heightAuto: false,
      icon: 'error',
      title: 'Oops...',
      text: 'No se han ingresado los datos',
      hideClass: {
        popup: '',                   
      }
    })
    return limpiar()
  } 

  /*================== Datos Iguales a A-Z ==================*/
  else if(datos.match(valoresnoAceptados)){
    Swal.fire({
      heightAuto: false,
      icon: 'error',
      title: 'Oops...',
      text: 'Tipo de dato no admitido',
      hideClass: {
        popup: '',                   
      }
    })
    return limpiar()  
  }
  else if(datos.match(' ')){
    Swal.fire({
      heightAuto: false,
      icon: 'error',
      title: 'Oops...',
      text: 'Debe Ingresar los datos sin Espacios',
      hideClass: {
        popup: '',                   
      }
    })
    return limpiar()  
  }/*  */ 
  else if(datos.match('\n')){
    Swal.fire({
      heightAuto: false,
      icon: 'error',
      title: 'Oops...',
      text: 'Debe Ingresar los datos sin saltos de línea',
      hideClass: {
        popup: '',                   
      }
    })
    return limpiar()  
  }
  /*================== Datos Numéricos ==================*/
  else{
    numeros = datos.split(',');

    /*================== MUESTRA ==================*/
    document.getElementById("muestra").value=(numeros.length);

    /*================== MEDIA ==================*/
    var suma=0;
    for(var i=0;i<numeros.length;i++){
        suma+=parseInt(numeros[i]);
    }
    document.getElementById("media").value=(suma/numeros.length).toFixed(2);
    
    /*================== MEDIANA ==================*/
    var orden =  numeros.sort((x,y) => x - y);
    var posicion = Math.floor(orden.length / 2);
    var mediana = orden.length % 2 == 1 ? parseInt(orden[posicion]) : (parseInt(orden[posicion - 1]) + parseInt(orden[posicion]))/2 ;
    document.getElementById("mediana").value=mediana;

    /*================== DATOS MIN - MAX ==================*/
    document.getElementById("dato-min").value=orden[0];
    document.getElementById("dato-max").value=orden[orden.length - 1];
    
    /*================== MODA ==================*/
    var numeros = Array.from(datos.split(','));
    const achaMaior = (counter) => Math.max.apply(null, counter)
    const ordenacao = (a, b) => a - b
    const ordenar = (arr, ordenacao) => arr.sort(ordenacao)
    const mapear = (name) => {
      return {count: 1, name: name}
    }
    const reduzir = (a, b) => {
      a[b.name] = (a[b.name] || 0) + b.count
      return a
    }
    const mapearParaArray = (contagem) => {
      const counter = []
      Object.keys(contagem).filter((a) => {
        counter.push(contagem[a])
      })
      return counter
    }
    const filtraModa = (contagem, MAX) => Object.keys(contagem).filter((a) => {
      return (contagem[a] === MAX) ? contagem[a] : null
    })
    
    function moda(arr) {
      const ordenado =  ordenar(arr, ordenacao)
      let contagem = ordenado.map(mapear).reduce(reduzir, {}) 
      const counter = mapearParaArray(contagem)
      const MAX = achaMaior(counter) 
      return filtraModa(contagem, MAX)
    }
    document.getElementById("moda").value= moda(numeros)

    /*================== Media Geometrica ==================*/
    var mg = numeros.reduce((p,c)=>p*c);
    console.log("La media Geometrica es: " + Math.pow(mg, 1.0/numeros.length).toFixed(2));
  }
}

/*================== FUNCIÓN LIMPIAR CAMPOS ==================*/
function limpiar(){
  document.getElementById('datos').value="";
  document.getElementById('media').value="";
  document.getElementById('mediana').value="";
  document.getElementById('moda').value="";
  document.getElementById('muestra').value="";
  document.getElementById("dato-min").value="";
  document.getElementById("dato-max").value="";
  console.clear();
}
//25,67,88,66,25,3,10,58,25,3,3,10,58,64,10


