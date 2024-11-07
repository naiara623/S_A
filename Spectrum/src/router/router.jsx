import { createBrowserRouter } from "react-router-dom";
import Cadastro from "../pages/Cadastro"
import Boas_Vindas from "../pages/Boas_Vindas";
import Login from "../pages/Login";
import Tela_Profissional from "../pages/Tela_Profissional";
import Tela_Perfil from "../pages/Tela_Perfil";
import Tela_Informacoes from "../pages/Tela_Informacoes";
// import Tela_Principal from "../pages/Tela_Principal";

const router = createBrowserRouter([

    {path: "/", element: <Boas_Vindas />},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},
    {path: "/perfildeusuario", element: <Tela_Perfil />},
    {path: "/perfildeprofissional", element: <Tela_Profissional />},
    {path: "/teladeinformacoes", element: <Tela_Informacoes />},
    // {path: "/telaprincipal", element: <Tela_Principal />},
    
])

export default router
