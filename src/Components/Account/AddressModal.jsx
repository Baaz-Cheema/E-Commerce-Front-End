import styles from './AddressModal.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AuthSliceActions } from '../../store/AuthSlice'
import { useEffect } from 'react'
import Modal from './Modal'


export default function AddressModal({ setIsOpen, address }) {
    const [data, setData] = useState({ name: '', address: '', city: '', postalCode: '', state: '', country: '' })
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const handleData = (e) => {
        setData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    useEffect(() => {
        if (address.name) {
            setData(address)
        }
    }, [])

    const handleSubmit = (e) => {
        if (data.name === '' || data.address === '' || data.country === '') {
            e.preventDefault()
            setError(true)
            return
        }
        if (address.name) {
            dispatch(AuthSliceActions.editAddress(data))
            setIsOpen(false)
            return
        }
        dispatch(AuthSliceActions.addNewAddresses(data))
        setIsOpen(false)
    }
    const nameError = !data.name && error
    const addressError = !data.address && error
    const countryError = !data.country && error


    return <Modal setIsOpen={setIsOpen}>
        <div className={styles.closeBtn}>
            <h6>Add a new address</h6>
            <button onClick={setIsOpen}><i className='bx bx-x'></i></button>
        </div>
        <form method='dialog' onSubmit={handleSubmit}>
            <div className={styles.formItem}>
                <label htmlFor="">Name <span style={{ color: 'red' }}>*</span></label>
                <input
                    className={nameError ? styles.error : undefined}
                    value={data.name} onChange={handleData}
                    name='name' type="text"
                />
                {nameError && <p style={{ color: 'red' }}>Name is required</p>}
            </div>
            <div className={styles.formItem}>
                <label htmlFor="">Address <span style={{ color: 'red' }}>*</span></label>
                <input className={addressError ? styles.error : undefined} value={data.address} onChange={handleData} name='address' type="text" />
                {addressError && <p style={{ color: 'red' }}>Address is required</p>}
            </div>
            <div className={styles.formItemGroup}>
                <div>
                    <label htmlFor="">Postal Code</label>
                    <input value={data.postalCode} onChange={handleData} name='postalCode' type='number' />
                </div>
                <div>
                    <label htmlFor="">City</label>
                    <input value={data.city} onChange={handleData} name='city' type="text" />
                </div>

            </div>
            <div className={styles.formItem}>
                <label htmlFor="">Province/ State</label>
                <input value={data.state} onChange={handleData} name='state' type="text" />
            </div>
            <div className={styles.formItem}>
                <label htmlFor="">Country <span style={{ color: 'red' }}>*</span></label>
                <input className={countryError ? styles.error : undefined} value={data.country} onChange={handleData} name='country' type='text' />
                {countryError && <p style={{ color: 'red' }}>Country is required</p>}
            </div>
            <div className={styles.formButtons}>
                <button onClick={setIsOpen} type='button'>Cancel</button>
                <button onChange={handleData} type='submit'>Save</button>
            </div>
        </form>
    </Modal>
}