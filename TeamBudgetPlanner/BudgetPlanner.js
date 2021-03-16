
var empObj =[];
function storeInLocal() {
    var empInfo=localStorage.setItem("empInfo",JSON.stringify(empObj))
   
    var obj1 = localStorage.getItem("empInfo");
    console.log(obj1)
    

    var arData=JSON.parse(obj1)
    console.log(arData)
}

function onFormSubmit(){
    //alert("Event generated...")
    var data = readFormData();
    empObj.push(data);
   
    
}

function readFormData() {
    var obj = {}    // empty object
    obj.name = document.getElementById("name").value;
    obj.project = document.getElementById("project").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj);
    return obj; 
}
function get()
{
    var arData = JSON.parse(localStorage.getItem("empInfo"))
    var table = document.getElementById("List")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length); 


    var cell1 = newRow.insertCell(0);          
    cell1.innerHTML=arData[0].name;                 

    var cell2 = newRow.insertCell(1);         
    cell2.innerHTML=arData[0].project; 
    
    var cell3 = newRow.insertCell(2);         
    cell3.innerHTML=arData[0].budget;
}

/*function resetData() {
document.getElementById("name").value="";
document.getElementById("age").value="";*/


