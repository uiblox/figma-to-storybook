import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
    root: {
        fontFamily: 'Josefin Sans, sans-serif',
    },
    section: {
        alignItems: 'center',
        border: '1px solid #000',
        display: 'grid', 
        gridGap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minMax(150px, 1fr))',
        margin: '0 auto',
        marginBottom: '20px',
        maxWidth: '1200px',
       
    }
})