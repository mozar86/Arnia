import { 
    BrowserRouter, 
    Route, 
    Routes 
} from "react-router-dom"
import Login from "./pages/login/Login";

const AppRoutes = () => {
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
};

export default AppRoutes;