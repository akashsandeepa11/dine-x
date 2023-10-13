import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";

const SearchBar = ({ input, setInput }) => {
  const navigation = useNavigation();

  return (
    <View className="px-4 my-4 flex-row items-center ">
      <TouchableOpacity onPress={() => navigation.goBack()} className="mr-2">
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>

      {/* Search Bar and location Bar */}
      <View className="flex-1 py-3 border border-gray-800 bg-[#1a1a1a] flex-row  items-center rounded-[12px] justify-between px-4">
        {/* Search */}

        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholderTextColor={"gray"}
          style={{ fontSize: 14, color: "gray" }}
          placeholder="Restaurant"
        />
        <Pressable onPress={() => setInput("")}>
          <Ionicons name="ios-close-circle-sharp" size={24} color="gray" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: "#718096",
    fontSize: 14,
  },
});

export default SearchBar;
