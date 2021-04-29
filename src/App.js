import IterationSample from './jsMap/IterationSample';
import Counter from './hooks/Counter';
import InputName from './hooks/InputName';
import {useState} from 'react';
import Input from './hooks/Input';

function App() {
    const [view, setView] = useState(false);

    return (
        <>
            <button onClick={() => setView(!view)}>
                {view ? '숨기기' : '보이기'}
            </button>
            {view && (
                <div>
                    <IterationSample />
                    <Counter />
                    <InputName />
                    <Input />
                </div>
            )}
        </>
    );
}

export default App;
