import styles from './MainSlider.module.scss';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import slideImage1440 from './slider_bg_1440.webp';
import slideImage768 from './slider_bg_768.webp';
import { Button } from '../common/Button/Button';

function NavigateButtons() {
    const swiper = useSwiper();
    return (
        <>
            <button
                onClick={() => swiper.slidePrev()}
                className={clsx(styles.prev, styles.arrow)}
            ></button>
            <button
                onClick={() => swiper.slideNext()}
                className={clsx(styles.next, styles.arrow)}
            ></button>
        </>
    );
}

function SlideImg() {
    return (
        <div className={styles.slide_img}>
            <picture>
                <source
                    srcSet={slideImage1440}
                    type="image/webp"
                    media="(min-width: 769px)"
                />
                <source
                    srcSet={slideImage768}
                    type="image/webp"
                    media="(max-width: 768px)"
                />
                <img loading="lazy" src="./slider_bg_1440" alt="img" />
            </picture>
        </div>
    );
}

export function MainSlider() {
    const swipersParams = {
        className: styles.swiper,
        modules: [Pagination, Autoplay],
        speed: 900,
        pagination: {
            clickable: true,
            renderBullet: (index, className) => {
                return (
                    '<span class="' + className + '">' + (index + 1) + '</span>'
                ); //динамическая генерация разметки для буллетов
            },
            clickableClass: styles.swiper_pagination, //общий класс для пагинации
            bulletClass: styles.bullet, //класс для одного буллета
            bulletActiveClass: styles.bullet_active, //класс для активного буллета
        },
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        },
        loop: true,
    };

    return (
        <Swiper {...swipersParams}>
            <SwiperSlide>
                <div className={styles.slide_content}>
                    <h1 className={styles.slide_title}>
                        Исключительное качество без компромиссов
                    </h1>
                    <p className={styles.slide_text}>
                        Ножи «Tuotown» – это главный инструмент поваров и секрет
                        кулинарного мастерства
                    </p>
                    <Button
                        buttonOption="first"
                        text="ПОДРОБНЕЕ"
                        textColor="#ffffff"
                        link="/#"
                    />
                </div>
                <SlideImg />
            </SwiperSlide>

            <SwiperSlide>
                <SlideImg />
            </SwiperSlide>

            <SwiperSlide>
                <SlideImg />
            </SwiperSlide>

            <SwiperSlide>
                <SlideImg />
            </SwiperSlide>

            <NavigateButtons />
        </Swiper>
    );
}
