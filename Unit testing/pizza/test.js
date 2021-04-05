const { assert } = require('chai');
const { pizzUni } = require('./pizza.js')

describe('Main function', () => {
    describe('Make an order', () => {
        it('only drink', () => {
            let result = () => pizzUni.makeAnOrder({ orderedDrink: 'drink' })
            assert.throws(result, 'You must order at least 1 Pizza to finish the order.')
        })
        it('pizza and drink ordered', () => {
            let pizzaAndDrink = { orderedPizza: 'pizza', orderedDrink: 'drink' }
            let expected = `You just ordered ${pizzaAndDrink.orderedPizza} and ${pizzaAndDrink.orderedDrink}.`
            let result = pizzUni.makeAnOrder(pizzaAndDrink)
            assert.equal(result, expected)
        })
        it('only pizza', () => {
            let pizza = { orderedPizza: 'pizza' }
            let expected = `You just ordered ${pizza.orderedPizza}`
            let result = pizzUni.makeAnOrder(pizza);
            assert.equal(result,expected)
        })


    }
    )
    describe('Remainning work', () => {
        it('preparing pizzas', () => {
            let pizzasPreparing = [{ pizzaName: 'pizza', status: 'preparing' }];
            let expected = `The following pizzas are still preparing: ${pizzasPreparing.map(p => p.pizzaName).join(', ')}.`
            let result = pizzUni.getRemainingWork(pizzasPreparing)
            assert.equal(result, expected)
        })
        it('all pizza ready',()=>{
            let pizzasReady = [{ pizzaName: 'pizza', status: 'ready' }];
            let expected = 'All orders are complete!'
            let result = pizzUni.getRemainingWork(pizzasReady);
            assert.equal(result,expected)
        })
    })
    describe('Order type',()=>{
        it('carry out',()=>{
            let orderType = "Carry Out"
            let price = 10;
            let expected = pizzUni.orderType(price,orderType)
            assert.equal(expected,9)
            
          

        })
        it('deliver',()=>{
            let orderType = 'Delivery'
            let price = 10;
            let expected = pizzUni.orderType(price,orderType)
            assert.equal(expected, 10)
        })
    })

})