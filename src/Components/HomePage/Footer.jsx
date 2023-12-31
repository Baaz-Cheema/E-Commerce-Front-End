import styles from './Footer.module.css';
import NewsLetter from './NewsLetter';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.payment}>
                <img src="https://content.invisioncic.com/p289038/monthly_2022_10/Payment-methods.png.2b9ba23475aaa15189f555f77ec3a549.png" alt="" />
            </div>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <h3>Almari</h3>
                    <p>One place for all your shopping needs</p>
                    <span>
                        <i className='bx bxl-facebook-circle'></i>
                        <i className='bx bxl-twitter' ></i>
                    </span>
                </div>

                <div className={styles.links}>
                    <div>
                        <a href="">Shop</a>
                        <a href="#fakeLink1">Electronics</a>
                        <a href="#fakeLink2">Men</a>
                        <a href="#fakeLink3">Women</a>
                        <a href="#fakeLink3">Outdoors</a>
                    </div>
                    <div>
                        <a href="">Company</a>
                        <a href="#fakeLink1">About</a>
                        <a href="#fakeLink2">Contact</a>
                        <a href="#fakeLink3">Privacy Policy</a>
                    </div>
                    <div>
                        <a href="">Support</a>
                        <a href="#fakeLink1">Help</a>
                        <a href="#fakeLink2">Track Order</a>
                        <a href="#fakeLink3">Returns</a>
                    </div>
    
                </div>
                <NewsLetter />
            </div>
            <hr />
            <p>© 2023 Developed by Baaz Cheema</p>
        </footer>
    );
}

export default Footer;