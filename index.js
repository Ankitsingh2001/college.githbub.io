// function saveLead(){
//     console.log("clicked button ")
// }
let myleads =[];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click",function(){
    myleads.push(inputEl.value);
    inputEl.value = " ";
    renderLeads();
})

function renderLeads()
{
    let listItem = " ";
    for(let i=0 ; i<myleads.length;i++){
        // ulEl.innerHTML += "<li>" + myleads[i] + "</li>";
        /* let li = document.createElement("li");
        li.textContent = myleads[i];
        ulEl.append(li); */
        listItem += "<li><a target='_blank' href='#'>" + myleads[i] + "</a></li>";
    }
    ulEl.innerHTML = listItem;
}
 
