import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import { ChevronDown } from "lucide-react-native";

interface CountryCodePickerProps {
  code: string;
  onSelect: (code: string) => void;
}

const CountryCodePicker: React.FC<CountryCodePickerProps> = ({
  code,
  onSelect,
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <TouchableOpacity
        className="bg-gray-100 border border-gray-200 rounded-full h-11 p-3 flex-row items-center justify-center"
        onPress={() => setShow(true)}
        activeOpacity={0.7}
        style={{ borderRightWidth: 0 }}
      >
        <Text className="text-base">{code}</Text>
        <ChevronDown size={16} color="#666" className="ml-1" />
      </TouchableOpacity>
      <CountryPicker
        show={show}
        lang="en"
        pickerButtonOnPress={(item) => {
          onSelect(item.dial_code);
          setShow(false);
        }}
        onBackdropPress={() => setShow(false)}
        style={{
          modal: { height: 400 },
        }}
      />
    </>
  );
};

export default CountryCodePicker;
