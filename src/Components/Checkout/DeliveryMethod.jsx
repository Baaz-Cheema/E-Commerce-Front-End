import styles from './CheckoutNavbar.module.css'; 

const DeliveryMethod = ({ isSelected, setIsSelected }) => {
    return (
        <div>
            <h5 className={styles.heading}>Delivery Method</h5>
            <div className={styles.deliveryMethod}>
                <div onClick={() => setIsSelected(1)} className={isSelected === 1 ? styles.isSelected : ''}>
                    <p> Express delivery {isSelected === 1 && <i className='bx bxs-check-circle' ></i>}  </p>
                    <p>$20.00</p>
                </div>
                <div onClick={() => setIsSelected(2)} className={isSelected === 2 ? styles.isSelected : ''}>
                    <p> Standard Delivery {isSelected === 2 && <i className='bx bxs-check-circle' ></i>}  </p>
                    <p>$10.00</p>
                </div>
            </div>
        </div>
    );
};

export default DeliveryMethod;

