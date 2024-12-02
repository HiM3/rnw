const register = document.querySelector("#register");
console.log(
  document.querySelectorAll("#register input[name='checkbox']:checked").value
);
register.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;
  const address = document.querySelector("#address").value;
  const city = document.querySelector("#city").value;
  const gender = document.querySelector(
    "#register input[type='radio']:checked"
  ).value;
  const hobbies = document.querySelectorAll(
    "#register input[type='checkbox']:checked"
  );
  // console.log(hobbies);
  // console.log(Array.from(hobbies))

  var selected = Array.from(hobbies).map((ele)=>{
    return ele.value
  });
  console.log(selected);
  const obj = {
    name,
    password,
    email,
    mobile,
    address,
    city,
    gender,
    hobbies: selected,
  };
  localStorage.setItem("userdata", JSON.stringify(obj));
});