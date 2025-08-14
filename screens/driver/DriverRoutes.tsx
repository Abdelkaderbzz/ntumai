import React from 'react';
import { View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../../components/AppText';

interface DriverRoutesProps {
  navigation: any;
}

const DriverRoutes: React.FC<DriverRoutesProps> = ({ navigation }) => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar barStyle='dark-content' backgroundColor='white' />

      {/* Header */}
      <View className='flex-row items-center px-4 py-3 bg-white border-b border-gray-100'>
        <TouchableOpacity onPress={() => navigation.goBack()} className='mr-3'>
          <Ionicons name='arrow-back' size={24} color='#374151' />
        </TouchableOpacity>
        <AppText className='text-xl font-semibold text-gray-900'>
          Routes
        </AppText>
      </View>

      {/* Map Placeholder */}
      <View className='flex-1 bg-gray-100 m-4 rounded-xl relative'>
        <View className='absolute inset-0 items-center justify-center'>
          <Ionicons name='map' size={48} color='#9ca3af' />
          <AppText className='text-gray-500 mt-2'>Map View</AppText>
          <AppText className='text-sm text-gray-400'>
            Interactive route map
          </AppText>
        </View>

        {/* Route Info Card */}
        <View className='absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4'>
          <View className='flex-row items-center justify-between mb-3'>
            <AppText className='text-lg font-semibold text-gray-900'>
              Current Route
            </AppText>
            <AppText className='text-emerald-600 font-medium'>4.7 mi</AppText>
          </View>

          <View className='flex-row items-center mb-3'>
            <View className='w-3 h-3 bg-emerald-500 rounded-full mr-3' />
            <AppText className='text-gray-600 flex-1'>
              123 Main St, Downtown
            </AppText>
            <AppText className='text-sm text-gray-500'>Pickup</AppText>
          </View>

          <View className='flex-row items-center mb-4'>
            <View className='w-3 h-3 bg-red-500 rounded-full mr-3' />
            <AppText className='text-gray-600 flex-1'>
              456 Oak Ave, Uptown
            </AppText>
            <AppText className='text-sm text-gray-500'>Drop-off</AppText>
          </View>

          <TouchableOpacity className='bg-emerald-500 py-3 rounded-xl'>
            <AppText className='text-white text-center font-semibold'>
              Start Navigation
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DriverRoutes;
