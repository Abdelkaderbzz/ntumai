import React, { useState } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  SafeAreaView,
  Switch,
  Modal,
  Pressable,
} from 'react-native';
import {
  Search,
  SlidersHorizontal,
  Plus,
  Edit,
  Globe,
  Trash2,
} from 'lucide-react-native';
import Text from '../../components/Text';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  isActive: boolean;
}

interface Promotion {
  id: string;
  name: string;
  code: string;
  discount: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  status: 'Active' | 'Inactive';
  image: string;
}

interface Category {
  id: string;
  name: string;
}

export default function ProductsScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [showActionModal, setShowActionModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Mock data for products
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Mixed Salad',
      price: 20.0,
      rating: 3.5,
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
      isActive: true,
    },
    {
      id: '2',
      name: 'Mixed Salad',
      price: 20.0,
      rating: 3.5,
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
      isActive: true,
    },
    {
      id: '3',
      name: 'Mixed Salad',
      price: 20.0,
      rating: 3.5,
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
      isActive: true,
    },
    {
      id: '4',
      name: 'Mixed Salad',
      price: 20.0,
      rating: 3.5,
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
      isActive: true,
    },
    {
      id: '5',
      name: 'Mixed Salad',
      price: 20.0,
      rating: 3.5,
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
      isActive: true,
    },
    {
      id: '6',
      name: 'Mixed Salad',
      price: 20.0,
      rating: 3.5,
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
      isActive: true,
    },
  ]);

  // Mock data for promotions
  const [promotions, setPromotions] = useState<Promotion[]>([
    {
      id: '1',
      name: 'Store wide promotion',
      code: 'B28769',
      discount: '50% OFF',
      startDate: '07-02-2025',
      startTime: '08:00am',
      endDate: '03-02-2025',
      endTime: '09:00am',
      status: 'Active',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
    },
    {
      id: '2',
      name: 'Bonus promotion',
      code: 'B28768',
      discount: '25% OFF',
      startDate: '07-02-2025',
      startTime: '08:00am',
      endDate: '03-02-2025',
      endTime: '09:00am',
      status: 'Active',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
    },
    {
      id: '3',
      name: 'Store wide promotion',
      code: 'B28767',
      discount: '50% OFF',
      startDate: '07-02-2025',
      startTime: '08:00am',
      endDate: '03-02-2025',
      endTime: '09:00am',
      status: 'Inactive',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
    },
    {
      id: '4',
      name: 'Mini Pack promotion',
      code: 'B28766',
      discount: '10% OFF',
      startDate: '07-02-2025',
      startTime: '08:00am',
      endDate: '03-02-2025',
      endTime: '09:00am',
      status: 'Active',
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
    },
    {
      id: '5',
      name: 'Store wide promotion',
      code: 'B28765',
      discount: '50% OFF',
      startDate: '07-02-2025',
      startTime: '08:00am',
      endDate: '03-02-2025',
      endTime: '09:00am',
      status: 'Active',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
    },
    {
      id: '6',
      name: 'Extravagant Promo',
      code: 'B28764',
      discount: '50% OFF',
      startDate: '07-02-2025',
      startTime: '08:00am',
      endDate: '03-02-2025',
      endTime: '09:00am',
      status: 'Inactive',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
    },
  ]);

  // Mock data for categories
  const [categories, setCategories] = useState<Category[]>([]);

  const getAddButtonText = () => {
    switch (activeTab) {
      case 'Products':
        return 'Add Products';
      case 'Promotions':
        return 'Add Promotions';
      case 'Categories':
        return 'Add Category';
      default:
        return 'Add';
    }
  };

  const handleToggleProduct = (productId: string) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, isActive: !product.isActive }
          : product
      )
    );
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter((product) => product.id !== productId));
    setShowActionModal(false);
    setSelectedProduct(null);
  };

  const handleEditProduct = (product: Product) => {
    // Navigate to edit screen
    console.log('Navigate to edit screen for product:', product.id);
    navigation.navigate('EditProduct' as never);
    setShowActionModal(false);
    setSelectedProduct(null);
  };

  const openActionModal = (product: Product) => {
    setSelectedProduct(product);
    setShowActionModal(true);
  };

  const renderProducts = () => (
    <View className='px-4'>
      {products.map((product) => (
        <View key={product.id} className='bg-[#eeeeee] rounded-3xl p-4 mb-3'>
          <View className='flex-row items-center'>
            {/* Product Image */}
            <View className='w-16 h-16 rounded-full overflow-hidden mr-4'>
              <Image
                source={{ uri: product.image }}
                className='w-full h-full'
                resizeMode='cover'
              />
            </View>

            {/* Product Details */}
            <View className='flex-1'>
              <Text
                style={{ fontFamily: 'Ubuntu-Medium' }}
                className='font-semibold text-gray-900 text-lg mb-1'
              >
                {product.name}
              </Text>
              <Text
                style={{ fontFamily: 'Ubuntu-Regular' }}
                className='text-gray-700 text-sm mb-1'
              >
                Price ${product.price.toFixed(2)}
              </Text>
              <Text
                style={{ fontFamily: 'Ubuntu-Regular' }}
                className='text-gray-700 text-sm'
              >
                Rating: {product.rating}/5 ★
              </Text>
            </View>

            {/* Controls */}
            <View className='items-end'>
              <TouchableOpacity
                className='p-2 mb-2'
                onPress={() => openActionModal(product)}
              >
                <Text className='text-gray-400 text-xl'>⋮</Text>
              </TouchableOpacity>
              <Switch
                value={product.isActive}
                onValueChange={() => handleToggleProduct(product.id)}
                trackColor={{ false: '#E5E7EB', true: '#08AF97' }}
                thumbColor={product.isActive ? '#FFFFFF' : '#FFFFFF'}
                ios_backgroundColor='#E5E7EB'
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderPromotions = () => (
    <View className='px-4'>
      {promotions.map((promo) => (
        <View key={promo.id} className='bg-[#eeeeee] rounded-3xl  mb-3'>
          <View className='h-[140px] flex-row justify-between items-start'>
            {/* Promotion Image */}
            <View className='w-[140px] mr-3 h-full relative'>
              <Image
                source={{ uri: promo.image }}
                className='w-full h-full rounded-3xl'
                resizeMode='cover'
              />
              {/* Status Badge */}
              <View
                className={`absolute top-8 left-0 px-2 py-1 rounded-tr-full rounded-br-full ${
                  promo.status === 'Active' ? 'bg-[#40af97]' : 'bg-gray-400'
                }`}
              >
                <Text className='text-white text-xl font-medium'>
                  {promo.status}
                </Text>
              </View>
            </View>

            {/* Promotion Details */}
            <View className='flex-1 h-full pt-2'>
              <Text
                style={{ fontFamily: 'Ubuntu-Medium' }}
                className='font-semibold text-gray-900 text-lg mb-1'
              >
                {promo.name}
              </Text>
              <Text
                style={{ fontFamily: 'Ubuntu-Regular' }}
                className='text-gray-900text-sm mb-2'
              >
                Code: {promo.code}
              </Text>
              <View className='bg-[#ed4877] rounded-full px-3 py-1 self-start mb-2'>
                <Text
                  style={{ fontFamily: 'Ubuntu-Medium' }}
                  className='text-white font-medium'
                >
                  {promo.discount}
                </Text>
              </View>
              <Text
                style={{ fontFamily: 'Ubuntu-Regular' }}
                className='text-gray-500 text-sm'
              >
                {promo.startDate} {promo.startTime}
              </Text>
              <Text
                style={{ fontFamily: 'Ubuntu-Regular' }}
                className='text-gray-500 text-sm'
              >
                {promo.endDate} {promo.endTime}
              </Text>
            </View>

            {/* Action Menu */}
            <View className='h-full flex-col align-center justify-center pr-3'>
              <TouchableOpacity className='p-2 items-center'>
                <Text className='text-[#43b7a2] text-2xl font-bold'>⋮</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderCategories = () => (
    <View className='px-4'>
      {categories.length === 0 ? (
        <View className='bg-white rounded-xl p-6 items-center'>
          <Text
            style={{ fontFamily: 'Ubuntu-Regular' }}
            className='text-gray-500 mt-4'
          >
            No categories yet
          </Text>
        </View>
      ) : (
        categories.map((category) => (
          <View key={category.id} className='bg-white rounded-xl p-4 mb-3'>
            <Text>{category.name}</Text>
          </View>
        ))
      )}
    </View>
  );

  return (
    <SafeAreaView className='flex-1 bg-gray-50'>
      <StatusBar barStyle='dark-content' />
      <View className='bg-white px-4 py-4 border-b border-gray-200'>
        {/* Navigation Tabs */}
        <View className='flex-row rounded-lg p-1 mb-4'>
          {['Products', 'Promotions', 'Categories'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 py-3 rounded-full mx-1 border border-[#08AF97] ${
                activeTab === tab ? 'bg-[#08AF97]' : 'bg-white'
              }`}
            >
              <Text
                style={{ fontFamily: 'Ubuntu-Medium' }}
                className={`text-center font-medium ${
                  activeTab === tab ? 'text-white' : 'text-[#08AF97]'
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Search Bar */}
        <View className='flex-row items-center mb-4'>
          <View className='flex-row items-center bg-gray-100 rounded-lg px-3 py-2 flex-1 mr-2'>
            <Search size={20} color='#9CA3AF' />
            <TextInput
              className='flex-1 ml-2 text-gray-700'
              placeholder='Search'
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <SlidersHorizontal size={20} color='#9CA3AF' />
          </View>
        </View>

        {/* Action Buttons */}
        <View className='flex-row items-center justify-between'>
          <TouchableOpacity className='p-2'>
            <SlidersHorizontal size={20} color='#08AF97' />
          </TouchableOpacity>
          <View className='flex-row'>
            <TouchableOpacity className='bg-[#eeeeee] px-4 py-2 rounded-[20px] flex-row items-center mr-2'>
              <Plus size={20} color='#08AF97' />
              <Text
                style={{ fontFamily: 'Ubuntu-Medium' }}
                className='text-[#08AF97] font-medium ml-1'
              >
                {getAddButtonText()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#08AF97] flex gap-2 px-4 py-2 rounded-[20px] flex-row items-center'>
              <SlidersHorizontal size={20} color='white' />
              <Text
                style={{ fontFamily: 'Ubuntu-Medium' }}
                className='text-white font-medium ml-1'
              >
                Reorder
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView className='flex-1 py-4'>
        {activeTab === 'Products' && renderProducts()}
        {activeTab === 'Promotions' && renderPromotions()}
        {activeTab === 'Categories' && renderCategories()}
      </ScrollView>

      {/* Action Modal */}
      <Modal
        visible={showActionModal}
        transparent={true}
        animationType='slide'
        onRequestClose={() => setShowActionModal(false)}
      >
        <Pressable
          className='flex-1 bg-opacity-50'
          onPress={() => setShowActionModal(false)}
        >
          <View className='flex-1 justify-end'>
            <Pressable className='bg-white rounded-t-3xl p-6'>
              {/* Edit Option */}
              <TouchableOpacity
                className='flex-row items-center py-4 '
                onPress={() =>
                  selectedProduct && handleEditProduct(selectedProduct)
                }
              >
                <Edit size={20} color='#6B7280' />
                <Text
                  style={{ fontFamily: 'Ubuntu-Regular' }}
                  className='text-gray-600 ml-3 flex-1'
                >
                  Edit
                </Text>
              </TouchableOpacity>

              {/* Public Toggle Option */}
              <View className='flex-row items-center py-4 '>
                <Globe size={20} color='#6B7280' />
                <Text
                  style={{ fontFamily: 'Ubuntu-Regular' }}
                  className='text-gray-600 ml-3 flex-1'
                >
                  Public
                </Text>
                <Switch
                  value={selectedProduct?.isActive || false}
                  onValueChange={() => {
                    if (selectedProduct) {
                      const updatedProduct = {
                        ...selectedProduct,
                        isActive: !selectedProduct.isActive,
                      };
                      setSelectedProduct(updatedProduct);
                      handleToggleProduct(updatedProduct.id);
                    }
                  }}
                  trackColor={{ false: '#E5E7EB', true: '#08AF97' }}
                  thumbColor='#FFFFFF'
                  ios_backgroundColor='#E5E7EB'
                />
              </View>

              {/* Delete Option */}
              <TouchableOpacity
                className='flex-row items-center py-4'
                onPress={() =>
                  selectedProduct && handleDeleteProduct(selectedProduct.id)
                }
              >
                <Trash2 size={20} color='#EF4444' />
                <Text
                  style={{ fontFamily: 'Ubuntu-Regular' }}
                  className='text-red-500 ml-3 flex-1'
                >
                  Delete
                </Text>
              </TouchableOpacity>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}
