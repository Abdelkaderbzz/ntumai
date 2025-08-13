// screens/driver/DriverHome.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../../components/AppText';

// Driver Dashboard Main Screen
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DollarSign } from 'lucide-react-native';

type DriverDashboardProps = {
  navigation: NativeStackNavigationProp<any>;
};

const DriverDashboard = ({ navigation }: DriverDashboardProps) => {
  // Dummy data for Next Orders
  const nextOrders = [
    {
      id: 1,
      time: '06 : 38 : 21',
      orderId: 'ZA1893',
      location: 'Mulungushi, Lusaka Zambia.',
      scheduledTime: '06:00 PM',
    },
    {
      id: 2,
      time: '07 : 15 : 42',
      orderId: 'ZA1894',
      location: 'Kabulonga, Lusaka Zambia.',
      scheduledTime: '07:30 PM',
    },
    {
      id: 3,
      time: '08 : 22 : 15',
      orderId: 'ZA1895',
      location: 'Woodlands, Lusaka Zambia.',
      scheduledTime: '08:45 PM',
    },
    {
      id: 4,
      time: '08 : 22 : 15',
      orderId: 'ZA1895',
      location: 'Woodlands, Lusaka Zambia.',
      scheduledTime: '08:45 PM',
    },
    {
      id: 5,
      time: '08 : 22 : 15',
      orderId: 'ZA1895',
      location: 'Woodlands, Lusaka Zambia.',
      scheduledTime: '08:45 PM',
    },
  ];

  // Dummy data for Income Cards
  const incomeCards = [
    {
      id: 1,
      income: '$ 578',
      status: 'Online',
      duration: '2hr 30min',
      iconSize: 'text-6xl',
    },
    {
      id: 2,
      income: '$ 578',
      status: 'Online',
      duration: '2hr 30min',
      iconSize: 'text-7xl',
    },
    {
      id: 3,
      income: '$ 578',
      status: 'Online',
      duration: '2hr 30min',
      iconSize: 'text-7xl',
    },
  ];

  return (
    <View className='flex-1'>
      <StatusBar barStyle='dark-content' backgroundColor='white' />

      {/* Header */}
      <View className='flex-row items-center justify-between px-6 py-3 bg-white '>
        <View className='flex-row items-center'>
          <Image
            source={require('./../../assets/person.png')}
            className='w-10 h-10 rounded-full mr-3 border-2 border-teal-400'
          />
          <View>
            <AppText
              className='text-sm font-semibold text-gray-900'
              style={{ fontFamily: 'Ubuntu-Medium' }}
            >
              Today's Income $ 578
            </AppText>
          </View>
        </View>
        <View className='flex-row items-center'>
          <TouchableOpacity className='mr-3'>
            <Ionicons name='help-circle-outline' size={24} color='#14b8a6' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='notifications-outline' size={24} color='#14b8a6' />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className='flex-1 bg-white pb-32'>
        {/* Income Cards Carousel */}
        <View className='mt-4'>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            className='mb-4'
          >
            {incomeCards.map((card) => (
              <View
                key={card.id}
                className='bg-[#eee] rounded-2xl p-4 mr-4 w-80'
              >
                <View className='flex-row items-center justify-between'>
                  <View className='flex-row items-center flex-1'>
                    <View className='p-3  mr-3'>
                      <DollarSign
                        className={`${card.iconSize} font-bold`}
                        color={'#14b8a6'}
                      />
                    </View>
                    <View>
                      <AppText
                        className='text-gray-900 text-sm'
                        style={{ fontFamily: 'Ubuntu-Regular' }}
                      >
                        Today's Income
                      </AppText>
                      <AppText
                        className='text-teal-500 text-lg font-semibold'
                        style={{ fontFamily: 'Ubuntu-Bold' }}
                      >
                        {card.income}
                      </AppText>
                    </View>
                  </View>
                  <View className='items-end'>
                    <AppText
                      className='text-gray-900 text-sm'
                      style={{ fontFamily: 'Ubuntu-Regular' }}
                    >
                      Online
                    </AppText>
                    <AppText
                      className='text-teal-500 text-sm font-semibold'
                      style={{ fontFamily: 'Ubuntu-Bold' }}
                    >
                      {card.duration}
                    </AppText>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Pagination Dots */}
          <View className='flex-row justify-center items-center'>
            <View className='w-2 h-2 bg-teal-300 rounded-full mx-1' />
            <View className='w-2 h-2 bg-teal-300 rounded-full mx-1' />
            <View className='w-2 h-2 bg-teal-500 rounded-full mx-1' />
            <View className='w-2 h-2 bg-teal-300 rounded-full mx-1' />
            <View className='w-2 h-2 bg-teal-300 rounded-full mx-1' />
          </View>
        </View>

        {/* Online Status Toggle */}
        <View className='mx-4 bg-white rounded-2xl p-4 pb-0'>
          <AppText
            className='text-lg font-semibold text-[#9d9c9c] mb-3'
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            What's new on Hizzmat
          </AppText>

          <Image
            source={require('./../../assets/get-ready.png')}
            className='w-full rounded-3xl'
            style={{ width: '100%', height: '150' }}
          />
          <View className='flex-row justify-center items-center mt-4'>
            <View className='w-2 h-2 bg-teal-300 rounded-full mx-1' />
            <View className='w-2 h-2 bg-teal-300 rounded-full mx-1' />
            <View className='w-2 h-2 bg-teal-500 rounded-full mx-1' />
            <View className='w-2 h-2 bg-teal-300 rounded-full mx-1' />
            <View className='w-2 h-2 bg-teal-300 rounded-full mx-1' />
          </View>
        </View>

        {/* Next Orders */}
        <View className='mx-4  bg-white rounded-2xl p-4'>
          <AppText
            className='text-lg font-semibold text-gray-600 mb-4'
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            Next Orders:
          </AppText>

          <ScrollView showsVerticalScrollIndicator={false} className='max-h-80'>
            {nextOrders.map((order, index) => (
              <View
                key={order.id}
                className={`flex-row items-center justify-between py-4 ${
                  index < nextOrders.length - 1
                    ? 'border-b border-gray-200'
                    : ''
                }`}
              >
                <View className='flex-1'>
                  <AppText
                    className='text-xl font-bold text-gray-900 mb-2'
                    style={{ fontFamily: 'Ubuntu-Bold' }}
                  >
                    {order.time}
                  </AppText>
                  <AppText className='text-pink-500 text-sm font-medium'>
                    Cancel Order
                  </AppText>
                </View>
                <View className='items-end'>
                  <AppText
                    className='text-gray-900 text-sm font-medium mb-1'
                    style={{ fontFamily: 'Ubuntu-Medium' }}
                  >
                    {order.orderId}, {order.location}
                  </AppText>
                  <AppText className='text-teal-500 text-sm font-semibold'>
                    {order.scheduledTime}
                  </AppText>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Fixed Action Buttons */}
      <View className='absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-4'>
        <TouchableOpacity
          className='bg-primary py-4 rounded-xl mb-3'
          onPress={() => navigation.navigate('DriverOrders')}
        >
          <AppText
            className='text-white text-center font-semibold text-lg'
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            Delivery Orders
          </AppText>
        </TouchableOpacity>

        <TouchableOpacity
          className='bg-white border border-primary py-4 rounded-xl'
          onPress={() => navigation.navigate('DriverRoutes')}
        >
          <AppText
            className='text-primary text-center font-semibold text-lg'
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            Routes
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Driver Orders Screen
const DriverOrders = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Dummy data for orders
  const upcomingOrders = [
    {
      id: 1,
      itemName: 'Hisense Tv',
      deliveryDate: '23, Jan',
      status: 'To be Delivered',
    },
    {
      id: 2,
      itemName: 'Books',
      deliveryDate: '23, Mar',
      status: 'To be Delivered',
    },
    {
      id: 3,
      itemName: 'Computer',
      deliveryDate: '23, Jun',
      status: 'To be Delivered',
    },
    {
      id: 4,
      itemName: 'Parcel',
      deliveryDate: '17, Jan',
      status: 'To be Delivered',
    },
    {
      id: 5,
      itemName: 'Laptop Bag',
      deliveryDate: '27, Jan',
      status: 'To be Delivered',
    },
  ];

  const historyOrders = [
    {
      id: 1,
      itemName: 'Hisense Tv',
      deliveryDate: '23, Jan',
      status: 'Delivered',
    },
    {
      id: 2,
      itemName: 'iPhone XR',
      deliveryDate: '23, Jan',
      status: 'Canceled',
    },
    {
      id: 3,
      itemName: 'Apple Watch',
      deliveryDate: '23, Jan',
      status: 'Delivered',
    },
    {
      id: 4,
      itemName: 'HP Laptop',
      deliveryDate: '23, Jan',
      status: 'Canceled',
    },
    {
      id: 5,
      itemName: 'Apple Tablet',
      deliveryDate: '23, Jan',
      status: 'Delivered',
    },
  ];

  const currentOrders =
    activeTab === 'upcoming' ? upcomingOrders : historyOrders;

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar barStyle='dark-content' backgroundColor='white' />

      {/* Header */}
      <View className='flex-row items-center justify-between px-4 py-3 bg-white'>
        <AppText
          className='text-2xl font-bold text-primary'
          style={{ fontFamily: 'Ubuntu-Bold' }}
        >
          Orders
        </AppText>
        <View className='flex-row items-center'>
          <TouchableOpacity className='mr-3'>
            <Ionicons name='help-circle-outline' size={24} color='#14b8a6' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='notifications-outline' size={24} color='#14b8a6' />
          </TouchableOpacity>
        </View>
      </View>

      {/* Navigation Tabs */}
      <View className='px-4 mb-4'>
        <View className='flex-row bg-white rounded-xl p-1 shadow-sm border border-gray-100'>
          <TouchableOpacity
            onPress={() => setActiveTab('upcoming')}
            className={`flex-1 py-3 rounded-lg ${
              activeTab === 'upcoming' ? 'bg-primary shadow-sm' : ''
            }`}
          >
            <AppText
              className={`text-center font-semibold ${
                activeTab === 'upcoming' ? 'text-white' : 'text-primary'
              }`}
              style={{ fontFamily: 'Ubuntu-Bold' }}
            >
              Upcoming
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('history')}
            className={`flex-1 py-3 rounded-lg ${
              activeTab === 'history' ? 'bg-primary shadow-sm' : ''
            }`}
          >
            <AppText
              className={`text-center font-semibold ${
                activeTab === 'history' ? 'text-white' : 'text-primary'
              }`}
              style={{ fontFamily: 'Ubuntu-Bold' }}
            >
              History
            </AppText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Orders List */}
      <ScrollView className='flex-1 px-4'>
        {currentOrders.map((order) => (
          <TouchableOpacity
            key={order.id}
            className='bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100'
          >
            <View className='flex-row items-center'>
              {/* Package Icon */}
              <View className='bg-primary w-16 h-16 rounded-2xl items-center justify-center mr-4'>
                <Ionicons name='cube-outline' size={28} color='white' />
              </View>

              {/* Order Details */}
              <View className='flex-1'>
                <AppText
                  className='text-gray-500 text-sm mb-1'
                  style={{ fontFamily: 'Ubuntu-Regular' }}
                >
                  {order.status} | {order.deliveryDate}
                </AppText>
                <AppText
                  className='text-primary text-lg font-bold'
                  style={{ fontFamily: 'Ubuntu-Bold' }}
                >
                  {order.itemName}
                </AppText>
              </View>

              {/* Navigation Arrow */}
              <View className='ml-2'>
                {activeTab === 'upcoming' ? (
                  <Ionicons name='chevron-forward' size={20} color='#d1d5db' />
                ) : order.status === 'Delivered' ? (
                  <Ionicons name='checkmark-circle' size={24} color='#10b981' />
                ) : (
                  <Ionicons name='arrow-back' size={20} color='#9ca3af' />
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
      <View className='items-center py-6'>
        <AppText
          className='text-gray-400 text-sm mb-2'
          style={{ fontFamily: 'Ubuntu-Regular' }}
        >
          App version 1.0.0
        </AppText>
        <AppText
          className='text-primary text-lg font-semibold'
          style={{ fontFamily: 'Ubuntu-Bold' }}
        >
          Ntumai delivery express
        </AppText>
      </View>
    </SafeAreaView>
  );
};

// Driver Routes Screen
const DriverRoutes = ({ navigation }) => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar barStyle='dark-content' backgroundColor='white' />

      {/* Header */}
      <View className='flex-row items-center px-4 py-3 bg-white border-b border-gray-100'>
        <TouchableOpacity onPress={() => navigation.goBack()} className='mr-3'>
          <Ionicons name='arrow-back' size={24} color='#374151' />
        </TouchableOpacity>
        <AppText
          className='text-xl font-semibold text-gray-900'
          style={{ fontFamily: 'Ubuntu-Bold' }}
        >
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

// Driver Earnings Screen
const DriverEarnings = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const earningsData = {
    today: { amount: 245.6, trips: 12, hours: 8.5 },
    week: { amount: 1240.3, trips: 67, hours: 42 },
    month: { amount: 4850.75, trips: 245, hours: 156 },
  };

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar barStyle='dark-content' backgroundColor='white' />

      {/* Header */}
      <View className='flex-row items-center px-4 py-3 bg-white border-b border-gray-100'>
        <TouchableOpacity onPress={() => navigation.goBack()} className='mr-3'>
          <Ionicons name='arrow-back' size={24} color='#374151' />
        </TouchableOpacity>
        <AppText
          className='text-xl font-semibold text-gray-900'
          style={{ fontFamily: 'Ubuntu-Bold' }}
        >
          Earnings
        </AppText>
      </View>

      <ScrollView className='flex-1'>
        {/* Period Selector */}
        <View className='flex-row bg-gray-100 m-4 rounded-xl p-1'>
          {['today', 'week', 'month'].map((period) => (
            <TouchableOpacity
              key={period}
              onPress={() => setSelectedPeriod(period)}
              className={`flex-1 py-2 rounded-lg ${
                selectedPeriod === period ? 'bg-white' : ''
              }`}
            >
              <AppText
                className={`text-center font-medium capitalize ${
                  selectedPeriod === period ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {period === 'week'
                  ? 'This Week'
                  : period === 'month'
                  ? 'This Month'
                  : 'Today'}
              </AppText>
            </TouchableOpacity>
          ))}
        </View>

        {/* Earnings Summary */}
        <View className='mx-4 mb-4 bg-emerald-50 rounded-2xl p-6'>
          <AppText
            className='text-3xl font-bold text-emerald-600 mb-2'
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            ${earningsData[selectedPeriod].amount.toFixed(2)}
          </AppText>
          <AppText className='text-emerald-700 mb-4'>
            Total Earnings (
            {selectedPeriod === 'today'
              ? 'Today'
              : selectedPeriod === 'week'
              ? 'This Week'
              : 'This Month'}
            )
          </AppText>

          <View className='flex-row justify-between'>
            <View className='items-center'>
              <AppText
                className='text-2xl font-bold text-gray-900'
                style={{ fontFamily: 'Ubuntu-Bold' }}
              >
                {earningsData[selectedPeriod].trips}
              </AppText>
              <AppText className='text-sm text-gray-600'>Trips</AppText>
            </View>
            <View className='items-center'>
              <AppText
                className='text-2xl font-bold text-gray-900'
                style={{ fontFamily: 'Ubuntu-Bold' }}
              >
                {earningsData[selectedPeriod].hours}
              </AppText>
              <AppText className='text-sm text-gray-600'>Hours</AppText>
            </View>
            <View className='items-center'>
              <AppText
                className='text-2xl font-bold text-gray-900'
                style={{ fontFamily: 'Ubuntu-Bold' }}
              >
                $
                {(
                  earningsData[selectedPeriod].amount /
                  earningsData[selectedPeriod].hours
                ).toFixed(2)}
              </AppText>
              <AppText className='text-sm text-gray-600'>Per Hour</AppText>
            </View>
          </View>
        </View>

        {/* Chart Placeholder */}
        <View className='mx-4 mb-4 bg-white rounded-2xl p-4'>
          <AppText
            className='text-lg font-semibold text-gray-900 mb-4'
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            Earnings Chart
          </AppText>
          <View className='h-48 bg-gray-100 rounded-xl items-center justify-center'>
            <Ionicons name='bar-chart' size={48} color='#9ca3af' />
            <AppText className='text-gray-500 mt-2'>
              Earnings visualization
            </AppText>
          </View>
        </View>

        {/* Quick Actions */}
        <View className='mx-4 mb-6'>
          <TouchableOpacity className='bg-emerald-500 py-4 rounded-xl mb-3'>
            <AppText
              className='text-white text-center font-semibold text-lg'
              style={{ fontFamily: 'Ubuntu-Bold' }}
            >
              Cash Out Now
            </AppText>
          </TouchableOpacity>

          <TouchableOpacity className='bg-white border border-gray-300 py-4 rounded-xl'>
            <AppText
              className='text-gray-700 text-center font-semibold text-lg'
              style={{ fontFamily: 'Ubuntu-Bold' }}
            >
              View Details
            </AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Driver Profile Screen
const DriverSettings = ({ navigation }) => {
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
    { icon: 'people-outline', title: 'Account', screen: 'Account' },
    { icon: 'map-outline', title: 'Routes', screen: 'Routes' },
    { icon: 'cart-outline', title: 'Orders', screen: 'Orders' },
    { icon: 'wallet-outline', title: 'My Earnings', screen: 'Earnings' },
    { icon: 'settings-outline', title: 'Setting', screen: 'Settings' },
    { icon: 'log-out-outline', title: 'Logout', screen: 'Logout' },
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
          <AppText
            className='text-white text-lg ml-2'
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            Back
          </AppText>
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

          <AppText
            className='text-2xl font-bold text-gray-900 mt-4'
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
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
                  style={{ fontFamily: 'Ubuntu-Bold' }}
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
          <AppText
            className='text-xl font-bold text-[#919091] mb-4'
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
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

// Bottom Tab Navigator for Driver
const Tab = createBottomTabNavigator();

const DriverHome = () => {
  return (
    <SafeAreaView className='flex-1'>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Orders') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Routes') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Earnings') {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#10b981',
          tabBarInactiveTintColor: '#9ca3af',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopColor: '#f3f4f6',
            height: '8%',
            paddingBottom: 8,
            paddingTop: 8,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name='Dashboard' component={DriverDashboard} />
        <Tab.Screen name='Orders' component={DriverOrders} />
        <Tab.Screen name='Routes' component={DriverRoutes} />
        <Tab.Screen name='Earnings' component={DriverEarnings} />
        <Tab.Screen name='Settings' component={DriverSettings} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default DriverHome;
export {
  DriverDashboard,
  DriverOrders,
  DriverRoutes,
  DriverEarnings,
  DriverSettings,
};
