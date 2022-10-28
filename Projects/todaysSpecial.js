let menu = {
    _meal : '',
    _price : 0,
    set meal(mealToCheck){
        if(typeof mealToCheck === 'string'){
            return this._meal = mealToCheck;
        }
    },
    set price(priceToCheck){
        if(typeof priceToCheck == 'number'){
            return this._price = priceToCheck;
        }
    },
    get todaysSpecial(){
        if(this._meal && this._price){
            return `Today's special is ${this._meal} for ${this._price}$`
        }else{
            return 'Meal or price not set correcty'

        }
    }
}


let meals = ['Pork','chicken','Lamb','Duck'];
let prices = [5,4,3,2]

function randomizer(){
    let meal = meals[Math.floor(Math.random() * meals.length)]
    let price = prices[Math.floor(Math.random() * prices.length)]
    
    console.log(meal)
    console.log(price)

    menu.meal = meal;
    menu.price = price;
}

randomizer();
