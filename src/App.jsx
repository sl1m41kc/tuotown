import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Main from './pages/main';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
