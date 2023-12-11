import styles from './ItemReview.module.css'



const stars = [1, 2, 3, 4, 5]
export default function ItemReviews() {
    return (
        <>
            <div className={styles.reviewContainer}>
                <h4>Recent Reviews</h4>
                <hr style={{ marginBottom: '3rem' }} />
                <div className={styles.reviews}>
                    <div>
                        <h6> <i className='bx bxs-user-circle' ></i>Blaskowichz</h6>
                        <h6>24th May, 2023</h6>
                    </div>
                    <span className={styles.star}>{stars.map((a, i) => <i key={i} style={{ color: 'gold' }} className='bx bxs-star' ></i>)} 5</span>
                    <div>
                        <h6>Awesome Product!</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore nemo voluptatum maxime soluta, rem cum ex voluptatibus, dolore perspiciatis labore quibusdam id tempora mollitia. At quas dolorem molestias, temporibus repellendus molestiae. Error, obcaecati.
                        </p>
                    </div>
                </div>
                <hr />
                <div className={styles.reviews}>
                    <div>
                        <h6><i className='bx bxs-user-circle' ></i>John Smith</h6>
                        <h6>4th December, 2023</h6>
                    </div>
                    <span className={styles.star}>{stars.map((a, i) => <i key={i} style={{ color: 'gold' }} className='bx bxs-star' ></i>)} 5</span>
                    <div>
                        <h6>Good Product!</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore nemo voluptatum maxime soluta, rem cum ex voluptatibus, dolore perspiciatis labore quibusdam id tempora mollitia. At quas dolorem molestias, temporibus repellendus molestiae. Error, obcaecati.
                        </p>
                    </div>

                </div>
                <hr />
                <div className={styles.reviews}>
                    <div>
                        <h6><i className='bx bxs-user-circle' ></i>Chris Redfield</h6>
                        <h6>6th January, 2021</h6>
                    </div>
                    <span className={styles.star}>{stars.map((a, i) => <i key={i} style={{ color: 'gold' }} className='bx bxs-star' ></i>)} 5</span>
                    <div>
                        <h6>Okay Product!</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore nemo voluptatum maxime soluta, rem cum ex voluptatibus, dolore perspiciatis labore quibusdam id tempora mollitia. At quas dolorem molestias, temporibus repellendus molestiae. Error, obcaecati.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}