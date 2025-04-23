"use client"
import React, { useEffect, useState } from 'react'
import '../styles/ProductListSection.css'
import ProductItem from './ProductItem'

interface ProductListSectionProps {
    productListData: any[];
}

const ProductListSection: React.FC<ProductListSectionProps> = ({ productListData }) => {
    return (
        <div className='productListMain' >
            <div className='productListTopBar' >
                <div className='productListItemNumber'>

                </div>
                <div className='productListRecomendationDrop'>
                    <select  >
                        <option value="Recommended">Recommended</option>
                        <option value="Newest first">Newest first</option>
                        <option value="mercedes">popular</option>
                        <option value="audi">Price : high to low</option>
                        <option value="audi">Price : low to high</option>
                    </select>
                </div>
            </div>
            <div className='productDisplaySection' >
                <div className='productListFilterColumn'>

                </div>
                <div className='productListDisplay'>
                    {
                        productListData.map((product, index) => {
                            return (
                                <ProductItem
                                    key={index}
                                    image={product.image}
                                    title={product.title}
                                    productId={product.id} />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default ProductListSection





