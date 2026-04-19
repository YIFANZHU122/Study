import { useState, useLayoutEffect } from 'react';

function App() {
    const [num, setNum] = useState(1);



    useLayoutEffect(() =>{
        console.log('1');
        setNum(2)
    },[num])



    return(
        <div>
            <button onClick={() => setNum(num + 1)}>{num}</button>
        </div>
    )
}
export default App;