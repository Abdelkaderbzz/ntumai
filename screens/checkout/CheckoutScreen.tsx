// screens/checkout/CheckoutScreen.tsx
import { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Modal,
  Dimensions,
} from 'react-native';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Phone,
  Edit,
  Check,
  Star,
  X,
} from 'lucide-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Text from '../../components/Text';
import AppText from '../../components/AppText';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Types
type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
  OrderTracking: { orderId: string };
  RateOrder: { orderId: string; orderDetails: any };
};

type CheckoutScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Checkout'
>;
type OrderTrackingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OrderTracking'
>;
type RateOrderScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RateOrder'
>;

interface PaymentMethod {
  id: string;
  type: 'card' | 'mobile' | 'cash';
  name: string;
  details: string;
  icon: string;
  isDefault?: boolean;
}

interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  name: string;
  address: string;
  isDefault?: boolean;
}

// Mock data for global cart (in real app, use Context/Redux)
const mockCartItems = [
  {
    id: '1',
    name: 'Mixed Salad',
    price: 45,
    quantity: 2,
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    restaurant: 'Dewaxe Restaurant',
  },
  {
    id: '2',
    name: 'Soulful Jollof',
    price: 75,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=400&fit=crop',
    restaurant: 'Dewaxe Restaurant',
  },
];

const mockAddresses: Address[] = [
  {
    id: '1',
    type: 'home',
    name: 'Home',
    address: 'Plot 123, Lusaka Road, Lusaka, Zambia',
    isDefault: true,
  },
  {
    id: '2',
    type: 'work',
    name: 'Office',
    address: 'Cairo Road, Business District, Lusaka, Zambia',
  },
];

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: '1',
    type: 'mobile',
    name: 'MTN Mobile Money',
    details: '**** **** 1234',
    icon: '📱',
    isDefault: true,
  },
  {
    id: '2',
    type: 'card',
    name: 'Visa Card',
    details: '**** **** **** 5678',
    icon: '💳',
  },
  {
    id: '3',
    type: 'cash',
    name: 'Cash on Delivery',
    details: 'Pay when order arrives',
    icon: '💵',
  },
];

