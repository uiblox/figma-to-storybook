import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    heroContainer: {
        boxSizing: 'border-box',
        display: 'grid',
        fontFamily: 'Josefin Sans',
        gridTemplateColumns: 'auto-fill 1fr',
        height: '100%',
        width: '100%',
        '@media (min-width: 1024px)': {
            gridTemplateColumns: '370px 1fr',
         
        }
    },
    heroLeft: {
        backgroundColor: '#F5F5F5',
        padding: '92px 74px',
    },
    heroRight: {
        backgroundColor: '#FAD32F',
        padding: '14px 0'

    },
    heroLeftContent: {
        width: '240px',
        '& h2': {
            fontSize: '28px',
            margin: 0,
        }
    },
    heroRightContent: {
        padding: '0 72px',
        '& h3': {
           fontSize: '10px',
           fontWeight: 400,
           margin: '0 0 60px 0'
        },
        '& h2': {
            fontSize: '24px',
            margin: '0 0 30px 0',
            width: '30%',
        },
        '& p': {
            width: '50%',
            fontSize: '14px',
            fontWeight: 100
        }
    },
})
export const TextHero = () => {
    
    const styles = useStyles()

    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroLeft}>
                <div className={styles.heroLeftContent}>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus eu justo vitae rhoncus.</h2>
                </div>
            </div>
            <div className={styles.heroRight}>
                <div className={styles.heroRightContent}>
                    <h3>LOREM</h3>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus eu justo vitae rhoncus. Vivamus semper et nulla a suscipit. In eget dapibus sem, ornare rhoncus diam. Maecenas pharetra dictum dolor ut sagittis.</p>
                </div>
            </div>
        </div>
    )
}