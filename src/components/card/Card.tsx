import { createUseStyles } from 'react-jss'
import { EditorialGroup } from '../editorialGroup/EditorialGroup'

const useStyles = createUseStyles({
    'card-container': {
        background: '#333439',
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

export const Card = () => {
    const styles = useStyles()

    return (
        <div className={styles['card-container']}>
            <EditorialGroup />
        </div>
    )
}