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
    { name: "T-shirt", category: "Clothing", price: 19.99, image: "/products/product9.jpg" },
    { name: "Jeans", category: "Clothing", price: 39.99, image: "/products/product10.jpg" },
    { name: "Leather Jacket", category: "Clothing", price: 129.99, image: "/products/product11.jpg" },
    { name: "Sneakers", category: "Clothing", price: 59.99, image: "/products/product12.jpg" },

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

class Products {
    constructor(name,category,price,image){
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
    }
}

const groupedByCategory = products.reduce((acc, product) => {
    { category } = product
    
    const productInstance = new Products(product.name, product.category, product.price, product.image);

    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(productInstance);
},{})
        
