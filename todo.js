let btn = document.querySelector(".taskInput");
let outputBox = document.querySelector(".output")
let h4 = document.querySelector("h4")

btn.addEventListener("submit",(e)=>{
    e.preventDefault();
    h4.remove();

    let input = document.querySelector("input").value;
    document.querySelector("input").value="";

    let div = document.createElement("div");
    div.classList.add("tasks");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");

    let span = document.createElement("span");
    span.innerText = input;
    span.classList.add("span");

    let delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;            // FontAwesome icon
    delBtn.classList.add("delete");

    delBtn.addEventListener("click", () => {
        div.remove();
    });

    div.appendChild(checkbox);
    div.appendChild(span);
    div.appendChild(delBtn);

    outputBox.appendChild(div);

    // if (outputBox.children.length === 0) {
    //     let para = document.createElement("h4");                                      //Not working till now
    //     para.innerText = "Again no task is there. Add one above!";
    //     para.classList.add("h4");
    //     outputBox.appendChild(para);
    // }

})
