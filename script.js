//02.CovertMarktoGrade() 
function convertMarkToGrade() {
//let scoreInput = document.getElementById("markInput").value;
let scoreInput = parseInt(document.getElementById("markInput").value);
if (typeof scoreInput === "string" || scoreInput === "" || isNaN(scoreInput)){ 
   //window.alert(typeof scoreInput);
    window.alert("Please input the number between 0 - 100:");

} else{
  
       if ((scoreInput < 0) || (scoreInput > 100)) {
         window.alert("Please input the number between 0 - 100:");
         document.getElementById("markInput").value ="";
         document.getElementById("markInput").focus();
       }
       else{
          if (scoreInput >= 90) {
              document.getElementById("result").innerHTML = "Grade: A";
          } else if (scoreInput >= 80) {
              document.getElementById("result").innerHTML = "Grade: B";
          } else if (scoreInput >= 70) {
              document.getElementById("result").innerHTML = "Grade: C";
          } else if (scoreInput >= 60) {    
              document.getElementById("result").innerHTML = "Grade: D";
          } else {
              document.getElementById("result").innerHTML = "Grade: F";
          }
          document.getElementById("markInput").value ="";
          document.getElementById("markInput").focus();
    }
  }
}

//04.Temperature conventure
//formula:  
//C = (F - 32) * 5 / 9
//F = (C * 9 / 5) + 32
//K = C + 273.15    
function tempToConv() {
const tempC = parseFloat(document.getElementById("tCels").value);
const tempF = parseFloat(document.getElementById("tFahr").value);
const tempK = parseFloat(document.getElementById("tKelv").value);

    if (tempC !==""){
        document.getElementById("tFahr").value = (tempC*9/5)+32;
        document.getElementById("tKelv").value = tempC + 273.15;
        
    }else if(tempF !== ""){
        document.getElementById("tKelv").value = ((tempF -32) *5 /9 )+ 273.15;
        document.getElementById("tCels").value = (tempF -32) *5 /9 ;
     }else {
        document.getElementById("tFahr").value = (tempK -273.15 ) *9/5 +32;
        document.getElementById("tCels").value = tempK -273.15 ;
     }

}

//using this function to confirm only one input is valid.
function tempCOnChange() {
document.getElementById("tFahr").value ="";
document.getElementById("tKelv").value ="";
}

function tempFOnChange() {
document.getElementById("tCels").value ="";
document.getElementById("tKelv").value ="";
}

function tempKOnChange() {
document.getElementById("tFahr").value ="";
document.getElementById("tCels").value ="";
}

//03.staff

function vStaff() {
    var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
    ];

    

    let table = document.createElement("table");
    table.border = "1px solid black";
    table.style.width  = "90%";
    table.style.margin = "0px 50px";
    


    let tbody = document.createElement("tbody");
    table.appendChild(tbody);


    const dataStaff = [...dataSet];
    for (let i=0; i<dataStaff.length; i++){
    tbody.insertRow(i);
      for (let j=0; j<dataStaff[i].length; j++){
        tbody.rows[i].insertCell(j);
        tbody.rows[i].cells[j].innerHTML = dataSet[i][j];
        }   
    }
    document.body.appendChild(table);
 
}   

function sortByName(order) {      
    var table = document.querySelector("table");
    var tbody = table.querySelector("tbody");
    var rows = Array.from(tbody.querySelectorAll("tr"));
    
    rows.sort((a, b) => {
        var nameA = a.cells[0].innerHTML.toLowerCase();
        var nameB = b.cells[0].innerHTML.toLowerCase();
        if (order === 'asc') {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });
    
    rows.forEach(row => tbody.appendChild(row));
}

function sortBySalary(order) {
    var table = document.querySelector("table");
    var tbody = table.querySelector("tbody");
    var rows = Array.from(tbody.querySelectorAll("tr")); 

    rows.sort((a, b) => {
        var salaryA = parseFloat(a.cells[5].innerHTML.replace(/[$,]/g, ''));
        var salaryB = parseFloat(b.cells[5].innerHTML.replace(/[$,]/g, ''));                
        if (order === 'asc') {
            return salaryA - salaryB;
        } else {
            return salaryB - salaryA;
        }

});  
    rows.forEach(row => tbody.appendChild(row));
} 

