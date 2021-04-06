let fs = require("fs");
let obj = require("readline-sync");
let fname = obj.question("Please Enter your First Name: ");
console.log("Entered First Name: " +fname);
debugger;

let lname = obj.question("Please Enter your Last Name: ");
console.log("Entered Last Name: " +lname);
let gender = obj.question("Please Enter your Gender: ");
console.log("Entered Gender is: " +gender);
let email = obj.question("Please Enter your Email:");
console.log("Entered Email is: " +email);
var datetime =new Date();
console.log(datetime);
var array = new Array();
array.push(fname)
array.push(lname)
array.push(gender)
array.push(email)
array.push(datetime)
debugger;
let data =fs.readFileSync('Detail.json') 
     var json= JSON.parse(data)
    json.push(array)
   // debugger;
    //console.log(json)
    
    let JsonData=JSON.stringify(json)
    fs.writeFileSync("Detail.json",JsonData)

/*let JsonData=JSON.stringify(array)
fs.writeFileSync("Details.json",JsonData)
let data = fs.readFileSync("Details.json");
console.log(data.toString());
let jsonString=data.toString();
let anotherJSON=JSON.parse(jsonString);
console.log(anotherJSON.id)*/