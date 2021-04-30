import IterationSample from './jsMap/IterationSample';
import Counter from './hooks/Counter';
import InputName from './hooks/InputName';
import {useState} from 'react';
import Input from './hooks/Input';
import Average from './hooks/useMemo/Average';
import ImmerApp from './immerLibrary/ImmerApp';
import RouteApp from './router/RouteApp';

function App() {
    // const [view, setView] = useState(true);

    return (
        <>
            {/* <button onClick={() => setView(!view)}>
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
            )} */}
            {/* <ImmerApp /> */}
            <RouteApp />
        </>
    );
}

export default App;
