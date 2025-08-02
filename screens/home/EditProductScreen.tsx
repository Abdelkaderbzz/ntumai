import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  SafeAreaView,
  Switch,
} from 'react-native';
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Package,
  FolderOpen,
  Settings,
  Tag,
  ArrowRight,
  DollarSign,
  Image as ImageIcon,
} from 'lucide-react-native';
import Text from '../../components/Text';

interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  description: string;
  hasWarranty: boolean;
  isRefundable: boolean;
}

export default function EditProductScreen() {
  const [expandedSections, setExpandedSections] = useState({
    generalInfo: true,
    media: false,
    variant: false,
    option: false,
  });

  const [product, setProduct] = useState<Product>({
    id: '1',
    name: 'Apple Laptop Latest Version',
    category: 'Office Accessory',
    brand: 'Apple',
    price: 250.0,
    description: '',
    hasWarranty: true,
    isRefundable: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const updateProduct = (field: keyof Product, value: any) => {
    setProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderGeneralInfo = () => (
    <View className='space-y-4'>
      {/* Product Name */}
      <View>
        <Text
          style={{ fontFamily: 'Ubuntu-Regular' }}
          className='text-gray-600 text-sm mb-2'
        >
          Product Name
        </Text>
        <View className='bg-gray-100 rounded-lg px-3 py-3 flex-row items-center'>
          <Package size={20} color='#6B7280' />
          <TextInput
            className='flex-1 ml-2 text-gray-900'
            value={product.name}
            onChangeText={(text) => updateProduct('name', text)}
            placeholder='Enter product name'
          />
        </View>
      </View>

      {/* Categories */}
      <View>
        <Text
          style={{ fontFamily: 'Ubuntu-Regular' }}
          className='text-gray-600 text-sm mb-2'
        >
          Categories
        </Text>
        <View className='bg-gray-100 rounded-lg px-3 py-3 flex-row items-center'>
          <FolderOpen size={20} color='#6B7280' />
          <TextInput
            className='flex-1 ml-2 text-gray-900'
            value={product.category}
            onChangeText={(text) => updateProduct('category', text)}
            placeholder='Select category'
          />
        </View>
      </View>

      {/* Brand */}
      <View>
        <Text
          style={{ fontFamily: 'Ubuntu-Regular' }}
          className='text-gray-600 text-sm mb-2'
        >
          Brand
        </Text>
        <View className='bg-gray-100 rounded-lg px-3 py-3 flex-row items-center'>
          <Settings size={20} color='#6B7280' />
          <TextInput
            className='flex-1 ml-2 text-gray-900'
            value={product.brand}
            onChangeText={(text) => updateProduct('brand', text)}
            placeholder='Enter brand'
          />
        </View>
      </View>

      {/* Warranty */}
      <View className='flex-row items-center justify-between'>
        <View className='flex-row items-center'>
          <Tag size={20} color='#6B7280' />
          <Text
            style={{ fontFamily: 'Ubuntu-Regular' }}
            className='text-gray-900 ml-2'
          >
            Warranty
          </Text>
        </View>
        <Switch
          value={product.hasWarranty}
          onValueChange={(value) => updateProduct('hasWarranty', value)}
          trackColor={{ false: '#E5E7EB', true: '#08AF97' }}
          thumbColor='#FFFFFF'
          ios_backgroundColor='#E5E7EB'
        />
      </View>

      {/* Refundable */}
      <View className='flex-row items-center justify-between'>
        <View className='flex-row items-center'>
          <ArrowRight size={20} color='#6B7280' />
          <Text
            style={{ fontFamily: 'Ubuntu-Regular' }}
            className='text-gray-900 ml-2'
          >
            Refundable
          </Text>
        </View>
        <Switch
          value={product.isRefundable}
          onValueChange={(value) => updateProduct('isRefundable', value)}
          trackColor={{ false: '#E5E7EB', true: '#08AF97' }}
          thumbColor='#FFFFFF'
          ios_backgroundColor='#E5E7EB'
        />
      </View>

      {/* Description */}
      <View>
        <Text
          style={{ fontFamily: 'Ubuntu-Regular' }}
          className='text-gray-600 text-sm mb-2'
        >
          Description
        </Text>
        <TextInput
          className='bg-gray-100 rounded-lg px-3 py-3 text-gray-900 min-h-[100]'
          value={product.description}
          onChangeText={(text) => updateProduct('description', text)}
          placeholder='Enter product description'
          multiline
          textAlignVertical='top'
        />
      </View>

      {/* Price */}
      <View>
        <Text
          style={{ fontFamily: 'Ubuntu-Regular' }}
          className='text-gray-600 text-sm mb-2'
        >
          Price
        </Text>
        <View className='bg-gray-100 rounded-lg px-3 py-3 flex-row items-center'>
          <DollarSign size={20} color='#6B7280' />
          <TextInput
            className='flex-1 ml-2 text-gray-900'
            value={product.price.toString()}
            onChangeText={(text) =>
              updateProduct('price', parseFloat(text) || 0)
            }
            placeholder='0.00'
            keyboardType='numeric'
          />
        </View>
      </View>
    </View>
  );

  const renderMedia = () => (
    <View className='space-y-4'>
      {/* Add Cover */}
      <View className='bg-gray-100 rounded-lg p-6 items-center'>
        <ImageIcon size={40} color='#08AF97' />
        <Text
          style={{ fontFamily: 'Ubuntu-Medium' }}
          className='text-gray-900 mt-2'
        >
          Add Cover
        </Text>
      </View>

      {/* Add Product */}
      <View className='bg-gray-100 rounded-lg p-6 items-center'>
        <ImageIcon size={40} color='#08AF97' />
        <Text
          style={{ fontFamily: 'Ubuntu-Medium' }}
          className='text-gray-900 mt-2'
        >
          Add Product
        </Text>
        <Text
          style={{ fontFamily: 'Ubuntu-Regular' }}
          className='text-gray-500 text-sm mt-1'
        >
          Please upload at least 8 images.
        </Text>
      </View>
    </View>
  );

  const renderVariant = () => (
    <View className='bg-gray-100 rounded-lg p-6 items-center'>
      <Text style={{ fontFamily: 'Ubuntu-Regular' }} className='text-gray-500'>
        Variant options will appear here
      </Text>
    </View>
  );

  const renderOption = () => (
    <View className='bg-gray-100 rounded-lg p-6 items-center'>
      <Text style={{ fontFamily: 'Ubuntu-Regular' }} className='text-gray-500'>
        Option settings will appear here
      </Text>
    </View>
  );

  return (
    <SafeAreaView className='flex-1 bg-gray-50'>
      <StatusBar barStyle='light-content' />

      {/* Header */}
      <View className='bg-[#08AF97] px-4 py-4'>
        <TouchableOpacity className='flex-row items-center'>
          <ArrowLeft size={24} color='white' />
          <Text
            style={{ fontFamily: 'Ubuntu-Medium' }}
            className='text-white text-lg ml-2'
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className='flex-1 px-4 py-6'>
        {/* Title */}
        <Text
          style={{ fontFamily: 'Ubuntu-Bold' }}
          className='text-gray-900 text-2xl text-center mb-6'
        >
          Edit Product
        </Text>

        {/* Main Form Container */}
        <View className='bg-gray-100 rounded-xl p-6 space-y-4'>
          {/* General Info Section */}
          <View>
            <TouchableOpacity
              className='flex-row items-center justify-between py-3'
              onPress={() => toggleSection('generalInfo')}
            >
              <Text
                style={{ fontFamily: 'Ubuntu-Medium' }}
                className='text-gray-900 text-lg'
              >
                General Info
              </Text>
              {expandedSections.generalInfo ? (
                <ChevronUp size={20} color='#6B7280' />
              ) : (
                <ChevronDown size={20} color='#6B7280' />
              )}
            </TouchableOpacity>
            {expandedSections.generalInfo && (
              <View className='pt-4'>{renderGeneralInfo()}</View>
            )}
          </View>

          <View className='border-t border-gray-200' />

          {/* Media Section */}
          <View>
            <TouchableOpacity
              className='flex-row items-center justify-between py-3'
              onPress={() => toggleSection('media')}
            >
              <Text
                style={{ fontFamily: 'Ubuntu-Medium' }}
                className='text-gray-900 text-lg'
              >
                Media
              </Text>
              {expandedSections.media ? (
                <ChevronUp size={20} color='#6B7280' />
              ) : (
                <ChevronDown size={20} color='#6B7280' />
              )}
            </TouchableOpacity>
            {expandedSections.media && (
              <View className='pt-4'>{renderMedia()}</View>
            )}
          </View>

          <View className='border-t border-gray-200' />

          {/* Variant Section */}
          <View>
            <TouchableOpacity
              className='flex-row items-center justify-between py-3'
              onPress={() => toggleSection('variant')}
            >
              <Text
                style={{ fontFamily: 'Ubuntu-Medium' }}
                className='text-gray-900 text-lg'
              >
                Variant
              </Text>
              {expandedSections.variant ? (
                <ChevronUp size={20} color='#6B7280' />
              ) : (
                <ChevronDown size={20} color='#6B7280' />
              )}
            </TouchableOpacity>
            {expandedSections.variant && (
              <View className='pt-4'>{renderVariant()}</View>
            )}
          </View>

          <View className='border-t border-gray-200' />

          {/* Option Section */}
          <View>
            <TouchableOpacity
              className='flex-row items-center justify-between py-3'
              onPress={() => toggleSection('option')}
            >
              <Text
                style={{ fontFamily: 'Ubuntu-Medium' }}
                className='text-gray-900 text-lg'
              >
                Option
              </Text>
              {expandedSections.option ? (
                <ChevronUp size={20} color='#6B7280' />
              ) : (
                <ChevronDown size={20} color='#6B7280' />
              )}
            </TouchableOpacity>
            {expandedSections.option && (
              <View className='pt-4'>{renderOption()}</View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Save Button */}
      <View className='px-4 py-4'>
        <TouchableOpacity className='bg-[#08AF97] rounded-lg py-4 items-center'>
          <Text
            style={{ fontFamily: 'Ubuntu-Medium' }}
            className='text-white text-lg'
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
