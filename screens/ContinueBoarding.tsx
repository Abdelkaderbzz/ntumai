import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView, // <-- Add ScrollView for better content experience
} from "react-native";
import AppText from "../components/AppText";
import { Circle, CircleCheckBig } from "lucide-react-native";

const ContinueBoardingScreen = ({ navigation }: any) => {
  const [selectedOption, setSelectedOption] = useState("order");
  const handleOptionSelect = (option: string) => setSelectedOption(option);

  return (
    <ImageBackground
      source={require("../assets/splash_style.png")}
      className="flex-1"
      resizeMode="cover"
    >
      <View className="flex-1 bg-white justify-between">
        {/* Main Content - put in a ScrollView if you want it to be scrollable */}
        <ScrollView
          contentContainerStyle={{ paddingBottom: 32 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header with logo */}
          <View className="items-center mt-2">
            <Image
              source={require("../assets/logo_green.png")}
              resizeMode="contain"
              className="w-100 h-50 mb-10 mt-10"
            />
          </View>

          {/* Congratulations text */}
          <View className="px-6 mb-8">
            <AppText
              className="text-primary text-3xl font-bold text-left mb-2"
              style={{ fontFamily: "Ubuntu-Bold" }}
            >
              Congratulations,
            </AppText>
            <AppText
              className="text-primary text-3xl font-bold text-left mb-8"
              style={{ fontFamily: "Ubuntu-Bold" }}
            >
              You are ready to start!
            </AppText>
          </View>

          {/* Sanka che section */}
          <View className="mb-6 h-32 overflow-hidden">
            <ImageBackground
              source={require("../assets/splash_style.png")}
              className="h-full justify-center"
              resizeMode="cover"
            >
              <View
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(2, 132, 130, 0.7)" }}
              />
              <View className="p-10 z-10">
                <AppText
                  className="text-white text-2xl"
                  style={{ fontFamily: "Ubuntu-Bold" }}
                >
                  Sanka che!
                </AppText>
                <AppText
                  className="text-white text-2xl"
                  style={{ fontFamily: "Ubuntu-Bold" }}
                >
                  What will be{" "}
                  <AppText
                    className="text-secondary"
                    style={{ fontFamily: "Ubuntu-Bold" }}
                  >
                    doing?
                  </AppText>
                </AppText>
              </View>
            </ImageBackground>
          </View>

          {/* Two option buttons */}
          <View className="flex-row mx-6 mb-8 mt-20 gap-2 space-x-3">
            {/* Order Deliveries Option */}
            <TouchableOpacity
              className="flex-1 bg-primary rounded-xl p-8"
              onPress={() => handleOptionSelect("order")}
            >
              <View className="flex-row justify-between items-center w-full">
                <View>
                  <AppText
                    className="text-white text-base text-left font-medium"
                    style={{ fontFamily: "Ubuntu-Bold" }}
                  >
                    Order Deliveries
                  </AppText>
                  <AppText
                    className="text-white text-xs opacity-80 text-left"
                    style={{ fontFamily: "Ubuntu-Bold" }}
                  >
                    within 30 min
                  </AppText>
                </View>
                <View className="items-center justify-center">
                  {selectedOption === "order" ? (
                    <CircleCheckBig size={20} color={"white"} />
                  ) : (
                    <Circle size={20} color={"white"} />
                  )}
                </View>
              </View>
            </TouchableOpacity>

            {/* Register as a Biker Option */}
            <TouchableOpacity
              className="flex-1 bg-yellow-100 rounded-xl p-8"
              onPress={() => handleOptionSelect("register")}
            >
              <View className="flex-row justify-between items-center w-full">
                <View>
                  <AppText
                    className="text-primary text-base font-medium text-left"
                    style={{ fontFamily: "Ubuntu-Bold" }}
                  >
                    Register as a biker
                  </AppText>
                  <AppText
                    className="text-gray-500 text-xs opacity-80 text-left"
                    style={{ fontFamily: "Ubuntu-Bold" }}
                  >
                    Earn money delivering orders
                  </AppText>
                </View>
                <View className="items-center justify-center">
                  {selectedOption === "register" ? (
                    <CircleCheckBig size={20} color={"green"} />
                  ) : (
                    <Circle size={20} color={"green"} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Continue button fixed at the bottom */}
        <View className="mx-6 mb-12">
          <TouchableOpacity
            className="bg-primary rounded-xl py-4 items-center"
            onPress={() => navigation.navigate("DriverHome")}
          >
            <AppText
              className="text-white text-lg font-semibold"
              style={{ fontFamily: "Ubuntu-Bold" }}
            >
              Continue
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ContinueBoardingScreen;
