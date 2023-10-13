import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

export default class OfferSwiper extends Component {
  render() {
    return (
      <View className="w-full h-[200] mb-3 mt-1">
        <Swiper autoplay={true}>
          <TouchableOpacity className="mx-4 rounded-[12px] overflow-hidden">
            <Image
              className="w-full h-full"
              source={require("../../assets/offers/afe571a58445a_415745.png_list.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity className="mx-4 rounded-[12px] overflow-hidden">
            <Image
              className="w-full h-full"
              source={require("../../assets/offers/Rajdhani-Hamiltin-banner.jpg.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity className="mx-4 rounded-[12px] overflow-hidden">
            <Image
              className="w-full h-full"
              source={require("../../assets/offers/Swiggy-Banner.png")}
            />
          </TouchableOpacity>
        </Swiper>
      </View>
    );
  }
}
