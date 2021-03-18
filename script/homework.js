'use strict';

const PRODUCT_TYPE = {
  MILK_FOOD: 1,
  FRUIT: 2,
  VEGETABLE: 3,
  CLOTHES: 4,
  BAKERY: 5,
}

const PRODUCT_NAME = {
  [PRODUCT_TYPE.MILK_FOOD]: 'Milk food',
  [PRODUCT_TYPE.FRUIT]: 'Fruits',
  [PRODUCT_TYPE.VEGETABLE]: 'Vegetables',
  [PRODUCT_TYPE.CLOTHES]: 'Clothes',
  [PRODUCT_TYPE.BAKERY]: 'Bakery',
}

const data = [
  {
    name: 'Milk',
    price: 20,
    quantity: 1,
    type: PRODUCT_TYPE.MILK_FOOD,
    id: 1,
  },
  {
    name: 'Apple',
    price: 10,
    quantity: 3,
    type: PRODUCT_TYPE.FRUIT,
    id: 2,
  },
  {
    name: 'Butter',
    price: 12,
    quantity: 1,
    type: PRODUCT_TYPE.MILK_FOOD,
    id: 3,
  },
  {
    name: 'Bread',
    price: 23,
    quantity: 1,
    type: PRODUCT_TYPE.BAKERY,
    id: 4,
  },
  {
    name: 'Orange',
    price: 12,
    quantity: 3,
    type: PRODUCT_TYPE.FRUIT,
    id: 5,
  },
  {
    name: 'T-Shirt',
    price: 200,
    quantity: 1,
    type: PRODUCT_TYPE.CLOTHES,
    id: 6,
  },
  {
    name: 'Jacket',
    price: 400,
    quantity: 1,
    type: PRODUCT_TYPE.CLOTHES,
    id: 7,
  },
  {
    name: 'Tomato',
    price: 15,
    quantity: 5,
    type: PRODUCT_TYPE.VEGETABLE,
    id: 8,
  },
  {
    name: 'Onion',
    price: 10,
    quantity: 4,
    type: PRODUCT_TYPE.VEGETABLE,
    id: 9,
  },
];
function Products(products, obj) {
  this.products = products;
  this.obj = obj;

  this.getProductsByType = function() {
    return this.products.filter((product) => product.type === obj);
  }

  this.deleteProductsByType = function() {
    return this.products.filter((product) => product.type !== obj);
  }

  this.filteredProductIdAndOutput = function() {
    return this.products.filter((product) => product.id === idToRemove);
  }

  this.filteredProductIdAndDeleted = function() {
    return this.products.filter((product) => product.id !== idToRemove);
  }

  this.dataAdd = products.map(function() {
    return {
       ...products,
       data: new Date(),
     };
  }); 

}
// !!Задание 3
const arrayData = new Products(data);

const arrayDataOutput = arrayData.dataAdd;

console.log(arrayDataOutput);
// !!Задание 3

//!!Задание 2 и 4
const idToRemove = 9;

const userId = new Products(data, data.id);
const idOutput = userId.filteredProductIdAndOutput();
const idDeleted = userId.filteredProductIdAndDeleted();


console.log(idOutput);
console.log(idDeleted);
//!!Задание 2 и 4

//!!Задание 1 и 5
const userDeletedProductsMilk = new Products(data, PRODUCT_TYPE.MILK_FOOD);
// const userDeletedProductsFruit = new Products(data, PRODUCT_TYPE.FRUIT);
// const userDeletedProductsVegetable = new Products(data, PRODUCT_TYPE.VEGETABLE);
// const userDeletedProductsClothes = new Products(data, PRODUCT_TYPE.CLOTHES);
// const userDeletedProductsBekary = new Products(data, PRODUCT_TYPE.BAKERY);

const resultMilkDeleted = userDeletedProductsMilk.deleteProductsByType();
// const resultFruitDeleted = userDeletedProductsFruit.deleteProductsByType();
// const resultVegetableDeleted = userDeletedProductsVegetable.deleteProductsByType();
// const resultClothesDeleted = userDeletedProductsClothes.deleteProductsByType();
// const resultBekaryDeleted = userDeletedProductsBekary.deleteProductsByType();

console.log(resultMilkDeleted);
// console.log(resultFruitDeleted);
// console.log(resultVegetableDeleted);
// console.log(resultClothesDeleted);
// console.log(resultBekaryDeleted);


const userProductsMilk = new Products(data, PRODUCT_TYPE.MILK_FOOD);
// const userProductsFruit = new Products(data, PRODUCT_TYPE.FRUIT);
// const userProductsVegetable = new Products(data, PRODUCT_TYPE.VEGETABLE);
// const userProductsClothes = new Products(data, PRODUCT_TYPE.CLOTHES);
// const userProductsBekary = new Products(data, PRODUCT_TYPE.BAKERY);

const resultMilk = userProductsMilk.getProductsByType();
// const resultFruit = userProductsFruit.getProductsByType();
// const resultVegetable = userProductsVegetable.getProductsByType();
// const resultClothes = userProductsClothes.getProductsByType();
// const resultBekary = userProductsBekary.getProductsByType();


console.log(resultMilk);
// console.log(resultFruit);
// console.log(resultVegetable);
// console.log(resultClothes);
// console.log(resultBekary);
//!!Задание 1 и 5

