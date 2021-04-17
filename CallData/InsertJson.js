let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"
mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
if(!err1){
    console.log("connected successfully")
    let db = client.db("meanstack");
    const fs = require('fs');
    let cityData = fs.readFileSync('call_data.json');  
    let cities = JSON.parse(cityData);  
    

        
        
 db.collection("city").insertMany(cities);

console.log(cities); 
            client.close();    
      
        
    }

});