import { useStyles } from './css/global'
import { Card } from './components/card/Card'
import { EditorialCard } from './components/editorialCard/EditorialCard';
import { EditorialCardGroup } from './components/editorialCardGroup/EditorialCardGroup';
import { HeroEditorial } from './components/heroEditorial/HeroEditorial';
import { AlarmCard } from './components/alarmCard/AlarmCard';

function App() {

  const styles = useStyles()

  return (
    <>
      <div className={styles.section}>
        <Card />
      </div>
      <div className={styles.section}>
        <EditorialCard />
      </div>
      <div className={styles.section}>
        <AlarmCard type='success' label="Lorem ipsum" msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <AlarmCard type='warn' label="Lorem ipsum" msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <AlarmCard type='error' label="Lorem ipsum" msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <AlarmCard type='info' label="Lorem ipsum" msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
      </div>
      <div className={styles.section}>
        <EditorialCardGroup />
      </div>
      <div className={styles.section}>
        <HeroEditorial/>
      </div>
      <div className={styles.section}>
        <HeroEditorial reverse={true}/>
      </div>
    </>
  )
}

export default App
