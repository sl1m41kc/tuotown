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
                            <a className={styles.top_nav_item} href="f">
                                КУХОННЫЕ НОЖИ TUOTOWN
                            </a>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="f">
                                СКЛАДНЫЕ НОЖИ TUOTOWN
                            </a>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="f">
                                КУХОННЫЕ НОЖИ QXF
                            </a>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="f">
                                ТОЧИЛЬНЫЕ КАМНИ
                            </a>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="f">
                                НАБОРЫ ДЛЯ BBQ
                            </a>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="f">
                                КУХОННЫЕ ПРИНАДЛЕЖНОСТИ
                            </a>
                        </li>
                        <li>
                            <a className={styles.top_nav_item} href="f">
                                ТУРИСТИЧЕСКИЕ ТОВАРЫ
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className={styles.bottom_nav_wrapper}>
                    <ul className={styles.bottom_nav}>
                        <li>
                            <a className={styles.bottom_nav_item} href="f">
                                НОВОСТИ
                            </a>
                        </li>
                        <li>
                            <a className={styles.bottom_nav_item} href="f">
                                О КОМПАНИИ
                            </a>
                        </li>
                        <li>
                            <a className={styles.bottom_nav_item} href="f">
                                КОНТАКТЫ
                            </a>
                        </li>
                        <li>
                            <a className={styles.bottom_nav_item} href="f">
                                КАК ПРОЕХАТЬ
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </section>
    );
}
