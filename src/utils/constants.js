import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
    submenu: [
      {
        title: "more about us"
      },
      {
        title: "our goals"
      }
    ]
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
    submenu: [
      {
        title: "more about us"
      },
      {
        title: "our goals"
      }
    ]
  },
  {
    id: 4,
    text: 'Checkout',
    url: '/checkout',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

// export const products_url = 'https://course-api.com/react-store-products'
// export const products_url = 'https://backend-restapp.herokuapp.com/api/products'
export const products_url = 'https://online-store-f849d-default-rtdb.europe-west1.firebasedatabase.app/products.json'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
// export const single_product_url = `https://online-store-f849d-default-rtdb.europe-west1.firebasedatabase.app/products.json`
// export const single_product_url = `http://127.0.0.1:8000/api/products/`
// export const single_product_url = `https://backend-restapp.herokuapp.com/api/products/`
export const single_product_url = `https://restapi-new.herokuapp.com/api/products/`
