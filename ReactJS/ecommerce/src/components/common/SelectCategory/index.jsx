import styles from './styles.module.css'
export function SelectCategory({ categories }) {
    console.log("asfsasfasdfasdf__asdf", categories);
    return (
        <>
            <select className={styles.categoryContainer} name="" id="">
                <option value="">All Categories</option>
                {
                    categories.map((item) =>
                        <>
                            <option style={{ color: 'black' }} value={item?.slug}>
                               {item?.name}
                            </option>
                        </>
                    )
                }
            </select>
        </>
    )
}
