// const join = async () => {
// 	const email = document.querySelector("#email").value;
// 	const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// 	if (!emailregex.test(email)) {
// 		return alert("Invalid email");
// 	}
// 	return alert("We will send you an email for information update from us");
// };

const menu = document.querySelector(".navbar-right");

const handleMenu = () => {
    menu.style.display = "flex";
    console.log("handleMenu");
}

const closeMenu = () => {
    menu.style.display = "none";
    console.log("closeMenu");
}