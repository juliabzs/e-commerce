import React, { useState } from 'react'
import { images } from '../assets/images';

const Category = () => {
    const [activeTab, setActiveTab] = useState('women');

    const tabs = [
        {id: 'women', name: 'Women', image: images.women},
        {id: 'men', name: 'Men', image: images.men},
        {id: 'kids', name: 'Kids', image: images.kids},
        {id: 'shoes', name: 'Shoes', image: images.shoes},
        {id: 'pants', name: 'Pants', image: images.pants},
        {id: 'shirts', name: 'Shirts', image: images.shirts},
    ];
    
    const products = {
        women: [
            {id: 1, name: 'Summer Dress', price: '$49,90', image: images.women1},
            {id: 2, name: 'Elegant Blouse', price: '$39,90', image: images.women2},
            {id: 3, name: 'Denim Jacket', price: '$79,90', image: images.women3},
            {id: 4, name: 'Floral Skirt', price: '$44,90', image: images.women4},
        ],
        men: [
            {id: 1, name: 'Casual Shirt', price: '$49,90', image: images.men1},
            {id: 2, name: 'Slim jeans', price: '$59,90', image: images.men2},
            {id: 3, name: 'Blazer', price: '$129,90', image: images.men3},
            {id: 4, name: 'T-Shirt', price: '$29,90', image: images.men4},
        ],
        kids: [
            {id: 1, name: 'Kids T-Shirt', price: '$19,90', image: images.kids1},
            {id: 2, name: 'Kids Jeans', price: '$29,90', image: images.kids2},
            {id: 3, name: 'Kids Dress', price: '$39,90', image: images.kids3},
            {id: 4, name: 'Kids Shoes', price: '$22,90', image: images.kids4},
        ],
        shoes: [
            {id: 1, name: 'Running Shoes', price: '$89,90', image: images.shoes1},
            {id: 2, name: 'Casual Sneakers', price: '$69,90', image: images.shoes2},
            {id: 3, name: 'Formal Shoes', price: '$99,90', image: images.shoes3},
            {id: 4, name: 'Sandals', price: '$39,90', image: images.shoes4},
        ],
        pants: [
            {id: 1, name: 'Denim Jeans', price: '$89,90', image: images.pants1},
            {id: 2, name: 'Chino Pants', price: '$69,90', image: images.pants2},
            {id: 3, name: 'Joggers', price: '$99,90', image: images.pants3},
            {id: 4, name: 'Cargo Pants', price: '$39,90', image: images.pants4},
        ],
        shirts: [
            {id: 1, name: 'Cotton Shirt', price: '$89,90', image: images.shirts1},
            {id: 2, name: 'Oxford Shirt', price: '$69,90', image: images.shirts2},
            {id: 3, name: 'Lineal Shirt', price: '$99,90', image: images.shirts3},
            {id: 4, name: 'Casual Shirt', price: '$39,90', image: images.shirts4},
        ],
    }
return (
    <section className='py-20 bg-gray-50' data-aos='fade-up'>
        <div className='container mx-auto px-4 md:px-8 lg:px-16'>
            <div className='text-center mb-12' data-aos='fade-down'>
                <h2 className='text-3xl md:text-4xl font-bold
                text-gray-900 mb-3'>
                    Shop by Category
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className='flex flex-wrap justify-center gap-4 mb-12'
            data-aos='fade-up' data-aos-delay='200'>
                {tabs.map((tab) => (
                    <button
                    key={tab.id} onClick={() => setActiveTab(tab.id)}
                    className={`group flex flex-col items-center
                    gap-2 px-4 py-3 rounded-full transition-all
                    duration-300 ${
        activeTab === tab.id
        ? 'bg-gray-900 text-white shadow-lg scale-105'
        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                    }`}>
                        <div className='w-12 h-12 overflow-hidden'>
                            <img src={tab.image} alt={tab.name}
                            className='w-full h-full object-contain' />
                        </div>
                        <span className='text-sm font-medium'>
                            {tab.name} </span>
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-6'>
                {products[activeTab]?.map((product, idx) => (
                    <div
                        key={product.id}
                        className='group bg-white rounded-2xl
                        overflow-hidden shadow-md hover:shadow-2xl
                        transition-all duration-500 cursor-pointer'
                        data-aos='zoom-in'
                        data-aos-delay={idx * 100}>
                    <div className='relative h-64 overflow-hidden'>
                        <img src={product.image} alt={product.name}
                        className='w-full h-full object-contain
                        transition-transform duration-700
                        group-hover:scale-110 p-4' />
                        <div className='absolute inset-0 bg-black/20
                        opacity-0 group-hover:opacity-100 transition-opacity
                        duration-300'
                        />
                        <button className='absolute bottom-4 left-1/2
                        transform -translate-x-1/2 bg-white
                        text-gray-900 px-4 py-2 rounded-full
                        text-sm font-semibold opacity-0
                        group-hover:opacity-100 transition-all
                        duration-300 hover:scale-105'>
                            Quick View
                        </button>
                        </div>
                        <div className='p-4'>
                         <h3 className='font-semibold text-gray-900 mb-1'>
                             {product.name}
                         </h3>
                         <p className='text-gray-600 font-medium'>
                            {product.price}
                         </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Category