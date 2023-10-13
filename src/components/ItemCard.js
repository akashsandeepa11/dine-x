import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../store/reducers/RestaurantSlice";

const ItemCard = ({ restaurant }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const setRestaurants = () => {
    navigation.navigate("Restaurant", { restaurant });

    if (restaurant && restaurant.id) {
      dispatch(setRestaurant(restaurant));
    }
  };

  return (
    <TouchableOpacity
      onPress={() => setRestaurants()}
      className="w-[250] rounded-[10px] overflow-hidden mr-4 bg-[#161616] shadow-lg shadow-black"
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
    >
      <Image source={{ uri: restaurant.image }} className="w-full h-[140]" />
      <View className="p-3">
        <View className="flex-row items-center justify-between">
          <Text className="text-white font-bold text-[16px]">
            {restaurant.name}
          </Text>
          <View className="flex-row items-center">
            <AntDesign name="star" size={14} color="#FFCC00" />
            <Text className="text-white text-[12px] ml-1">
              {restaurant.rating}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between mt-1">
          <View className="flex-row items-center">
            <FontAwesome5 name="map-marker-alt" size={12} color="white" />
            <Text className="text-white text-[12px] ml-1">
              {restaurant.address.length > 20
                ? restaurant.address.slice(0, 20) + "..."
                : restaurant.address}
            </Text>
          </View>
          <Text className="text-white text-[12px] ml-1 font-bold">
            {restaurant.category}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
