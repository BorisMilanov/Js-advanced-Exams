class ChristmasDinner {
    constructor(budget, dishes = [], products = [], guests = {}) {
        this.budget = budget;
        this.dishes = dishes;
        this.products = products;
        this.guests = guests;
        if (budget < 0) {
            throw new Error("The budget cannot be a negative number")
        }
    }
    shopping(product) {
        let [nameProduct, priceProduct] = product

        if (priceProduct > this.budget) {
            throw new Error("Not enough money to buy this product");
        } else {
            this.budget -= priceProduct
            this.products.push(nameProduct)
            return `You have successfully bought ${nameProduct}!`
        }


    }
    recipes(recipe) {
        let { recipeName, productsList } = recipe
        let isItTrue = true;
        productsList.forEach((product) => {
            if (!this.products.includes(product)) {
                isItTrue = false;
            }
        }) 
        if (isItTrue) {
            this.dishes.push({ recipeName, productsList })
            return `${recipeName} has been successfully cooked!`
        }
        throw new Error("We do not have this product")
    }
    inviteGuests(name, dish) {
        let isItFalse = false;
        this.dishes.forEach((obj)=>{
            if(obj.recipeName === dish){
                isItFalse = true;
            }
        })
        
        if (name in this.guests) {
            throw new Error("This guest has already been invited")
        }
        if (!isItFalse) {
            throw new Error("We do not have this dish")
        } 
            this.guests[name] = dish
            return `You have successfully invited ${name}!`
        
    }
    showAttendance() {
        let output = '';
        Object.keys(this.guests).forEach(name => {
            let dish = this.guests[name];
            let products = [];
            this.dishes.forEach((curDish) => {
                if (curDish.recipeName === dish) {
                    products = curDish.productsList;
                }
            });
            output += `${name} will eat ${dish}, which consists of ${products.join(', ')}\n`;
        });
        return output.trim();
    }

}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);