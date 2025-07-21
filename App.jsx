import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './screens/ProductDetails';
import CartScreen from './screens/CartScreen';
import { CartContext, CartProvider } from './context/CartContext';
import { useContext } from 'react';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()


function Home() {
  return (
    <View>
      <Text>hiiiiiiiiiiiiiiii</Text>

    </View>
  )
}

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='PRODUCT_DETAILS' component={ProductDetails} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
          }}
        >
          <Tab.Screen
            name='HOME_STACK'
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <Entypo name={'home'} size={size} color={color} />
              }
            }} />
          <Tab.Screen
            name='REORDER'
            component={Home}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <FontAwesome name={'reorder'} size={size} color={color} />
              }
            }} />
          <Tab.Screen
            name='CART'
            component={CartScreen}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                const { carts } = useContext(CartContext)
                return (
                  <View style={{ position: "relative" }}>
                    <AntDesign name={'shoppingcart'} size={size} color={color} />
                    <View style={{
                      height: 12,
                      width: 12,
                      borderRadius: 10,
                      backgroundColor: "red",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: -5,
                      right: -5,
                    }}>
                      <Text style={{ fontSize: 8, color: "white", fontWeight: 500, }}>{carts?.length}</Text>
                    </View>
                  </View>
                )
              }
            }}
          />
          <Tab.Screen
            name='ACCOUNT'
            component={Home}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <AntDesign name={'user'} size={size} color={color} />
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
