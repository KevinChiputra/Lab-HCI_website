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
        error_name.innerHTML = "Must be filled!!";
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
        error_phone.innerHTML = "Phone number must be greater than 9";
    }
    if (input2.value.length >= 14){
        error_phone.style.display = "block";
        error_phone.innerHTML = "Phone number must be less than 14";
    }
    if(input2.value.length == 0){
        error_phone.style.display = "block";
        error_phone.innerHTML = "Must be filled!!";
    }
    if(input2.value.length >= 9 && input2.value.length <= 14){
        error_phone.innerHTML = "";
    }
});



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
    if(email.value.includes(".") == false){
        error_email.style.display = "block";
        error_email.innerHTML = "Email must have .!";
    }
    if(email.value.includes("@") == false){
        console.log(error_email);
        error_email.style.display = "block";
        error_email.innerHTML = "Email must have @!!";
    }
    if(email.value.length == 0){
        error_email.style.display = "block";
        error_email.innerHTML = "Must be filled!!";
    }
    if(email.value.indexOf(" ") >= 0){
        error_email.style.display = "block";
        error_email.innerHTML = "Email can't be space!!";
    }
    if(email.value.includes("@") == true && email.value.includes(".") == true && email.value.indexOf(" ") == -1){
        error_email.style.display = "none";
    }
})

const country = document.getElementById("selector_country");
const error_country = document.getElementById("error_country");
country.addEventListener('change', (event) => {
    console.log(country.value);
    if(country.value == "select"){
        error_country.style.display = "block";
        error_country.innerHTML = "Must be filled!!";
    }
});

const check = async () => {
    if(country.value == "select"){
        error_country.style.display = "block";
        error_country.innerHTML = "Must be filled!!";
    }else{
        error_country.style.display = "none";
    }
}

var checkbox = document.querySelector("input[name=checkbox]");
var error_checkbox = document.getElementById("error-checkbox");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    error_checkbox.style.display = "none";
  } else {
    error_checkbox.style.display = "block";
    error_checkbox.innerHTML = "You must agree to the terms and conditions";
  }
});

let form = document.getElementById("form_submit");
var button_submit = document.getElementById("btn-submit");
button_submit.addEventListener('click', (event) => {
    check();
    //name
    valid=true;
    if(input.value.length == 0){
        error_name.style.display = "block";
        error_name.innerHTML = "Must be filled!!";
        valid = false;
    }
    else if(input.value.length <= 5){
        error_name.style.display = "block";
        error_name.innerHTML = "Name length must be greater than 5";
        valid = false;
    }
    if(input2.value.length == 0){
        error_phone.style.display = "block";
        error_phone.innerHTML = "Must be filled!!";
        valid = false;
    }
    else if(input2.value.length <= 9){
        error_phone.style.display = "block";
        error_phone.innerHTML = "Phone number must be greater than 9";
        valid = false;
    }
    else if (input2.value.length >= 14){
        error_phone.style.display = "block";
        error_phone.innerHTML = "Phone number must be less than 14";
        valid = false;
    }
    if(email.value.includes(".") == false){
        error_email.style.display = "block";
        error_email.innerHTML = "Email must have .!";
        valid = false;
    }
    if(email.value.includes("@") == false){
        console.log(error_email);
        error_email.style.display = "block";
        error_email.innerHTML = "Email must have @!!";
        valid = false;
    }
    if(email.value.length == 0){
        error_email.style.display = "block";
        error_email.innerHTML = "Must be filled!!";
        valid = false;
    }
    if(email.value.indexOf(" ") >= 0){
        error_email.style.display = "block";
        error_email.innerHTML = "Email can't be space!!";
        valid = false;
    }
    if(checkbox.checked == false){
        error_checkbox.style.display = "block";
        error_checkbox.innerHTML = "You must agree to the terms and conditions";
        valid = false;
    }else{
        error_checkbox.style.display = "none";
    }
    

    if(valid == true){
        form.submit();
        alert("Success we will notify you when we have new promotion");
    }else{
        alert("Please check your input");
    }
});
