import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useLocation from "../hooks/useLocation";

const Header = () => {
  const navigation = useNavigation();
  const { address, errorMsg } = useLocation();

  return (
    <View className="px-4 my-4 flex-row items-center ">
      <TouchableOpacity className="mr-2">
        <Ionicons name="md-menu" size={30} color="white" />
      </TouchableOpacity>

      {/* Search Bar and location Bar */}
      <View className="flex-1 py-3 border border-gray-800 bg-[#1a1a1a] flex-row  items-center rounded-[12px] divide-x divide-slate-600 ">
        {/* Search */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          className="flex-row items-center px-2 flex-[9]"
        >
          <Feather name="search" size={18} color="white" />
          <Text className=" ml-2 text-gray-500 text-[14px]">Restaurant</Text>
        </TouchableOpacity>
        {/* Location */}
        <TouchableOpacity className="w-screen flex-row justify-center items-center px-2 flex-[11]">
          <FontAwesome5 name="map-marker-alt" size={16} color="white" />
          <Text className="  ml-2 text-gray-500 text-[14px]">
            {address
              ? address[0].subregion + ", " + address[0].isoCountryCode
              : "Location"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
