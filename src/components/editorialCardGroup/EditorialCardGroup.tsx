import { EditorialCard } from "../editorialCard/EditorialCard"
import { createUseStyles } from "react-jss"

interface EditorialCardGroupProps {
    cards: 2 | 3 | 4
}

const useStyles = createUseStyles({
    'editorial-card-group': {
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

export const EditorialCardGroup: React.FC<EditorialCardGroupProps> = ({cards}) => {
    const styles = useStyles()
    
    const generateCards = (count: number) => {
        const content = []
        for (let i = 0; i < count; i++) {
            content.push(<EditorialCard />)
        }
        return content
    }
    return (
        <div className={styles['editorial-card-group']}>
           {generateCards(cards)}  
        </div>
    )
}