import { useState, useEffect } from 'react';
import styles from './Products.module.scss';
import { ProductCard } from '../common/ProductCard/ProductCard';
import { BigCard } from '../common/BigCard/BigCard';
import inst from './../../shared/img/inst.svg';
import { EnterEmail } from '../common/EnterEmail/EnterEmail';

export function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/knives?_start=0&_end=10')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <section className={styles.products}>
            <BigCard
                imgUrl="/img/tuotown_collection.webp"
                title="Познакомьтесь с коллекцией ножей TUOTOWN"
            />
            {products.map((product, index) => {
                if (index === 4) {
                    return (
                        <>
                            <a href="/#" className={styles.inst_card}>
                                <div>
                                    <img
                                        className={styles.inst}
                                        src={inst}
                                        alt="instagram"
                                    />
                                    <h4 className={styles.title}>INSTAGRAM</h4>
                                </div>
                            </a>
                            <ProductCard product={product} key={product.id} />
                        </>
                    );
                }

                if (index === 6) {
                    return (
                        <>
                            <EnterEmail />
                            <ProductCard product={product} key={product.id} />
                        </>
                    );
                }
                return <ProductCard product={product} key={product.id} />;
            })}
        </section>
    );
}
