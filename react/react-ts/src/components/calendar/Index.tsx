import './Index.scss'
import MonthCalendar from './MonthCalendar'
import { Dayjs } from 'dayjs'
import Header from './Header'

export interface CalendarProps {
  value:Dayjs
}

function Calendar(props:CalendarProps) {


  return (
    <div className='calendar'>
      <Header {...props} />
      <MonthCalendar {...props} />
    </div>
  )
}

export default Calendar