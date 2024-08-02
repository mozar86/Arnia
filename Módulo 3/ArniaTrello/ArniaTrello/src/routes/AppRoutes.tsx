import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm"
import Cadastro from "../pages/Cadastro/Cadastro";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm loginUser={(user) => console.log(user)} />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;