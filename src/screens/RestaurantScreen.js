import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import MenuItem from "../components/MenuItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurant,
  setRestaurant,
} from "../store/reducers/RestaurantSlice";
import { emptyCart, selectCartItems } from "../store/reducers/CartSlice";

const RestaurantScreen = () => {
  const route = useRoute();
  const { restaurant } = route.params;
  const navigation = useNavigation();

  const [cartButton, setCartButton] = useState(true);

  const item = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);

  const totalQuantity = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.quantity;
  }, 0);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart());
  }, []);

  return (
    <View className=" relative flex-1 bg-[#161616]">
      <StatusBar backgroundColor="#161616" barStyle="light-content" />
      <ScrollView className=" flex-1 py-4 ">
        <View className="px-4 ">
          <View className="w-full h-[180] rounded-[10px] overflow-hidden relative">
            <Image
              className="w-full h-full"
              source={{ uri: item.image && item.image }}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              className="p-[6px] rounded-[10px] bg-black border border-white absolute top-2 right-2"
            >
              <Ionicons name="md-close" size={18} color="white" />
            </TouchableOpacity>
          </View>

          <Text className="text-white font-bold text-3xl mt-4">
            {item.name}
          </Text>

          <View className="flex-row items-center">
            <TouchableOpacity className="flex-row items-center">
              <AntDesign name="star" size={16} color="#FFCC00" />
              <Text className="text-white ml-1 text-md">
                {item.rating} ({" "}
                {item.reviews > 1000
                  ? `${(item.reviews / 1000).toFixed(1)}K`
                  : item.reviews}{" "}
                reviews)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center ml-3">
              <FontAwesome5 name="map-marker-alt" size={16} color="white" />
              <Text className="text-white ml-1 text-md">
                {item.address.length > 26
                  ? item.address.slice(0, 26) + "..."
                  : item.address}
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-white text-[15px] mt-1 text-justify">
            {item.description}
          </Text>
        </View>

        {/* Menu */}
        <View className="border-t border-gray-500 mt-6 mx-4">
          <Text className="text-white font-bold text-2xl mt-3">Menu</Text>
        </View>
        {item.dishes?.map((item, id) => (
          <MenuItem key={id} item={item} />
        ))}
        <View className={totalQuantity !== 0 ? "my-[60]" : "my-[20]"}></View>
      </ScrollView>

      {/* Add to Cart Button */}
      {totalQuantity != 0 ? (
        <Pressable
          onPress={() => navigation.navigate("Cart", { item })}
          activeOpacity={1}
          className=" flex-row items-center absolute bottom-0 bg-[#FF1411] p-4 my-3  w-full rounded-[10px] active:bg-red-500"
        >
          <View>
            <Text className="text-white text-lg font-bold ">
              {totalQuantity}
            </Text>
          </View>
          <Text className="text-white text-center font-bold text-[18px] flex-1">
            Add to Cart
          </Text>
          <Text className="text-white text-lg font-bold">${totalPrice}</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default RestaurantScreen;
