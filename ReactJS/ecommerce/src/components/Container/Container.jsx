import { useEffect, useState } from 'react';
import styles from './Container.module.css'
import axios from 'axios';
import { ProductCard } from '../common';


//make it responsive & add component to common
function Container() {
    const [data, setData] = useState([]);
    const API = 'https://dummyjson.com/products'
    const fetchData = async () => {
        try {
            const res = await axios.get(API);
            setData(res?.data?.products)
            console.log("afdafdasdf", res);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <div className={styles.container}>
                <div className={styles.searchCategoryContainer}>
                    <div>
                        //common blue input 8px 8
                        <input className={styles.searchContainer} placeholder='Search Products...' type="text" />
                    </div>
                    <div >
                        //make it common
                        <select className={styles.categoryContainer} name="" id="">
                            <option value="">All Categories</option>
                            <option value="beauty">Beauty</option>
                            <option value="fragrances">Fragrances</option>
                            <option value="furniture">Furniture</option>
                        </select>
                    </div>
                </div>
                <div className={styles.productContainer}>
                    {
                        data?.map((item) =>
                            <ProductCard image={item.thumbnail} price={item.price} title={item.title} />
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default Container;