const item1=document.getElementById("item1")
const item2=document.getElementById("item2")
const item3=document.getElementById("item3")
item1.addEventListener("mouseover",()=>{
    if(!item1.classList.contains("selected-item"))
    {
        item1.classList.add("selected-item")
        item2.classList.remove("selected-item")
        item3.classList.remove("selected-item")
    }
})

item2.addEventListener("mouseover",()=>{
    if(!item2.classList.contains("selected-item"))
    {
        item1.classList.remove("selected-item")
        item2.classList.add("selected-item")
        item3.classList.remove("selected-item")
    }
})


item3.addEventListener("mouseover",()=>{
    if(!item3.classList.contains("selected-item"))
    {
        item1.classList.remove("selected-item")
        item2.classList.remove("selected-item")
        item3.classList.add("selected-item")
    }
})
