import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import ProductStore from '../../store/productStore';
import CartStore from '../../store/cartStore';

const CartSreen = observer(() => {
  const Plus = () => {
    setCount(prevCount => prevCount + 1);
    console.log('товар добавлен');
  };
  //const Minus = () =>
  //  setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  // узнать сколько всего товаров в корзине
  function sumItems(items) {
    let sum = 0;
    for (let value of Object.values(items)) {
      sum += value;
    }

    return sum;
  }
  const SumItemsResult = sumItems(CartStore.cartItems);
  console.log('Товаров в корзине: ', SumItemsResult);
  //проверить какие товары и сколько в корзине
  const CheckCart = () => {
    for (const key in CartStore.cartItems) {
      if (CartStore.cartItems.hasOwnProperty(key)) {
        console.log(`key: ${key}, value: ${CartStore.cartItems[key]}`);
      }
    }
  };

  const renderCartList = ({item}) => (
    <>
      <View style={styles.flatContainer}>
        <View style={styles.itemContainer}>
          <Image
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'white',
              marginRight: 5,
            }}
            resizeMode="contain"
            source={{
              uri: item.image,
            }}
          />
          <View style={styles.title}>
            <Text style={styles.textTitle}>{item.title}</Text>
          </View>
          <View style={styles.elementsContainer}>
            <View style={styles.priceContainer}>
              <Text style={styles.textPrice}>{item.price} ₽</Text>
            </View>

            <View style={styles.fixToText}>
              <TouchableOpacity
                style={styles.counterButton}
                onPress={() => console.log('товар удален')}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <View style={styles.countContainer}>
                <Text style={styles.buttonText}>{item.count}</Text>
              </View>
              <TouchableOpacity
                style={styles.counterButton}
                onPress={() => console.log('товар добавлен')}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
  const Footer_Component = () => {
    return (
      <View
        style={{
          height: 44,
          width: '100%',
          backgroundColor: '#00BFA5',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={{fontSize: 24, color: 'white'}}>
          {' '}
          Sample FlatList Footer{' '}
          <TouchableOpacity onPress={() => CheckCart()}>
            <Text>press to check</Text>
          </TouchableOpacity>
        </Text>
        <View>
          <Text>
            Сумма:{' '}
            {ProductStore.products
              .filter(x => CartStore.cartItems[x.id])
              .map(x => x.price)
              .reduce((partialSum, a) => partialSum + a, 0)}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <FlatList
        contentContainerStyle={
          {
            //backgroundColor: "blue",
          }
        }
        //extraData={Object.keys(CartStore.cartItems).length}
        data={ProductStore.products
          .filter(x => CartStore.cartItems[x.id])
          .map(x => Object.assign(x, {count: CartStore.cartItems[x.id]}))}
        renderItem={renderCartList}
        keyExtractor={item => item.id}
        ListFooterComponent={Footer_Component}
      />
    </>
  );
});

export default CartSreen;

const styles = StyleSheet.create({
  flatContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 4,
    marginHorizontal: 0,
  },
  itemContainer: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 10,
    padding: '2%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    flex: 1,
    backgroundColor: 'white',
    marginRight: 5,
  },
  textPrice: {
    fontSize: 25,
  },
  priceContainer: {
    marginTop: 15,
  },
  elementsContainer: {
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 17,
  },
  containerCounter: {
    alignItems: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  counterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,

    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  countContainer: {
    alignItems: 'center',
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
  },
});
