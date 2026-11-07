import React, { useState } from 'react'
import women3 from '../assets/women3.png'
import men3 from '../assets/men3.png'
import women2 from '../assets/women2.png'
import men4 from '../assets/women4.png'
import pants2 from '../assets/pants2.png'
import shirts3 from '../assets/shirts3.png'
import kids3 from '../assets/kids3.png'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'

const Products = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [liked, setLiked] = useState({});

    const products = [
        {
            id: 1,
            name: 'Classic White Shirt',
            price: '$49,99',
            oldPrice: '$79,99',
            image: women3,
            colors: ['black', 'blue', 'brown']
        },
        {
            id: 2,
            name: 'Summer Float Dress',
            price: '$59,99',
            oldPrice: '$89,99',
            image: men3,
            colors: ['black', 'blue', 'brown']
        },
        {
            id: 3,
            name: 'Slim Fit Jeans',
            price: '$69,99',
            oldPrice: '$99,99',
            image: women2,
            colors: ['black', 'blue', 'brown']
        },
        {
            id: 4,
            name: 'Leather Jacket',
            price: '$129,99',
            oldPrice: '$199,99',
            image: men4,
            colors: ['black', 'blue', 'brown']
        },
        {
            id: 5,
            name: 'Running Shoes',
            price: '$89,99',
            oldPrice: '$119,99',
            image: pants2,
            colors: ['black', 'blue', 'brown']
        },
        {
            id: 6,
            name: 'Wool Sweater',
            price: '$79,99',
            oldPrice: '$199,99',
            image: shirts3,
            colors: ['black', 'blue', 'brown']
        },
        {
            id: 7,
            name: 'Denim Jacket',
            price: '$99,99',
            oldPrice: '$139,99',
            image: kids3,
            colors: ['black', 'blue', 'brown']
        },
    ];

    const extendedProducts = [...products, ...products, ...products];
    const itemsPerPage = 6;
    const totalSlides = Math.ceil(extendedProducts.length / itemsPerPage) - 2;
    const startIndex = currentIndex * itemsPerPage;
    const currentProducts = extendedProducts.slice(
        startIndex, startIndex + itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex + 1 >= totalSlides) {
                return 0;
            }
            return prevIndex + 1 ;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex - 1 < 0) {
                return 0;
            }
            return prevIndex - 1 ;
        });
    };

    const toggleLike = (id, idx) => {
        const uniqueId = `${id}-${idx}`;
        setLiked((prev) => ({...prev, [uniqueId]: !prev[uniqueId]}));
    };

    const colorClasses = {
        black: 'bg-black',
        blue: 'bg-blue-300',
        brown: 'bg-orange-300',
    };
    return (
        <div className='py-20 bg-white' data-aos='fade-up'>
            <div className='container mx-auto px-4 md:px-8 lg:px-8 lg:px-16'>
                <div className='flex justify-between items-center mb-12'
                data-aos='fade-down'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                        Trending Products
                    </h2>
                    <div className='flex items-center gap-4'>
                        <button
                        onClick={prevSlide}
                        className='p-2 rounded-full bg-gray-100
                        hover:bg-gray-200 transition-all duration-300'
                        >
                            <ChevronLeft className='w-5 h-5 text-gray-700' />
                        </button>
                        <button
                        onClick={nextSlide}
                        className='p-2 rounded-full bg-gray-100
                        hover:bg-gray-200 transition-all duration-300'
                        >
                            <ChevronRight className='w-5 h-5 text-gray-700' />
                        </button>
                    </div>
                </div>
                <div className='overflow-hidden'>
                    <div className='grid grid-cols-1 sm:grid-cols-2
                    md:grid-cols-3 lg:grid-cols-6 gap-4'>
                        {currentProducts.map((product, idx) => (
                            <div
                            key={`${product.id}-${startIndex + idx}`}
                            className='group bg-white rounded-xl overflow-hidden
                            shadow-md hover:shadow-xl transition-all duration-500
                            cursor-pointer border border-gray-100'
                            data-aos='zoom-in'
                            data-aos-delay={idx * 100}>
                                <div className='relative h-56 overflow-hidden bg-gray-100'>
                                <img src={product.image} alt={product.name}
                                className='w-full h-full object-contain
                                 transition-transform duration-700
                                  group-hover:scale-110'
                                  />
                                  <button
                                  onClick={() => toggleLike(product.id, startIndex + idx)}
                                  className='absolute top-2 right-2 bg-white/80
                                  backdrop-blur-sm rounded-full p-1.5 hover:scale-110'
                                  >
                                    <Heart
                                    className={`w-4 h-4
                                    ${liked[`${product.id}-${startIndex + idx}`]
                                    ? 'fill-red-500' 
                                    : 'fill-none stroke-gray-700'}`} />
                                  </button>
                                </div>
                                <div className='p-3'>
                                    <h3 className='font-semibold text-gray-900 text-sm
                                    mb-1 line-clamp-1'>
                                        {product.name}
                                    </h3>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <span className='text-gray-900 font-bold text-sm'>
                                            {product.price}
                                        </span>
                                        <span className='text-gray-400 line-through
                                        text-xs'>
                                            {product.oldPrice}
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        {product.colors.map((color, colorIdx) => (
                                            <div
                                            key={colorIdx}
                                            className={`h-5 w-5 rounded-full
                                 ${colorClasses[color]} border border-gray-300 cursor-pointer
                                 hover:scale-110 transition-transform duration-200`}>
                                 </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products