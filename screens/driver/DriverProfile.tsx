import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../../components/AppText';

interface DriverSettingsProps {
  navigation: any;
}

const DriverSettings: React.FC<DriverSettingsProps> = ({ navigation }) => {
  // Dummy data for summary cards
  const summaryCards = [
    {
      id: 1,
      title: '0 Progress',
      subtitle: 'delivery',
      backgroundColor: 'bg-[#e9fbc9]',
      textColor: 'text-[#212120]',
      subtitleColor: 'text-[#9a9c97]',
    },
    {
      id: 2,
      title: '12 Parcels',
      subtitle: 'send',
      backgroundColor: 'bg-primary',
      textColor: 'text-[#cdf0c3]',
      subtitleColor: 'text-[#cdf0c3]',
    },
    {
      id: 3,
      title: '30 Parcels',
      subtitle: 'completed',
      backgroundColor: 'bg-[#212120]',
      textColor: 'text-[#e9fbc9]',
      subtitleColor: 'text-[#e9fbc9]',
    },
  ];

  // Dummy data for overviews menu
  const overviewsMenu = [
    { icon: 'people-outline' as const, title: 'Account', screen: 'Account' },
    { icon: 'map-outline' as const, title: 'Routes', screen: 'Routes' },
    { icon: 'cart-outline' as const, title: 'Orders', screen: 'Orders' },
    {
      icon: 'wallet-outline' as const,
      title: 'My Earnings',
      screen: 'Earnings',
    },
    { icon: 'settings-outline' as const, title: 'Setting', screen: 'Settings' },
    { icon: 'log-out-outline' as const, title: 'Logout', screen: 'Logout' },
  ];

  return (
    <SafeAreaView className='flex-1 bg-white'>
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
        {/* Profile Section */}
        <View className='items-center py-8'>
          <View className='relative'>
            <Image
              source={require('./../../assets/person.png')}
              className='w-24 h-24 rounded-full border-2 border-green-300'
            />
            <TouchableOpacity className='absolute bottom-0 right-0 bg-green-300 w-8 h-8 rounded-full items-center justify-center'>
              <Ionicons name='pencil' size={16} color='white' />
            </TouchableOpacity>
          </View>

          <AppText className='text-2xl font-bold text-gray-900 mt-4'>
            CHUON Raksa
          </AppText>

          <View className='flex-row items-center mt-2'>
            <Ionicons name='location-outline' size={16} color='#374151' />
            <AppText
              className='text-gray-700 ml-2'
              style={{ fontFamily: 'Ubuntu-Medium' }}
            >
              Lusaka Zambia
            </AppText>
            <TouchableOpacity className='ml-2'>
              <Ionicons name='chevron-down' size={16} color='#374151' />
            </TouchableOpacity>
          </View>
        </View>

        {/* Summary Cards */}
        <View className='px-4 mb-8'>
          <View className='flex-row justify-between'>
            {summaryCards.map((card) => (
              <View
                key={card.id}
                className={`${card.backgroundColor} rounded-2xl p-4 flex-1 mx-1`}
              >
                <AppText
                  className={`${card.textColor} text-lg font-bold text-center`}
                >
                  {card.title}
                </AppText>
                <AppText
                  className={`${card.subtitleColor} text-sm text-center mt-1`}
                  style={{ fontFamily: 'Ubuntu-Regular' }}
                >
                  {card.subtitle}
                </AppText>
              </View>
            ))}
          </View>
        </View>

        {/* Overviews Section */}
        <View className='px-4 mb-8'>
          <AppText className='text-xl font-bold text-[#919091] mb-4'>
            Overviews
          </AppText>

          {overviewsMenu.map((item, index) => (
            <TouchableOpacity
              key={index}
              className={`flex-row items-center py-4 ${
                index === overviewsMenu.length - 1 ? 'pt-8' : ''
              }`}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Ionicons name={item.icon} size={24} color='#919091' />
              <AppText
                className='text-[#3d3d3d] ml-4 flex-1'
                style={{ fontFamily: 'Ubuntu-Medium' }}
              >
                {item.title}
              </AppText>
            </TouchableOpacity>
          ))}
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

export default DriverSettings;
