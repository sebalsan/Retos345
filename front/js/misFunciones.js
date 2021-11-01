////////////////////////////Category/////////////////////////////

function autoInicioCategory(){
    console.log("se esta ejecutando category")
    $.ajax({
        url:"http://150.230.75.125:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategory(respuesta); 
        }
    })
}

function pintarRespuestaCategory(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='actualizarInfoCategory("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCategory("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInfoCategory(){
    let data = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
    };
    $.ajax({
        url:"http://150.230.75.125:8080/api/Category/save",
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(data),
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInfoCategory(idElemento){
    let myData={
        id:idElemento,
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.75.125:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Cname").val("");
            $("#Cdescription").val("");
            autoInicioCategory();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarCategory(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.75.125:8080/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioCategory();
            alert("Se ha eliminado correctamente")
        }
    });
}


////////////////////////////Ortopedic/////////////////////////////

function autoInicioOrtopedic(){
    console.log("se esta ejecutando ortopedic")
    $.ajax({
        url:"http://150.230.75.125:8080/api/Ortopedic/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaOrtopedic(respuesta); 
        }
    })
}

function pintarRespuestaOrtopedic(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='actualizarInfoOrtopedic("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarOrtopedic("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInfoOrtopedic(){
    let data = {
        name:$("#Oname").val(),
        brand:$("#Obrand").val(),
        year:$("#Oyear").val(),
        description:$("#Odescription").val(),
    };
    $.ajax({
        url:"http://150.230.75.125:8080/api/Ortopedic/save",
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(data),
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInfoOrtopedic(idElemento){
    let myData={
        id:idElemento,
        name:$("#Oname").val(),
        brand:$("#Obrand").val(),
        year:$("#Oyear").val(),
        description:$("#Odescription").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.75.125:8080/api/Ortopedic/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Oname").val("");
            $("#Obrand").val("");
            $("#Oyear").val("");
            $("#Odescription").val("");
            autoInicioOrtopedic();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarOrtopedic(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.75.125:8080/api/Ortopedic/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioOrtopedic();
            alert("Se ha eliminado correctamente")
        }
    });
}


////////////////////////////Client/////////////////////////////

function autoInicioClient() {
    console.log("se esta ejecutando client")
    $.ajax({
        url: "http://150.230.75.125:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaClient(respuesta);
        }
    })
}

function pintarRespuestaClient(respuesta) {
    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "<td> <button onclick='actualizarInfoClient("+respuesta[i].idClient+")'>Actualizar</button>";
        myTable += "<td> <button onclick='borrarInfoClient("+respuesta[i].idClient+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado3").html(myTable);
}

function guardarInfoClient() {
    let data = {
        email: $("#Clemail").val(),
        password: $("#Clpassword").val(),
        name: $("#Clname").val(),
        age: $("#Clage").val(),
    };
    console.log(data);
    $.ajax({
        url: "http://150.230.75.125:8080/api/Client/save",
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(data),
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInfoClient(idElemento) {
    let myData = {
        idClient: idElemento,
        email: $("#Clemail").val(),
        password: $("#Clpassword").val(),
        name: $("#Clname").val(),
        age: $("#Clage").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://150.230.75.125:8080/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idClient").val("");
            $("#Clemail").val("");
            $("#Clpassword").val("");
            $("#Clname").val("");
            $("#Clage").val("");
            autoInicioClient();
            alert("Se ha actualizado correctamente, recuerde que el email no es modificable")
        }
    });
}

function borrarInfoClient(idElemento) {
    let myData = {
        idClient: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://150.230.75.125:8080/api/Client/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            autoInicioClient();
            alert("Se ha eliminado correctamente")
        }
    });
}


////////////////////////////Message/////////////////////////////

function autoInicioMessage() {
    console.log("se esta ejecutando message")
    $.ajax({
        url: "http://150.230.75.125:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaMessage(respuesta);
        }
    })
}

function pintarRespuestaMessage(respuesta) {
    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "<td> <button onclick='actualizarInfoMessage("+respuesta[i].idMessage+")'>Actualizar</button>";
        myTable += "<td> <button onclick='borrarInfoMessage("+respuesta[i].idMessage+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado4").html(myTable);
}

