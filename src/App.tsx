import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Result } from "./components/Result";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
