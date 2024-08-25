import styles from './Sidebar.module.scss';
import clsx from 'clsx';

export function Sidebar({ sidebarStatus, setSidebarStatus }) {
    return (
        <section
            className={clsx(
                styles.sidebar_wrapper,
                sidebarStatus ? styles.open : styles.close,
            )}
        >
            <aside className={styles.sidebar}>
                <nav className={styles.top_nav_wrapper}>
                    <ul className={styles.top_nav}>
                        <li
                            className={styles.close_button_wrapper}
                            onClick={() => setSidebarStatus(!sidebarStatus)}
                        >
                            <span className={styles.close_button}></span>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="/#">
                                КУХОННЫЕ НОЖИ TUOTOWN
                            </a>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="/#">
                                СКЛАДНЫЕ НОЖИ TUOTOWN
                            </a>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="/#">
                                КУХОННЫЕ НОЖИ QXF
                            </a>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="/#">
                                ТОЧИЛЬНЫЕ КАМНИ
                            </a>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="/#">
                                НАБОРЫ ДЛЯ BBQ
                            </a>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="/#">
                                КУХОННЫЕ ПРИНАДЛЕЖНОСТИ
                            </a>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="/#">
                                ТУРИСТИЧЕСКИЕ ТОВАРЫ
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className={styles.bottom_nav_wrapper}>
                    <ul className={styles.bottom_nav}>
                        <li>
                            <a className={styles.bottom_nav_item} href="/#">
                                НОВОСТИ
                            </a>
                        </li>
                        <li>
                            <a className={styles.bottom_nav_item} href="/#">
                                О КОМПАНИИ
                            </a>
                        </li>
                        <li>
                            <a className={styles.bottom_nav_item} href="/#">
                                КОНТАКТЫ
                            </a>
                        </li>
                        <li>
                            <a className={styles.bottom_nav_item} href="/#">
                                КАК ПРОЕХАТЬ
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </section>
    );
}
