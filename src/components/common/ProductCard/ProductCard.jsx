import styles from './ProductCard.module.scss';
import cart from './../../../shared/img/cart.svg';

export function ProductCard({ product }) {
    // console.log(id, img, name, price, isNew);
    return (
        <article className={styles.card}>
            <div className={styles.card_img}>
                <button className={styles.add_to_cart_btn}>
                    <span></span>
                    <img src={cart} alt="" width="15px" height="19px" />
                </button>
                <img src={product.img} alt="product" />
            </div>
            <div className={styles.card_info}>
                <h4 className={styles.card_title}>{product.name}</h4>
                <div className={styles.price_and_status}>
                    <p className={styles.price}>{product.price + ' р.'}</p>
                    <p className={styles.status}>
                        {product.isNew ? 'Новинка' : ''}
                    </p>
                </div>
            </div>
        </article>
    );
}
