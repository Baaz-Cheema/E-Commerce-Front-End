import styles from './CheckoutNavbar.module.css'

export default function CheckoutAddressItem({ address, postalCode, country, state, city, selectAddress, selectedAddress, id }) {
    let selected = selectedAddress === id

    return <div onClick={selectAddress} className={`${styles.addressItem} ${selected ? styles.isSelected : ''}`}>
        <p>{address}, {postalCode} {selected && <i className='bx bxs-check-circle' ></i>}</p>
        <p>{address}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{postalCode}</p>
        <p>{country}</p>
    </div>
}