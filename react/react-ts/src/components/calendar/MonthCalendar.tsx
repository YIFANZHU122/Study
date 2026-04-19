import type { CalendarProps } from './Index'
import {Dayjs} from 'dayjs'

interface MonthCalendarProps extends CalendarProps {
  
}

function getAllDays(date: Dayjs) {
    const startDate = date.startOf('month')
    const day = startDate.day()

    const dayInfo : Array<{date: Dayjs, isCurrentMonth: boolean}> = new Array(6 * 7)
    for(let i = 0;i < day;i++) {
        dayInfo[i] = {
            date:startDate.subtract(day - i, 'day'),
            isCurrentMonth:false
        }
    }
    for(let i = day;i < dayInfo.length;i++) {
        const calcDate = startDate.add(i - day, 'day')
        dayInfo[i] = {
            date:calcDate,
            isCurrentMonth:calcDate.month() === date.month()
        }
    }
    return dayInfo
}

function renderDays(days:Array<{date: Dayjs, isCurrentMonth: boolean}>) {
    const rows = []
    for(let i  = 0;i < 6;i++) {
        const row = []
        for(let j = 0;j < 7;j++) {
            const item = days[i * 7 + j]
            row[j] = <div className={'calendar-month-days-cell '+(item.isCurrentMonth?'calendar-month-days-cell-current':'')}>{item.date.date()}</div>
        }
        rows.push(row)
    }
    return rows.map(row => (
        <div className='calendar-month-days-row'>
            {row}
        </div>
    ))
}


function MonthCalendar(props:MonthCalendarProps) {

    const weekList = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

    const allDays = getAllDays(props.value)

    return (
        <div className='calendar-month'>
            <div className="calendar-month-week">
                {
                    weekList.map((week) => {
                        return (
                            <div key={week} className="calendar-month-week-item">
                                {week}
                            </div>
                        )
                    })
                }
            </div>
            <div className="calendar-month-days">
                {renderDays(allDays)}
            </div>
        </div>
    )
}

export default MonthCalendar
