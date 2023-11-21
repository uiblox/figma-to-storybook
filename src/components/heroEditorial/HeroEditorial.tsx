import { createUseStyles } from "react-jss"

interface HeroEditorialProps {
    reverse?: boolean
}

const useStyles = createUseStyles({
        heroContainer: {
            boxSizing: 'border-box',
            display: 'flex',
            flexWrap: 'wrap',
            fontFamily: 'Josefin Sans',
            height: '100%',
            width: '100%',
            '@media (min-width: 576px)': {
                flexWrap: 'nowrap'
            }
        },
        heroBlockLeft: {
            backgroundColor: '#F5F5F5',
            boxSizing: 'border-box',
            padding: '92px 74px',
            '@media (min-width: 576px)': {
                width: '370px'
            }
        },
        heroBlockRight: {
            backgroundColor: '#FAD32F',
            boxSizing: 'border-box',
            padding: '14px 0',
            '@media (min-width: 576px)': {
                flex: 1
            }
        },
        heroContentLeft: {
            '& h2': {
                fontSize: '28px',
                margin: 0,
            }
        },
        heroContentRight: {
            padding: '0 12px',
            '@media (min-width: 758px)': {
                padding: '0 72px',
            },
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
                display: 'inline-block',
                fontSize: '14px',
                fontWeight: 100,
                lineHeight: '16px',
                width: '100%',
                '@media (min-width: 758px)': {
                    width: '270px',
                }
            }
        },
    })

export const HeroEditorial: React.FC<HeroEditorialProps> = ({reverse}) => {
    
    const styles = useStyles()
    return (
        <div className={styles.heroContainer} style={{flexDirection: `${reverse ? 'row-reverse' : 'row'}`}}>
            <div className={styles.heroBlockLeft}>
                <div className={styles.heroContentLeft}>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus eu justo vitae rhoncus.</h2>
                </div>
            </div>
            <div className={styles.heroBlockRight}>
                <div className={styles.heroContentRight}>
                    <h3>LOREM</h3>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus eu justo vitae rhoncus. Vivamus semper et nulla a suscipit. In eget dapibus sem, ornare rhoncus diam. Maecenas pharetra dictum dolor ut sagittis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}