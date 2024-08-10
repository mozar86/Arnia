import { useEffect, useState } from "react"
import { useAuth } from "../../content/AuthContext";
import apiService from "../../services/api";

export const HomeHeader = () => {
    const [userName, setUserName] = useState('');
    const { token, signOut } = useAuth();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await apiService.get("api/user", {
                    headers: {
                        Authorization: token,
                },
            });
            setUserName(response.data.name)
            } catch (error) {
                console.error(error);
            }
        };

        if (token) {
            fetchUserData();
        }
    }, [token]);
    
    return (
        <header>
            <h2>Arnia Trello</h2>
            <section>
                <h4>{userName}</h4>
                <button onClick={signOut}>Sair</button>
            </section>
        </header>
    );
};