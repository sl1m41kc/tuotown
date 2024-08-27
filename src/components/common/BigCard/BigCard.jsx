import styles from './BigCard.module.scss';
import arrow from './../../../shared/img/next.svg';

export function BigCard({ imgUrl, title }) {
    return (
        <a href="/#" className={styles.big_card}>
            <img className={styles.bg_img} src={imgUrl} alt="knife" />
            <div className={styles.info}>
                <h4 className={styles.title}>{title}</h4>
                <img src={arrow} alt="arrow" />
            </div>
        </a>
    );
}
