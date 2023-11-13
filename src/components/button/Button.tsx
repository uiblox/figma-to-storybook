import { createUseStyles } from 'react-jss'
import { ReactNode } from 'react';

interface ButtonProps {
    children?: ReactNode
    label?: string
    size?: 'sm' | 'lg'
    type?: 'secondary',
    handleClick: () => void
}

const useStyles = createUseStyles({
    btn: {
        background: '#E1FB3D',
        border: 'none',
        borderRadius: '4px',
        color: '#4D4C4C',
        cursor: 'pointer',
        // fontFamily: 'Montserrat, sans-serif',
        padding: '8px 12px',
        transition: '0.4s ease',
        '&:hover': {
            background: '#ECF99B'
        },
        '& $btn--sm': {},
        '& $btn--lg': {},
        '& $btn--secondary': {},
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
        fontSize: '10px',
        padding: '4px 8px',
    },
    'btn--lg': {
        fontSize: '18px',
        padding: '12px 12px',
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
  })

export const Button:React.FC<ButtonProps> = ({children, label, size, type, handleClick}) => {

    const styles = useStyles()

    return (
        <>
            <button className={`${styles.btn} ${size ? styles[`btn--${size}`] : ''} ${type ? styles[`btn--${type}`] : ''}`} onClick={() => handleClick()}>
                <span className={styles['btn-content']}>
                    {children}
                    <span className={children ? styles['btn-text-icon'] : styles['btn-text'] }>{label}</span>
                </span>
            </button>
        </>
    )
}