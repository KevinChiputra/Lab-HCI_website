var input = document.getElementById("first_name");
var label = document.getElementById("content-first_name");

input.addEventListener('focus', (event) => {
    label.classList.remove("content-first_name");
    label.classList.add("content-name");
}); 

input.addEventListener('blur', (event) => {
    if(input.value.length == 0){
        label.classList.add("content-first_name");
        label.classList.remove("content-name");
    }
});

var error_name = document.getElementById("error-first_name");
input.addEventListener('input', (event) => {
    if(input.value.length == 0){
        error_name.style.display = "block";
        error_name.innerHTML = "Name must be filled!!";
    }
    else if(input.value.length <= 5){
        error_name.style.display = "block";
        error_name.innerHTML = "Name length must be greater than 5";
    }else{
        error_name.style.display = "none";
    }
});

var input1 = document.getElementById("last_name");
var label1 = document.getElementById("content-last_name");
input1.addEventListener('focus', (event) => {
    label1.classList.remove("content-last_name");
    label1.classList.add("content-name");
}); 

input1.addEventListener('blur', (event) => {
    if(input1.value.length == 0){
        label1.classList.add("content-last_name");
        label1.classList.remove("content-name");
    }
});

var input2 = document.getElementById("number_phone");
var label2 = document.getElementById("phone_number");
input2.addEventListener('focus', (event) => {
    label2.classList.remove("content-last_name");
    label2.classList.add("content-name");
}); 

input2.addEventListener('blur', (event) => {
    if(input2.value.length == 0){
        label2.classList.add("content-last_name");
        label2.classList.remove("content-name");
    }
});

var error_phone = document.getElementById("error-phone_num");
input2.addEventListener('input', (event) => {
    if(input2.value.length <= 9){
        error_phone.style.display = "block";
        error_phone.innerHTML = "Phone number length must be greater than 9";
    }
    if (input2.value.length >= 14){
        error_phone.style.display = "block";
        error_phone.innerHTML = "Phone number length must be less than 12";
    }
    if(input2.value.length == 0){
        error_phone.style.display = "block";
        error_phone.innerHTML = "Phone number must be filled!!";
    }
    if(input2.value)




var email = document.getElementById("email");
var label3 = document.getElementById("email_label");
email.addEventListener('focus', (event) => {
    label3.classList.remove("content-last_name");
    label3.classList.add("content-name");
}); 

email.addEventListener('blur', (event) => {
    if(email.value.length == 0){
        label3.classList.add("content-last_name");
        label3.classList.remove("content-name");
    }
});
var error_email = document.getElementById("error-email");
email.addEventListener('input', (event) => {
    if(email.value.includes("@") == false){
        console.log(error_email);
        error_email.style.display = "block";
        error_email.innerHTML = "Email must have @!!";
    }
    if(email.value.includes(".") == false){
        error_email.style.display = "block";
        error_email.innerHTML = "Email must have .!";
    }
    if(email.value.length == 0){
        error_email.style.display = "block";
        error_email.innerHTML = "Email must be filled!!";
    }
    if(email.value.indexOf(" ") >= 0){
        error_email.style.display = "block";
        error_email.innerHTML = "Email can't be space!!";
    }
    if(email.value.includes("@") == true && email.value.includes(".") == true && email.value.indexOf(" ") == -1){
        error_email.style.display = "none";
    }
});