import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "react-native";

const OrderPrepairingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { restaurant } = route.params;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery", { restaurant });
    }, 3000);
  });
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Image
        className="w-[300] h-[300] mb-[50]"
        source={{
          uri: "https://github.com/syednomishah/Food-Delivery-App-React-Native/blob/main/client/assets/images/delivery.gif?raw=true",
        }}
      />
    </View>
  );
};

export default OrderPrepairingScreen;
