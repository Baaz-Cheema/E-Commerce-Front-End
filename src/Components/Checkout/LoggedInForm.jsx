import styles from './CheckoutNavbar.module.css'
import { useSelector } from 'react-redux'
import CheckoutAddressItem from './CheckoutAddressItem'
import DeliveryMethod from './DeliveryMethod'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoggedInForm({ setIsSelected, isSelected }) {//proceed to payment button and state for delicerymethod bye i sleep
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const [selectedAddress, setSelectedAddress] = useState(123)
    const email = useSelector(state => state.auth.prevEmail)
    const username = useSelector(state => state.auth.username)
    const addresses = useSelector(state => state.auth.addresses)
    const isMethodSelected = isSelected === null && error

    function selectAddress(id) {
        setSelectedAddress(id)
    }

    const handleSubmit = (e) => {
        if (isSelected === null) {
            e.preventDefault()
            setError(true)
            return
        }
        navigate('/checkout/payment')
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <h5>Contact information</h5>
                    <p>{username}</p>
                    <p>{email}</p>
                </div>
                <hr style={{ marginTop: '2.5rem', color: 'gray' }} />

                <div className={styles.formGroup}>
                    <h5>Shipping Information</h5>
                    <div className={styles.addresses}>
                        {addresses && addresses.map((a, i) => <CheckoutAddressItem selectAddress={() => selectAddress(a.id)} selectedAddress={selectedAddress} key={i} {...a} />)}
                    </div>
                </div>
                <hr style={{ marginTop: '2.5rem', color: 'gray' }} />
                <DeliveryMethod setIsSelected={setIsSelected} isSelected={isSelected} />
                {isMethodSelected && <p style={{ color: 'red', textAlign: 'center', marginTop: '.4rem' }}>Select a payment method</p>}
                <button className={styles.btn}>Proceed to payment</button>
            </form>
        </section>
    )
}