const a=document.getElementById("text")
const b=document.getElementById("btn1")
const c=document.getElementById("ul")

let d=[]

b.addEventListener("click", function(){
    d.push(a.value)
    render()
})



function render(){
    let listItems=""
    for(i=0; i<d.length; i++){
        listItems+='<li>'+d[i]+'</li>'
    }
    c.innerHTML=listItems
}