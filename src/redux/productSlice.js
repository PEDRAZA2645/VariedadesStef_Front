import { createSlice } from '@reduxjs/toolkit';
import product1 from '../assets/productsImage/product1.jpg';
import product2 from '../assets/productsImage/product2.jpg';
import product3 from '../assets/productsImage/product3.jpg';
import product4 from '../assets/productsImage/product4.jpg';
import product5 from '../assets/productsImage/product5.jpg';
import product6 from '../assets/productsImage/product6.jpg';
import product7 from '../assets/productsImage/product7.jpg';
import product8 from '../assets/productsImage/product8.jpg';
import product9 from '../assets/productsImage/product9.jpg';

const simulatedProducts = [
  {
    id: 1,
    name: 'HAIR MASK DE CACAO Y MACADAMIA X 550 ML',
    imageUrl: product1,
    salePrice: 26000,
  },
  {
    id: 2,
    name: 'KERA - SHAMPOO 3 X 650 ML',
    imageUrl: product2,
    salePrice: 35500,
  },
  {
    id: 3,
    name: 'SHIMMER - REPARADOR DE PUNTAS X 600 ML',
    imageUrl: product3,
    salePrice: 39000,
  },
  {
    id: 4,
    name: 'SHIMER - SILITERMO PROTECTOR X 600 ML',
    imageUrl: product4,
    salePrice: 250,
  },
  {
    id: 5,
    name: 'KERA - HIDROKERATINA X 350 ML',
    imageUrl: product5,
    salePrice: 36500,
  },
  {
    id: 6,
    name: 'KERA - SHAMPOO 1 X 650 ML',
    imageUrl: product6,
    salePrice: 35500,
  },
  {
    id: 7,
    name: 'KERA SHAMPOO 2 X 650 ML',
    imageUrl: product7,
    salePrice: 35500,
  },
  {
    id: 8,
    name: 'HAIR MASK DE ALOE ALMENDRAS X 550 ML',
    imageUrl: product8,
    salePrice: 26000,
  },
  {
    id: 9,
    name: 'HAIR MASK DE TRIGO & AVENA X 550',
    imageUrl: product9,
    salePrice: 500,
  },
];

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: simulatedProducts,
    loading: false,
    error: null,
  },
  reducers: {},
});

export default productSlice.reducer;