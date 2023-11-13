import { Tile } from "../tile/Tile"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    tileGroupContainer: {
        display: 'flex',
        boxSizing: 'border-box',
        justifyContent: 'space-around',
        padding: '12px 0',
        width: '100%',
        flexWrap: 'wrap',
        '& > *:nth-child(-n+3) ': {
            marginBottom: '20px',
        }
    },
    tileGroupPair: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%'
    },
    '@media (min-width: 1024px)': {
        tileGroupContainer: {
            flexWrap: 'unset',
            '& > *:nth-child(-n+2)': {
                marginBottom: '0 !important'
            }
        }
    },
    '@media (min-width: 576px)': {
        tileGroupContainer: {
            '& > *:nth-child(-n+3) ': {
                marginBottom: 'unset'
            },
            '& > *:nth-child(-n+2) ': {
                marginBottom: '20px'
            }
        }
    }
})

export const TileGroup = () => {
    const styles = useStyles()
    
    
    return (
        <div className={styles.tileGroupContainer}>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </div>
    )
}