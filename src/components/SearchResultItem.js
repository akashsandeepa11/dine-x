import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { setRestaurant } from "../store/reducers/RestaurantSlice";

const SearchResultItem = ({ restaurant }) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const setRestaurants = () => {
    navigation.navigate("Restaurant", { restaurant });

    if (restaurant && restaurant.id) {
      dispatch(setRestaurant(restaurant));
    }
  };

  return (
    <View className="ml-4 mt-4">
      <TouchableOpacity
        onPress={() => setRestaurants()}
        className="w-full rounded-[10px] overflow-hidden  shadow-lg shadow-black"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          backgroundColor: "black",
        }}
      >
        <Image source={{ uri: restaurant.image }} className="w-full h-[140]" />
        <View className="p-2">
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
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchResultItem;
