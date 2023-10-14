import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    root: {
        fontSize: '16px',
    },
    section: {
        alignItems: 'center',
        display: 'grid',
        justifyContent: 'center',
        justifyItems: 'center', 
        gridGap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minMax(150px, 1fr))',
        margin: '0 auto',
        marginBottom: '20px',
        maxWidth: '1024px',
    }
})