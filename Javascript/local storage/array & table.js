const register = document.querySelector("#register");
const userLocaldata = JSON.parse(localStorage.getItem("userdata"));
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

  var selected = Array.from(hobbies).map((ele) => {
    return ele.value;
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
  // localStorage.setItem("userdata", JSON.stringify(obj));
  const userdata = JSON.parse(localStorage.getItem("userdata")) || [];
  userdata.push(obj);
  localStorage.setItem("userdata", JSON.stringify(userdata));
  location.reload();
});
function showData() {
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  let output = "";
  userdata.forEach((ele, index) => {
    output += `
        <tr>
        <td>${index + 1}</td>
        <td>${ele.name}</td>
        <td>${ele.email}</td>
        <td>${ele.mobile}</td>
        <td>${ele.gender}</td>
        <td>${ele.city}</td>
        <td>${ele.address}</td>
        <td><button onclick="trash(${index})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
        <button onclick="update(${index})" class="btn btn-warning"><i class="fa-solid fa-pen"></i></button></td>
        </tr>
        `;
  });
  document.querySelector("#showData").innerHTML = output;
}
showData();
function trash(index) {
  const userdata = userLocaldata;
  if (confirm("Do you want to delete data")) {
    userLocaldata.splice(index, 1);
    localStorage.setItem("userdata", JSON.stringify(userdata));
    showData();
  }
}
function update(index) {
  document.querySelector("#submit").style.display = "none";
  document.querySelector("#update").style.display = "block";
  const userdata = userLocaldata[index];
  // console.log(userdata);
  document.querySelector("#name").value = userdata.name;
  document.querySelector("#email").value = userdata.email;
  document.querySelector("#mobile").value = userdata.mobile;
  document.querySelector("#city").value = userdata.city;
  document.querySelector("#address").value = userdata.address;
  document.querySelector("#register input[type='radio']:checked").value =
    userdata.gender;
  document.querySelector("#register input[type='checkbox']:checked").value =
    userdata.hobbies;
  // showData();
}
showData();
