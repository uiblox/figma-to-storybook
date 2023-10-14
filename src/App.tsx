import { InfoCircleOutlined } from '@ant-design/icons';
import { Button } from './components/button/Button'
import { Card } from './components/card/Card';
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
      <div className={styles.section}>
        <Card msg='Card description goes here'/>
        <Card label='Success' msg='Card description goes here' type='success'/>
        <Card label='Warning' msg='Card description goes here' type='warn'/>
        <Card label='Error' msg='Card description goes here' type='error'/>
      </div>
    </>
  )
}

export default App
