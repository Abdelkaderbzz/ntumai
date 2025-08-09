import React from "react";
import { TextInput, View, Text } from "react-native";
import CountryCodePicker from "../ui/CountryCodePicker";
import Svg, { Path } from "react-native-svg";

interface AuthInputProps {
  method: "phone" | "email";
  value: string;
  onChangeText: (text: string) => void;
  countryCode?: string;
  onCountryCodeChange?: (code: string) => void;
}

const AuthInput: React.FC<AuthInputProps> = ({
  method,
  value,
  onChangeText,
  countryCode = "+260",
  onCountryCodeChange = () => {},
}) => {
  if (method === "phone") {
    return (
      <View className='mb-8'>
        <Text className='mb-2 text-gray-500 text-base'>
          Enter your mobile no.*
        </Text>
        <View className='w-full flex-row items-center'>
          <CountryCodePicker

            code={countryCode}
            onSelect={onCountryCodeChange}
          />
          <TextInput
            className='flex-1 bg-gray-100 border border-gray-200 rounded-full h-11 ml-4 px-4 p-3 text-base'
            keyboardType='phone-pad'
            value={value}
            onChangeText={onChangeText}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </View>
      </View>
    );
  }

  // Email input
  return (
    <View className="mb-8">
      <Text className="mb-2 text-gray-500 text-base">
        Enter your email address
      </Text>
      <View className="w-full flex-row items-center rounded-full px-4 bg-gray-100 border border-gray-200">
        <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
          <Path
            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
            stroke="#6B7280"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M22 6L12 13L2 6"
            stroke="#6B7280"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        <TextInput
          className="flex-1 text-black text-base font-medium ml-3"
          keyboardType="email-address"
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </View>
  );
};

export default AuthInput;
