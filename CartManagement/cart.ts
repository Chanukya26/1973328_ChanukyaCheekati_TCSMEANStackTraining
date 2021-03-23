
let cartObj:any={};
function storeinSession(){
    sessionStorage.setItem("emp",cartObj)
}

function add(){
     let data=readfromData();
     cartObj.push(data);
    storeinSession();
   // retrievefromSession();
    

}

function readfromData(){
  
    var info:any={};
  info.name = document.getElementById("name");HTMLElement
    info.price = document.getElementById("price");HTMLElement
    console.log(info);
    return info;
 }
