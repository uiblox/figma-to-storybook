import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    'editorialGroup': {
        fontFamily: 'Josefin Sans, sans-serif',
    },
    'editorialGroupHeading': {
        fontSize: '28px',
        fontWeight: '700',
        lineHeight: '32px',
        margin: '0 0 10px 0'
    },
    'editorialGroupBody': {
        fontSize: '14px',
        fontWeight: '300',
        lineHeight: '16px',
        margin: '0',
        width: '216px'
    }
})

export const EditorialGroup = () => {
    const styles = useStyles()

    return (
        <div className={styles.editorialGroup}>
            <h2 className={styles.editorialGroupHeading}>Lorem ipsum dolor sit amet.</h2>
            <p className={styles.editorialGroupBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus eu justo vitae rhoncus.</p>
        </div>
    )
}