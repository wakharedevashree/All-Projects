const btn=document.getElementById("button");
const joke=document.getElementById("joke");
const API="Tk9Wxcp+R/9ubJNZ2Z75zw==mk8I6xXCE0RFgFNm";

const option={
    method:"GET",
    headers:{
        "X-Api-Key":API,
    },
};

const apiurl="https://api.api-ninjas.com/v1/dadjokes";
async function getJoke(){
    joke.innerText="Updating";
    const response= await fetch(apiurl,option)
    const data=await response.json();
    joke.innerText=data[0].joke;
}

btn.addEventListener("click",getJoke);
