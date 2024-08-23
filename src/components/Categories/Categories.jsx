import styles from './Categories.module.scss';
import { ReactComponent as KitchenKnives } from './kitchen_knives.svg';
import { ReactComponent as FoldingKnives } from './folding_knives.svg';
import { ReactComponent as KnifeSharpeners } from './knife_sharpeners.svg';
import { ReactComponent as KitchenAccessories } from './kitchen_accessories.svg';

export function Categories() {
    return (
        <section className={styles.categories}>
            <a href="#" className={styles.category}>
                <KitchenKnives className={styles.category_img} />
                <h3 className={styles.category_name}>Кухонные ножи</h3>
            </a>
            <a href="#" className={styles.category}>
                <FoldingKnives className={styles.category_img} />
                <h3 className={styles.category_name}>Складные ножи</h3>
            </a>
            <a href="#" className={styles.category}>
                <KnifeSharpeners className={styles.category_img} />
                <h3 className={styles.category_name}>Точилки для ножей</h3>
            </a>
            <a href="#" className={styles.category}>
                <KitchenAccessories className={styles.category_img} />
                <h3 className={styles.category_name}>Аксессуары для кухни</h3>
            </a>
        </section>
    );
}
