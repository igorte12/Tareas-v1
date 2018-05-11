window.onload = function () {
    var tareas = [
        // {
        //     nombre: "Tomas",
        //     tarea: "Limpiar el coche",
        // }, {
        //     nombre: "Luis",
        //     tarea: "Sacar al perro"
        // }
    ];
    function cargarTareas(tareas) {
        document.getElementById("tabla").innerHTML=""; 
        for (var indice in tareas) {
            var fila = `
    <tr>
    <td>[id]</td>
    <td>[nombre]</td>
    <td>[tarea]</td>
    </tr>
    `;
            fila = fila.replace("[id]", indice)
            fila = fila.replace("[nombre]", tareas[indice].nombre);
            fila = fila.replace("[tarea]",tareas[indice].tarea);
            document.getElementById("tabla").innerHTML += fila;

        }

    }
    cargarTareas(tareas);
    this.document.getElementById("enviar").onclick = function (event) {
        event.preventDefault();
        // alert("hola");
        var nomb = document.getElementById("nombre").value;
        var tar = document.getElementById("tarea").value;
       tareas.push({nombre:nomb, tarea:tar});
       cargarTareas(tareas);

        // console.log(nombre+""+tarea)
    }











}






