import AddressItem from './AddressItem'
import AddressModal from './AddressModal'
import styles from './Addresses.module.css'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { AuthSliceActions } from '../../store/AuthSlice'

export default function Addresses() {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const [address, setAddress] = useState({ name: '', address: '', city: '', postalCode: '', state: '', country: '' })
    const addresses = useSelector(state => state.auth.addresses)

    function editAddress(id) {
        const index = addresses && addresses.findIndex((a) => a.id === id)
        setAddress(addresses[index])
        setIsOpen(true)
    }
    function open() {
        setIsOpen(false)
        setAddress({})
    }
    function remove(id) {
        dispatch(AuthSliceActions.removeAddress(id))
    }
    function makeDefault(id) {
        dispatch(AuthSliceActions.isDefault(id))
    }
    return (
        <div className={styles.wrapper} >
            <div className={styles.addressItem} onClick={() => setIsOpen(true)}>
                <p>New Address</p>
                <div >
                    <span><i className='bx bx-plus bx-flip-vertical' ></i></span>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && <AddressModal isOpen={isOpen} setIsOpen={open} address={address} />}
            </AnimatePresence>
            {addresses && addresses.map((a, i) => <AddressItem key={i} {...a} edit={() => editAddress(a.id)} remove={() => remove(a.id)} makeDefault={() => makeDefault(a.id)} />)}
        </div>
    )
}