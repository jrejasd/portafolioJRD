//Se define el arreglo de tareas inicial
var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]

//con este bloque hago que aparezca y desaparezca el formulario de ingreso de tarea
let visible = false;
document.querySelector('#btnAgregar').addEventListener('click', function(){
    if(visible == false){
        document.querySelector('#formulario').style.display='block';
        visible = true;
    }else{
        document.querySelector('#formulario').style.display='none';
        visible = false;
    }
});

//con este bloque agrego la tarea al listado y se muestra en pantalla
document.querySelector('#btnAgregarTarea').addEventListener('click', function(){
   
    let tareaNueva = document.getElementById('nuevaTarea').value;
    if(tareaNueva != ''){
        eliminarTablaHTML();
        tareas.push({"tarea": tareaNueva});
        mostrarTabla();        
        
        document.getElementById('nuevaTarea').value='';
        
      }
    document.querySelector('#formulario').style.display='none';
    visible = false;
//    console.table(tareas);
});

//con este bloque se borra la tabla de la pantalla
function eliminarTablaHTML(){
    let tabla = document.getElementById('cuerpo-tabla');
    
    for(i=0;i<tareas.length;i++){
        tabla.deleteRow(-1);
    
    };
    
}

//muestro la tabla en pantalla sin mostrar la fila vacia
mostrarTabla();
document.getElementById('tabla-tareas').deleteRow(4);

//se muestra en pantalla las tareas que contenga en arreglo, se agrega boton finalizar con indice de fila para poder eleiminar
function mostrarTabla(){
    for(i=0; i<tareas.length;i++){
        let creaTr = document.createElement('tr');
        let tabla = document.getElementById('cuerpo-tabla');
        let fila = tabla.insertRow(i);
        let cel1 = fila.insertCell(0);
        let cel2 = fila.insertCell(1);
        cel1.innerHTML = tareas[i].tarea;
        let btnEliminar = document.createElement('button');
        btnEliminar.innerHTML = 'Finalizar';
        btnEliminar.setAttribute('onclick', "removerTarea("+i+")");
        btnEliminar.setAttribute('class' , 'btn btn-danger finalizar');
        btnEliminar.setAttribute('type' , 'button');
        cel2.appendChild(btnEliminar);
    }
}

//bloque que elimina la tarea especifica dependiendo del boton finalizar que se presione
document.querySelectorAll('.finalizar').forEach(boton => {
    boton.addEventListener('click', () => {
        let fila = boton.parentNode.parentNode;
        fila.remove();
        console.log(fila.rowIndex);

    });
});

//bloque que elimina de pantalla y del arreglo la tarea seleccionada para eliminar
function removerTarea(indice){
 
    eliminarTablaHTML();
    tareas.splice(indice,1);
    mostrarTabla();
    console.table(tareas);
}