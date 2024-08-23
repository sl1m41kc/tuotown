import styles from './Footer.module.scss';
import Logo from '../../common/Logo/Logo';
import clsx from 'clsx';
import fb from './fb.svg';
import inst from './inst.svg';
import vk from './vk.svg';
import yt from './yt.svg';
import site_stat from './site_stat.svg';
import author from './author.png';

/*
    !todo: сделать ховеры ссылок
    ?todo: поставить ссылку на google maps в adress
    //!todo: fix footer
    todo: оптимизировать картинки
*/

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top_footer_container}>
                <section className={styles.top_footer}>
                    <article className={styles.about}>
                        <div className={styles.logo_and_caption}>
                            <Logo width="194px" />
                            <a href="#" className={styles.caption}>
                                легендарные ножи, создающие шедевры
                            </a>
                        </div>
                        <p className={styles.about_text}>
                            Компания &laquo;Tuotown&raquo;&nbsp;&mdash;
                            эксклюзивный представитель профессиональных кухонных
                            ножей, изготовленных лучшими мастерами Восточной
                            Азии с&nbsp;применением передового европейского
                            оборудования и&nbsp;современных материалов.
                        </p>
                        <p className={styles.about_text}>
                            Они отличаются идеальным балансом
                            и&nbsp;фантастической остротой. Сочетают в&nbsp;себе
                            вековые традиции и&nbsp;новейшие разработки.
                            <br /> Также предлагаем широкий ассортимент
                            сопутствующих товаров.
                        </p>
                    </article>
                    <article className={styles.nav_and_socials}>
                        <nav className={styles.nav_info}>
                            <h4 className={styles.footer_title}>Информация</h4>
                            <ul className={styles.nav}>
                                <li>
                                    <a className={styles.nav_item} href="">
                                        Главная
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.nav_item} href="">
                                        Новости
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.nav_item} href="">
                                        О компании
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.nav_item} href="">
                                        Контакты
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav className={styles.nav_catalog}>
                            <h4 className={styles.footer_title}>Каталог</h4>
                            <ul className={styles.nav}>
                                <li>
                                    <a className={styles.nav_item} href="">
                                        Кухонные ножи
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.nav_item} href="">
                                        Складные ножи
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.nav_item} href="">
                                        Точилки для ножей
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.nav_item} href="">
                                        Аксессуары
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav className={styles.social}>
                            <h4 className={styles.footer_title}>
                                Мы в соцсетях
                            </h4>
                            <div className={styles.social_list}>
                                <a href="" className={styles.social_item}>
                                    <img src={fb} alt="facebook" />
                                </a>
                                <a href="" className={styles.social_item}>
                                    <img src={vk} alt="vk" />
                                </a>
                                <a href="" className={styles.social_item}>
                                    <img src={inst} alt="inst" />
                                </a>
                                <a href="" className={styles.social_item}>
                                    <img src={yt} alt="yt" />
                                </a>
                            </div>
                        </nav>
                    </article>
                    <article className={styles.contacts}>
                        <h4 className={styles.footer_title}>
                            Контактная информация
                        </h4>
                        <a href="tel:79811201117" className={styles.number}>
                            +7 (981) 120-11-17
                        </a>
                        <a
                            href="mailto:tuotown@mail.ru"
                            className={styles.email}
                        >
                            tuotown@mail.ru
                        </a>
                        <p className={styles.work_mode}>
                            08:00 — 18:00, ежедневно
                        </p>
                        <p className={styles.adress}>
                            Россия, Москва, МКАД, 19-й километр, вл20с1, вход Ф,
                            22-68-70
                        </p>
                        <a href="" className={styles.site_stat}>
                            <img
                                src={site_stat}
                                alt="site statistic"
                                className={styles.author}
                            />
                        </a>
                    </article>
                </section>
            </div>
            <section className={styles.bottom_footer}>
                <p className={styles.copyright}>
                    TUOTOWN © 2021 Торговая марка TUOTOWN зарегистрирована. Все
                    права защищены и принадлежат правообладателям.
                </p>
                <img src={author} alt="author" />
            </section>
        </footer>
    );
}
