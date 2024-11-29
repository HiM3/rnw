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
  // localStorage.setItem("userdata", JSON.stringify(obj));
  const userdata = JSON.parse(localStorage.getItem('userdata')) || [];
  userdata.push(obj);
  localStorage.setItem("userdata", JSON.stringify(userdata));
  location.reload();
});
function showData(){
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    let output='';
    userdata.forEach((ele, index) => {
        output+= `
        <tr>
        <td>${index+1}</td>
        <td>${ele.name}</td>
        <td>${ele.email}</td>
        <td>${ele.mobile}</td>
        <td>${ele.gender}</td>
        <td>${ele.city}</td>
        <td>${ele.address}</td>
        </tr>
        `
    });
    document.querySelector('#showData').innerHTML = output;
}
showData();