import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
} from "../store/reducers/CartSlice";
import { Pressable } from "react-native";

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const itemId = cartItems.findIndex((itm) => itm.id == item.id);

  const itemQty = itemId === -1 ? 0 : cartItems[itemId].quantity;

  const addItemToCart = (items) => {
    dispatch(addToCart(items));
  };
  const removeItemFromCart = (items) => {
    dispatch(removeFromCart(items));
  };

  return (
    <View className="px-4">
      <View className="w-full bg-[#2f2f2f] h-[120] mt-4 rounded-[10px] overflow-hidden shadow-lg shadow-black flex-row">
        <Image
          className="w-[120px] h-full rounded-[10px]"
          source={{ uri: item.image }}
        />

        <View className="p-3 justify-between flex-1">
          <View>
            <Text className="text-white font-bold text-[16px]">
              {item.name}
            </Text>
            <Text className="text-white text-[12px]">{item.description}</Text>
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="text-white text-lg font-bold">${item.price}</Text>

            <View className="flex-row s-center p-2 border border-white rounded-[10px] ">
              <Pressable onPress={() => removeItemFromCart(item)}>
                <AntDesign
                  name="minuscircleo"
                  size={22}
                  color={itemQty === 0 ? "gray" : "white"}
                />
              </Pressable>
              <Text className="text-white text-[16px] font-bold px-4">
                {itemQty}
              </Text>
              <Pressable onPress={() => addItemToCart(item)}>
                <AntDesign name="pluscircleo" size={22} color="white" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuItem;
