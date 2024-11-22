let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let extra = document.querySelector(".new");

btn.addEventListener("click",function(){
   
    if(inp.value==""){
        console.log("do nothing");
       
    }
    else{
    let data=document.createElement("li");
    data.innerText=inp.value; //value is use for get the value in input ,text field,etc
    ul.appendChild(data);
    inp.value ="";
    console.log("done");
    data.className="draw";
    console.log("good")

    


    
   let delbtn=document.createElement("button");
   delbtn.innerText="X";
   delbtn.className="cross";
   data.appendChild(delbtn); 
//    console.log("del");
//     delbtn.className="cross";
//     console.log("cross")


//    delbtn.addEventListener("click",function(){
//     delbtn.value=data.remove();
//     console.log ("deleted")
    }

   });

   ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;   //parentelement target krega parent koh jese btton ka parent list 
        listItem.remove();
        console.log("deleted");
    }

   });

   
  




   


