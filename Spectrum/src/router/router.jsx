import { createBrowserRouter } from "react-router-dom";
import Cadastro from "../pages/Cadastro"
import Boas_Vindas from "../pages/Boas_Vindas";
import Login from "../pages/Login";
import Tela_Profissional from "../pages/Tela_Profissional";
import Tela_Perfil from "../pages/Tela_Perfil";
import Tela_Informacoes from "../pages/Tela_Informacoes";
import Tela_Principal from "../pages/Tela_Principal";
import Esqueci_A_Senha from "../pages/Esqueci_A_Senha";

import Estrategia1 from "../estrategias/Estrategia1";
import Estrategia2 from "../estrategias/Estrategia2";
import Estrategia3 from "../estrategias/Estrategia3";
import Estrategia4 from "../estrategias/Estrategia4";

import Comunicacao4 from "../estrategias/sub_estrategias1/Comunicacao4";
import EspaçosTranquilos2 from "../estrategias/sub_estrategias1/EspaçosTranquilos2";
import MúsicaOuRuídoBranco6 from "../estrategias/sub_estrategias1/MúsicaOuRuídoBranco6";
import Planejamento3 from "../estrategias/sub_estrategias1/Planejamento3";
import ProtetoresAuriculares from "../estrategias/sub_estrategias1/ProtetoresAuriculares1";
import TécnicasDeRelaxamento5 from "../estrategias/sub_estrategias1/TécnicasDeRelaxamento5";
import TreinamentoDeDessensibilização7 from "../estrategias/sub_estrategias1/TreinamentoDeDessensibilização7";

import DividirEmEtapas4 from "../estrategias/sub_estrategias2/DividirEmEtapas4";
import HistóriasSociais5 from "../estrategias/sub_estrategias2/HistóriasSociais5";
import IntroduzirFlexibilidadeGradualmente8 from "../estrategias/sub_estrategias2/IntroduzirFlexibilidadeGradualmente8";
import ManterElementosConstantes3 from "../estrategias/sub_estrategias2/ManterElementosConstantes3";
import ObjetosDeConforto10 from "../estrategias/sub_estrategias2/ObjetosDeConforto10";
import PreparaçãoAntecipada1 from "../estrategias/sub_estrategias2/PreparaçãoAntecipada1";
import ReforçoPositivo7 from "../estrategias/sub_estrategias2/ReforçoPositivo7";
import SuporteEmocional9 from "../estrategias/sub_estrategias2/SuporteEmocional9";

import FlexibilidadeGradual7 from "../estrategias/subEstrategias3/FlexibilidadeGradual7"
import HistoriasSociais from "../estrategias/subEstrategias3/HistoriasSociais";
import ItensDeConforto from "../estrategias/subEstrategias3/ItensDeConforto";
import MapasEAplicativosDeNavegacao2 from "../estrategias/subEstrategias3/MapasEAplicativosDeNavegacao2";
import PreparacaoAntecipada1 from "../estrategias/subEstrategias3/PreparacaoAntecipada1";
import ReforcoPositivo8 from "../estrategias/subEstrategias3/ReforcoPositivo8";
import RotasAlternativasConhecidas4 from "../estrategias/subEstrategias3/RotasAlternativasConhecidas4";
import TecnicasDeRelaxamento5 from "../estrategias/subEstrategias3/TecnicasDeRelaxamento5";
import TreinamentoDeSituacoes10 from "../estrategias/subEstrategias3/TreinamentoDeSituacoes10";
import SuporteEmocional10 from "../estrategias/subEstrategias3/SuporteEmocional10";

import CompanheiroDeApoio2 from "../estrategias/subEstrategias4/CompanheiroDeApoio2";
import ComunicacaoPrevia7 from "../estrategias/subEstrategias4/ComunicacaoPrevia7";
import EspacosDeRefugio3 from "../estrategias/subEstrategias4/EspacosDeRefugio3";
import FeedbackPositivo11 from "../estrategias/subEstrategias4/FeedbackPositivo11";
import HorariosMenosMovimentados5 from "../estrategias/subEstrategias4/HorariosMenosMovimentados5";
import InteressesEspeciais10 from "../estrategias/subEstrategias4/InteressesEspeciais10";
import PlanejamentoAntecipado1 from "../estrategias/subEstrategias4/PlanejamentoAntecipado1";
import ProtetoresAuriculares4 from "../estrategias/subEstrategias4/ProtetoresAuriculares4";
import RotinaEPrevisibilidade9 from "../estrategias/subEstrategias4/RotinaEPrevisibilidade9";
import TecnicasDeRelaxamento6 from "../estrategias/subEstrategias4/TecnicasDeRelaxamento6";
import TempoLimitado8 from "../estrategias/subEstrategias4/TempoLimitado8";
import Editar_Perfil from "../pages/Editar_Perfil";
import Calendario from "../pages/Calendario";