// Checkout Screen
export function CheckoutScreen({ navigation }: CheckoutScreenProps) {
  const [selectedAddress, setSelectedAddress] = useState<Address>(
    mockAddresses[0]
  );
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(
    mockPaymentMethods[0]
  );
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  return (
    <View className='flex-1 bg-gray-50'>
      <TouchableOpacity
        className='flex-row items-center px-4 py-3 bg-primary'
        onPress={() => {
          // If using react-navigation, you can use navigation.goBack()
          // Otherwise, replace with your go back logic
          if (typeof navigation !== 'undefined' && navigation.goBack) {
            navigation.goBack();
          }
        }}
        activeOpacity={0.7}
      >
        <Ionicons
          name='arrow-back'
          size={24}
          color='white'
          style={{ marginRight: 12 }}
        />
        <AppText className='text-white text-lg font-semibold'>Back</AppText>
      </TouchableOpacity>

      <ScrollView className='flex-1'>
        {/* Header */}
        <View className='px-4 py-6'>
          <AppText
            className='text-gray-600 font-bold text-xl text-center mb-6'
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            Checkout
          </AppText>
        </View>

        {/* Shipping Section */}
        <View className='px-4 mb-6'>
          <View className='flex-row items-center justify-between mb-4'>
            <AppText
              className='text-gray-900 font-bold text-lg'
              style={{ fontFamily: 'Ubuntu-Bold' }}
            >
              Shipping
            </AppText>
            <TouchableOpacity onPress={() => setShowAddressModal(true)}>
              <AppText
                className='text-pink-500 font-medium text-base'
                style={{ fontFamily: 'Ubuntu-Medium' }}
              >
                Add Location
              </AppText>
            </TouchableOpacity>
          </View>

          {/* Address Options */}
          <View className='bg-gray-100 rounded-2xl p-4 space-y-3'>
            <TouchableOpacity
              className='flex-row items-center p-3 bg-white rounded-xl'
              onPress={() => setSelectedAddress(mockAddresses[0])}
            >
              <View className='w-5 h-5 rounded-full border-2 border-pink-500 items-center justify-center mr-3'>
                <View className='w-2.5 h-2.5 rounded-full bg-pink-500' />
              </View>
              <View className='flex-1'>
                <AppText className='text-gray-900 font-bold text-base mb-1'>
                  Home
                </AppText>
                <AppText
                  className='text-gray-500 text-sm mb-1'
                  style={{ fontFamily: 'Ubuntu-Regular' }}
                >
                  +255746118766
                </AppText>
                <AppText
                  className='text-gray-500 text-sm'
                  style={{ fontFamily: 'Ubuntu-Regular' }}
                >
                  4158 Lusaka Zambia
                </AppText>
              </View>
              <TouchableOpacity>
                <Edit size={20} color='#EC4899' />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              className='flex-row items-center p-3 bg-white rounded-xl'
              onPress={() => setSelectedAddress(mockAddresses[1])}
            >
              <View className='w-5 h-5 rounded-full border-2 border-gray-300 items-center justify-center mr-3'></View>
              <View className='flex-1'>
                <AppText className='text-gray-900 font-bold text-base mb-1'>
                  Office
                </AppText>
                <AppText
                  className='text-gray-500 text-sm mb-1'
                  style={{ fontFamily: 'Ubuntu-Regular' }}
                >
                  +255746118766
                </AppText>
                <AppText
                  className='text-gray-500 text-sm'
                  style={{ fontFamily: 'Ubuntu-Regular' }}
                >
                  4158 Lusaka Zambia
                </AppText>
              </View>
              <TouchableOpacity>
                <Edit size={20} color='#EC4899' />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>

        {/* Payment Section */}
        <View className='px-4 mb-6'>
          <View className='flex-row items-center justify-between mb-4'>
            <AppText
              className='text-gray-900 font-bold text-lg'
              style={{ fontFamily: 'Ubuntu-Bold' }}
            >
              Payment
            </AppText>
            <TouchableOpacity>
              <AppText
                className='text-pink-500 font-medium text-base'
                style={{ fontFamily: 'Ubuntu-Medium' }}
              >
                Add Card
              </AppText>
            </TouchableOpacity>
          </View>

          {/* Payment Methods */}
          <View className='bg-gray-100 rounded-2xl p-4 space-y-3'>
            <TouchableOpacity
              className='flex-row items-center p-3 bg-white rounded-xl'
              onPress={() => setSelectedPayment(mockPaymentMethods[2])}
            >
              <View className='w-8 h-8 rounded-lg bg-teal-500 items-center justify-center mr-3'>
                <AppText className='text-white text-xs font-bold'>💵</AppText>
              </View>
              <AppText
                className='flex-1 text-gray-900 font-medium text-base'
                style={{ fontFamily: 'Ubuntu-Medium' }}
              >
                Cash on Delivery
              </AppText>
              <View className='w-5 h-5 rounded-full border-2 border-pink-500 items-center justify-center'>
                <View className='w-2.5 h-2.5 rounded-full bg-pink-500' />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className='flex-row items-center p-3 bg-white rounded-xl'
              onPress={() => setSelectedPayment(mockPaymentMethods[1])}
            >
              <View className='w-8 h-8 rounded-lg bg-teal-500 items-center justify-center mr-3'>
                <AppText className='text-white text-xs font-bold'>💳</AppText>
              </View>
              <AppText
                className='flex-1 text-gray-900 font-medium text-base'
                style={{ fontFamily: 'Ubuntu-Medium' }}
              >
                Visa/Mastercard/JCB
              </AppText>
              <View className='w-5 h-5 rounded-full border-2 border-gray-300 items-center justify-center'></View>
            </TouchableOpacity>

            <TouchableOpacity
              className='flex-row items-center p-3 bg-white rounded-xl'
              onPress={() => setSelectedPayment(mockPaymentMethods[0])}
            >
              <View className='w-8 h-8 rounded-lg bg-teal-500 items-center justify-center mr-3'>
                <AppText className='text-white text-xs font-bold'>🏦</AppText>
              </View>
              <AppText
                className='flex-1 text-gray-900 font-medium text-base'
                style={{ fontFamily: 'Ubuntu-Medium' }}
              >
                PayPal
              </AppText>
              <View className='w-5 h-5 rounded-full border-2 border-gray-300 items-center justify-center'></View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Payment Summary */}
        <View className='px-4 mb-20'>
          <AppText
            className='text-gray-900 font-bold text-lg mb-4'
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            Payment Summary
          </AppText>

          <View className='space-y-3'>
            <View className='flex-row justify-between items-center'>
              <AppText
                className='text-gray-500 text-base'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                Total:
              </AppText>
              <AppText
                className='text-gray-500 text-base'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                $ 300.00
              </AppText>
            </View>

            <View className='flex-row justify-between items-center'>
              <AppText
                className='text-gray-500 text-base'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                Discount:
              </AppText>
              <AppText
                className='text-gray-500 text-base'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                $ 0.00
              </AppText>
            </View>

            <View className='flex-row justify-between items-center'>
              <AppText
                className='text-gray-500 text-base'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                Delivery:
              </AppText>
              <AppText
                className='text-gray-500 text-base'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                FREE
              </AppText>
            </View>

            <View className='flex-row justify-between items-center'>
              <AppText
                className='text-gray-500 text-base'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                VAT:
              </AppText>
              <AppText
                className='text-gray-500 text-base'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                $ 5.30
              </AppText>
            </View>

            <View className='flex-row justify-between items-center'>
              <AppText
                className='text-gray-500 text-base'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                Wallet Discount:
              </AppText>
              <AppText
                className='text-gray-500 text-base'
                style={{ fontFamily: 'Ubuntu-Regular' }}
              >
                $ 5.30
              </AppText>
            </View>

            <View className='border-b border-gray-200 my-4' />

            <View className='flex-row justify-between items-center'>
              <AppText className='text-gray-500 font-bold text-lg'>
                Grand Total:
              </AppText>
              <AppText className='text-gray-900 font-bold text-lg'>
                $ 300.00
              </AppText>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className='absolute w-full left-0 right-0 bottom-0 bg-primary rounded-t-3xl px-6 py-6'>
        <View className='flex-row items-center justify-between'>
          {/* Total Amount */}
          <View>
            <AppText className='text-white text-sm mb-1'>
              Total (incl. VAT)
            </AppText>
            <AppText className='text-white text-2xl font-bold'>$2.00</AppText>
          </View>

          {/* Process Next Button */}
          <TouchableOpacity
            className='bg-white rounded-full px-8 py-4'
            onPress={() =>
              navigation.navigate('OrderTracking', {
                orderId: '1234567890',
              })
            }
            activeOpacity={0.8}
          >
            <AppText className='text-primary font-bold text-lg'>
              Pay now
            </AppText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Address Selection Modal */}
      <Modal visible={showAddressModal} transparent animationType='slide'>
        <View className='flex-1 bg-black bg-opacity-50 justify-end'>
          <View className='bg-white rounded-t-3xl p-4 max-h-96'>
            <View className='flex-row items-center justify-between mb-4'>
              <Text className='text-xl font-bold text-gray-800'>
                Select Address
              </Text>
              <TouchableOpacity onPress={() => setShowAddressModal(false)}>
                <X size={24} color='#9CA3AF' />
              </TouchableOpacity>
            </View>

            <ScrollView>
              {mockAddresses.map((address) => (
                <TouchableOpacity
                  key={address.id}
                  onPress={() => {
                    setSelectedAddress(address);
                    setShowAddressModal(false);
                  }}
                  className='flex-row items-start p-3 rounded-xl mb-2 border border-gray-200'
                >
                  <MapPin size={20} color='#10B981' />
                  <View className='ml-3 flex-1'>
                    <Text className='text-gray-800 font-medium'>
                      {address.name}
                    </Text>
                    <Text
                      style={{ fontFamily: 'Ubuntu-Regular' }}
                      className='text-gray-600 text-sm'
                    >
                      {address.address}
                    </Text>
                  </View>
                  {selectedAddress.id === address.id && (
                    <Check size={20} color='#10B981' />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Payment Method Modal */}
      <Modal visible={showPaymentModal} transparent animationType='slide'>
        <View className='flex-1 bg-black bg-opacity-50 justify-end'>
          <View className='bg-white rounded-t-3xl p-4 max-h-96'>
            <View className='flex-row items-center justify-between mb-4'>
              <Text className='text-xl font-bold text-gray-800'>
                Payment Method
              </Text>
              <TouchableOpacity onPress={() => setShowPaymentModal(false)}>
                <X size={24} color='#9CA3AF' />
              </TouchableOpacity>
            </View>

            <ScrollView>
              {mockPaymentMethods.map((method) => (
                <TouchableOpacity
                  key={method.id}
                  onPress={() => {
                    setSelectedPayment(method);
                    setShowPaymentModal(false);
                  }}
                  className='flex-row items-center p-3 rounded-xl mb-2 border border-gray-200'
                >
                  <Text className='text-2xl mr-3'>{method.icon}</Text>
                  <View className='flex-1'>
                    <Text className='text-gray-800 font-medium'>
                      {method.name}
                    </Text>
                    <Text
                      style={{ fontFamily: 'Ubuntu-Regular' }}
                      className='text-gray-600 text-sm'
                    >
                      {method.details}
                    </Text>
                  </View>
                  {selectedPayment.id === method.id && (
                    <Check size={20} color='#10B981' />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Order Tracking Screen
export function OrderTrackingScreen({
  route,
  navigation,
}: OrderTrackingScreenProps) {
  const { orderId } = route.params;
  const [orderStatus, setOrderStatus] = useState('confirmed');
  const [estimatedTime, setEstimatedTime] = useState(25);

  const orderSteps = [
    {
      id: 'confirmed',
      title: 'Order Confirmed',
      subtitle: 'Your order has been confirmed',
      time: '2 mins ago',
      completed: true,
    },
    {
      id: 'preparing',
      title: 'Preparing Food',
      subtitle: 'Restaurant is preparing your order',
      time: '',
      completed: orderStatus !== 'confirmed',
    },
    {
      id: 'pickup',
      title: 'Ready for Pickup',
      subtitle: 'Driver is on the way to restaurant',
      time: '',
      completed: false,
    },
    {
      id: 'delivery',
      title: 'Out for Delivery',
      subtitle: 'Driver is on the way to you',
      time: '',
      completed: false,
    },
    {
      id: 'delivered',
      title: 'Delivered',
      subtitle: 'Order delivered successfully',
      time: '',
      completed: false,
    },
  ];

  return (
    <View className='flex-1 bg-gray-50'>
      <TouchableOpacity
        className='flex-row items-center px-4 py-3 bg-primary'
        onPress={() => {
          // If using react-navigation, you can use navigation.goBack()
          // Otherwise, replace with your go back logic
          if (typeof navigation !== 'undefined' && navigation.goBack) {
            navigation.goBack();
          }
        }}
        activeOpacity={0.7}
      >
        <Ionicons
          name='arrow-back'
          size={24}
          color='white'
          style={{ marginRight: 12 }}
        />
        <AppText className='text-white text-lg font-semibold'>Back</AppText>
      </TouchableOpacity>
      <ScrollView className='flex-1 px-4 py-6'>
        {/* Driver's Information */}
        <View className='bg-gray-100 rounded-2xl p-4 mb-6 shadow-sm'>
          <Text
            style={{ fontFamily: 'Ubuntu-Bold' }}
            className='text-gray-800 font-semibold text-lg mb-4'
          >
            Driver's Information
          </Text>
          <View className='flex-row items-center bg-white rounded-xl p-3'>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
              }}
              className='w-12 h-12 rounded-full mr-4'
            />
            <View className='flex-1'>
              <Text className='text-gray-800 font-semibold'>Alfred John</Text>
              <Text className='text-gray-500 text-sm'>+255746118766</Text>
              <Text className='text-gray-500 text-sm'>4158 Lusaka Zambia</Text>
            </View>
            <TouchableOpacity>
              <Text className='text-pink-500'>▼</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Buyer's Information */}
        <View className='bg-gray-100 rounded-2xl p-4 mb-6 shadow-sm'>
          <Text
            style={{ fontFamily: 'Ubuntu-Bold' }}
            className='text-gray-800 font-semibold text-lg mb-4'
          >
            Buyer's Information
          </Text>
          <View className='flex-row items-center bg-white rounded-xl p-3'>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
              }}
              className='w-12 h-12 rounded-full mr-4'
            />
            <View className='flex-1'>
              <Text className='text-gray-800 font-semibold'>Alfred John</Text>
              <Text className='text-gray-500 text-sm'>+255746118766</Text>
              <Text className='text-gray-500 text-sm'>4158 Lusaka Zambia</Text>
            </View>
            <TouchableOpacity>
              <Text className='text-pink-500'>▼</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Store and Product Information */}
        <View className='bg-gray-100 rounded-2xl p-4 mb-6 shadow-sm'>
          <Text
            style={{ fontFamily: 'Ubuntu-Bold' }}
            className='text-gray-800 font-semibold text-lg mb-4'
          >
            Store and Product Information
          </Text>
          <View className='bg-white rounded-xl p-3'>
            <View className='flex-row items-center mb-4'>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
                }}
                className='w-12 h-12 rounded-full mr-4'
              />
              <Text className='text-gray-800 font-semibold'>
                Devante Restaurant
              </Text>
            </View>
            <View className='flex-row items-center'>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
                }}
                className='w-16 h-16 rounded-lg mr-4'
              />
              <View>
                <Text className='text-gray-800 font-medium'>Mixed Salad</Text>
                <Text className='text-gray-500 text-sm'>
                  Comes with Mayonize
                </Text>
                <Text className='text-gray-800 font-semibold'>$20</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// Rate Order Screen
export function RateOrderScreen({ route, navigation }: RateOrderScreenProps) {
  const { orderId, orderDetails } = route.params;
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [driverRating, setDriverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitRating = async () => {
    if (rating === 0) {
      Alert.alert('Rating Required', 'Please rate your order experience');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert('Thank You!', 'Your feedback helps us improve our service', [
        { text: 'OK', onPress: () => navigation.navigate('Home') },
      ]);
    }, 1500);
  };

  const StarRating = ({
    rating,
    onRatingChange,
    size = 32,
  }: {
    rating: number;
    onRatingChange: (rating: number) => void;
    size?: number;
  }) => (
    <View className='flex-row'>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => onRatingChange(star)}
          className='mr-2'
        >
          <Star
            size={size}
            color={star <= rating ? '#FCD34D' : '#E5E7EB'}
            fill={star <= rating ? '#FCD34D' : '#E5E7EB'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View className='flex-1 bg-gray-50'>
      {/* Header */}
      <View className='bg-white flex-row items-center px-4 py-6 mt-12 border-b border-gray-100'>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ArrowLeft size={24} color='#374151' />
        </TouchableOpacity>
        <Text
          style={{ fontFamily: 'Ubuntu-Bold' }}
          className='text-xl font-bold text-gray-800 ml-4'
        >
          Rate Your Order
        </Text>
      </View>

      <ScrollView className='flex-1 px-4 py-6'>
        {/* Order Success */}
        <View className='bg-white rounded-2xl p-6 mb-6 shadow-sm items-center'>
          <View className='w-20 h-20 bg-green-100 rounded-full items-center justify-center mb-4'>
            <Check size={40} color='#10B981' />
          </View>
          <Text
            style={{ fontFamily: 'Ubuntu-Bold' }}
            className='text-2xl font-bold text-gray-800 mb-2'
          >
            Order Delivered!
          </Text>
          <Text
            style={{ fontFamily: 'Ubuntu-Regular' }}
            className='text-gray-600 text-center mb-4'
          >
            Your order from {orderDetails.restaurant} has been delivered
            successfully
          </Text>
          <Text
            style={{ fontFamily: 'Ubuntu-Regular' }}
            className='text-gray-500 text-sm'
          >
            Order #{orderId.slice(-6)}
          </Text>
        </View>

        {/* Rate Restaurant */}
        <View className='bg-white rounded-2xl p-4 mb-6 shadow-sm'>
          <Text
            style={{ fontFamily: 'Ubuntu-Bold' }}
            className='text-gray-800 font-semibold text-lg mb-4'
          >
            Rate Restaurant
          </Text>

          <View className='items-center mb-4'>
            <Text
              style={{ fontFamily: 'Ubuntu-Bold' }}
              className='text-gray-800 font-medium mb-3'
            >
              {orderDetails.restaurant}
            </Text>
            <StarRating rating={rating} onRatingChange={setRating} />
            <Text
              style={{ fontFamily: 'Ubuntu-Regular' }}
              className='text-gray-500 text-sm mt-2'
            >
              {rating === 0
                ? 'Tap to rate'
                : rating === 1
                ? 'Poor'
                : rating === 2
                ? 'Fair'
                : rating === 3
                ? 'Good'
                : rating === 4
                ? 'Very Good'
                : 'Excellent'}
            </Text>
          </View>

          <TextInput
            placeholder='Share your experience (optional)'
            className='bg-gray-50 p-4 rounded-xl text-gray-700 h-24'
            placeholderTextColor='#9CA3AF'
            value={review}
            onChangeText={setReview}
            multiline
            textAlignVertical='top'
          />
        </View>

        {/* Rate Driver */}
        <View className='bg-white rounded-2xl p-4 mb-6 shadow-sm'>
          <Text
            style={{ fontFamily: 'Ubuntu-Bold' }}
            className='text-gray-800 font-semibold text-lg mb-4'
          >
            Rate Driver
          </Text>

          <View className='flex-row items-center mb-4'>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
              }}
              className='w-12 h-12 rounded-full mr-3'
            />
            <View className='flex-1'>
              <Text className='text-gray-800 font-medium'>John Mwamba</Text>
              <Text
                style={{ fontFamily: 'Ubuntu-Regular' }}
                className='text-gray-500 text-sm'
              >
                Delivery Driver
              </Text>
            </View>
          </View>

          <View className='items-center'>
            <StarRating
              rating={driverRating}
              onRatingChange={setDriverRating}
              size={28}
            />
          </View>
        </View>

        {/* Order Summary */}
        <View className='bg-white rounded-2xl p-4 mb-6 shadow-sm'>
          <Text
            style={{ fontFamily: 'Ubuntu-Bold' }}
            className='text-gray-800 font-semibold text-lg mb-4'
          >
            Order Summary
          </Text>

          {orderDetails.items.map((item: any) => (
            <View key={item.id} className='flex-row items-center mb-2'>
              <Text
                style={{ fontFamily: 'Ubuntu-Regular' }}
                className='flex-1 text-gray-600'
              >
                {item.quantity}x {item.name}
              </Text>
              <Text className='text-gray-800'>
                K{item.price * item.quantity}
              </Text>
            </View>
          ))}

          <View className='border-t border-gray-200 pt-2 mt-2'>
            <View className='flex-row justify-between'>
              <Text className='text-gray-800 font-bold'>Total Paid</Text>
              <Text className='text-primary font-bold'>
                K{orderDetails.total}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View className='px-4 py-6 bg-white border-t border-gray-100'>
        <TouchableOpacity
          onPress={handleSubmitRating}
          disabled={isSubmitting}
          className={`py-4 rounded-2xl ${
            isSubmitting ? 'bg-gray-400' : 'bg-primary'
          }`}
        >
          <Text
            style={{ fontFamily: 'Ubuntu-Bold' }}
            className='text-white font-bold text-lg text-center'
          >
            {isSubmitting ? 'Submitting...' : 'Submit Rating'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('OrderTracking')}
          className='py-3 mt-3'
        >
          <Text
            style={{ fontFamily: 'Ubuntu-Regular' }}
            className='text-gray-500 text-center font-medium'
          >
            Skip for now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
