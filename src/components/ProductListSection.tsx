"use client"
import React, { useEffect, useState } from 'react'
import '../styles/ProductListSection.css'
import ProductItem from './ProductItem'

type ProductItem = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: {
        count: number,
        rate: number
    },
    title: string
}

interface ProductListSectionProps {
    productListData: any[];
}

const ProductListSection: React.FC<ProductListSectionProps> = ({ productListData }) => {

    console.log(productListData, "Product List")
    const [toggleFilterBar, setToggleFilterBar] = useState<boolean>(false)

    return (
        <div className='productListMain' >
            <div className='productListTopBar' >
                <div className='productListItemNumber'>
                    <span>{productListData.length}{" "} Items</span>
                    <div className='toggleFilterColumn'>
                        <span className="material-icons" style={{ fontSize: '15px' }}>arrow_back_ios</span>
                        <u onClick={() => setToggleFilterBar(!toggleFilterBar)} >{toggleFilterBar ? 'HIDE FILTER' : 'SHOW FILTER'}</u>
                    </div>
                </div>
                <div className='productListRecomendationDrop'>
                    <select  >
                        <option value="Recommended">Recommended</option>
                        <option value="Newest first">Newest first</option>
                        <option value="mercedes">Popular</option>
                        <option value="audi">Price : high to low</option>
                        <option value="audi">Price : low to high</option>
                    </select>
                </div>
            </div>
            <div className='productDisplaySection' >
                <div className='productListFilterColumn' style={{ width: toggleFilterBar ? '25%' : '0%' }} >
                    Column Filter
                </div>
                <div className='productListDisplay' style={{ width: toggleFilterBar ? '75%' : '100%' }}>
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
        </div >
    )
}

export default ProductListSection





