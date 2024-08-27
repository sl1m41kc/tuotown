import styles from './EnterEmail.module.scss';

export function EnterEmail() {
    return (
        <section className={styles.enter_email}>
            <h3 className={styles.title}>
                Узнавайте первым о новинках и новостях
            </h3>
            <form className={styles.email_wrapper}>
                <button type="submit" className={styles.arrow_wrapper}>
                    <span className={styles.arrow}></span>
                </button>
                <input
                    className={styles.email}
                    type="email"
                    placeholder="Ваш e-mail"
                />
            </form>
        </section>
    );
}
