export class ProductService {
    cart;
    constructor() {
        this.cart = [
            { id: 123123, category: "Stationary", name: "Pen" },
            { id: 123223, category: "Stationary", name: "Book" },
            { id: 432123, category: "Electronics", name: "Television" },
            { id: 143123, category: "Electronics", name: "Fridge" },
            { id: 534342, category: "Electronics", name: "Fan" },
            { id: 353123, category: "Stationary", name: "School bag" },
            { id: 353123, category: "Stationary", name: "Shoes" },
            { id: 353123, category: "School Uniform", name: "Shoes" }
        ]
    }

    getProducts() {
        console.log(this.cart, "products")
    }

    addProducts(product) {
        // console.log(product)
        return this.cart.push(product)
    }

    getGroupedByCategories(cart) {
        let newArray = []
        let arrangedDuplicates;
        let parentCategories = [];

        parentCategories = cart.map(data => data.category)
        arrangedDuplicates = new Set(parentCategories)
        arrangedDuplicates.forEach(data => {
            let newObject = { "category": data, "products": [] }
            newArray.push(newObject)
        })

        cart.forEach(product => {
            for (let category of arrangedDuplicates)
                if (product.category === category) {
                    newArray.forEach(cat => {
                        if (cat["category"] === category) {
                            cat["products"].push(product)
                        }
                    })
                }
        })
        return newArray
    }

    removeProduct(prod) {
        let product = this.cart.find(product => product.id === prod)
        this.cart = this.cart.filter(data => data.id !== product.id)
        console.log(this.cart)
    }
}
