import styles from './Addresses.module.css'

export default function AddressItem({ name, address, postalCode, country, state, city, edit, remove, makeDefault, isDefault }) {
    return (
        <div className={styles.addressItem}>
            <div className={styles.inner}>
                <div>
                    <p>{name}</p>
                    <p>{address}</p>
                    <p><span>{postalCode}</span>, {city}</p>
                    <p>{state}, {country}</p>
                </div>
                {isDefault && <div className={styles.shipping}>
                    <span style={{ fontSize: '1.2rem' }}>Default</span>
                    <p>Shipping</p>
                    <p>& Billing</p>
                </div>}
            </div>
            <div className={styles.controls}>
                <p onClick={edit} ><i className='bx bx-pencil' ></i> Edit</p>
                <p onClick={remove}><i className='bx bxs-trash-alt' ></i> Remove</p>
                {!isDefault && <p onClick={makeDefault}><i className='bx bxs-truck' ></i> Make Default</p>}
            </div>
        </div>
    )
}