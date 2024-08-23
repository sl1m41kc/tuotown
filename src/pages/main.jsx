import { MainSlider } from './../components/MainSlider/MainSlider';
import styles from './main.module.scss';
import { Categories } from '../components/Categories/Categories';

export default function Main() {
    return (
        <>
            <MainSlider />
            <div className={styles.container}>
                <Categories />
            </div>
        </>
    );
}
