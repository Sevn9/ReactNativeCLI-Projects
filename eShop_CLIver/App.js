import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/homeScreen/HomeScreen';

import 'react-native-gesture-handler';
import ItemScreen from './screens/itemScreen/ItemScreen';
import CartSreen from './screens/cartScreen/CartScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  const RootStackDrawer = createDrawerNavigator();
  const HomeStack = createNativeStackNavigator();

  const HomeScreenStack = () => {
    return (
      <HomeStack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{drawerPosition: 'left', headerShown: false}}>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen name="ItemScreen" component={ItemScreen} />
      </HomeStack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <RootStackDrawer.Navigator
        initialRouteName="HomeScreenStack"
        //screenOptions={{ drawerLabel: "Home" }}
      >
        <RootStackDrawer.Screen name="Home" component={HomeScreenStack} />
        <RootStackDrawer.Screen name="Cart" component={CartSreen} />
      </RootStackDrawer.Navigator>
    </NavigationContainer>
  );
}
