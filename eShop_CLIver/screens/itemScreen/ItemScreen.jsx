import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Icon} from '@rneui/themed';
import productStore from '../../store/productStore';
import cartStore from '../../store/cartStore';

const ItemScreen = ({route}) => {
  const {itemId} = route.params;
  const navigation = useNavigation();
  const model = productStore.getById(itemId);
  const [isLiked, setIsLiked] = useState(model.isLiked);
  const setLikeFunc = id => {
    productStore.setLike(id);
    setIsLiked(!isLiked);
  };
  const addToCart = id => {
    cartStore.addCart(id);
    console.log('cart added id:', id);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          style={styles.imageItem}
          resizeMode="contain"
          source={{
            uri: model.image,
          }}
        />
        <Text style={styles.textName}>{model.title}</Text>
        <Text style={styles.textPrice}>Цена: {model.price} ₽</Text>
        <View style={styles.section}>
          {isLiked ? (
            <>
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => setLikeFunc(model.id)}>
                <Icon
                  raised
                  name="favorite"
                  type="material-icons"
                  color="#f50"
                />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => setLikeFunc(model.id)}>
                <Icon
                  raised
                  name="favorite-border"
                  type="material-icons"
                  color="#f50"
                />
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.border} />
        <View style={styles.textDescriptionContainer}>
          <Text style={styles.textDescription}>{model.description}</Text>
        </View>
        <View style={styles.border} />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.buttonBack}>
              <Text style={styles.textButton}>Назад</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToCart(model.id)}>
            <View style={styles.buttonAdd}>
              <Text style={styles.textButton}>Добавить в корзину</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ItemScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageItem: {
    width: 300,
    height: 300,
    marginTop: '5%',
  },
  textName: {
    fontSize: 25,
    marginTop: '1%',
    fontWeight: 'bold',
  },
  textPrice: {
    fontSize: 30,
    color: '#fe931b',
    fontWeight: 'bold',
    marginTop: 10,
  },
  textDescriptionContainer: {
    marginHorizontal: 30,
  },
  textDescription: {
    fontSize: 20,
    color: 'gray',
  },
  section: {
    flexDirection: 'row',
    marginTop: 10,
  },

  border: {
    marginTop: 15,
    borderWidth: 0.5,
    width: '90%',
    borderColor: 'gray',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 60,
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonAdd: {
    height: 60,
    width: 200,
    marginLeft: 10,
    borderRadius: 50,
    backgroundColor: '#fe931b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBack: {
    height: 60,
    width: 105,
    borderRadius: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});
