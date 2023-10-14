import { createUseStyles } from 'react-jss'
import { ReactNode } from 'react';

interface ButtonProps {
    children?: ReactNode
    label?: string
    handleClick: () => void
}

const useStyles = createUseStyles({
    section: {
        display: 'grid',
        justifyContent: 'center',
        justifyItems: 'center', 
        gridGap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minMax(100px, 1fr))',
        margin: '0 auto',
        marginBottom: '20px',
        maxWidth: '1024px',
    },
    btn: {
        background: '#E1FB3D',
        border: 'none',
        borderRadius: '4px',
        color: '#4D4C4C',
        cursor: 'pointer',
        padding: '10px 8px',
        transition: '0.4s ease',
        '&:hover': {
            background: '#ECF99B'
        },
    },
    'btn--secondary': {
        background: 'transparent',
        boxShadow: '0 0 0 1px #4D4C4C',
        '&:hover': {
            background: 'transparent',
            boxShadow: '0 0 0 1px #E1FB3D',
            color: '#E1FB3D',
        },
    },
    'btn-content': {
        whiteSpace: 'nowrap'
    },
    'btn-text': {
        paddingLeft: 0,
        textWrap: 'nowrap',
    },
    'btn-text-icon': {
        paddingLeft: '4px',
        textWrap: 'nowrap',
    },
    'btn--sm': {
       fontSize: '10px'
    },
    'btn--lg': {
        fontSize: '18px'
    },
  })

export const Button:React.FC<ButtonProps> = ({handleClick, label, children}) => {

    const styles = useStyles()

    return (
        <>
            <h1>Button components variations</h1>
            <div className={styles.section}>
                <button className={`${styles.btn} ${styles['btn--sm']}`} onClick={() => handleClick()}>
                    <span className={styles['btn-content']}>
                        {children}
                        <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                    </span>
                </button>

                <button className={`${styles.btn}`} onClick={() => handleClick()}>
                    <span className={styles['btn-content']}>
                        {children}
                        <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                    </span>
                </button>

                <button className={`${styles.btn} ${styles['btn--lg']}`} onClick={() => handleClick()}>
                    <span className={styles['btn-content']}>
                        {children}
                        <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                    </span>
                </button>
            </div>
            <div className={styles.section}>
                <button className={`${styles.btn} ${styles['btn--sm']}`} onClick={() => handleClick()}>
                    <span className={styles['btn-content']}>
                        <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                    </span>
                </button>
                <button className={`${styles.btn}`} onClick={() => handleClick()}>
                    <span className={styles['btn-content']}>
                        <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                    </span>
                </button>
                <button className={`${styles.btn} ${styles['btn--lg']}`} onClick={() => handleClick()}>
                    <span className={styles['btn-content']}>
                        <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                    </span>
                </button>
            </div>
            <div className={styles.section}>
                <button className={`${styles.btn} ${styles['btn--secondary']} ${styles['btn--sm']}`} onClick={() => handleClick()}>
                    <span className={styles['btn-content']}>
                        {children}
                        <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                    </span>
                </button>
                <button className={`${styles.btn} ${styles['btn--secondary']}`} onClick={() => handleClick()}>
                    <span className={styles['btn-content']}>
                        {children}
                        <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                    </span>
                </button>
                <button className={`${styles.btn} ${styles['btn--secondary']} ${styles['btn--lg']}`} onClick={() => handleClick()}>
                    <span className={styles['btn-content']}>
                        {children}
                        <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                    </span>
                </button>
            </div>
            <div className={styles.section}>
                <button className={`${styles.btn} ${styles['btn--secondary']} ${styles['btn--sm']}`} onClick={() => handleClick()}>
                    <span className={styles['btn-content']}>
                        <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                    </span>
                </button>
                <button className={`${styles.btn} ${styles['btn--secondary']}`} onClick={() => handleClick()}>
                    <span className={styles['btn-content']}>
                        <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                    </span>
                </button>
                <button className={`${styles.btn} ${styles['btn--secondary']} ${styles['btn--lg']}`} onClick={() => handleClick()}>
                    <span className={styles['btn-content']}>
                        <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                    </span>
                </button>
            </div>
        </>
    )
}