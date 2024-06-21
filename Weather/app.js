let url="https://wttr.in/";

async function getData(city){
    try{
        let data=await axios.get(url+city+"?format=j1");
        console.log(data.data.current_condition);
        return data.data.current_condition;
    }catch(e){
        console.log("ERROR");
    }
}

let btn=document.querySelector("button");
btn.addEventListener("click",async function(){
    let div=document.querySelector(".report");
    div.classList.remove("makeVisible");
    let city=document.querySelector("input").value;
    let h2=document.querySelector("h2");
    h2.innerText=city;
    let data=await getData(city);
    addData(data[0].temp_C,".temperature","°C");
    addData(data[0].humidity,".humidity","grams per m³");
    addData(data[0].windspeedKmph,".wind","kmph");
    addData(data[0].weatherDesc[0].value,".condition"," ");
    div.classList.add("makeVisible");
})

async function addData(data,parent,addon){
    let p=document.querySelector(parent + " p");
    p.innerText="";
    let temp=document.querySelector(parent);
    p.innerText=data+" "+addon;
    temp.appendChild(p);
}


