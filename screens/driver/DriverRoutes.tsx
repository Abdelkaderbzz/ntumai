import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../../components/AppText';
import DeliveryTaskDetails from './DeliveryTaskDetails';

interface DriverRoutesProps {
  navigation: any;
}

const DriverRoutes: React.FC<DriverRoutesProps> = ({ navigation }) => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar barStyle='dark-content' backgroundColor='white' />

      <View className='flex-row items-center px-4 py-3 bg-primary border-b border-gray-100'>
        <TouchableOpacity onPress={() => navigation.goBack()} className='mr-3'>
          <Ionicons name='arrow-back' size={24} color='#fff' />
        </TouchableOpacity>
        <AppText className='text-xl font-semibold text-white'>back</AppText>
      </View>

      <View className='flex-1 bg-gray-100 rounded-xl relative'>
        <Image
          source={require('../../assets/routes-map.png')}
          className='w-full'
        />
        <DeliveryTaskDetails />
      </View>
    </SafeAreaView>
  );
};

export default DriverRoutes;
