
function addBlog(){

    var formData = readData();
    console.log(formData)
    insertNewRecords(formData);
    
    resetForm();
    
}
function readData() {
    var formData={};
    formData.title=document.getElementById("title").value;
    formData.desc = document.getElementById("desc").value;
    
    imageInfo = document.getElementById("imageId").files[0].name;
    document.getElementById("imageInfo").src=imageInfo;
    return formData;
}
function insertNewRecords(formData) {
    console.log(formData)
    
    var node1= document.createTextNode(formData.desc);
    var node2= document.createTextNode(formData.title);
    /*var img = document.createElement('img'); 
    img.src=formData.imageInfo;*/
   
        
            
    console.log(node1);
    console.log(node2);
    /*console.log(img);*/
    
    
    document.getElementById('div1').appendChild(node2);
    document.getElementById('div2').appendChild(node1);
    /*document.getElementById("imageInfo").src=imageInfo;
    /*document.getElementById('blogDetails').appendChild('img');*/
}

function resetForm() {
    document.getElementById("title").value="";
    document.getElementById("desc").value="";  
    document.getElementById("imageId").files[0].name="";
}

/*function addBlog(){
    
    title = document.getElementById("title").value;
    desc = document.getElementById("desc").value;
    imageInfo = document.getElementById("imageId").files[0].name;
    console.log(title);
    console.log(desc);
    console.log(imageInfo);
    var myCollection = document.getElementsById("title");

    /*document.getElementById("titleInfo").appendChild(title);
    document.getElementById("descInfo").appendChild(desc);
    document.getElementById("imageInfo").src=imageInfo;
    
    
    var inpData = {};
    var blogData={};
    console.log(inpData);
    var blogInfo=localStorage.setItem("blogInfo",JSON.stringify(blogData));
    var obj = JSON.parse(localStorage.getItem("blogInfo"));
    console.log(obj);*/
    
    
    
  

