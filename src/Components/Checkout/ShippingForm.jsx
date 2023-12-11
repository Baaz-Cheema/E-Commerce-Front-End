
import styles from './CheckoutNavbar.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import DeliveryMethod from './DeliveryMethod'

export default function ShippingForm({ isSelected, setIsSelected }) {
    const navigate = useNavigate()
    const [data, setData] = useState({ name: '', lastName: "", email: '', address: '', city: '', postalCode: '', state: '', country: '' })
    const [error, setError] = useState(false)

    const handleData = (e) => {
        setData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const addressError = !data.address && error
    const cityError = !data.city && error
    const emailError = !data.email.includes('@') && error
    const nameError = !data.name && error
    const lastNameError = !data.lastName && error
    const isMethodSelected = isSelected === null && error

    const handleSubmit = (e) => {
        if (data.name === '' || data.address === '' || data.country === '' || !data.email.includes('@') || !data.lastName === '' || isSelected === null) {
            e.preventDefault()
            setError(true)
            return
        }
        navigate('/checkout/payment')
    }

    return <section>
        <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <h5>Contact Information</h5>
                <span className={styles.autofill}>Or <Link to={'/login'}>Login to autofill</Link></span>
                <label className={emailError ? styles.invalid : ''} htmlFor="email">Email address</label>
                <input name='email' type="email" id='email' value={data.email} onChange={(e) => handleData(e)} />
                {emailError && <p style={{ color: 'red' }}>Email must include @</p>}

                <div className={styles.inputGroup}>
                    <div>
                        <label className={nameError ? styles.invalid : ''} htmlFor="firstname">Name</label>
                        <input name='name' type='text' id='firstname' value={data.name} onChange={(e) => handleData(e)} />
                        {nameError && <p style={{ color: 'red' }}>Field cannot be empty</p>}
                    </div>
                    <div>
                        <label className={lastNameError ? styles.invalid : ''} htmlFor="lastname">Last name</label>
                        <input name='lastName' type='text' id='lastname' value={data.lastName} onChange={(e) => handleData(e)} />
                        {lastNameError && <p style={{ color: 'red' }}>Field cannot be empty</p>}
                    </div>
                </div>
            </div>
            <hr style={{ marginTop: '2.5rem', color: 'gray' }} />

            <div className={styles.formGroup}>
                <h5 className={styles.heading}>Shipping Information</h5>
                <label className={addressError ? styles.invalid : ''} htmlFor="address">Address</label>
                <input type="text" id='address' name='address' value={data.address} onChange={handleData} />
                {addressError && <p style={{ color: 'red' }}>Address is required</p>}

                <div className={styles.inputGroup}>
                    <div>
                        <label htmlFor="postalcode">Postal code</label>
                        <input type='number' id='postalcode' name='postalCode' value={data.postalCode} onChange={handleData} />
                    </div>
                    <div>
                        <label className={cityError ? styles.invalid : ''} htmlFor="city">City</label>
                        <input type='text' id='city' name='city' value={data.city} onChange={handleData} />
                        {cityError && <p style={{ color: 'red' }}>City is required</p>}
                    </div>
                </div>
                <label htmlFor="state">Province/ State</label>
                <input type="text" id='state' name='state' value={data.state} onChange={handleData} />
                <label htmlFor="country">Country</label>
                <input type="text" id='country' name='country' value={data.country} onChange={handleData} />
            </div>

            <hr style={{ marginTop: '2.5rem', color: 'gray' }} />
            <DeliveryMethod isSelected={isSelected} setIsSelected={setIsSelected} />
            {isMethodSelected && <p style={{ color: 'red', textAlign: 'center', marginTop: '.4rem' }}>Select a payment method</p>}
            <button className={styles.btn}>Proceed to payment</button>
        </form>
    </section >
}
