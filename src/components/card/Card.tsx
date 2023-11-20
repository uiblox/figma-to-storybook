import { createUseStyles } from 'react-jss'

interface CardsProps {
    children?: React.ReactNode
    color?: string
}

const useStyles = createUseStyles({
    'card-container': {
        borderRadius: '4px',
        boxSizing: 'border-box',
        color: '#FAFAFA',
        fontFamily: 'Josefin Sans, sans-serif',
        fontSize: '32px',
        height: '292px',
        maxWidth: '272px',
        padding: '12px',
    },
})

export const Card: React.FC<CardsProps> = ({color, children}) => {
    const styles = useStyles()

    return (
        <div className={styles['card-container']} style={{background: `${color ? color : '#333439'}`}}>
           {children}
        </div>
    )
}