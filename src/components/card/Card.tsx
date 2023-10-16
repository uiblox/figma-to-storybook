import { createUseStyles } from 'react-jss'
import { Button } from '../button/Button'
import { CheckCircleOutlined, CloseCircleOutlined, InfoCircleOutlined, WarningOutlined } from '@ant-design/icons';

interface CardProps {
    label?: string
    msg: string
    type?: 'warn' | 'error' | 'success'
    handleCardConfirmClick: () => void
}

const useStyles = createUseStyles({
    card: {
        color: '#EFEFEF',
        background: '#353535',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px 24px',
        textAlign: 'center',
        width: '124px',
        fontFamily: 'Montserrat, sans-serif',
        '&$card--success':{},
        '&$card--warn':{},
        '&$card--error':{},
    },
    'card--success': {
        color: '#BEF93F',
    },
    'card--warn': {
        color: '#F9E73F',
    },
    'card--error': {
        color: '#F96C3F',
    },
    cardIcon: {
        fontSize: '28px',
        marginBottom: '8px',
    },
    cardTitle: {
        fontSize: '18px',
        fontWeight: '400',
        margin: 0,
    },
    cardContent:  {
        color: '#FFF',
        fontSize: '14px',
    }
})

export const Card:React.FC<CardProps> = ({label, msg, type, handleCardConfirmClick}) => {
    
    const styles = useStyles()

    const icon = () => {
        switch (type) {
            case 'warn':
                return <WarningOutlined />
            case 'error':
                return <CloseCircleOutlined />
            case 'success':
                return <CheckCircleOutlined />
            default:
                return <InfoCircleOutlined />
        }
    }
    
    return (
        <div className={`${type ? `${styles.card} ${styles[`card--${type}`]}` : styles.card}`} >
            <div>
                <div className={styles.cardIcon}>
                    {icon()}
                </div>
                <h2 className={styles.cardTitle}>{label && label || 'Default Title'}</h2>
            </div>
            <div className={styles.cardContent}>
                <p>{msg}</p>
            </div>
            <Button handleClick={()=> handleCardConfirmClick()} label='Confirm'/>
        </div>
    )
}