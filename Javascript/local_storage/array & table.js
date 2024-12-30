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
  const singleuser = userLocaldata[index];
  // console.log(userdata);
  document.querySelector("#name").value = singleuser.name;
  document.querySelector("#email").value = singleuser.email;
  document.querySelector("#mobile").value = singleuser.mobile;
  document.querySelector("#city").value = singleuser.city;
  document.querySelector("#address").value = singleuser.address;
  const genderRadios = document.querySelectorAll(
    "#register input[name='gender']"
  );
  genderRadios.forEach((radio) => {
    radio.checked = radio.value === singleuser.gender;
  });
  const hobbiescheckbox = document.querySelectorAll(
    "#register input[name='hobbies']"
  );
  hobbiescheckbox.forEach((checkbox) => {
    checkbox.checked = singleuser.hobbies.includes(checkbox.value);
  });
  // document.querySelector("#register input[type='checkbox']:checked").value =
  // singleuser.hobbies;
  // showData();
  const update = document.querySelector("#update");
  update.addEventListener("click", () => {
    const obj = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      mobile: document.querySelector("#mobile").value,
      city: document.querySelector("#city").value,
      address: document.querySelector("#address").value,
      gender: document.querySelector("#register input[type='radio']:checked")
        .value,
      hobbies: document.querySelector(
        "#register input[type='checkbox']:checked"
      ).value,
    };
    userLocaldata.splice(index, 1, obj);
    localStorage.setItem("userdata", JSON.stringify(userLocaldata));
    alert("Data updated");
    location.reload();
  });
}
// showData();
