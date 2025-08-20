import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../../components/AppText';

interface DriverSettingsProps {
  navigation: any;
}

const DriverSetting: React.FC<DriverSettingsProps> = ({ navigation }) => {

  return (
    <SafeAreaView className='flex-1 flex-col bg-white'>
      <StatusBar barStyle='light-content' backgroundColor='#14b8a6' />

      {/* Top Navigation Bar */}
      <View className='bg-teal-500 px-4 py-3'>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className='flex-row items-center'
        >
          <Ionicons name='arrow-back' size={24} color='white' />
          <AppText className='text-white text-lg ml-2'>Back</AppText>
        </TouchableOpacity>
      </View>

      <ScrollView className='flex-1'>
        {/* Settings Section */}
        <View className='px-6 py-4'>
          <AppText
            className='text-[#919091] text-xl font-bold mb-6 mt-8'
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            Settings
          </AppText>

          {/* Settings Options */}
          <View className='space-y-4 shadow-md rounded-2xl p-4 bg-white'>
            <TouchableOpacity
              className='flex-row items-center justify-between py-4'
              onPress={() => navigation.navigate('DriverProfile')}
            >
              <AppText
                className='text-black font-bold text-lg'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                Profile
              </AppText>
              <Ionicons name='chevron-forward' size={20} color='#9CA3AF' />
            </TouchableOpacity>

            <TouchableOpacity
              className='flex-row items-center justify-between py-4'
              onPress={() => {
                /* Navigate to Vehicle settings */
              }}
            >
              <AppText
                className='text-black font-bold text-lg'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                Vehicle
              </AppText>
              <Ionicons name='chevron-forward' size={20} color='#9CA3AF' />
            </TouchableOpacity>

            <TouchableOpacity
              className='flex-row items-center justify-between py-4'
              onPress={() => {
                /* Navigate to General settings */
              }}
            >
              <AppText
                className='text-black font-bold text-lg'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                General
              </AppText>
              <Ionicons name='chevron-forward' size={20} color='#9CA3AF' />
            </TouchableOpacity>
          </View>
        </View>

        {/* Support Section */}
        <View className='px-6 py-4'>
          <AppText
            className='text-[#919091] text-xl font-bold mb-6 mt-8'
            style={{ fontFamily: 'Ubuntu-Regular' }}
          >
            Support
          </AppText>

          {/* Support Options */}
          <View className='space-y-4 shadow-md rounded-2xl p-4 bg-white'>
            <TouchableOpacity
              className='flex-row items-center justify-between py-4'
              onPress={() => {
                /* Navigate to Help */
              }}
            >
              <AppText
                className='text-black font-bold text-lg'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                Help
              </AppText>
              <Ionicons name='chevron-forward' size={20} color='#9CA3AF' />
            </TouchableOpacity>

            <TouchableOpacity
              className='flex-row items-center justify-between py-4'
              onPress={() => {
                /* Navigate to FAQs */
              }}
            >
              <AppText
                className='text-black font-bold text-lg'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                FAQs
              </AppText>
              <Ionicons name='chevron-forward' size={20} color='#9CA3AF' />
            </TouchableOpacity>

            <TouchableOpacity
              className='flex-row items-center justify-between py-4'
              onPress={() => {
                /* Navigate to Contact Us */
              }}
            >
              <AppText
                className='text-black font-bold text-lg'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                Contact Us
              </AppText>
              <Ionicons name='chevron-forward' size={20} color='#9CA3AF' />
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View className='items-center py-8'>
          <AppText
            className='text-gray-400 text-sm mb-2'
            style={{ fontFamily: 'Ubuntu-Regular' }}
          >
            App version 1.0.0
          </AppText>
          <AppText className='text-primary text-l font-thin'>
            Ntumai delivery express
          </AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriverSetting;
