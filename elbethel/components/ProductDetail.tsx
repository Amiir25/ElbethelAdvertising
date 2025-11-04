import React from 'react'
import { Product } from '@/assets/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface ProductDetailProps {
    product: Product;
    onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  return (
    <>
        {/* <div>
        { 
          product && product.name
        }
      </div> */}
    <section className='fixed top-0 left-0 w-screen h-screen bg-gray-800 text-white z-50
    px-6 md:px-12 lg:px-24 xl:px-32 pt-20 pb-8 overflow-scroll scrollbar-hide'>
        
        <FontAwesomeIcon icon={ faXmark } onClick={ onClose }
        className='absolute top-4 right-4 md:right-10 text-xl md:text-2xl cursor-pointer' />

        <div className='flex flex-col md:flex-row md:items-start md:gap-20'>
            <img src={ product.image.src } alt="" 
            className='md:flex-1 w-[300px] mx-auto'/>
            
            <div className='md:flex-1 mt-10'>
                <h1 className='text-center text-xl md:text-3xl font-bold'>{ product.name }</h1>
                <p className='mt-4 md:text-lg tracking-wider text-justify'>{ product.description }</p>

                {/* Order Now buttin */}
                <button className='w-full mt-10 py-4 text-2xl md:text-4xl font-semibold tracking-widest
                rounded bg-primary hover:opacity-90 active:opacity-100 cursor-pointer'>
                    Order Now
                </button>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetail