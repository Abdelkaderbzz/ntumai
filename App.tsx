import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import SplashScreenComponent from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import SelectMethodScreen from './screens/SelectMethodScreen';
import OtpInputScreen from './screens/OtpInputScreen';
import LoginScreen from './screens/LoginScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ContinueSignUpScreen from './screens/ContinueSignUpScreen';
import ContinueBoardingScreen from './screens/ContinueBoarding';
import HomeTabs from './screens/home/HomeTabs';

import {
  CartScreen,
  ProductDetailScreen,
  RestaurantDetailScreen,
} from './screens/home/MarketplaceScreen';
import { CheckoutScreen } from './screens/checkout/CheckoutScreen';
import { OrderTrackingScreen } from './screens/checkout/steps/OrderTrackingScreen';
import { RateOrderScreen } from './screens/checkout/steps/RateOrderScreen';
import VendorTabs from './screens/vendor/VendorTabs';
import EditProductScreen from './screens/home/EditProductScreen';
import CreatePromotion from './screens/CreatePromotion';
import PreviewPromotion from './screens/PreviewPromotion';
import CreateCategory from './screens/CreateCategory';
import CreateBrand from './screens/CreateBrand';
import {
  DriverDashboard,
  DriverEarnings,
  DriverHome,
  DriverOrders,
  DriverRoutes,
} from './screens/driver';
import DriverSettings from './screens/driver/DriverProfile';
import VenderProducts from './screens/vendor/VendorProducts';
import OrderDeliveryFirstStep from './screens/driver/deliveries/OrderDeliveryFirstStep';
import OrderDeliveryLastStep from './screens/driver/deliveries/OrderDeliveryLastStep';
import OrderDeliverySecondStep from './screens/driver/deliveries/OrderDeliverySecondStep';
import { AddLocation } from './screens/checkout/steps/AddLocation';

SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  SelectMethod: undefined;
  Otp: { method: 'phone' | 'email'; value: string };
  Login: undefined;
  ContinueSignUp: undefined;
  ContinueBoarding: undefined;
  Home: undefined;
  DriverHome: undefined;
  DriverDashboard: undefined;
  DriverOrders: undefined;
  DriverRoutes: undefined;
  DriverEarnings: undefined;
  DriverSettings: undefined;
  RestaurantDetail: undefined;
  ProductDetail: undefined;
  Cart: undefined;
  Checkout: undefined;
  OrderTracking: undefined;
  RateOrder: undefined;
  AddLocation: undefined;
  AdminDashboard: undefined;
  VendorDashboard: undefined;
  CreatePromotion: undefined;
  PreviewPromotion: undefined;
  EditProduct: undefined;
  CreateBrand: undefined;
  OrderDeliveryFirstStep: undefined;
  OrderDeliverySecondStep: undefined;
  OrderDeliveryLastStep: undefined;
  ProductScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='Splash'
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name='Home' component={HomeTabs} />
              <Stack.Screen name='Splash' component={SplashScreenComponent} />
              <Stack.Screen name='Onboarding' component={OnboardingScreen} />
              <Stack.Screen
                name='SelectMethod'
                component={SelectMethodScreen}
              />
              <Stack.Screen name='Otp' component={OtpInputScreen} />
              <Stack.Screen
                name='ContinueSignUp'
                component={ContinueSignUpScreen}
              />
              <Stack.Screen
                name='ContinueBoarding'
                component={ContinueBoardingScreen}
              />
              <Stack.Screen name='Login' component={LoginScreen} />

              <Stack.Screen
                name='DriverHome'
                component={DriverHome}
                options={{
                  headerShown: false,
                  animation: 'slide_from_right',
                }}
              />
              <Stack.Screen
                name='DriverDashboard'
                component={DriverDashboard}
                options={{
                  headerShown: false,
                  animation: 'slide_from_right',
                }}
              />
              <Stack.Screen
                name='DriverOrders'
                component={DriverOrders}
                options={{
                  headerShown: false,
                  animation: 'slide_from_right',
                }}
              />
              <Stack.Screen
                name='DriverRoutes'
                component={DriverRoutes}
                options={{
                  headerShown: false,
                  animation: 'slide_from_right',
                }}
              />
              <Stack.Screen
                name='DriverEarnings'
                component={DriverEarnings}
                options={{
                  headerShown: false,
                  animation: 'slide_from_right',
                }}
              />
              <Stack.Screen
                name='DriverSettings'
                component={DriverSettings}
                options={{
                  headerShown: false,
                  animation: 'slide_from_right',
                }}
              />

              <Stack.Screen
                name='RestaurantDetail'
                component={RestaurantDetailScreen}
                options={{
                  headerShown: false,
                  animation: 'slide_from_right',
                }}
              />
              <Stack.Screen
                name='ProductDetail'
                component={ProductDetailScreen}
                options={{
                  headerShown: false,
                  animation: 'slide_from_right',
                }}
              />
              <Stack.Screen
                name='Cart'
                component={CartScreen}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='Checkout'
                component={CheckoutScreen}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='OrderTracking'
                component={OrderTrackingScreen}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='RateOrder'
                component={RateOrderScreen}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='AddLocation'
                component={AddLocation}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />

              <Stack.Screen
                name='EditProduct'
                component={EditProductScreen}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='CreatePromotion'
                component={CreatePromotion}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='PreviewPromotion'
                component={PreviewPromotion}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='OrderDeliveryFirstStep'
                component={OrderDeliveryFirstStep}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='OrderDeliverySecondStep'
                component={OrderDeliverySecondStep}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='OrderDeliveryLastStep'
                component={OrderDeliveryLastStep}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='CreateCategory'
                component={CreateCategory}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='CreateBrand'
                component={CreateBrand}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='ProductScreen'
                component={VenderProducts}
                options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                }}
              />
              <Stack.Screen
                name='VendorDashboard'
                component={VendorTabs}
                options={{
                  headerShown: false,
                  animation: 'slide_from_right',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
