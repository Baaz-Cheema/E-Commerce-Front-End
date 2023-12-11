import Modal from "./Modal"
import styles from './MyAccount.module.css'
import { useState } from "react"



export default function MyAccountModal({ setIsOpen, closeModal, updateEmail, currEmail }) {
    const [data, setData] = useState({ email: '', password: '' })
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const handleSubmit = (e) => {
        if (!data.email.includes('@') || data.password.length < 5) {
            e.preventDefault()
            setError(true)
            return
        }
        closeModal()
        updateEmail(data)
    }
    const emailError = !data.email.includes('@') && error
    const passwordError = data.password.length < 5 && error


    return <Modal setIsOpen={setIsOpen}>
        <div className={styles.closeBtn}>
            <h6>Change Email Address</h6>
            <button onClick={closeModal}><i className='bx bx-x'></i></button>
        </div>
        <p>We will send a verification email to your new email address</p>
        <p>Your current email address is: <b>{currEmail}</b></p>
        <form method='dialog' onSubmit={handleSubmit}>
            <div className={styles.formItem}>
                <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
                <input
                    className={emailError ? styles.error : undefined}
                    value={data.name} onChange={handleChange}
                    name='email' type='text' id="email"
                />
                {emailError && <p style={{ color: 'red' }}>Email must be valid</p>}
            </div>
            <div className={styles.formItem}>
                <label htmlFor="password">Password <span style={{ color: 'red' }}>*</span></label>
                <input
                    className={emailError ? styles.error : undefined}
                    value={data.name} onChange={handleChange}
                    name='password' type='password' id="password"
                />
                {passwordError && <p style={{ color: 'red' }}>Password must be 5 characters long</p>}
            </div>
            <div className={styles.formButtons}>
                <button onClick={closeModal} type='button'>Cancel</button>
                <button onChange={handleSubmit} type='submit'>Save</button>
            </div>
        </form>
    </Modal>
}