import IterationSample from './jsMap/IterationSample';
import Counter from './hooks/Counter';
import InputName from './hooks/InputName';
import {useState} from 'react';
import Input from './hooks/Input';
import Average from './hooks/useMemo/Average';

function App() {
    const [view, setView] = useState(true);

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
                    <Average />
                </div>
            )}
        </>
    );
}

export default App;
