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

interface DriverEarningsProps {
  navigation: any;
}

const DriverEarnings: React.FC<DriverEarningsProps> = ({ navigation }) => {
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
        <AppText className='text-xl font-semibold text-gray-900'>
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
          <AppText className='text-3xl font-bold text-emerald-600 mb-2'>
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
              <AppText className='text-2xl font-bold text-gray-900'>
                {earningsData[selectedPeriod].trips}
              </AppText>
              <AppText className='text-sm text-gray-600'>Trips</AppText>
            </View>
            <View className='items-center'>
              <AppText className='text-2xl font-bold text-gray-900'>
                {earningsData[selectedPeriod].hours}
              </AppText>
              <AppText className='text-sm text-gray-600'>Hours</AppText>
            </View>
            <View className='items-center'>
              <AppText className='text-2xl font-bold text-gray-900'>
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
          <AppText className='text-lg font-semibold text-gray-900 mb-4'>
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
            <AppText className='text-white text-center font-semibold text-lg'>
              Cash Out Now
            </AppText>
          </TouchableOpacity>

          <TouchableOpacity className='bg-white border border-gray-300 py-4 rounded-xl'>
            <AppText className='text-gray-700 text-center font-semibold text-lg'>
              View Details
            </AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriverEarnings;
