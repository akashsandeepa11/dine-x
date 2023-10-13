import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import CartItem from "../components/CartItem";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../store/reducers/RestaurantSlice";
import { selectCartItems } from "../store/reducers/CartSlice";

const CartScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);

  const deliveryFee = 2;

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <View className="w-full h-full pt-4 bg-[#2f2f2f] relative">
      <StatusBar backgroundColor="#2f2f2f" barStyle="light-content" />

      {/* Cart close Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
        className="p-[6px] rounded-[10px] bg-black border border-white absolute top-4 right-4"
      >
        <Ionicons name="md-close" size={18} color="white" />
      </TouchableOpacity>

      <Text className="text-white font-bold text-3xl mt-3 text-center">
        Your cart
      </Text>
      <Text className="text-white font-bold text-md  text-center">
        {restaurant.name}
      </Text>

      <View className="w-full h-[60] my-5">
        <Image
          className="w-[140] h-[100] z-[10] absolute bottom-[-15] left-5"
          source={require("./../../assets/images/cartImage.png")}
        />
        <View className="bg-[#ff1411] w-full flex-1">
          <Text className="text-white text-[15px] text-right font-bold my-auto ml-[100] mr-4">
            Delivery in 20-30 minutes
          </Text>
        </View>
      </View>
      <Text className="text-white font-bold text-[18px] mt-4 mb-2 px-4">
        5 items in your cart
      </Text>
      {/* {console.log(restaurant)} */}

      {/* cart item */}
      <ScrollView className="px-4 ">
        {cartItems?.map((item, id) => (
          <CartItem key={id} item={item} />
        ))}
      </ScrollView>

      {/* Cart down */}
      <View className=" px-4 pt-1 gap-4 bg-[#161616]">
        <View className="flex-row justify-between items-center">
          <Text className="text-white font-medium text-[16px]">Subtotal</Text>
          <Text className="text-white font-medium text-[16px]">
            ${totalPrice}
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-white font-medium text-[16px]">
            Delivery Fee
          </Text>
          <Text className="text-white font-medium text-[16px]">
            ${deliveryFee}
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-white font-bold text-[16px]">Total</Text>
          <Text className="text-white font-bold text-[16px]">
            ${totalPrice + deliveryFee}
          </Text>
        </View>

        {/* Place oder button */}
        <Pressable
          onPress={() => navigation.navigate("OrderPrepairing", { restaurant })}
          activeOpacity={1}
          className=" flex-row items-center bg-[#FF1411] p-4 my-3 rounded-[10px] active:bg-red-500 "
        >
          <Text className="text-white text-center font-bold text-[18px] flex-1">
            Place Order
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartScreen;
