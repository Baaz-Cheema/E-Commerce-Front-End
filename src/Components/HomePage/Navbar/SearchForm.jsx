import { useState, useEffect } from 'react';
import styles from './MainNavbar.module.css'; // replace with your actual stylesheet path
import SearchBox from './SearchBox'; // replace with your actual SearchBox component path

function SearchForm({ products, closeBox }) {
    const [val, setVal] = useState('');
    const [items, setItems] = useState([])
    function handleChange(e) {
        setVal(e.target.value);
    }

    function resetVal() {
        if (closeBox) {
            closeBox()
        }
        setVal('');
    }
    useEffect(() => {
        let filteredItems = val && products.filter(a => a.title.toLowerCase().includes(val.toLowerCase()))
        setItems(filteredItems)
    }, [val, products])

    return (
        <form className={styles.searchForm} action="">
            <label className={styles.search} htmlFor="">
                <span className={styles.searchIcon} >
                    <i className='bx bx-search' ></i>
                </span>
                <input onBlur={closeBox} id={styles.searchInput} value={val} onChange={handleChange} type="text" placeholder='Search a product...' />
            </label>
            {val && <SearchBox items={items} func={resetVal} />}
        </form>
    );
}

export default SearchForm;