function guardarInfoMessage() {
    let data = {
        messageText: $("#MmessageText").val(),
    };
    console.log(data);
    let dataToSend = JSON.stringify(data);
    $.ajax({
        url: "http://150.230.75.125:8080/api/Message/save",
        type: 'POST',
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            alert("Se guardo correctamente");
            window.location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInfoMessage(idElemento) {
    let myData = {
        idMessage: idElemento,
        messageText: $("#MmessageText").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://150.230.75.125:8080/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idMessage").val("");
            $("#MmessageText").val("");
            autoInicioMessage();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarInfoMessage(idElemento) {
    let myData = {
        idMessage: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://150.230.75.125:8080/api/Message/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            autoInicioMessage();
            alert("Se ha eliminado correctamente")
        }
    });
}


////////////////////////////Reservation/////////////////////////////

function autoInicioReservation() {
    console.log("se esta ejecutando Reservation")
    $.ajax({
        url: "http://150.230.75.125:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaReservation(respuesta);
        }
    })
}

function pintarRespuestaReservation(respuesta) {
    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta[i].status + "</td>";
        myTable += "<td> <button onclick='actualizarInfoReservation("+respuesta[i].idReservation+")'>Actualizar</button>";
        myTable += "<td> <button onclick='borrarInfoReservation("+respuesta[i].idReservation+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado5").html(myTable);
}

function guardarInfoReservation() {
    let data = {
        startDate: $("#RstartDate").val(),
        devolutionDate: $("#RdevolutionDate").val(),
    };
    console.log(data);
    let dataToSend = JSON.stringify(data);
    $.ajax({
        url: "http://150.230.75.125:8080/api/Reservation/save",
        type: 'POST',
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (response) {
            console.log(response);
            alert("Se guardo correctamente");
            window.location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInfoReservation(idElemento) {
    let myData = {
        idReservation: idElemento,
        startDate: $("#RstartDate").val(),
        devolutionDate: $("#RdevolutionDate").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://150.230.75.125:8080/api/Reservation/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idReservation").val("");
            $("#RstartDate").val("");
            $("#RdevolutionDate").val("");
            autoInicioReservation();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarInfoReservation(idElemento) {
    let myData = {
        idReservation: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://150.230.75.125:8080/api/Reservation/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            autoInicioReservation();
            alert("Se ha eliminado correctamente")
        }
    });
}


////////////////////////////Score/////////////////////////////

function autoInicioScore() {
    console.log("se esta ejecutando Score")
    $.ajax({
        url: "http://150.230.75.125:8080/api/Score/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaScore(respuesta);
        }
    })
}

function pintarRespuestaScore(respuesta) {
    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "<td>" + respuesta[i].stars + "</td>";
        myTable += "<td> <button onclick='actualizarInfoScore("+respuesta[i].idScore+")'>Actualizar</button>";
        myTable += "<td> <button onclick='borrarInfoScore("+respuesta[i].idScore+")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado6").html(myTable);
}

function guardarInfoScore() {
    let data = {
        messageText: $("#SmessageText").val(),
        stars: $("#Sstars").val(),
    };
    console.log(data);
    let dataToSend = JSON.stringify(data);
    $.ajax({
        url: "http://150.230.75.125:8080/api/Score/save",
        type: 'POST',
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (response) {
            console.log(response);
            alert("Se guardo correctamente");
            window.location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInfoScore(idElemento) {
    let myData = {
        idScore: idElemento,
        messageText: $("#SmessageText").val(),
        stars: $("#Sstars").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://150.230.75.125:8080/api/Score/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idScore").val("");
            $("#SmessageText").val("");
            $("#Sstars").val("");
            autoInicioScore();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarInfoScore(idElemento) {
    let myData = {
        idScore: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://150.230.75.125:8080/api/Score/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            autoInicioScore();
            alert("Se ha eliminado correctamente")
        }
    });
}


////////////////////////////Reports/////////////////////////////

function traerReporteDate(){
    var fechaInicio = document.getElementById("RtstarDate").value;
    var fechaCierre = document.getElementById("RtdevolutionDate").value;
    $.ajax({
        url:"http://150.230.75.125:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDate(respuesta);
        }
    });
}

function pintarRespuestaDate(respuesta){
    let myTable="<table>";
    myTable+="<tr>";
    for(i=0;i<respuesta.length;i++){
    myTable+="<th>total</th>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoDate").html(myTable);
}

function traerReporteStatus(){
    $.ajax({
        url:"http://150.230.75.125:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){
    let myTable="<table>";
    myTable+="<tr>";
        myTable+="<th>completadas</th>";
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<th>canceladas</th>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}

function traerReporteClientes(){
    $.ajax({
        url:"http://150.230.75.125:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){
    let myTable="<table>";
    myTable+="<tr>";
    for(i=0;i<respuesta.length;i++){
    myTable+="<th>total</th>";
        myTable+="<td>"+respuesta[i].total+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td>"+respuesta[i].client.email+"</td>";
        myTable+="<td>"+respuesta[i].client.age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClientes").html(myTable);
}