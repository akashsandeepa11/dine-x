import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import CartScreen from "./src/screens/CartScreen";
import OrderPrepairingScreen from "./src/screens/OrderPrepairingScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
import SplashScreen from "./src/screens/SplashScreen";
import ResetPassword from "./src/screens/ResetPassword";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import SearchScreen from "./src/screens/SearchScreen";
import { useState } from "react";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { useSelector } from "react-redux";
import { selectAuth } from "./src/store/reducers/AuthSlice";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  const state = useSelector(selectAuth);

  // if (state.isLoading) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.userId == null ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: "Sign in",
                animationTypeForReplace: state.isSignout ? "pop" : "push",
              }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{
                presentation: "transparentModal",
                animation: "fade_from_bottom",
                animationTypeForReplace: "pop",
              }}
            />
            <Stack.Screen
              name="OrderPrepairing"
              component={OrderPrepairingScreen}
              options={{
                animation: "fade_from_bottom",
                animationTypeForReplace: "pop",
              }}
            />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{ presentation: "fullScreenModal" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
