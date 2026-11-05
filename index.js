let myLeads = []


const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const delBtn = document.getElementById("del-btn")
const saveBtn = document.getElementById("save-btn")



const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
  
}

saveBtn.addEventListener('click', function(){

 chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)

})

  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    //listItems += "<li><a href ='"+myLeads[i]+"' target ='_blank'>" + myLeads[i]+"</a> </li>"
    listItems +=`
                <li>
                    <a href = '${leads[i]}' target ='_blank'>
                      ${leads[i]}
                    </a>
                </li>
                `
    
  }
  ulEl.innerHTML = listItems;
}

delBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads =[]
  render(myLeads)
})


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads);
});






/*instead of rendering array everytime we can just add the latest lead to the listitems
function renderLeads(){
    listItems = "<li>" + inputEl.value + "</li>"
    ulEl.innerHTML += listItems
}  */  

