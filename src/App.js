// import IterationSample from './jsMap/IterationSample';
// import InputName from './hooks/InputName';
// import {useState} from 'react';
// import Input from './hooks/Input';
// import Average from './hooks/useMemo/Average';
// import ImmerApp from './immerLibrary/ImmerApp';
// import RouteApp from './router/RouteApp';
// import NewsApp from './news-viewer/NewsApp';
// import NewsPage from './news-viewer/component/NewsPage';
// import {Route} from 'react-router';
// import ColorBox from './contextAPI/components/ColorBox';
// import ColorContext, {ColorProvider} from './contextAPI/contexts/color';
// import SelectColor from './contextAPI/components/SelectColor';
// import TextBox from './contextAPI/components/TextBox';
// import Component from './redux/Component';
// import Container from './redux/Container';
// import TodoComponent from './redux/TodoComponent';
// import TodoContainer from './redux/TodoContainer';
// import ReduxApp from './redux(without_book)/ReduxApp';
import SagaApp from './redux-saga/SagaApp';

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
            {/* <RouteApp /> */}
            {/* <NewsApp /> */}
            {/* <ColorProvider>
                <SelectColor />
                <ColorBox />
                <TextBox />
            </ColorProvider> */}
            {/* <Counter />
            <TodoContainer /> */}
            {/* <ReduxApp /> */}
            <SagaApp />
        </>
    );
}

export default App;
