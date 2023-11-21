import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    'editorialHeading': {
        fontFamily: 'Josefin Sans, sans-serif',
        color: '#FAFAFA',
    },
    'editorialHeadingTitle': {
        fontSize: '28px',
        fontWeight: '700',
        lineHeight: '32px',
        margin: '0 0 10px 0'
    },
    'editorialHeadingBody': {
        fontSize: '14px',
        fontWeight: '300',
        lineHeight: '16px',
        margin: '0',
        width: '216px'
    }
})

export const EditorialHeading = () => {
    const styles = useStyles()

    return (
        <div className={styles.editorialHeading}>
            <h2 className={styles.editorialHeadingTitle}>Lorem ipsum dolor sit amet.</h2>
            <p className={styles.editorialHeadingBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus eu justo vitae rhoncus.</p>
        </div>
    )
}