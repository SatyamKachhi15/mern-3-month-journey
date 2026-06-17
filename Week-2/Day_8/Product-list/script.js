const products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },
    {
        name: "Phone",
        price: 20000,
        category: "Electronics"
    },
    {
        name: "Shoes",
        price: 3000,
        category: "Fashion"
    },
    {
        name: "T-Shirt",
        price: 1000,
        category: "Fashion"
    },
    {
        name: "Book",
        price: 500,
        category: "Education"
    }
];
const productContainer =
document.getElementById("productContainer");

function renderProducts(productArray){

    productContainer.innerHTML = "";

    productArray.forEach(product => {

        productContainer.innerHTML += `
            <div class="card">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <p>${product.category}</p>
            </div>
        `;

    });

}

renderProducts(products);
const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const searchText =
    searchInput.value.toLowerCase();

    const filteredProducts =
    products.filter(product =>
        product.name
        .toLowerCase()
        .includes(searchText)
    );

    renderProducts(filteredProducts);

});

const categoryFilter =
document.getElementById("categoryFilter");

categoryFilter.addEventListener("change", () => {

    const selectedCategory =
    categoryFilter.value;

    if(selectedCategory === "All"){

        renderProducts(products);

    }

    else{

        const filteredProducts =
        products.filter(product =>
            product.category === selectedCategory
        );

        renderProducts(filteredProducts);

    }

});
const sortPrice =
document.getElementById("sortPrice");

sortPrice.addEventListener("change", () => {

    let sortedProducts = [...products];

    if(sortPrice.value === "lowToHigh"){

        sortedProducts.sort(
            (a,b) => a.price - b.price
        );

    }

    else if(sortPrice.value === "highToLow"){

        sortedProducts.sort(
            (a,b) => b.price - a.price
        );

    }

    renderProducts(sortedProducts);

});
const gridView =
document.getElementById("gridView");

const listView =
document.getElementById("listView");

gridView.addEventListener("click", () => {

    productContainer.classList.remove(
        "list-view"
    );

});

listView.addEventListener("click", () => {

    productContainer.classList.add(
        "list-view"
    );

});