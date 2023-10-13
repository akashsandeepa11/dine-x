import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import ItemCard from "./ItemCard";

const HomeItemRow = ({ item }) => {
  return (
    <View>
      <View className="px-4 flex-row justify-between">
        <Text className="text-white font-bold text-[16px]">{item.title}</Text>
        <TouchableOpacity>
          <Text className="text-white  text-[14px]">View all</Text>
        </TouchableOpacity>
      </View>

      {/* Card */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="px-4 flex-row my-3">
          {item.restaurants.map((restaurant) => (
            <ItemCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeItemRow;
