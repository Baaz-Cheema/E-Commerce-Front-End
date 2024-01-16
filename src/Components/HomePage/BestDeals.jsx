
import styles from './BestDeals.module.css'


export default function BestDeals() {
    return (
        <>
            <div className={styles.heading}>
                <h2>Get the Best Deals now </h2>
            </div>
            <p className={styles.para} style={{ marginTop: '.2rem' }}>Get our best deals available just for you</p>
            <div className={styles.bestDeals}>
                <div className={styles.laptop}>
                    <div>
                        <h3>ASUS ZenBook</h3>
                        <h2>Top product 2022</h2>
                        <h3>From $899</h3>
                    </div>
                    <img src="https://www.transparentpng.com/thumb/laptop/9oRuDc-refreshed-pavilion-gaming-series-launching-next-month.png" alt="Laptops Png, Transparent " />
                </div>
                <div className={styles.others}>
                    <div className={styles.shoe}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem' }}>IPad Pro</h3>
                            <h2 style={{ fontSize: '1.2rem' }}>Top product 2022</h2>
                            <h3>From $344</h3>
                        </div>
                        <img src="https://media.croma.com/image/upload/v1685964896/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264273_azrosr.png" alt="" />
                    </div>
                    <div className={styles.shoe} id={styles.app}>
                        <div>
                            <h3 >Home Appliances</h3>
                            <h2 >Top products 2022</h2>
                            <h3>From $899</h3>
                        </div>
                        <img src="https://parspng.com/wp-content/uploads/2023/06/Home-Appliancespng.parspng.com-6.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}