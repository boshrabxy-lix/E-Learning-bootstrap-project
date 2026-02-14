const inputs = document.querySelectorAll(".form-control");
const BookMarkForm = document.querySelector(".BookMarkForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPass = document.getElementById("userPass");

const SiteData = document.querySelector(".siteData");
const users = JSON.parse(localStorage.getItem("users"));


const validateSiteEmail = () => {
    const regex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9-]{1,253}\.[a-zA-Z]{2,}$/;
    if (!regex.test(inputs[0].value)) {
        inputs[0].classList.add('is-invalid');
        inputs[0].classList.remove('is-valid');
        document.querySelector(".EmailError").textContent = "invalid Email Address";
        return false;
    } else {
        inputs[0].classList.add('is-valid');
        inputs[0].classList.remove('is-invalid');
        document.querySelector(".EmailError").textContent = "";
        return true;
    }
}

const validateUserName = () => {
    const regex = /^(?=.{3,20}$)(?!.*[._]{2})[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    if (!regex.test(inputs[1].value)) {
        inputs[1].classList.add('is-invalid');
        inputs[1].classList.remove('is-valid');
        document.querySelector(".nameError").textContent = "invalid Site Name";
        return false;
    } else {
        inputs[1].classList.add('is-valid');
        inputs[1].classList.remove('is-invalid');
        document.querySelector(".nameError").textContent = "";
        return true;
    }
}


const validateSitePassword = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{10,}$/;
    if (!regex.test(inputs[2].value)) {
        inputs[2].classList.add('is-invalid');
        inputs[2].classList.remove('is-valid');
        document.querySelector(".PassError").textContent = "invalid Passwod";
        return false;
    } else {
        inputs[2].classList.add('is-valid');
        inputs[2].classList.remove('is-invalid');
        document.querySelector(".PassError").textContent = "";
        return true;
    }
}


inputs[0].addEventListener("input", validateSiteEmail);
inputs[1].addEventListener("input", validateUserName);
inputs[2].addEventListener("input", validateSitePassword);




BookMarkForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateUserName() || !validateSiteName() || !validateSitePassword()) {
        alert('Invalid Data');
        return;
    }
    const user = {
        email: userEmail.value,
        name: userName.value,
        password: userPass.value,
    }
    console.log(user);
    users.push(user);
    localStorage.setItem("users".JSON.stringify(users));
    console.log("User Saved:", user);
});



