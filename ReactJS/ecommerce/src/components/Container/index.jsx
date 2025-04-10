import { useEffect, useState } from 'react';
import styles from './Container.module.css'
import axios from 'axios';
import { ProductCard, SelectCategory } from '../common';
import { debounce } from '../../utlis/debounce';


//make it responsive & add component to common
export const Container = () => {
    const [data, setData] = useState([]);
    const [category,setCategory] = useState([])
    let [filterData, setFilterData] = useState([])
    const API = 'https://dummyjson.com/products'
    const fetchData = async () => {
        try {
            const res = await axios.get(API);
            setData(res?.data?.products)
            setFilterData(res?.data?.products)
            // console.log("afdafdasdf", res);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchAllCategory = async() =>{
        try {
            const res = await axios.get(`${API}/categories`)
            // console.log("adfsdssdf__sadf",res);
            setCategory(res?.data)
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        fetchData();
        fetchAllCategory();
    }, [])

    const handleChange = (e) =>{
        let val = e.target.value;
        console.log("adffasdf__asdfs",val);
        let newData = data.filter((item)=>item?.title?.toLowerCase()?.includes(val))
        setFilterData(newData)
    }
    const debounceSearch = debounce(handleChange, 500)


    return (
        <>
            <div className={styles.container}>
                <div className={styles.searchCategoryContainer}>
                    <div>
                        <input onChange={debounceSearch} className={styles.searchContainer} placeholder='Search Products...' type="text" />
                    </div>
                    <div >
                        <SelectCategory categories = {category}/>
                    </div>
                </div>
                <div className={styles.productContainer}>
                    {
                        filterData?.map((item) =>
                            <ProductCard key={item.id} image={item.thumbnail} price={item.price} title={item.title} />
                        )
                    }
                </div>
            </div>
        </>
    )
}
