
document.body.style.backgroundColor = "#ddd" //Change Background 
console.log(document.location.pathname)     //File in safe location name


let text = document.getElementById("text")
text.innerHTML = "Change info"
console.log(text.innerHTML) // Selected id ("text") and changed 


let link = document.querySelector("ul>li>a") // used querySelector.
link.innerHTML = "Link is changed"
link.style.textDecoration = "none" // Changed CSS 
link.style.color = "#000"
link.style.fontWeight = 600
link.classList.add('btn')


//Interactive and show with prompt 
let fullName = prompt("Please Enter Your Name: ","Etc: ANIL") 
namePrompt.innerHTML = `Welcome, ${fullName}`


//First and lastchild changed
let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "Last Child is Changed"
let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "First Child is Changed"


//First and lastchild append
let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")
liDOM.innerHTML = "My Child"
ulDOM.append(liDOM) //End
ulDOM.prepend(liDOM) //Start
ulDOM.classList.add("list-item") //add class name


//Delete and Append
let list = document.querySelector("ul#list")
let data = document.querySelector("#data")
let save = document.querySelector("#save")
let del = document.querySelector("#del")
save.addEventListener("click",function(){
    let li = document.createElement("li");
    li.textContent=data.value;
    list.appendChild(li);
    data.value = "" ; 
});
del.addEventListener("click",function(){
    list.lastElementChild.remove()
})
