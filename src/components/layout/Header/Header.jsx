/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Header.module.scss';
import Logo from './../../common/Logo/Logo';
import { ReactComponent as SidebarButton } from './sidebar-button.svg';
import { ReactComponent as MapPinButton } from './map-pin.svg';
import { ReactComponent as Cart } from './../../../shared/img/cart.svg';
import { ReactComponent as Mail } from './mail.svg';
import { ReactComponent as Search } from './search.svg';

/*
    //!todo: сделать все svg картинками
    //!todo: обернуть map_pin_button в ссылку
    //!todo: сделать ховеры на кнопках
    //!todo: реализовать анимацию поиска
    //?todo: убрать анимации буллетов
    //!todo: сделать кнопку закрытия сайдбара на всю длину
    todo: оптимизировать картинки
    todo: fix sidebar bg
*/

export function Header({ setSidebarStatus, sidebarStatus }) {
    return (
        <header className={styles.header}>
            <section className={styles.content_wrapper}>
                <div className={styles.contacts_and_sidebar_button}>
                    <SidebarButton
                        className={styles.sidebar_button}
                        onClick={() => setSidebarStatus(!sidebarStatus)}
                    />
                    <a href="#">
                        <MapPinButton className={styles.map_pin_button} />
                    </a>
                    <a className={styles.number} href="tel: 89811201117">
                        8 981 120-11-17
                    </a>
                </div>
                <Logo width="146px" />
                <nav className={styles.header_buttons}>
                    <a href="#">
                        <Cart className={styles.cart_button} />
                    </a>
                    <a href="#">
                        <Mail className={styles.mail_button} />
                    </a>
                    <div className={styles.search_block}>
                        <input
                            type="text"
                            className={styles.search_area}
                            placeholder="Поиск"
                        />
                        <Search className={styles.search} />
                    </div>
                </nav>
            </section>
        </header>
    );
}
