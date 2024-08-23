import styles from './MainSlider.module.scss';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import slideImage1440 from './slider_bg_1440.png';
import slideImage768 from './slider_bg_768.png';

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

function SlideContent() {
    return (
        <div className={styles.slide}>
            <picture>
                <source
                    srcSet={slideImage1440}
                    type="image/png"
                    media="(min-width: 769px)"
                />
                <source
                    srcSet={slideImage768}
                    type="image/png"
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
        modules: [Pagination],
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
    };

    return (
        <Swiper {...swipersParams}>
            <SwiperSlide>
                <SlideContent />
            </SwiperSlide>

            <SwiperSlide>
                <SlideContent />
            </SwiperSlide>

            <SwiperSlide>
                <SlideContent />
            </SwiperSlide>

            <SwiperSlide>
                <SlideContent />
            </SwiperSlide>

            <NavigateButtons />
        </Swiper>
    );
}
