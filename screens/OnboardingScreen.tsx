import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../src/components/ui/Button";


type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Onboarding"
>;

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  return (
    <View className="flex-1">
      <View className="flex-1 bg-white justify-center items-center p-6">
        <Image
          source={require("../assets/onboarding_image.png")}
          className="w-70 h-64 mb-6"
          resizeMode="contain"
        />
        <Text className="text-primary text-4xl font-bold text-left mb-4">
          Quick Deliveries at your fingertips
        </Text>
        <Text className="text-gray-600 text-base text-left mb-6 font-ubuntu">
          Find your favorite Meals at the best prices with exclusive deals only
          on alimnts app.
        </Text>
      </View>
      <View className="relative h-1/4 bg-primary">
        <ImageBackground
          source={require("../assets/splash_style.png")}
          className="absolute top-0 left-0 w-full h-full"
          resizeMode="cover"
          style={{ opacity: 0.3 }}
        />
        <LinearGradient
          colors={["rgb(255, 255, 255)", "transparent"]}
          locations={[0, 1]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
            zIndex: 1,
          }}
        />

        <View className="flex-1 gap-2 p-6 justify-end z-10">
          <Button
            title="Login"
            onPress={() => navigation.navigate("Login")}
            className="text-primary bg-white font-ubuntu-bold"
          />
          <Button
            title="Create an account"
            onPress={() => navigation.navigate("SelectMethod")}
            className="text-white bg-black font-ubuntu-bold"
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default OnboardingScreen;
