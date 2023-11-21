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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        justifyContent: 'space-evenly'
    },
    'alarm-icon': {
        fontSize: '32px'
    },
    'alarm-content': {
        color: '#333439'
    },
    'alarm-label': {
        fontSize: '24px',
        marginBottom: '12px',
    },
    'alarm-msg': {
        fontSize: '14px'
    },
    'alarm-actions': {
        display: 'flex',
        flexDirection: 'column',
        '& *:first-of-type': {
            marginBottom: '10px'
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
                    <Button handleClick={handleCardClick} label='Confirm'/>
                    <Button handleClick={handleCardClick} label='Dismiss' type="secondary"/>
                </div>
            </div>
        </Card>
    )
}