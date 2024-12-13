const products = [
    // Computers
    { name: "Dell Laptop", category: "computers", price: 799.99, image: "/products/product1.jpg" },
    { name: "HP Pavilion", category: "computers", price: 649.99, image: "/products/product2.jpg" },
    { name: "MacBook Air", category: "computers", price: 1199.99, image: "/products/product3.jpg" },
    { name: "Lenovo ThinkPad", category: "computers", price: 999.99, image: "/products/product4.jpg" },

    // Electronics
    { name: "iPhone 14", category: "electronics", price: 999.99, image: "/products/product5.jpg" },
    { name: "Samsung Galaxy S23", category: "electronics", price: 899.99, image: "/products/product6.jpg" },
    { name: "Sony Noise Cancelling Headphones", category: "electronics", price: 299.99, image: "/products/product7.jpg" },
    { name: "Apple Watch Series 8", category: "electronics", price: 399.99, image: "/products/product8.jpg" },

    // Clothing
    { name: "T-shirt", category: "Clothing", price: 19.99, image: "/products/product9.jpg", size: { large:'L',medium:'M',small:'S'} },
    { name: "Jeans", category: "Clothing", price: 39.99, image: "/products/product10.jpg", size: { large:'L',medium:'M',small:'S'} },
    { name: "Leather Jacket", category: "Clothing", price: 129.99, image: "/products/product11.jpg", size: { large:'L',medium:'M',small:'S'} },
    { name: "Sneakers", category: "Clothing", price: 59.99, image: "/products/product12.jpg", size: { large:'L',medium:'M',small:'S'}},

    // Food
    { name: "Apple", category: "Food", price: 1.99, image: "/products/product13.jpg" },
    { name: "Banana", category: "Food", price: 0.79, image: "/products/product14.jpg" },
    { name: "Organic Honey", category: "Food", price: 12.99, image: "/products/product15.jpg" },
    { name: "Almonds", category: "Food", price: 6.99, image: "/products/product16.jpg" },

    // Books
    { name: "The Great Gatsby", category: "books", price: 10.99, image: "/products/product17.jpg" },
    { name: "1984", category: "books", price: 8.99, image: "/products/product18.jpg" },
    { name: "Moby Dick", category: "books", price: 12.99, image: "/products/product19.jpg" },
    { name: "Pride and Prejudice", category: "books", price: 7.99, image: "/products/product20.jpg" }
];

class Product{
    constructor(name,image, vprice,category,discountedPrice){
        this.name = name;
        this.image = image;
        this.price = price;
        this.category = category;
        this.discountedPrice = discountedPrice;
    }
    renderProducts() {
        return `Product: ${this.name} Price:${this.price} Category:${this.category} Discounted Price:${this.discountedPrice}`;
    }
}
const shirt = new Product("T-shirt", 19.99, "Clothing", 14.99);
console.log(shirt.renderProducts());
class CLothing extends Product {
    constructor(name, price, category, discountedPrice, size) {
        super(name, price, category, discountedPrice);
        this.size = size;
    }
    renderProducts() {
        return `${super.renderProducts()} size: ${this.size}`
    }
}

    

function createProduct(name,image, price, category, discountedPrice, size = null) {
    if (category === "Clothing") {
        return new CLothing(name,image, price, category, discountedPrice, size);
    } else {
        return new Product(name, image,price, category, discountedPrice)
    }
    
}

const enhancedProducts = products.map(product => ({
    ...product,

    discountedPrice: product.price * 0.8

}))

enhancedProducts.forEach((product) => {
    product = createProduct(product.name, product.image, product.price, product.category, product.discountedPrice.toFixed(2), product.size)
    console.log(product.renderProducts());
    
})

const groupedByCategory = enhancedProducts.reduce((acc, product) => {
    const { category } = product
    const productInstance = new Product(product.name,product.image, product.price,  product.category, product.discountedPrice, product.size)
    
    if (!acc[category]) {
        acc[category] =[]
    }
    acc[category].push(productInstance)
    return acc;
    }, {})
 
function renderCategories(groupedByCategory) {
    for (const categories in groupedByCategory) {
        const categoryDiv = document.querySelector(`.${categories.toLowerCase()}`)
        
        groupedByCategory[categories].forEach((product) => {
            const productsHTML = `
                <div class="product-item">
                <h5>${product.name}</h5>
                <p>Price: $${product.price}</p>
                <img src="${product.image}" alt="${product.name}">
                ${product.discountedPrice ? `<p>Discounted Price: $${product.discountedPrice.toFixed(2)}</p>` : ''}
                ${product.size ? `
                    <select>
                        ${Object.entries(product.size).map(([key, value]) => 
                            `<option value="${value}">${key}</option>`).join('')}
                    </select>                    
                ` : ''}
            </div>
            `

            categoryDiv.innerHTML += productsHTML;
        })

    }
}

renderCategories(groupedByCategory);