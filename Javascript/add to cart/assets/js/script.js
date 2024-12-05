const jsonlocaldata = JSON.parse(localStorage.getItem("prdo")) || [];
productdetails.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#pname").value;
    const price = document.querySelector("#pprice").value;
    const description = document.querySelector("#pdesc").value;
    const img = document.querySelector("#pimg").value;
    const category = document.querySelector("#category").value;
    const id = jsonlocaldata.length + 1;
    const product = {
        id,
        name,
        price,
        description,
        img,
        category,
    };
    jsonlocaldata.push(product);
    localStorage.setItem("prdo", JSON.stringify(jsonlocaldata));
    alert("Product added successfully!");
    location.reload();
});
function showdata() {
    const prdo = jsonlocaldata;
    let order = "";
    prdo.forEach((element) => {
        order += `<div class="col-md-6 col-xl-3 col-lg-4 mt-4 shadow">
                <div class="card">
                    <img src="${element.img}" class="card-img-top" height="300" alt="">
                    <h5 class="card-title">${element.name}</h5>
                    <div class="card-body">
                        <p class="card-text">₹${element.price}</p>
                        <p class="card-body">${element.description}</p>
                        <button class="btn btn-primary" onclick="addtocart(${element.id})">Add to Order</button>
                    </div>
                </div>
            </div>`;
    });
    document.querySelector("#showdata").innerHTML = order;
}
showdata();

function addtocart(id) {
    const cartlist = JSON.parse(localStorage.getItem("cartlist")) || [];
    const prdo = jsonlocaldata.find((element) => {
        return element.id == id;
    });
    const exists = cartlist.find((element) => {
        return element.id == id;
    });
    if (exists) {
        exists.count += 1;
    } else {
        cartlist.push({ ...prdo, count: 1 });
    }
    localStorage.setItem("cartlist", JSON.stringify(cartlist));
    alert("Product added to cart!");
}
