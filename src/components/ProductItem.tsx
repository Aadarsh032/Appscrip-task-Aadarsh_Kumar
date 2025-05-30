"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
interface ProductItemProps {
    productId: number,
    title: string,
    image: string,
    isLiked: boolean,
}

const ProductItem: React.FC<ProductItemProps> = (props) => {
    return (
        <div className='product-item-main'>
            <div className='product-item-image-box'>
                <Image
                    src={`${props.image}`}
                    alt={props.title || 'Product Image'} width={200} height={462}
                    className='product-item-image'
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className='product-item-info'>
                <h3 className='product-item-title'>{props.title}</h3>
                <p className='product-item-description'>
                    Sign in or Create an account to see pricing
                    {
                        props.isLiked ?
                            <Image src={'/assets/icons/heart-full.png'} alt={'Add to favrorites'} height={20} width={20} />
                            :
                            <Image src={'/assets/icons/heart-empty.png'} alt={'Remove from favrorites'} height={20} width={20} />
                    }
                </p>
            </div>
        </div>
    )
}

export default ProductItem