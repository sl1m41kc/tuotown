import styles from './Button.module.scss';

export function Button({ buttonOption, text, textColor, link }) {
    return (
        <form action={link}>
            <button className={`${styles.button} ${styles[buttonOption]}`}>
                {text}
            </button>
        </form>
    );
}
