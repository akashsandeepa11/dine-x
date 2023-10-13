import { View, Text } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "react-native";
import SearchResults from "../components/SearchResults";

const SearchScreen = () => {
  const [input, setInput] = useState("");

  return (
    <View className="bg-[#161616] flex-1">
      <StatusBar backgroundColor="#161616" barStyle="light-content" />
      <SearchBar input={input} setInput={setInput} />
      <View className="">
        <SearchResults input={input} setInput={setInput} />
      </View>
    </View>
  );
};

export default SearchScreen;
