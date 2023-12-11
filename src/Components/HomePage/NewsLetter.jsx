import styles from './NewsLetter.module.css'

export default function NewsLetter() {
    return (
        <div className={styles.newsLetter}>
            <h3>Don&apos;t miss our updates. <br/>
                Subscribe for exclusive offers.
            </h3>
            <form>
                <input type="text" placeholder='someone@gmail.com'/>
                <button>Subscribe</button>
            </form>
        </div>
    )

}