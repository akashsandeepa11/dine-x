import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, selectCartItems } from "../store/reducers/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const itemId = cartItems.findIndex((itm) => itm.id == item.id);

  return (
    <View className=" flex-row items-center my-3 justify-between">
      <View className="flex-row items-center gap-4">
        <Text className="text-white font-bold text-[18px] rounded-lg">
          {itemId === -1 ? 0 : cartItems[itemId].quantity}x
        </Text>
        <View className=" rounded-[10px] overflow-hidden shadow-lg shadow-black">
          <Image className="w-[60] h-[60] " source={{ uri: item.image }} />
        </View>
        <Text className="text-white font-bold text-[14px] rounded-lg">
          {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </View>

      <View className="gap-4 flex-row items-center">
        <Text className="text-white font-bold text-[14px]">
          ${itemId === -1 ? 0 : cartItems[itemId].quantity * item.price}
        </Text>
        <Pressable onPress={() => dispatch(removeItem(item))}>
          <Ionicons name="ios-close-circle-sharp" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;
