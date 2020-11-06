var jsonData;
var tablaFunctions = (function(){
var data =  [
     {
         "IdEmpleado": "38300",
         "Nombre": "Anya Rivas",
         "Supervisor": "Michalina Zuniga",
         "Clases": "A01",
         "Departamento": "IT",
         "Subsidiaria": "Alpaca SAC"
     },
     {
         "IdEmpleado": "38301",
         "Nombre": "Saima Brown",
         "Supervisor": "Delores Bass",
         "Clases": "A01",
         "Departamento": "IT",
         "Subsidiaria": "NorthWind CO"
     },
     {
         "IdEmpleado": "38302",
         "Nombre": "Lexi Stanton",
         "Supervisor": "Jaye Joseph",
         "Clases": "A01",
         "Departamento": "IT",
         "Subsidiaria": "NorthWind CO"
     },
     {
         "IdEmpleado": "38303",
         "Nombre": "Avi Patel",
         "Supervisor": "River Schneider",
         "Clases": "A01",
         "Departamento": "IT",
         "Subsidiaria": "NorthWind CO"
     },
     {
         "IdEmpleado": "38304",
         "Nombre": "Bessie Walker",
         "Supervisor": "River Schneider",
         "Clases": "A01",
         "Departamento": "IT",
         "Subsidiaria": "NorthWind CO"
     },
     {
         "IdEmpleado": "38305",
         "Nombre": "Amy-Leigh Obama",
         "Supervisor": "River Schneider",
         "Clases": "A01",
         "Departamento": "IT",
         "Subsidiaria": "NorthWind CO"
     },
     {
         "IdEmpleado": "38306",
         "Nombre": "Eboni Bullock",
         "Supervisor": "River Schneider",
         "Clases": "A02",
         "Departamento": "IT",
         "Subsidiaria": "NorthWind CO"
     },
     {
         "IdEmpleado": "38307",
         "Nombre": "Hakim Morrison",
         "Supervisor": "River Schneider",
         "Clases": "A02",
         "Departamento": "Contabilidad",
         "Subsidiaria": "NorthWind CO"
     },
     {
         "IdEmpleado": "38308",
         "Nombre": "Komal Sanford",
         "Supervisor": "Jaye Joseph",
         "Clases": "A02",
         "Departamento": "Contabilidad",
         "Subsidiaria": "NorthWind CO"
     },
     {
         "IdEmpleado": "38309",
         "Nombre": "Cosmo Franks",
         "Supervisor": "Jaye Joseph",
         "Clases": "A02",
         "Departamento": "Contabilidad",
         "Subsidiaria": "NorthWind CO"
     },
     {
         "IdEmpleado": "38310",
         "Nombre": "Asha Calhoun",
         "Supervisor": "Jaye Joseph",
         "Clases": "A02",
         "Departamento": "Contabilidad",
         "Subsidiaria": "NorthWind CO"
     },
     {
         "IdEmpleado": "38311",
         "Nombre": "Frazer Dickerson",
         "Supervisor": "Jaye Joseph",
         "Clases": "A02",
         "Departamento": "Contabilidad",
         "Subsidiaria": "NorthWind CO"
     },
     {
         "IdEmpleado": "38312",
         "Nombre": "Lilith Lyon",
         "Supervisor": "Jaye Joseph",
         "Clases": "A02",
         "Departamento": "RRHH",
         "Subsidiaria": "Alpaca SAC"
     },
     {
         "IdEmpleado": "38313",
         "Nombre": "Arley Watson",
         "Supervisor": "Jaye Joseph",
         "Clases": "A02",
         "Departamento": "RRHH",
         "Subsidiaria": "Alpaca SAC"
     },
     {
         "IdEmpleado": "38314",
         "Nombre": "Karolina Ball",
         "Supervisor": "Jaye Joseph",
         "Clases": "A03",
         "Departamento": "RRHH",
         "Subsidiaria": "Alpaca SAC"
     },
     {
         "IdEmpleado": "38315",
         "Nombre": "Hawa Gaines",
         "Supervisor": "Michalina Zuniga",
         "Clases": "A03",
         "Departamento": "Seguridad",
         "Subsidiaria": "Alpaca SAC"
     },
     {
         "IdEmpleado": "38316",
         "Nombre": "Levi Parry",
         "Supervisor": "Michalina Zuniga",
         "Clases": "A04",
         "Departamento": "Seguridad",
         "Subsidiaria": "Umbrella"
     },
     {
         "IdEmpleado": "38317",
         "Nombre": "Fahmida Dodd",
         "Supervisor": "Michalina Zuniga",
         "Clases": "A04",
         "Departamento": "Seguridad",
         "Subsidiaria": "Umbrella"
     },
     {
         "IdEmpleado": "38318",
         "Nombre": "Bluebell Summers",
         "Supervisor": "Michalina Zuniga",
         "Clases": "A04",
         "Departamento": "Seguridad",
         "Subsidiaria": "Umbrella"
     },
     {
         "IdEmpleado": "38319",
         "Nombre": "Riya Moyer",
         "Supervisor": "Michalina Zuniga",
         "Clases": "A04",
         "Departamento": "Seguridad",
         "Subsidiaria": "Umbrella"
     },
     {
         "IdEmpleado": "38320",
         "Nombre": "Mikaeel Roche",
         "Supervisor": "Delores Bass",
         "Clases": "A05",
         "Departamento": "Ventas",
         "Subsidiaria": "Umbrella"
     },
     {
         "IdEmpleado": "38321",
         "Nombre": "Patryk Stout",
         "Supervisor": "Delores Bass",
         "Clases": "A05",
         "Departamento": "Ventas",
         "Subsidiaria": "ACME"
     },
     {
         "IdEmpleado": "38322",
         "Nombre": "Krishan Braun",
         "Supervisor": "Delores Bass",
         "Clases": "A05",
         "Departamento": "Ventas",
         "Subsidiaria": "ACME"
     },
     {
         "IdEmpleado": "38323",
         "Nombre": "Kenya Adkins",
         "Supervisor": "Delores Bass",
         "Clases": "A05",
         "Departamento": "Ventas",
         "Subsidiaria": "ACME"
     }
 ];

  



  function loadJSON(firstload) {  
    var table = document.getElementById("tablePreview");
   
    
    var jsonData = data;
    if (!firstload){
      $("#tablePreview").find("tr:gt(0)").remove();
      var filtrarPorTipo = $("#tipoBuscarList").children("option:selected").val();
      var inputFiltro =  $('#inputBuscar').val();
     
      jsonData = $.grep(data, function(v) {
       // return v.Supervisor == 'Delores Bass';
       if (filtrarPorTipo ==1){
        return v.Supervisor === inputFiltro;
       }
       if (filtrarPorTipo ==3){
        return v.Clases === inputFiltro;
       }
       if (filtrarPorTipo ==4){
        return v.Departamento === inputFiltro;
       }
       if (filtrarPorTipo ==5){
        return v.Subsidiaria === inputFiltro;
       }
      
      });
    }

    var categories = {},
    groupBy = "Supervisor";
    for (var i = 0; i < jsonData.length; i++) {
      if (!categories[jsonData[i][groupBy]])
           categories[jsonData[i][groupBy]] = [];
           categories[jsonData[i][groupBy]].push(jsonData[i])
    };
    
  
   
    var idx =0;
    
     //categoria que agrupa
      for (key in categories) {
      idx++;
          if (categories.hasOwnProperty(key)) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      cell1.setAttribute("rowspan", categories[key].length +1);
      cell1.innerHTML = key;
        //detalle
              if (categories[key].length){
                      for (var i = 0; i < categories[key].length; i++) {
                idx++
                    var row1 = table.insertRow(2);
                    var cell2 = row1.insertCell(0);
                    var cell3 = row1.insertCell(1);
                    var cell4 = row1.insertCell(2);
                    var cell5 = row1.insertCell(3);
                    var cell6 = row1.insertCell(4);
                    cell2.innerHTML=categories[key][i].IdEmpleado;
                    cell3.innerHTML=categories[key][i].Nombre;
                    cell4.innerHTML=categories[key][i].Clases;
                    cell5.innerHTML=categories[key][i].Departamento;
                    cell6.innerHTML=categories[key][i].Subsidiaria;
                      }
      
        }
    
      
    }
 
     }
 }


  function pdfGenerator(){
      var pdf = new jsPDF('l', 'pt', 'letter');
      source = $('#divEmpleados')[0];
      specialElementHandlers = {
          // element with id of "bypass" - jQuery style selector
          '#bypassme': function (element, renderer) {
              // true = "handled elsewhere, bypass text extraction"
              return true
          }
      };

      margins = {
          top: 50,
          bottom: 50,
          left: 20,
          width: 700
      };
      pdf.fromHTML(
      source, 
      margins.left, 
      margins.top, { 
          'width': margins.width, 
          'elementHandlers': specialElementHandlers
      },
  
      
      function (dispose) {
          pdf.save('EmpleadosExport.pdf');
      }, margins);
  
  }

  function excelGenerator(){
      $("#tablePreview").table2excel({
            exclude:".noExl",
            name:"HojaEmpleados",
            filename:"EmpleadosExport",//do not include extension
            fileext:".xls" // file extension
          });
        
  }

  function csvGenerator(){
      var csv = [];
      var rows = document.querySelectorAll("table tr");
      
      for (var i = 0; i < rows.length; i++) {
          var row = [], cols = rows[i].querySelectorAll("td, th");
          
          for (var j = 0; j < cols.length; j++) 
              row.push(cols[j].innerText);
          
          csv.push(row.join(","));        
      }
  
      // Download CSV file
      downloadCSV(csv.join("\n"), 'EmpleadosExport');
  }

  function downloadCSV(csv, filename) {
      var csvFile;
      var downloadLink;
  
      // CSV file
      csvFile = new Blob([csv], {type: "text/csv"});
  
      // Download link
      downloadLink = document.createElement("a");
  
      // File name
      downloadLink.download = filename;

      // Create a link to the file
      downloadLink.href = window.URL.createObjectURL(csvFile);

      // Hide download link
      downloadLink.style.display = "none";

      // Add the link to DOM
      document.body.appendChild(downloadLink);

      // Click download link
      downloadLink.click();
      
  }

  return {
      pdfGenerator:pdfGenerator,
      excelGenerator:excelGenerator,
      csvGenerator:csvGenerator,
      loadJSON:loadJSON
  }
})();