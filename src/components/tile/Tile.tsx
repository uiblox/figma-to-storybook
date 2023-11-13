import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    tileContainer: {
        background: '#D9D9D9',
        boxSizing: 'border-box',
        borderRadius: '4px',
        fontFamily: 'Josefin Sans, sans-serif',
        fontSize: '32px',
        height: '292px',
        padding: '12px',
        width: '272px',
    },
    tileHeading: {
        fontSize: '28px',
        fontWeight: 'bold',
        lineHeight: '32px',
        margin: 0,
        marginBottom: '10px'
    },
    tileBody: {
        fontSize: '14px',
        fontWeight: 100,
        margin: 0,
    }
})

export const Tile = () => {
    const styles = useStyles()

    return (
        <>
            <div className={styles.tileContainer}>
                <h2 className={styles.tileHeading}>Lorem ipsum dolor sit amet.</h2>
                <p className={styles.tileBody}>As a developer maintaining these specifications and improving them overtime can be an unwieldy task.</p>
            </div>
        </>
    )
}