const router = createBrowserRouter([

    // {path: "/", element: <Boas_Vindas />},
    // {path: "/cadastro", element: <Cadastro />},
    // {path: "/mudarsenha", element: <Esqueci_A_Senha />},
    // {path: "/login", element: <Login />},
    // {path: "/perfildeusuario", element: <Tela_Perfil />},
    // {path: "/perfildeprofissional", element: <Tela_Profissional />},
    // {path: "/teladeinformacoes", element: <Tela_Informacoes />},
    // {path: "/telaprincipal", element: <Tela_Principal />},
    // {path: "/ediatarperfil", element: <Editar_Perfil />},
    // {path: "/calendario", element: <Calendario/>},

    // {path: "/estrategia1", element: <Estrategia1/>},
    // {path: "/estrategia2", element: <Estrategia2/>},
    // {path: "/estrategia3", element: <Estrategia3/>},
    // {path: "/estrategia4", element: <Estrategia4/>},

    // {path: "/Comunicacao4", element: <Comunicacao4/>},
    // {path: "/EspaçosTranquilos2", element: <EspaçosTranquilos2/>},
    // {path: "/MúsicaOuRuídoBranco6", element: <MúsicaOuRuídoBranco6/>},
    // {path: "/Planejamento3", element: <Planejamento3/>},
    // {path: "/ProtetoresAuriculares", element: <ProtetoresAuriculares/>},
    // {path: "/TécnicasDeRelaxamento5", element: <TécnicasDeRelaxamento5/>},
    // {path: "/TreinamentoDeDessensibilização7", element: <TreinamentoDeDessensibilização7/>},

    // {path: "/DividirEmEtapas4", element: <DividirEmEtapas4/>},
    // {path: "/HistóriasSociais5", element: <HistóriasSociais5/>},
    // {path: "/IntroduzirFlexibilidadeGradualmente8", element: <IntroduzirFlexibilidadeGradualmente8/>},
    // {path: "/ManterElementosConstantes3", element: <ManterElementosConstantes3/>},
    // {path: "/ObjetosDeConforto10", element: <ObjetosDeConforto10/>},
    // {path: "/PreparaçãoAntecipada1", element: <PreparaçãoAntecipada1/>},
    // {path: "/ReforçoPositivo7", element: <ReforçoPositivo7/>},
    // {path: "/SuporteEmocional9", element: <SuporteEmocional9/>},
    // {path: "/TécnicasDeRelaxamento6", element: <TécnicasDeRelaxamento6/>},
    // {path: "/VisualizaçãoERoteiros2", element: <VisualizaçãoERoteiros2/>},

    // {path: "/FlexibilidadeGradual7", element: <FlexibilidadeGradual7/>},
    // {path: "/HistoriasSociais", element: <HistoriasSociais/>},
    // {path: "/ItensDeConforto", element: <ItensDeConforto/>},
    // {path: "/MapasEAplicativosDeNavegacao2", element: <MapasEAplicativosDeNavegacao2/>},
    // {path: "/PreparacaoAntecipada1", element: <PreparacaoAntecipada1/>},
    // {path: "/ReforcoPositivo8", element: <ReforcoPositivo8/>},
    // {path: "/RotasAlternativasConhecidas4", element: <RotasAlternativasConhecidas4/>},
    // {path: "/SuporteEmocional10", element: <SuporteEmocional10/>},
    // {path: "/TecnicasDeRelaxamento5", element: <TecnicasDeRelaxamento5/>},
    // {path: "/TreinamentoDeSituacoes10", element: <TreinamentoDeSituacoes10/>},

    // {path: "/CompanheiroDeApoio2", element: <CompanheiroDeApoio2/>},
    // {path: "/ComunicacaoPrevia7", element: <ComunicacaoPrevia7/>},
    // {path: "/EspacosDeRefugio3", element: <EspacosDeRefugio3/>},
    // {path: "/FeedbackPositivo11", element: <FeedbackPositivo11/>},
    // {path: "/HorariosMenosMovimentados5", element: <HorariosMenosMovimentados5/>},
    // {path: "/InteressesEspeciais10", element: <InteressesEspeciais10/>},
    // {path: "/PlanejamentoAntecipado1", element: <PlanejamentoAntecipado1/>},
    // {path: "/ProtetoresAuriculares4", element: <ProtetoresAuriculares4/>},
    // {path: "/RotinaEPrevisibilidade9", element: <RotinaEPrevisibilidade9/>},
    // {path: "/TecnicasDeRelaxamento6", element: <TecnicasDeRelaxamento6/>},
    // {path: "/TempoLimitado8", element: <TempoLimitado8/>}

  

 
  
])

export default router
