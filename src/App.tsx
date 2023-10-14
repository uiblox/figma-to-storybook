import { Button } from './components/button/Button'
import { InfoCircleOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss'
import { useStyles } from './css/global'


function App() {

  const handleClick = () => {
    console.log('clicked')
  }

  const styles = useStyles()

  return (
    <>
      <div className={styles.section}>
        <Button handleClick={handleClick} label="Learn more" size='sm'>
          <InfoCircleOutlined/>
        </Button>
        <Button handleClick={handleClick} label="Learn more">
          <InfoCircleOutlined/>
        </Button>
        <Button handleClick={handleClick} label="Learn more" size='lg'>
          <InfoCircleOutlined/>
        </Button>
      </div>
      <div className={styles.section}>
        <Button handleClick={handleClick} label="Learn more" size='sm'></Button>
        <Button handleClick={handleClick} label="Learn more"></Button>
        <Button handleClick={handleClick} label="Learn more" size='lg'></Button>
      </div>
      <div className={styles.section}>
        <Button handleClick={handleClick} label="Learn more" size='sm' type='secondary'>
          <InfoCircleOutlined/>
        </Button>
        <Button handleClick={handleClick} label="Learn more" type='secondary'>
          <InfoCircleOutlined/>
        </Button>
        <Button handleClick={handleClick} label="Learn more" size='lg' type='secondary'>
          <InfoCircleOutlined/>
        </Button>
      </div>
      <div className={styles.section}>
        <Button handleClick={handleClick} label="Learn more" size='sm' type='secondary'></Button>
        <Button handleClick={handleClick} label="Learn more" type='secondary'></Button>
        <Button handleClick={handleClick} label="Learn more" size='lg' type='secondary'></Button>
      </div>
      
    </>
  )
}

export default App
