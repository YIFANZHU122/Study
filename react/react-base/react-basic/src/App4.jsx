import {useRef} from 'react';

function App() {
const ipt = useRef(null);

    return (
        <div>
            <input type="text" ref={ipt}/>
        </div>
    )
}

export default App;