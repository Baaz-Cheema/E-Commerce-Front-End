import styles from './Footer.module.css';
import NewsLetter from './NewsLetter';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.payment}>
                <img src="https://content.invisioncic.com/p289038/monthly_2022_10/Payment-methods.png.2b9ba23475aaa15189f555f77ec3a549.png" alt="" />
            </div>
            <div className={styles.inner}>
                <div>
                    <div className={styles.links}>
                        <div>
                            <h6>Shop</h6>
                            <a href="#fakeLink1">Electronics</a>
                            <a href="#fakeLink2">Men</a>
                            <a href="#fakeLink3">Women</a>
                            <a href="#fakeLink3">Auto</a>


                        </div>
                        <div>
                            <h6>Company</h6>
                            <a href="#fakeLink1">About</a>
                            <a href="#fakeLink2">Contact</a>
                            <a href="#fakeLink3">Privacy Policy</a>
                            <a href="#fakeLink3">Terms & conditions</a>
                        </div>
                        <div>
                            <h6>Support</h6>
                            <a href="#fakeLink1">Help</a>
                            <a href="#fakeLink2">Track Order</a>
                            <a href="#fakeLink3">Returns</a>
                            <a href="#fakeLink3">Support</a>
                        </div>
                        <div style={{ maxWidth: '15rem' }} className={styles.contact}>
                            <h6>Contact us</h6>
                            <a style={{whiteSpace:'nowrap'}}><i className='text-red-500 bx bxs-phone text-2xl'></i>+1(405) 567 9820 </a>
                            <a> <i className='text-red-500 text-2xl bx bxs-envelope' ></i> almari@info.com</a>
                            <a> <i className='text-red-500 text-2xl bx bxs-pin' ></i> 123 Main Street
                                Springfield, IL 62701
                                US</a>
                        </div>
                        <NewsLetter />
                    </div>

                </div>
            </div>
            <hr />

            <div className={styles.rightsContainer}>
                <div className={styles.rights}>
                    <h5 style={{ fontSize: '1.4rem' }}>Almari</h5>
                    <p>© 2023 Developed by Baaz Cheema</p>
                    <div className="flex items-center gap-3">
                        <i className='bx bxl-facebook bg-slate-100 rounded-full px-1 text-xl' ></i>
                        <i className='bx bxl-instagram bg-slate-100 rounded-full px-1 text-xl' ></i>
                        <i className='bx bxl-twitter bg-slate-100 rounded-full px-1 text-xl' ></i>
                        <i className='bx bxl-linkedin bg-slate-100 rounded-full px-1 text-xl' ></i>
                    </div>
                </div>
            </div>


        </footer>
    );
}

export default Footer;