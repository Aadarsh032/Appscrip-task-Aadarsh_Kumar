"use client"
import React, { useEffect, useState } from 'react'
import '../styles/ProductListSection.css'
import ProductItem from './ProductItem'
import MultiSelectDropdown from './MultiSelectDropdown'
import CustomDropdown from './CustomDropdown'

interface ProductItem {
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
    productListData: ProductItem[];
}

interface ProcessedProductItem extends ProductItem {
    isLiked: boolean
}

const idealFor = ["Men", "Women", "Baby & Kids"];
const occasion = ["Party", "Festival"];
const work = ["CASUAL", "FORMAL"];
const fabric = ["Linen", "Cotton", "Hemp"];
const segment = ["Lower", "Higher", "Premium"];
const suitableFor = ["Kids", "Old", "Women"];
const rawMaterials = ["Hemp", "Cotton", "Leather"];
const patterm = ["Check", "Round", "Square"]

function ProcessProductListData(productListData: ProductItem[]): ProcessedProductItem[] {
    const data = productListData.map((product, index) => {
        return {
            ...product,
            isLiked: index === 3,
        }
    })
    return data;
}

const ProductListSection: React.FC<ProductListSectionProps> = ({ productListData }) => {
    const processedProductList = ProcessProductListData(productListData)
    const [toggleFilterBar, setToggleFilterBar] = useState<boolean>(false)
    const options = ["Recommended", "Newest First", "Popular", "Price : high to low", "Price : low to high"];

    return (
        <div className='product-list-main' >
            <div className='product-list-top-bar' >
                <div className='product-list-item-number'>
                    <span>{processedProductList.length} ITEMS</span>
                    <div className='toggle-filter-column'>
                        {
                            toggleFilterBar ?
                                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>arrow_back_ios</span>
                                :
                                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>arrow_forward_ios</span>
                        }
                        <u onClick={() => setToggleFilterBar(!toggleFilterBar)} >{toggleFilterBar ? 'HIDE FILTER' : 'SHOW FILTER'}</u>
                    </div>
                </div>
                <div className='product-list-recomendation-filter'>
                    <span className='product-list-recomendation-filter-label' >FILTER</span>
                </div>
                <div className='product-list-recomendation-drop'>
                    <CustomDropdown theme='light' options={options} checkSelected={true} title={'Recommended'} />
                </div>
            </div>
            <div className='product-display-section' >
                <div className='product-list-filter-column' style={{ width: toggleFilterBar ? '25%' : '0%', display: toggleFilterBar ? 'block' : 'none' }} >
                    <div className='customizable-checkbox'>
                        <input
                            type="checkbox"
                            checked={false}
                            readOnly
                            className="dropdown-checkbox"
                        />
                        <span>CUSTOMIZABLE</span>
                    </div>
                    <MultiSelectDropdown theme='light' title='IDEAL FOR' options={idealFor} />
                    <MultiSelectDropdown theme='light' title={'OCCASION'} options={occasion} />
                    <MultiSelectDropdown theme='light' title='WORK' options={work} />
                    <MultiSelectDropdown theme='light' title={'FABRIC'} options={fabric} />
                    <MultiSelectDropdown theme='light' title='SEGMENT' options={segment} />
                    <MultiSelectDropdown theme='light' title={'SUITABLE FOR'} options={suitableFor} />
                    <MultiSelectDropdown theme='light' title='RAW MATERIALS' options={rawMaterials} />
                    <MultiSelectDropdown theme='light' title={'PATTERN'} options={patterm} />
                </div>
                <div className='product-list-display' style={{ width: toggleFilterBar ? '75%' : '100%' }}>
                    {
                        processedProductList.map((product: ProcessedProductItem, index: number) => {
                            return (
                                <ProductItem
                                    key={index}
                                    image={product.image}
                                    title={product.title}
                                    productId={product.id}
                                    isLiked={product.isLiked}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default ProductListSection





