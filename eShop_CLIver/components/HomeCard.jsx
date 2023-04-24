import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {Card, Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import productStore from '../store/productStore';

const HomeCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('ItemScreen', {
          itemId: item.id,
        })
      }>
      <Text style={styles.textTitle}>{item.title}</Text>
      <Card.Divider />
      <Image
        style={{width: '100%', height: 250}}
        resizeMode="contain"
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.cardInfo}>
        {item.isLiked ? (
          <>
            <TouchableOpacity
              style={styles.iconStyle}
              onPress={() => productStore.setLike(item.id)}>
              <Icon raised name="favorite" type="material-icons" color="#f50" />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.iconStyle}
              onPress={() => productStore.setLike(item.id)}>
              <Icon
                raised
                name="favorite-border"
                type="material-icons"
                color="#f50"
              />
            </TouchableOpacity>
          </>
        )}

        <View style={styles.textContainer}>
          <Text style={styles.textPrice}>Цена: {item.price} ₽</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginTop: 10,
    padding: '5%',
    borderRadius: 20,

    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  cardInfo: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    padding: '1%',
  },
  textContainer: {
    marginLeft: '2%',
    width: '78%',
    alignItems: 'flex-end',
  },
  textPrice: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  iconStyle: {
    height: 'auto',
    width: '20%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  fonts: {
    marginBottom: 8,
  },

  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
