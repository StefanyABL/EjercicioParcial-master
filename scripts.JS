var tabDate;

var aux=0;
var aux1=0;
var array=[];
var nombres=[];
var inclusion=[];
function showTable(){
                var nombre=document.getElementById("nombre").value;
                var departamento=document.getElementById("departamento").value;
                var edad= document.getElementById("age").value;
                var ingreso=parseInt(document.getElementById("ingresos").value);
                var pension=document.getElementById("pension").value;
                aux++;
                nombres.push(nombre);
                if(aux<=1){
                 tabDate=loadTable();
                }
                var body=document.createElement("tbody");
                var row=document.createElement("tr");
                var col=document.createElement("td");
                col.appendChild(document.createTextNode(nombre));
                col.style.backgroundColor="#88D32A";
                row.appendChild(col);
                col=document.createElement("td");
                col.appendChild(document.createTextNode(departamento));
                col.style.backgroundColor="#88D32A";
                row.appendChild(col);
                col=document.createElement("td");
                col.appendChild(document.createTextNode(edad));
                col.style.backgroundColor="#88D32A";
                row.appendChild(col);
                col=document.createElement("td");
                col.appendChild(document.createTextNode(ingreso));
                col.style.backgroundColor="#88D32A";
                row.appendChild(col);
                col=document.createElement("td");
                col.appendChild(document.createTextNode(pension));
                col.style.backgroundColor="#88D32A";
                row.appendChild(col);
                col=document.createElement("td");
                body.appendChild(row);
                tabDate.appendChild(body);
               document.getElementById("table-container").appendChild(tabDate);
            
               ingresocalifica(ingreso,pension);
               prueba(departamento,ingreso);
              
}

function ingresocalifica(ingreso,pension){
    var result=0;
   // if(pension==="option1"){
    if(ingreso<750000){
         result=(ingreso*5)/100;
        array.push(result);
    }else{
        result=(ingreso*10)/100;
        array.push(0);
    }
     
     /*var title =  "<p>Descuento salud "+ result+"</p>";
     document.getElementById("total").innerHTML = title;
    }else{
      var title =  "<p>Usted no tiene descuento por salud</p>";
     document.getElementById("total").innerHTML = title;
    }*/
//}
}
function prueba(departamento,ingreso){
    
    if(departamento==="boyaca" && ingreso<750000 ){
    var title =  "Esta dentro del programa";
    inclusion.push(title);
       }else{
           var title =  "No aprueba al programa";
           inclusion.push(title);
       }
}
var tabresult;
function showtable2(){
              
             if(aux<=1){
             tabresult=loadTableResultado();
             }
                var bodyy=document.createElement("tbody");
                var row=document.createElement("tr");
                var col=document.createElement("td");
                col.appendChild(document.createTextNode(nombres[aux1]));
                row.appendChild(col);
                col=document.createElement("td");
                col.appendChild(document.createTextNode(array[aux1]));
                row.appendChild(col);
                col=document.createElement("td");
                col.appendChild(document.createTextNode(inclusion[aux1]));
                row.appendChild(col);
                 aux1++;
                bodyy.appendChild(row);
                tabresult.appendChild(bodyy);
               document.getElementById("table2-container").appendChild(tabresult);
}

function loadTable(){
 var tab=document.createElement("table");
    tab.setAttribute("style","border:1px solid");
    var head=document.createElement("thead");
    var row=document.createElement("tr");
    var col=document.createElement("th");
    col.setAttribute("colspan","6");
    col.appendChild(document.createTextNode("Datos del Usuario"));
    col.style.backgroundColor="#66ff33" ;
    row.appendChild(col);
    head.appendChild(row);
    tab.appendChild(head);
    row=document.createElement("tr");
    col=document.createElement("th");
    col.appendChild(document.createTextNode("Nombre"));
    col.style.backgroundColor="#47A149";
    row.appendChild(col);
    col=document.createElement("th");
    col.appendChild(document.createTextNode("Departamento"));
    col.style.backgroundColor="#47A149";
    row.appendChild(col);
    col=document.createElement("th");
    col.appendChild(document.createTextNode("Edad"));
    col.style.backgroundColor="#47A149";
    row.appendChild(col);
    col=document.createElement("th");
    col.appendChild(document.createTextNode("ingresos"));
    col.style.backgroundColor="#47A149";
    row.appendChild(col);
    col=document.createElement("th");
    col.appendChild(document.createTextNode("pension"));
    col.style.backgroundColor="#47A149";
    row.appendChild(col);
    head.appendChild(row);
    tab.appendChild(head);
    return tab;
}
function loadTableResultado(){
 var tab=document.createElement("table");
    tab.setAttribute("style","border:1px solid");
    var head=document.createElement("thead");
    var row=document.createElement("tr");
    var col=document.createElement("th");
    col.setAttribute("colspan","6");
    col.appendChild(document.createTextNode("Resultado"));
    row.appendChild(col);
    head.appendChild(row);
    tab.appendChild(head);
    row=document.createElement("tr");
    col=document.createElement("th");
    col.appendChild(document.createTextNode("Nombre"));
    row.appendChild(col);
    col=document.createElement("th");
    col.appendChild(document.createTextNode("Descuento de ahorro"));
    row.appendChild(col);
    col=document.createElement("th");
    col.appendChild(document.createTextNode("Resultado"));
    row.appendChild(col);
    head.appendChild(row);
    tab.appendChild(head);
    return tab;
}
/*
if (nota != undefined) {	No es Undefined cuando se pulsa aceptar.
			alert("Introduce un numero valido");
		}
        } while (nota != undefined);	//Undefined es cuando se pulsa Cancelar.
        
        
          switch (resto) {
                case 0:
                    letra = "T";
                    break;
                case 1:
*/