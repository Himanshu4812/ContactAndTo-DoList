let form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let nameInput = document.querySelector(".name");
    let emailInput = document.querySelector(".email");
    let msgInput = document.querySelector(".message");

    let name = document.querySelector(".name").value.trim();
    let email = document.querySelector(".email").value.trim();
    let msg = document.querySelector(".message").value;

    if(name === "" || email === "" || msg ===""){
        return alert("All fields are required.");
    }
    else if(
        !email.includes("@") ||
        email.startsWith("@") ||
        email.endsWith("@") ||

        !email.includes(".") ||
        email.startsWith(".") ||
        email.endsWith(".")
    ){
        return alert("Kindly put an valid Email Id!");
    }
    else{
        nameInput.value = "";
        emailInput.value = "";                   
        msgInput.value = "";
        return alert("Form Submitted Successfully");
    }

})