const join = async () => {
	const email = document.querySelector("#email").value;
	const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (!emailregex.test(email)) {
		return alert("Invalid email");
	}
	return alert("We will send you an email for information update from us");
};