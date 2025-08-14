import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../../components/AppText';

interface DriverOrdersProps {
  navigation: any;
}

const DriverOrders: React.FC<DriverOrdersProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('active');

  const orders = [
    {
      id: 1,
      status: 'pending',
      customer: 'John D.',
      amount: 23.6,
      distance: '4.2 mi',
      time: '15 min',
    },
    {
      id: 2,
      status: 'active',
      customer: 'Sarah M.',
      amount: 18.4,
      distance: '2.1 mi',
      time: '8 min',
    },
    {
      id: 3,
      status: 'completed',
      customer: 'Mike R.',
      amount: 31.2,
      distance: '6.3 mi',
      time: '22 min',
    },
    {
      id: 4,
      status: 'completed',
      customer: 'Lisa K.',
      amount: 15.8,
      distance: '1.8 mi',
      time: '12 min',
    },
  ];

  const filteredOrders = orders.filter((order) =>
    activeTab === 'active'
      ? order.status !== 'completed'
      : order.status === 'completed'
  );

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
          Orders
        </AppText>
      </View>

      {/* Tab Navigation */}
      <View className='flex-row bg-gray-100 m-4 rounded-xl p-1'>
        <TouchableOpacity
          onPress={() => setActiveTab('active')}
          className={`flex-1 py-2 rounded-lg ${
            activeTab === 'active' ? 'bg-white' : ''
          }`}
        >
          <AppText
            className={`text-center font-medium ${
              activeTab === 'active' ? 'text-gray-900' : 'text-gray-500'
            }`}
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            Active Orders
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('completed')}
          className={`flex-1 py-2 rounded-lg ${
            activeTab === 'completed' ? 'bg-white' : ''
          }`}
        >
          <AppText
            className={`text-center font-medium ${
              activeTab === 'completed' ? 'text-gray-900' : 'text-gray-500'
            }`}
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            Completed
          </AppText>
        </TouchableOpacity>
      </View>

      <ScrollView className='flex-1'>
        {filteredOrders.map((order) => (
          <TouchableOpacity
            key={order.id}
            className='mx-4 mb-3 bg-white rounded-xl p-4 border border-gray-100'
          >
            <View className='flex-row items-center justify-between mb-3'>
              <View className='flex-row items-center'>
                <View
                  className={`w-3 h-3 rounded-full mr-3 ${
                    order.status === 'pending'
                      ? 'bg-yellow-500'
                      : order.status === 'active'
                      ? 'bg-emerald-500'
                      : 'bg-gray-400'
                  }`}
                />
                <AppText
                  className='font-semibold text-gray-900'
                  style={{ fontFamily: 'Ubuntu-Bold' }}
                >
                  Order #{order.id}240
                </AppText>
              </View>
              <AppText
                className='font-bold text-lg text-gray-900'
                style={{ fontFamily: 'Ubuntu-Bold' }}
              >
                ${order.amount}
              </AppText>
            </View>

            <View className='flex-row justify-between items-center'>
              <View>
                <AppText className='text-gray-600'>
                  Customer: {order.customer}
                </AppText>
                <AppText className='text-sm text-gray-500'>
                  {order.distance} • {order.time}
                </AppText>
              </View>
              <View className='flex-row'>
                {order.status === 'pending' && (
                  <>
                    <TouchableOpacity className='bg-red-100 px-3 py-1 rounded-lg mr-2'>
                      <AppText className='text-red-600 font-medium'>
                        Decline
                      </AppText>
                    </TouchableOpacity>
                    <TouchableOpacity className='bg-emerald-500 px-3 py-1 rounded-lg'>
                      <AppText className='text-white font-medium'>
                        Accept
                      </AppText>
                    </TouchableOpacity>
                  </>
                )}
                {order.status === 'active' && (
                  <TouchableOpacity className='bg-blue-500 px-3 py-1 rounded-lg'>
                    <AppText className='text-white font-medium'>Track</AppText>
                  </TouchableOpacity>
                )}
                {order.status === 'completed' && (
                  <View className='bg-gray-100 px-3 py-1 rounded-lg'>
                    <AppText className='text-gray-600 font-medium'>
                      Completed
                    </AppText>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriverOrders;
