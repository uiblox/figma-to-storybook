import { Button } from './components/button/Button'
import { InfoCircleOutlined } from '@ant-design/icons';

function App() {

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>
   
      <Button handleClick={handleClick} label="Learn more">
        <InfoCircleOutlined/>
      </Button>
    </>
  )
}

export default App
