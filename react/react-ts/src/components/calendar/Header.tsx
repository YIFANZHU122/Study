import { Dayjs } from 'dayjs'

export interface HeaderProps {
    value:Dayjs
}

function Header(props:HeaderProps) {

    return (
        <div className="calendar-header">
            <div className="calendar-header-left">
                <div className="calendar-header-left-prev">
                    &lt;
                </div>
                <div className="calendar-header-left-title">
                    {props.value.format('YYYY年MM月')}
                </div>
                <div className="calendar-header-left-prev">
                    &gt;
                </div>
            </div>
        </div>
    )
}

export default Header