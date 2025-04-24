"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
interface ProductItemProps {
    productId: number,
    title: string,
    image: string,
}

const ProductItem: React.FC<ProductItemProps> = (props) => {
    const bool = false;
    return (
        <div className='product-item-main'>
            <Image
                src={`${props.image}`}
                alt={props.title} width={200} height={462}
                className='product-item-image'
                style={{ objectFit: 'contain' }}
            />
            <div className='product-item-info'>
                <h3 className='product-item-title'>{props.title}</h3>
                <p className='product-item-description'>
                    Sign in or Create an account to see pricing
                    <span className="material-icons" style={{ background: bool ? 'red' : 'white' }} >
                        favorite
                    </span>
                </p>
            </div>
        </div>
    )
}

export default ProductItem