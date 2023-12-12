import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AuthSliceActions } from '../../store/AuthSlice'
export default function LoginForm() {
    const email = useSelector(state => state.auth.prevEmail)
    const password = useSelector(state => state.auth.password)
    const dispatch = useDispatch()

    const [data, setData] = useState({ email: 'test123@gmail.com', password: 'test' })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            if (data.email !== email || data.password !== password) {
                setError(true)
                setLoading(false)

            } else {
                setError(false)
                setLoading(false)
                dispatch(AuthSliceActions.setLoggedIn('login'))
                navigate('/account')
            }
        }, 1500)
    }
    const handleChange = (e) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    return (
        <div className={styles.container}>
            <h2>Sign in to your account</h2>
            <span style={{ marginBottom: '1rem' }}>Or <Link to={'/signup'} style={{ color: '#3B99FC', textDecoration: 'none' }}>register a new account</Link></span>
            <div className={styles.inner}>
                <div className={styles.demoPrompt}>
                    <p>Demo credentials</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                </div>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.formItem}>
                        <label htmlFor="email">
                            Email address
                        </label>
                        <input disabled={loading} onChange={handleChange} value={data.email} type="email" name="email" id="email" placeholder='Email' />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input disabled={loading} onChange={handleChange} value={data.password} type="password" name="password" id="password" placeholder='Password' />
                    </div>
                    {error && <p style={{ color: 'red' }}>Email or Password is wrong</p>}
                    <div className={styles.submit}>
                        <div className={styles.submitWrapper}>
                            <div className={styles['checkbox-wrapper-1']}>
                                <input disabled={loading} defaultChecked={true} type="checkbox" name="" id="rememberMe" className={styles.substituted} />
                                <label htmlFor="rememberMe">Remember me</label>
                            </div>
                            <p style={{ color: '#3B99FC' }}>Forgot your password?</p>
                        </div>
                        <button style={{color:'white'}} disabled={loading}>
                            {loading && <i className='bx bx-loader-alt bx-spin' ></i>} Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}