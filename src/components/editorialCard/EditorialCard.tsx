import { createUseStyles } from 'react-jss'
import { EditorialGroup } from '../editorialGroup/EditorialGroup'

interface EditorialCardProps {
    color?: string
}

const useStyles = createUseStyles({
    'editorial-card-container': {
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

export const EditorialCard: React.FC<EditorialCardProps> = ({color}) => {
    const styles = useStyles()

    return (
        <div className={styles['editorial-card-container']} style={{background: `${color ? color : '#333439'}`}}>
            <EditorialGroup />
        </div>
    )
}