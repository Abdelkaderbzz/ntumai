import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CreditCard, DollarSign, Search, Filter } from 'lucide-react-native';

interface ReportsScreenProps {
  navigation: any;
}

interface Order {
  id: string;
  restaurantName: string;
  orderId: string;
  date: string;
  time: string;
  price: string;
  status: 'Paid' | 'Unpaid';
  image: string;
}

const ReportsScreen: React.FC<ReportsScreenProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Order report');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Mock order data
  const orders: Order[] = [
    {
      id: '1',
      restaurantName: 'Madindigo Restaurant',
      orderId: '01218327BSJ93D',
      date: 'Jan 27, 2025',
      time: '10:35 AM',
      price: '$9.50',
      status: 'Unpaid',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    },
    {
      id: '2',
      restaurantName: 'Madindigo Restaurant',
      orderId: '01218327BSJ93D',
      date: 'Jan 27, 2025',
      time: '10:35 AM',
      price: '$9.50',
      status: 'Paid',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    },
    {
      id: '3',
      restaurantName: 'Madindigo Restaurant',
      orderId: '01218327BSJ93D',
      date: 'Jan 27, 2025',
      time: '10:35 AM',
      price: '$9.50',
      status: 'Unpaid',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    },
    {
      id: '4',
      restaurantName: 'Madindigo Restaurant',
      orderId: '01218327BSJ93D',
      date: 'Jan 27, 2025',
      time: '10:35 AM',
      price: '$9.50',
      status: 'Paid',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    },
    {
      id: '6',
      restaurantName: 'New Horizon Cafe',
      orderId: '01218327BSJ94E',
      date: 'Feb 1, 2025',
      time: '11:45 AM',
      price: '$12.00',
      status: 'Paid',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    },
    {
      id: '7',
      restaurantName: 'New Horizon Cafe',
      orderId: '01218327BSJ94E',
      date: 'Feb 1, 2025',
      time: '11:45 AM',
      price: '$12.00',
      status: 'Paid',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    },
    {
      id: '8',
      restaurantName: 'New Horizon Cafe',
      orderId: '01218327BSJ94E',
      date: 'Feb 1, 2025',
      time: '11:45 AM',
      price: '$12.00',
      status: 'Paid',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    },
    {
      id: '9',
      restaurantName: 'New Horizon Cafe',
      orderId: '01218327BSJ94E',
      date: 'Feb 1, 2025',
      time: '11:45 AM',
      price: '$12.00',
      status: 'Paid',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    },
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleOrderPress = (order: Order) => {
    setSelectedOrder(order);
    setShowOrderModal(true);
  };

  const handleCloseModal = () => {
    setShowOrderModal(false);
    setSelectedOrder(null);
  };

  const renderOrderModal = () => (
    <Modal
      visible={showOrderModal}
      transparent={true}
      animationType='slide'
      onRequestClose={handleCloseModal}
    >
      <Pressable
        className='flex-1 bg-opacity-50'
        onPress={handleCloseModal}
      >
        <View className='flex-1 justify-end'>
          <Pressable className='bg-white rounded-t-3xl p-6'>
            {/* Price Section */}
            <View className='flex-row items-center mb-6'>
              <View className='bg-[#0aaf97] rounded-full p-3 mr-4'>
                <DollarSign size={32} color='white' />
              </View>
              <Text className='text-black font-bold text-3xl'>
                {selectedOrder?.price}
              </Text>
            </View>

            {/* Order Details Section */}
            <View className='space-y-4'>
              <View className='flex-row justify-between items-center'>
                <Text className='text-gray-500 text-base'>Name</Text>
                <Text className='text-black font-medium text-base'>
                  {selectedOrder?.restaurantName}
                </Text>
              </View>

              <View className='flex-row justify-between items-center'>
                <Text className='text-gray-500 text-base'>Tax ID</Text>
                <Text className='text-black font-medium text-base'>
                  {selectedOrder?.orderId}
                </Text>
              </View>

              <View className='flex-row justify-between items-center'>
                <Text className='text-gray-500 text-base'>
                  Transaction Date
                </Text>
                <Text className='text-black font-medium text-base'>
                  {selectedOrder?.date} {selectedOrder?.time}
                </Text>
              </View>

              <View className='flex-row justify-between items-center'>
                <Text className='text-gray-500 text-base'>Remarks</Text>
                <Text className='text-black font-medium text-base'>
                  Pay in App using my Credit Card
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );

  const renderOrderReport = () => (
    <View className='mb-6'>
      <Text className='text-black font-bold text-lg mb-4'>Order Report</Text>
      <View className='flex-row flex-wrap justify-between'>
        <View className='w-[48%] bg-[#eeeeee] rounded-2xl p-4 mb-3'>
          <Text className='text-primary font-medium text-xl mb-1'>Today</Text>
          <Text className='text-black font-bold text-2xl text-right pt-7'>
            35
          </Text>
        </View>
        <View className='w-[48%] bg-[#eeeeee] rounded-2xl p-4 mb-3'>
          <Text className='text-primary font-medium text-xl mb-1'>
            Yesterday
          </Text>
          <Text className='text-black font-bold text-2xl text-right pt-7'>
            43
          </Text>
        </View>
        <View className='w-[48%] bg-[#eeeeee] rounded-2xl p-4 mb-3'>
          <Text className='text-primary font-medium text-xl mb-1'>
            This Week
          </Text>
          <Text className='text-black font-bold text-2xl text-right pt-7'>
            100
          </Text>
        </View>
        <View className='w-[48%] bg-[#eeeeee] rounded-2xl p-4 mb-3'>
          <Text className='text-primary font-medium text-xl mb-1'>Total</Text>
          <Text className='text-black font-bold text-2xl text-right pt-7'>
            1500
          </Text>
        </View>
      </View>
    </View>
  );

  const renderIncomeReport = () => (
    <View className='mb-6'>
      <Text className='text-black font-bold text-lg mb-4'>Income Report</Text>
      <View className='flex-row flex-wrap justify-between'>
        <View className='w-[48%] bg-[#eeeeee] rounded-xl p-4 mb-3'>
          <Text className='text-primary font-medium text-xl mb-1'>Today</Text>
          <Text className='text-black font-bold text-2xl text-right pt-7'>
            $ 14,592.00
          </Text>
        </View>
        <View className='w-[48%] bg-[#eeeeee] rounded-xl p-4 mb-3'>
          <Text className='text-primary font-medium text-xl mb-1'>
            Yesterday
          </Text>
          <Text className='text-black font-bold text-2xl text-right pt-7'>
            $ 2,374.10
          </Text>
        </View>
        <View className='w-[48%] bg-[#eeeeee] rounded-xl p-4 mb-3'>
          <Text className='text-primary font-medium text-xl mb-1'>
            This Week
          </Text>
          <Text className='text-black font-bold text-2xl text-right pt-7'>
            $ 14,592.00
          </Text>
        </View>
        <View className='w-[48%] bg-[#eeeeee] rounded-xl p-4 mb-3'>
          <Text className='text-primary font-medium text-xl mb-1'>
            This Month
          </Text>
          <Text className='text-black font-bold text-2xl text-right pt-7'>
            $ 14,592.00
          </Text>
        </View>
        <View className='w-[48%] bg-[#eeeeee] rounded-xl p-4 mb-3'>
          <Text className='text-primary font-medium text-xl mb-1'>
            This Year
          </Text>
          <Text className='text-black font-bold text-2xl text-right pt-7'>
            $ 14,592.00
          </Text>
        </View>
      </View>
    </View>
  );

  const renderOrderList = () => (
    <View className='flex-1'>
      {/* Search Bar */}
      <View className='flex-row items-center mb-4'>
        <View className='flex-row items-center bg-[#eeeeee] rounded-xl px-3 py-2 flex-1 mr-2'>
          <Search size={20} color='#666' />
          <TextInput
            className='flex-1 ml-2 text-gray-700'
            placeholder='Search'
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity className='p-2'>
          <Filter size={20} color='#666' />
        </TouchableOpacity>
      </View>

      {/* Order List */}
      <ScrollView className='flex-1'>
        {orders.map((order) => (
          <TouchableOpacity
            key={order.id}
            className='bg-[#eeeeee] rounded-xl p-4 mb-3'
            onPress={() => handleOrderPress(order)}
          >
            <View className='flex-row items-start'>
              {/* Order Image */}
              <View className='w-16 h-16 rounded-lg overflow-hidden mr-3'>
                <Image
                  source={{ uri: order.image }}
                  className='w-full h-full'
                  resizeMode='cover'
                />
              </View>

              {/* Order Details */}
              <View className='flex-1'>
                <Text className='font-bold text-black text-base mb-1'>
                  {order.restaurantName}
                </Text>
                <Text className='text-gray-600 text-sm mb-1'>
                  Order: {order.orderId}
                </Text>
                <Text className='text-gray-600 text-sm'>
                  {order.date} {order.time}
                </Text>
              </View>

              {/* Price and Status */}
              <View className='items-end'>
                <Text
                  className={`font-bold text-lg mb-2 ${
                    order.status === 'Paid'
                      ? 'text-[#0aaf97]'
                      : 'text-[#ed4877]'
                  }`}
                >
                  {order.price}
                </Text>
                <View
                  className={`px-3 py-1 rounded-full ${
                    order.status === 'Paid' ? 'bg-[#0aaf97]' : 'bg-[#ed4877]'
                  }`}
                >
                  <Text className='text-white text-xs font-medium'>
                    {order.status}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView className='flex-1 bg-white'>
      {/* Header */}
      <View className='bg-white px-4 py-3 flex-row items-center border-b border-gray-200'>
        <TouchableOpacity onPress={handleBackPress} className='mr-4'>
          <Ionicons name='arrow-back' size={24} color='#000' />
        </TouchableOpacity>
        <Text className='text-lg font-semibold text-black'>Reports</Text>
      </View>

      <ScrollView className='flex-1 p-4'>
        {/* Navigation Tabs */}
        <View className='flex-row rounded-lg p-1 mb-6 '>
          {['All', 'Order report', 'Payment report'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 py-3 rounded-full mx-1 ${
                activeTab === tab
                  ? 'bg-[#0aaf97]'
                  : 'bg-white border border-[#0aaf97]'
              }`}
            >
              <Text
                className={`text-center font-medium ${
                  activeTab === tab ? 'text-white' : 'text-[#0aaf97]'
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content based on active tab */}
        {activeTab === 'All' && (
          <>
            {/* Summary Card */}
            <View className='bg-[#eeeeee] rounded-full p-2 mb-6 shadow-sm'>
              <View className='flex-row items-center justify-between'>
                <View className='flex-row items-center'>
                  <View className=' p-2 mr-3'>
                    <CreditCard size={24} color='#0aaf97' />
                  </View>
                  <Text className='text-[#495057] font-bold text-2xl'>
                    $ 1500
                  </Text>
                </View>
                <TouchableOpacity className='bg-[#0aaf97] rounded-full px-5 py-4'>
                  <Text className='text-white font-medium'>View Data</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Order Report Section */}
            {renderOrderReport()}

            {/* Income Report Section */}
            {renderIncomeReport()}
          </>
        )}

        {activeTab === 'Order report' && renderOrderList()}

        {activeTab === 'Payment report' && (
          <View className='flex-1 items-center justify-center'>
            <Text className='text-gray-500 text-lg'>Payment Report</Text>
          </View>
        )}
      </ScrollView>

      {/* Total Paid Bottom Bar - Only show for All tab */}
      {activeTab === 'All' && (
        <View className='bg-[#0aaf97] rounded-xl p-8 mx-4 mb-4'>
          <View className='flex-row items-center justify-between'>
            <View className='flex-row items-center'>
              <DollarSign size={24} color='white' />
              <Text className='text-white font-semibold text-xl ml-2'>
                Total Paid
              </Text>
            </View>
            <Text className='text-white font-bold text-xl'>$ 253.95</Text>
          </View>
        </View>
      )}

      {/* Order Details Modal */}
      {renderOrderModal()}
    </SafeAreaView>
  );
};

export default ReportsScreen;
