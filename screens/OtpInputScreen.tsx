import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  Pressable,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import Text from "../components/Text";

type OtpScreenRouteProp = RouteProp<RootStackParamList, "Otp">;
type OtpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Otp"
>;

const OtpInputScreen = () => {
  const navigation = useNavigation<OtpScreenNavigationProp>();
  const route = useRoute<OtpScreenRouteProp>();
  const { method, value } = route.params;
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (countdown > 0 && isResendDisabled) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setIsResendDisabled(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown, isResendDisabled]);

  const handleResendOtp = () => {
    setCountdown(30);
    setIsResendDisabled(true);
    setOtp(["", "", "", ""]);
    // TODO: Implement resend OTP logic
  };

  const handleVerifyOtp = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 4) {
      if (otpValue === "0000") {
        // OTP verified successfully, navigate to Login page directly
        navigation.navigate("ContinueBoarding");
      } else {
        Alert.alert("Error", "Invalid OTP. Please try again.");
      }
    } else {
      Alert.alert("Error", "Please enter a valid 4-digit OTP");
    }
  };

  const handleOtpChange = (text: string, index: number) => {
    if (text.length <= 1 && /^\d*$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Auto focus next input
      if (text && index < 4) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const formatCountdown = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-white px-6">
        {/* Header Section */}
        <View className="pt-20 pb-8">
          <Text
            className="text-primary text-5xl font-bold mb-2 font-ubuntu"
            style={{ fontFamily: "Ubuntu-Bold" }}
          >
            Get Started!
          </Text>
          <Text
            className="text-primary text-2xl font-medium font-ubuntu"
            style={{ fontFamily: "Ubuntu-Medium" }}
          >
            Verify to Sign up
          </Text>
        </View>

        <View className="flex-1">
          {/* Instructions */}
          <Text
            className="text-gray-700 text-base mb-8 leading-6"
            style={{ fontFamily: "Ubuntu-Regular" }}
          >
            Enter the code from the SMS we sent to{"\n"}
            <Text
              className="font-semibold text-black"
              style={{ fontFamily: "Ubuntu-Medium" }}
            >
              {isNaN(Number(value))
                ? value
                : `+260 ${value.replace(/^\+?260\s*/, "")}`}
            </Text>
            .
          </Text>

          {/* Countdown Timer */}
          <View className="flex justify-start mb-8">
            <Text
              className="text-primary text-2xl font-medium"
              style={{ fontFamily: "Ubuntu-Bold" }}
            >
              {formatCountdown(countdown)}
            </Text>
          </View>

          {/* OTP Input Fields */}
          <View className="flex-row justify-between mb-12">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                className="w-20 h-20 bg-gray-50 border border-primary shadow-sm shadow-primary rounded-2xl text-center text-primary text-2xl font-semibold"
                maxLength={1}
                keyboardType="number-pad"
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                selectTextOnFocus
                autoFocus={index === 0}
              />
            ))}
          </View>

          {/* Resend Section */}
          <View className="items-center mb-12">
            <Pressable onPress={handleResendOtp} disabled={isResendDisabled}>
              <Text
                className={`text-base font-medium ${
                  isResendDisabled ? "text-gray-400" : "text-primary"
                }`}
                style={{ fontFamily: "Ubuntu-Medium" }}
              >
                {isResendDisabled
                  ? "Didn't Receive OTP? Resend!"
                  : "Resend OTP"}
              </Text>
            </Pressable>
          </View>

          {/* Verify Button */}
          <View className="flex-1 justify-end pb-12">
            <Pressable
              className={`w-full py-5 rounded-2xl shadow-sm ${
                otp.join("").length === 4 ? "bg-primary" : "bg-gray-300"
              }`}
              onPress={handleVerifyOtp}
              disabled={otp.join("").length < 4}
            >
              <Text
                className="text-white text-center text-lg font-semibold"
                style={{ fontFamily: "Ubuntu-Bold" }}
              >
                Verify & Continue
              </Text>
            </Pressable>
          </View>
        </View>

        <StatusBar style="dark" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OtpInputScreen;
