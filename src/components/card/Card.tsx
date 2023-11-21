import { createUseStyles } from 'react-jss'

interface CardsProps {
    children?: React.ReactNode
    bgColor?: string
    type?: 'warn' | 'error' | 'success' | 'info'
}

const useStyles = createUseStyles({
    'card-container': {
        border: '3px solid',
        borderRadius: '4px',
        boxSizing: 'border-box',
        fontFamily: 'Josefin Sans, sans-serif',
        fontSize: '32px',
        height: '292px',
        maxWidth: '272px',
        padding: '12px',
        '& card-container--alarm':{}
    },
    'card-container--alarm': {
        extend: 'card-container',
    }
})

export const Card: React.FC<CardsProps> = ({bgColor, children, type}) => {
    const styles = useStyles()
    let cardBorderColor = type === 'success' ? '#A9E589' : type === 'error' ? '#E68E90' : type === 'warn' ? '#FDE997' : type === 'info' ? '#8A91E5' : '#333439'

    return (
        <div className={type ? styles['card-container--alarm'] : styles['card-container']} style={{background: `${bgColor ? bgColor : '#333439'}`, color: cardBorderColor }}>
           {children}
        </div>
    )
}