import { createUseStyles } from 'react-jss'
import { ReactNode } from 'react';

interface ButtonProps {
    children?: ReactNode
    label?: string
    mode?: 'light'
    type?: 'secondary',
    handleClick: () => void
}

const useStyles = createUseStyles({
    'button': {
        background: 'transparent',
        border: '1.5px solid',
        borderRadius: '4px',
        color: '#333439',
        cursor: 'pointer',
        fontSize: '14px',
        padding: '8px 12px',
        transition: '0.4s ease',
        '&:hover': {
            background: '#1523CB',
            color: '#FAFAFA'
        },
        '& $button--secondary': {},
        '& $button--light': {},
    },
    'button-content': {
        whiteSpace: 'nowrap'
    },
    'button--secondary': {
        background: 'transparent !important',
        border: 'none',
        borderRadius: 0,
        '&:hover': {
            boxShadow: '0 3px 0 0 #333439',
            color: '#333439',
        },
    },
    'button--light': {
        color: '#FAFAFA',
        '&:hover': {
            boxShadow: '0 3px 0 0 #FAFAFA',
            color: '#FAFAFA'
        },
    },
    'button-text': {
        paddingLeft: 0,
        textWrap: 'nowrap',
    },
    'button-text-icon': {
        paddingLeft: '4px',
        textWrap: 'nowrap',
    },
  })

export const Button:React.FC<ButtonProps> = ({children, mode, label, type, handleClick}) => {

    const styles = useStyles()

    return (
        <button className={`${styles.button} ${type ? styles[`button--${type}`] : ''} ${mode ? styles[`button--${mode}`] : ''}`} onClick={() => handleClick()}>
            <span className={styles['button-content']}>
                {children}
                <span className={children ? styles['button-text-icon'] : styles['button-text'] }>{label}</span>
            </span>
        </button>
    )
}