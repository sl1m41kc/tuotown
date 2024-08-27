import { MainSlider } from './../components/MainSlider/MainSlider';
import styles from './main.module.scss';
import { Categories } from '../components/Categories/Categories';
import { Products } from '../components/Products/Products';

export default function Main() {
    return (
        <>
            <MainSlider />
            <div className={styles.container}>
                <Categories />
                <Products />
            </div>
        </>
    );
}
