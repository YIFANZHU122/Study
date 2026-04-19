import Calendar from './calendar/index.jsx'


function App() {
  

  return (
    <Calendar defaultDate={new Date()} onChange={(newDate)=> {
      alert(newDate.toLocaleString());
    }}/>
  )
}

export default App
