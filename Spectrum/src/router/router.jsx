import { createBrowserRouter } from "react-router-dom";
import Cadastro from "../pages/Cadastro"
import Boas_Vindas from "../pages/Boas_Vindas";
import Login from "../pages/Login";
import Tela_Profissional from "../pages/Tela_Profissional";
import Tela_Perfil from "../pages/Tela_Perfil";
import Tela_Informacoes from "../pages/Tela_Informacoes";
import Tela_Principal from "../pages/Tela_Principal";


import Estrategia1 from "../estrategias/Estrategia1";
import Estrategia2 from "../estrategias/Estrategia2";
import Estrategia3 from "../estrategias/Estrategia3";
import Estrategia4 from "../estrategias/Estrategia4";

import Comunicacao4 from "../estrategias/sub_estrategias1/Comunicacao4"
import EspaçosTranquilos2 from "../estrategias/sub_estrategias1/EspaçosTranquilos2"
import MúsicaOuRuídoBranco6 from "../estrategias/sub_estrategias1/MúsicaOuRuídoBranco6"
import Planejamento3 from "../estrategias/sub_estrategias1/Planejamento3"
import ProtetoresAuriculares from "../estrategias/sub_estrategias1/ProtetoresAuriculares1"


const router = createBrowserRouter([

    {path: "/", element: <Boas_Vindas />},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},
    {path: "/perfildeusuario", element: <Tela_Perfil />},
    {path: "/perfildeprofissional", element: <Tela_Profissional />},
    {path: "/teladeinformacoes", element: <Tela_Informacoes />},

    {path: "/telaprincipal", element: <Tela_Informacoes />},
    {path: "/telaprincipal", element: <Tela_Principal />},

    {path: "/estrategia1", element: <Estrategia1/>},
    {path: "/estrategia2", element: <Estrategia2/>},
    {path: "/estrategia3", element: <Estrategia3/>},
    {path: "/estrategia4", element: <Estrategia4/>},

    {path: "/Comunicacao4", element: <Comunicacao4/>},
    {path: "/EspaçosTranquilos2", element: <EspaçosTranquilos2/>},
    {path: "/MúsicaOuRuídoBranco6", element: <MúsicaOuRuídoBranco6/>},
    {path: "/Planejamento3", element: <Planejamento3/>},
    {path: "/ProtetoresAuriculares", element: <ProtetoresAuriculares/>},
    {path: "/", element: <Comunicacao4/>},
    {path: "/", element: <Comunicacao4/>},




])

export default router
