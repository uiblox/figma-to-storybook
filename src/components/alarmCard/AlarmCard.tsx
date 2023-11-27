import { createUseStyles } from "react-jss"
import { Card } from "../card/Card"
import { CheckCircleOutlined, CloseCircleOutlined, InfoCircleOutlined, WarningOutlined } from '@ant-design/icons';
import { Button } from "../button/Button";


interface AlarmCardProps {
    label?: string
    msg?: string
    type?: 'warn' | 'error' | 'success' | 'info'
    handleCardConfirmClick?: () => void
}

const useStyles = createUseStyles({
    'alarm-container' : {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Josefin Sans, sans-serif',
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
    },
    'alarm-icon': {
        fontSize: '32px',
        marginBottom: '12px'
    },
    'alarm-content': {
        color: '#333439',
        marginBottom: '20px'
    },
    'alarm-label': {
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '12px',
    },
    'alarm-msg': {
        fontSize: '14px',
        fontWeight: '100',
    },
    'alarm-actions': {
        display: 'flex',
        flexDirection: 'column',
        '& *:first-of-type': {
            marginBottom: '8px'
        }
        
    }
})

export const AlarmCard: React.FC<AlarmCardProps> = ({label, msg, type, handleCardConfirmClick}) => {
    const styles = useStyles()
    const alarmBg = 'FAFAFA'

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

    const handleCardClick = () => {
        console.log('testing')
    }

    return (
        <Card type={type} bgColor={alarmBg}>
            <div className={styles['alarm-container']}>
                <div className={styles['alarm-icon']}>
                    {icon()}
                </div>
                <div className={styles['alarm-content']}>
                    <div className={styles['alarm-label']}>
                        {label}
                    </div>
                    <div className={styles['alarm-msg']}>
                        {msg}
                    </div>
                </div>
                <div className={styles['alarm-actions']}>
                    <Button handleClick={handleCardClick} label='Confirm' mode="dark" type="primary" />
                    <Button handleClick={handleCardClick} label='Dismiss' mode="dark" type="secondary"/>
                </div>
            </div>
        </Card>
    )
}