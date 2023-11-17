import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    'editorial-group': {
        fontFamily: 'Josefin Sans, sans-serif',
    },
    'editorial-group-heading': {
        fontSize: '28px',
        fontWeight: '700',
        lineHeight: '32px',
        margin: '0 0 10px 0'
    },
    'editorial-group-body': {
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
        <div className={styles["editorial-group"]}>
            <h2 className={styles["editorial-group-heading"]}>Lorem ipsum dolor sit amet.</h2>
            <p className={styles["editorial-group-body"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus eu justo vitae rhoncus.</p>
        </div>
    )
}