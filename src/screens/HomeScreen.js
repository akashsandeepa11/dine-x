import {
  View,
  Text,
  StatusBar,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";
import CategoryButton from "../components/CategoryButton";
import HomeItemRow from "../components/HomeItemRow";
import { featured } from "../data";
import OfferSwiper from "../components/OfferSwiper";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/reducers/AuthSlice";

const HomeScreen = () => {
  const user = useSelector(selectAuth);

  const foodCategories = [
    { id: 1, category: "Fast food" },
    { id: 2, category: "Desserts" },
    { id: 3, category: "Sweets" },
    { id: 4, category: "Sea food" },
    { id: 5, category: "all" },
  ];

  return (
    <View className="bg-[#161616] flex-1">
      <StatusBar backgroundColor="#161616" barStyle="light-content" />

      {/* Header */}
      <Header />

      <ScrollView>
        {/* Category */}
        <View className="px-4  ">
          <View className="flex-row justify-between">
            <Text className="text-white font-bold text-[16px]">Categories</Text>
            <TouchableOpacity>
              <Text className="text-white text-[12px]">View all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="mt-4"
          >
            {foodCategories.map(({ id, category }) => (
              <CategoryButton key={id} category={category} />
            ))}
          </ScrollView>
        </View>

        {/* Home down area */}

        <View className="flex-1 py-4 mt-5 bg-[#2f2f2f] rounded-[10px] ">
          {/* Featured Restaurant */}
          {featured[0] && <HomeItemRow item={featured[0]} />}

          {/* Offer area */}
          <OfferSwiper />

          {featured[1] && <HomeItemRow item={featured[1]} />}
          {featured[2] && <HomeItemRow item={featured[2]} />}
          {featured[3] && <HomeItemRow item={featured[3]} />}
          {featured[4] && <HomeItemRow item={featured[4]} />}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
