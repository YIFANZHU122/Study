import './index.css'
import { useState } from 'react';

function Calendar(props) {
    const {defaultDate,onChange} = props;

    const [date,setDate] = useState(defaultDate);

    const handlePrevMonth = () => {
        setDate(new Date(date.getFullYear(),date.getMonth() - 1,1));
    }
    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(),date.getMonth() + 1,1));
    }

    const daysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    }
    const getFirstDayOfMonth = (year,month) => {
        return new Date(year,month,1).getDay();
    }

    const renderDates = () => {
        const days = [];
        const daysCount = daysInMonth(date.getFullYear(),date.getMonth());
        const firstDay = getFirstDayOfMonth(date.getFullYear(),date.getMonth());
        for(let i = 0; i < firstDay; i++){
            days.push(<div className="empty" key={`empty-${i}`}></div>);
        }
        for(let i = 1; i <= daysCount; i++){
            function handleClick(){
                const current = new Date(date.getFullYear(),date.getMonth(),i);
                setDate(current);
                onChange(current);
            }
            if(i === date.getDate()){
                days.push(<div className="day selected" key={i} onClick={handleClick}>{i}</div>);
            }else{
                days.push(<div className="day" key={i} onClick={handleClick}>{i}</div>);
            }
        }
        return days;
    }
        

    


    return (
        <div className="container">
            <div className="calendar">
                <div className="header">
                    <button onClick={handlePrevMonth}>&lt;</button>
                    <div>{date.getFullYear()}年{date.getMonth() + 1}月</div>
                    <button onClick={handleNextMonth}>&gt;</button>
                </div>
                <div className="days">
                    <div className="day">日</div>
                    <div className="day">一</div>
                    <div className="day">二</div>
                    <div className="day">三</div>
                    <div className="day">四</div>
                    <div className="day">五</div>
                    <div className="day">六</div>
                    {renderDates()}
                </div>
            </div>
        </div>
    );
}

export default Calendar;
