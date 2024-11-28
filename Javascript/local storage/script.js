const register = document.querySelector("#register");
register.addEventListener("submit", (event) => {
  event.preventDefault();
    const obj = {
      name: document.querySelector("#name").value,
      password: document.querySelector("#password").value,
      email: document.querySelector("#email").value,
      mobile: document.querySelector("#mobile").value,
      address: document.querySelector("#address").value,
      city: document.querySelector("#city").value,
      gender: document.querySelector("#register input[type='radio']:checked"),
      hobbies: document.querySelectorAll("#register input[type='checkbox']:checked")
    };
    localStorage.setItem("userdata", JSON.stringify(obj));
});
