import { Image, Pressable, StatusBar, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

const DeliveryScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { restaurant } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#2f2f2f" barStyle="light-content" />
      <MapView
        style={{ flex: 3 }}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        // initialRegion={{ latitude: restaurant.lat, longitude: restaurant.lng }}
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.lng }}
          title={restaurant.name}
          description={restaurant.description}
        />
      </MapView>

      {/* footer section */}
      <View className="flex-2 w-screen bg-[#2F2F2F] justify-center rounded-t-[10px]">
        <View className="flex-row justify-between  px-4 pt-5">
          <View>
            <Text className="text-[18px] font-medium text-white">
              Estimated Arrival
            </Text>
            <Text className="text-white text-[32px] font-bold">
              20-30 Minutes
            </Text>
            <Text className="text-white text-[14px] font-medium">
              Your order is own its way!
            </Text>
          </View>
          <Image
            className="w-[90] h-[90] m-2"
            source={{
              uri: "https://media0.giphy.com/media/7qWF0zp5sXDFyqup0y/giphy.gif?cid=6c09b95263si4fhn1ix0bbhxxapu6ishuhrxx56j0sie0tgo&ep=v1_stickers_related&rid=giphy.gif&ct=s",
            }}
          />
        </View>

        <View className="flex-row bg-black rounded-[10px] p-3 justify-between">
          <View className="flex-row items-center">
            <Image
              className="w-[70] h-[70] rounded-[10px] border border-[#2f2f2f]"
              source={{
                uri: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/57374d71284487.5bc0cf70dd323.png",
              }}
            />
            <View className="p-2">
              <Text className="text-white text-[16px] font-bold">
                Akash Sandeepa
              </Text>
              <Text className="text-white text-[14px] font-medium">
                Your Rider
              </Text>
            </View>
          </View>

          <View className="flex-row items-center gap-5 pr-2">
            <Pressable className="bg-white rounded-full p-2 active:bg-gray-400">
              <Ionicons name="call" size={24} color="black" />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("Home")}
              className="bg-white active:bg-gray-400 rounded-full p-2"
            >
              <Ionicons name="close" size={24} color="black" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
