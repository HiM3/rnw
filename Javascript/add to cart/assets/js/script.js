const product_details = document.querySelector('#proudct_details')
const jsonlocaldata = JSON.parse(localStorage.getItem('prdo'));
product_details.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#pname').value;
    const price = document.querySelector('#pprice').value;
    const description = document.querySelector('#pdesc').value;
    const category = document.querySelector('#categoru').value;

    const product = {
        name,
        price,
        description,
        category
    }

    function showdata() {
        const prdo = jsonlocaldata;
        let order = '';
        prdo.forEach((element) => {
            order += `<div class="col-md-4">
                    <div class="card menu-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsulnC4e9gluSPnw9CMsqNWvfm86nMXiBQQ&s" class="card-img-top" height="300" alt="Pizza">
                        <div class="card-body">
                            <h5 class="card-title">Pizza</h5>
                            <p class="card-text">₹${element.price}</p>
                            <button class="btn btn-primary add-to-order" data-name="Pizza" data-price="70">Add to Order</button>
                        </div>
                    </div>
                </div>`
        });
    }
})