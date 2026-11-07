import React, { useState } from 'react'
import { images } from '../assets/images';
import { Heart, ShoppingCart } from 'lucide-react';

const Cards = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [liked, setLiked] = useState({});

    const allProducts = [
        {id: 1, name: 'Summer Dress', price: '$49.99', image: images.women1,
            category: 'Women'
        },
        {id: 2, name: 'Elegant Blouse', price: '$39.99', image: images.women2,
            category: 'Women'
        },
        {id: 3, name: 'Denim Jacket', price: '$79.99', image: images.women3,
            category: 'Women'
        },
        {id: 4, name: 'Floral Shirt', price: '$45.99', image: images.women4,
            category: 'Women'
        },
        {id: 5, name: 'Casual Shirt', price: '$44.99', image: images.men1,
            category: 'Men'
        },
        {id: 6, name: 'Slim Jeans', price: '$59.99', image: images.men2,
            category: 'Men'
        },
        {id: 7, name: 'Summer Dress', price: '$149.99', image: images.men3,
            category: 'Men'
        },
        {id: 8, name: 'Summer Dress', price: '$89.99', image: images.men4,
            category: 'Men'
        },
        {id: 9, name: 'Summer Dress', price: '$49.99', image: images.kids1,
            category: 'Kids'
        },
        {id: 10, name: 'Summer Dress', price: '$99.99', image: images.kids2,
            category: 'Kids'
        },
        {id: 11, name: 'Summer Dress', price: '$79.99', image: images.kids3,
            category: 'Kids'
        },
        {id: 12, name: 'Summer Dress', price: '$39.99', image: images.kids4,
            category: 'Kids'
        },
        {id: 13, name: 'Summer Dress', price: '$49.99', image: images.shoes1,
            category: 'Shoes'
        },
        {id: 14, name: 'Summer Dress', price: '$49.99', image: images.shoes2,
            category: 'Shoes'
        },
        {id: 15, name: 'Summer Dress', price: '$49.99', image: images.shoes3,
            category: 'Shoes'
        },
        {id: 16, name: 'Summer Dress', price: '$49.99', image: images.shoes4,
            category: 'Shoes'
        },
        {id: 17, name: 'Summer Dress', price: '$49.99', image: images.pants1,
            category: 'Pants'
        },
        {id: 18, name: 'Summer Dress', price: '$49.99', image: images.pants2,
            category: 'Pants'
        },
        {id: 19, name: 'Summer Dress', price: '$49.99', image: images.pants3,
            category: 'Pants'
        },
        {id: 20, name: 'Summer Dress', price: '$49.99', image: images.pants4,
            category: 'Pants'
        },

    ];
    const productsPerRow = 5;
    const rowsPerPage = 2;
    const productsPerPage = productsPerRow * rowsPerPage;
    const totalPages = Math.ceil(allProducts.length / productsPerPage);
    const startIndex = currentPage * productsPerPage;
    const currentIProducts = allProducts.slice(
        startIndex, startIndex + productsPerPage);

        const nextPage = () => {
            setCurrentPage((prev) => (prev + 1) % totalPages);
        };

        const prevPage = () => {
            setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
        };
        const toggleLike = (id) => {
            setLiked((prev) => ({
                ...prev, [id]: !prev[id]
            }));
        };
        return (
            <section className='py-20 bg-white' data-aos='fade-up'>
                <div className='container mx-auto px-4 md:px-8 lg:px-16'>
                    <div className='text-center mb-12' data-aos='fade-down'>
                        <h2 className='text-3xl md:text-4xl font-bold
                        text-gray-900 mb-3'>
                            All Products
                        </h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Discover our complete collection of fashion items
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2
                    md:grid-cols-3 lg:grid-cols-5 gap-6'>
                        {currentIProducts.map((product, idx) => (
                            <div key={product.id}
                            className='group bg-white rounded-2xl
                            overflow-hidden shadow-md hover:shadow-2xl
                            transition-all duration-500 cursor-pointer
                            border border-gray-100'
                            data-aos='zoom-in'
                            data-aos-delay={idx * 100}>
                                <div className='relative h-56 overflow-hidden
                                bbg-gray-50'>
                                    <img src={product.image} alt={product.name}
                                    className='w-full h-full object-contain
                                    transition-transform duration-700
                                    group-hover:scale-110 p-4' />
                                    <div className='absolute top-2 right-2
                                    flex glex-col gap-2 opacity-0
                                    group-hover:opacity-100 transition-all
                                    duration-300 transform translate-x-2
                                    group-hover:translate-x-0'>
                                        <button
                                        onClick={() => toggleLike(product.id)}
                                        className='bg-white rounded-full
                                        p-2 shadow-md hover:scale-110
                                        transition-transform duration-200'>
                                            <Heart size={16}
                                            className={liked[product.id]
                                ? 'fill-red-500 stroke-red-500'
                                : 'stroke-gray-700'
                                                 }/>
                                        </button>
                                        <button
                                        className='bg-white rounded-full
                            p-2 shadow-md hover:scale-110 transition-transform
                            duration-200'>
                                          <ShoppingCart size={16}
                                    className='stroke-gray-700'/>
                                        </button>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <p className='text-xs text-gray-500 mb-1'>
                                        {product.category}
                                    </p>
                                    <h3 className='font-semibold text-gray-900
                                    mb-1 line-clamp-1'>
                                        {product.name}
                                    </h3>
                                    <span className='text-gray-900 font-bold'>
                                        {product.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center gap-4 mt-12'
                    data-aos='fade-up' data-aos-delay='600'>
                        <button
                        onClick={prevPage}
                        className='px-4 py-2 bg-gray-900 text-white
                        rounded-lg hover:bg-gray-800 transition-all
                        duration-300'>
                            Previous
                        </button>
                        <span>
                            Page {currentPage + 1 } of {totalPages}
                        </span>
                        <button
                        onClick={nextPage}
                        className='px-4 py-2 bg-gray-900 text-white
                        rounded-lg hover:bg-gray-800 transition-all
                        duration-300'
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
        );
};

export default Cards