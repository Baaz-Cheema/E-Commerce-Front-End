import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom'
export default function SignupForm() {
    return (
        <div className={styles.container}>
            <h2>Create a new Account</h2>
            <span style={{ marginBottom: '2rem' }}>
                Or <Link to={'/login'} style={{ color: 'blue', textDecoration: 'none' }}>login to an existing account</Link>
            </span>
            <div className={styles.inner}>
                <div className={styles.demoPrompt}>
                    <p>Creating a new account is not supported, as i couldnt find a suitable API to do that.</p>
                </div>
                <form action="" className={styles.loginForm}>
                    <div className={styles.formItem}>
                        <label htmlFor="email">
                            Email address
                        </label>
                        <input type="email" name="" id="email" placeholder='Email' />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="username">
                            Username
                        </label>
                        <input type="password" name="" id="username" placeholder='Baaz Cheema' />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="" id="password" placeholder='Password' />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="password">
                            Repeat password
                        </label>
                        <input type="password" name="" id="password" placeholder='Password' />
                    </div>
                    <div className={styles.submit}>
                        <button>
                            Create an account
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}