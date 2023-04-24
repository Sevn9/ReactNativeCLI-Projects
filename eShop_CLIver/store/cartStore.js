//store корзины
import {makeAutoObservable} from 'mobx';

class Cart {
  // инициируем массив объектов
  cartItems = {};
  cartItemsV2 = [];

  // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
  constructor() {
    makeAutoObservable(this);
  }

  addCart(id) {
    const isProductInCart = this.cartItems[id];
    if (isProductInCart) {
      let prevQuantity = this.cartItems[id];

      this.cartItems[id] = prevQuantity + 1;
    } else {
      this.cartItems[id] = 1;
    }
  }
  addCartV2(id) {
    console.log('id');
    let value = 1;
    console.log(id);
    console.log(value);
  }
}

export default new Cart();
