import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CategoryButton = ({ category }) => {
  return (
    <TouchableOpacity className="p-2 border border-white rounded-[10px] mr-3">
      <Text className="text-white">{category}</Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
