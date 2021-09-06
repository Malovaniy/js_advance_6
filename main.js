
// ------------------------------------------------------------------------------------------
// Task 1


// function sum(){
//     let suma = 0

//     return function(count){
//         suma += count
        
//         console.log(`suma = ${suma}`);
//     }
// }

// let click = sum()
// click(3)       
// click(5)
// click(228)

// ------------------------------------------------------------------------------------------
// Task 2

//     Завдання 2.

let shop = (function(){
    
    let bank = 1000;
    let result = 0
    let newBank = 0

    let products = {
        beer:{
            count: 100,
            price: 45,
        },
        wine:{
            count: 120,
            price: 60,
        },
        pepsi:{
            count: 80,
            price: 25
        }
        
    }
    function bankCash(cash, count){
        casa = products[cash].price
        result += casa * count
     }


    function res() {
        return  result 
    }

    function minus() {
        result  = 0
    }

    function sell(name, count){
        return products[name].count -= count
        
    }
    
    
    function getBank(){
        return bank 
    }

    function sumaBnak() {
       return  newBank+= result 
    }

    function getCount(name){
        return products[name].count  
    }

    return{
        sumaBnak: sumaBnak,
        minus: minus,
        res1: res,
        cash: bankCash,
        sell: sell,
        bank: getBank,
        countProduct: getCount
    }
})()

let f1 = document.forms[`input`]
let f2 = document.forms[`number`]
getSel = x => document.querySelector(x)

f1.bank.value = `${shop.bank()} грн`
f1.beer.value = `${shop.countProduct('beer')} шт`
f1.wine.value = `${shop.countProduct('wine')} шт`
f1.pepsi.value = `${shop.countProduct('pepsi')} шт`

let count  = {
    beer: null,
    wine: null,
    pepsi: null
}

let  s = {
    beer: 'Пиво',
    wine: 'Вино',
    pepsi: 'Пепсі'
}

f2.btnAdd.addEventListener('click', e=>{
    if(f2.inp_number.value > 0 && f2.customRadioInline1.value != `` &&  shop.countProduct(f2.customRadioInline1.value)  >= f2.inp_number.value ){
        getSel(`.block__text`).innerHTML += `<p class="forP"> ${s[f2.customRadioInline1.value]} ${f2.inp_number.value} шт</p> `
        count[f2.customRadioInline1.value] = +f2.inp_number.value   
        shop.cash(f2.customRadioInline1.value, f2.inp_number.value)
        f2.inp_number.value = ``
    }
    else{
        getSel('.modal').style.display = 'block' 
        getSel('.text_modal').innerText = `Вибачти, але  на складі залешилося ${s[f2.customRadioInline1.value]}: ${shop.countProduct(f2.customRadioInline1.value)} штук `
    }
       
})
let be = shop.res1()

f2.buy.addEventListener(`click`, e=>{
    be = shop.res1()
    if(be > 0 ){
        getSel(`.shop`).innerHTML = getSel(`.block__text`).innerHTML
        getSel(`.bank`).innerText = `Ви купили на ${be} грн`
        getSel(`.block__text`).innerHTML = ``
        f1.bank.value = `${shop.sumaBnak() + shop.bank()} грн`
        f1.beer.value = `${shop.sell('beer' , count.beer )} шт`
        f1.wine.value = `${shop.sell('wine', count.wine )} шт`
        f1.pepsi.value = `${shop.sell('pepsi' , count.pepsi)} шт`
        shop.minus()
        count[f2.customRadioInline1.value] = 0
    }
 })

getSel('#cros').addEventListener('click',close )
getSel('#close').addEventListener('click',close )

function close(){
    getSel('.modal').style.display = 'none'
}
