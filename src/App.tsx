import { InfoCircleOutlined } from '@ant-design/icons';
import { Button } from './components/button/Button'
import { Card } from './components/card/Card';
import { useStyles } from './css/global'
import { Tile } from './components/tile/Tile';

function App() {

  const handleClick = () => {
    console.log('clicked')
  }

  const handleCardConfirmClick = () => {
    console.log('Some function passed from the parent - card confirm click confirmed.')
  }

  const styles = useStyles()

  return (
    <>
      <div className={styles.section}>
       <Tile />
      </div>
      {/* <div className={styles.section}>
      <Button handleClick={handleClick} label="Learn more" size='sm'>
          <InfoCircleOutlined/>
        </Button>
        <Button handleClick={handleClick} label="Learn more">
          <InfoCircleOutlined/>
        </Button>
        <Button handleClick={handleClick} label="Learn more" size='lg'>
          <InfoCircleOutlined/>
        </Button>
        <Button handleClick={handleClick} label="Learn more" size='sm'></Button>
        <Button handleClick={handleClick} label="Learn more"></Button>
        <Button handleClick={handleClick} label="Learn more" size='lg'></Button>
      </div> */}
      {/* <div className={styles.section}>
        <Button handleClick={handleClick} label="Learn more" size='sm' type='secondary'>
          <InfoCircleOutlined/>
        </Button>
        <Button handleClick={handleClick} label="Learn more" type='secondary'>
          <InfoCircleOutlined/>
        </Button>
        <Button handleClick={handleClick} label="Learn more" size='lg' type='secondary'>
          <InfoCircleOutlined/>
        </Button>
      </div> */}
      {/* <div className={styles.section}>
        <Button handleClick={handleClick} label="Learn more" size='sm' type='secondary'></Button>
        <Button handleClick={handleClick} label="Learn more" type='secondary'></Button>
        <Button handleClick={handleClick} label="Learn more" size='lg' type='secondary'></Button>
      </div> */}
      {/* <div className={styles.section}>
        <Card msg='Card description goes here' handleCardConfirmClick={handleCardConfirmClick} />
        <Card label='Success' msg='Card description goes here' type='success' handleCardConfirmClick={handleCardConfirmClick}/>
        <Card label='Warning' msg='Card description goes here' type='warn' handleCardConfirmClick={handleCardConfirmClick}/>
        <Card label='Error' msg='Card description goes here' type='error' handleCardConfirmClick={handleCardConfirmClick}/>
      </div> */}
    </>
  )
}

export default App
