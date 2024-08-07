import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";
import Kanban from "../pages/Kanban/Kanban";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/kanban" element={<Kanban />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;