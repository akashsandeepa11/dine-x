import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { featured } from "../data";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ input, setInput }) => {
  const navigation = useNavigation();

  const data = featured;

  const filteredRestaurants = data[0].restaurants.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <View className="px-3">
      {input ? (
        filteredRestaurants.length > 0 ? (
          <Text className="text-gray-300">
            Showing {filteredRestaurants.length} results
          </Text>
        ) : (
          <Text className="text-center text-gray-300">
            Oops, No result found!
          </Text>
        )
      ) : (
        <Text className="text-gray-300">Popular Searches</Text>
      )}
      <View className="gap-5">
        <FlatList
          data={data[0].restaurants}
          renderItem={({ item }) => {
            if (item.name.toLowerCase().includes(input.toLowerCase())) {
              if (input === "") {
                return null;
              }
              return <SearchResultItem restaurant={item} key={item.id} />;
            }
          }}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default SearchResults;
