import styles from './MyAccount.module.css'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import MyAccountModal from './MyAccountModal'
import { useDispatch } from 'react-redux'
import { AuthSliceActions } from '../../store/AuthSlice'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function MyAccount() {
    const currEmail = useSelector(state => state.auth.prevEmail)
    const currUsername = useSelector(state => state.auth.username)
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [editName, setEditName] = useState(false)
    const [username, setUsername] = useState('Baaz Cheema')
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'auto' })
    },[])
    function closeModal() {
        setIsOpen(false)
    }
    function updateEmail(data) {
        dispatch(AuthSliceActions.setPrevEmail(data))
    }
    function updateUsername() {
        dispatch(AuthSliceActions.setUsername(username))
        setEditName(false)
    }
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
        <div className={styles.wrapper}>
            <div>
                <p className={styles.headers}>Email</p>
                <p>{currEmail}</p>
                <button onClick={() => setIsOpen(true)}>Change email</button>
            </div>
            <hr />
            <div>
                <AnimatePresence mode='wait'>
                    {editName ?
                        <motion.div initial={fadeIn.hidden} key={'view'} animate={fadeIn.visible} exit={fadeIn.hidden}> 
                            <div className={styles.formItem}>
                                <label>
                                    Username
                                </label>
                                <input value={username} className={styles.editName} onChange={(e) => setUsername(e.target.value)} type="text" />
                            </div>
                            <div style={{ marginTop: '1rem' }}>
                                <button className={styles.cancelButton} onClick={() => setEditName(false)}>Cancel</button>
                                <button onClick={updateUsername}>Save</button>
                            </div>
                        </motion.div> :
                        <motion.div initial={fadeIn.hidden} key={'edit'} animate={fadeIn.visible} exit={fadeIn.hidden}>
                            <p className={styles.headers}>Username</p>
                            <p>{currUsername}</p>
                            <button onClick={() => setEditName(true)}>Edit</button>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {isOpen && <MyAccountModal currEmail={currEmail} updateEmail={updateEmail} setIsOpen={setIsOpen} closeModal={closeModal} />}
            </AnimatePresence>
        </div>
    )
}