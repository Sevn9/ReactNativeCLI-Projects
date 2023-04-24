// store продукта
import {makeAutoObservable} from 'mobx';

class Product {
  // инициируем массив объектов
  products = [
    {
      id: '01',
      title: '14 Ультрабук HUAWEI MateBook D 14 NbD-WDI9 серебристый',
      price: 42999,
      description:
        'HUAWEI MateBook D 14 оснащен ярким IPS-экраном с разрешением 1920 × 1080 пикселей, который обрамлен узкой рамкой шириной всего 4,8 мм. Благодаря почти полному отсутствию рамки 14-дюймовый экран ноутбука кажется бесконечным. А ощущения при просмотре фильма на ноутбуке с углом обзора 178° сравнимы с походом в кинотеатр. Даже простая отправка электронного письма станет комфортнее благодаря яркому экрану с четким изображением.',
      image:
        'https://c.dns-shop.ru/thumb/st4/fit/500/500/23486ed690e0aa334d54e59d50413fe3/0ecf45c4172a57b5d2636530987139a3aa78c6c215eca45a1195fe6d4fcdb57a.jpg.webp',
      isLiked: false,
    },
    {
      id: '02',
      title: '14 Ультрабук Acer Swift 3 SF314-511-32P8 серебристый',
      price: 43999,
      description:
        'Добейтесь максимальных результатов благодаря легкому ноутбуку Swift 3, разработанному на базе платформы Intel Evo и обеспечивающему исключительные возможности работы где угодно. Благодаря длительному времени автономной работы ноутбук станет для вас надежным помощником в дороге, обеспечивая расширенные возможности. Наслаждайтесь высокой скоростью.',
      image:
        'https://c.dns-shop.ru/thumb/st4/fit/500/500/1b548f37fc0fb464624d70d6fd553fb9/c0e21a1f085760284300ea3372fd7c6281d029406050935ef210806c3229556a.jpg.webp',
      isLiked: false,
    },
  ];

  // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
  constructor() {
    makeAutoObservable(this);
  }

  // стор в mobx мутабельный, поэтому просто пушим в него новую задачу
  createProduct(product) {
    this.products.push(product);
  }

  setLike(id) {
    this.products = this.products.map(product =>
      product.id === id ? {...product, isLiked: !product.isLiked} : product,
    );
  }
  getById(id) {
    let prodList = this.products.filter(product => product.id === id);
    if (prodList == null || prodList.length == 0) {
      return null;
    }
    return prodList[0];
  }
  // удаляем по id задачу, отфильтрованный массив по id
  deleteProduct(id) {
    this.products = this.products.filter(product => product.id !== id);
  }

  // ставим  true completed выполненной задаче или false в противном случае
  likeProduct(id) {
    this.products = this.products.map(product =>
      product.id === id ? {...product, liked: !product.liked} : product,
    );
  }
}

export default new Product();
