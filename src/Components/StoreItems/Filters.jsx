import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBar from './SideBar';
import styles from './HeadingFilter.module.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function Filters({ brands }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const isLoading= useSelector(state=>state.productList.isLoading)
    const checkedBrands = useSelector(state => state.productList.selectedBrands)
    const numSpan = checkedBrands.length > 0 && <span className={styles.number}>{checkedBrands && checkedBrands.length}</span>
    return (
        <>
            <button className={styles.filterButton} onClick={handleShow}>
                {numSpan} Filters <i className='bx bx-filter'></i>
            </button>
            <Offcanvas className={styles.offcanvas} placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                {isLoading && <div className={styles.backdrop}>
                    <Spinner animation='border' variant='primary' />
                </div>}
                    <div className={styles.sidebar}>
                        <SideBar brands={brands} />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
