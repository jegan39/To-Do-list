var tex = document.getElementById("input")
var tas = document.getElementById("task")

function add(){
    var task_li = document.createElement("li")
    task_li.style.display="flex";
    task_li.style.justifyContent="space-betwwen";
    task_li.innerHTML = tex.value + "<button class='inbtn' onclick='del(event)'>Delete</button>"
    tas.appendChild(task_li);
    tex.value=""
}
function del(event){
    event.target.parentElement.remove()
}
