import dayjs from 'dayjs'
import Calendar from './components/calendar/Index'

function App2() {
  return (
    <div>
      <Calendar value = {dayjs(new Date())}/>
    </div>
  )
}

export default App2