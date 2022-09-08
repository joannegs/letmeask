import { useNavigate } from "react-router-dom";
import { useAuth } from './../hooks/useAuth';

import Illustration from "../assets/images/Illustration.svg";
import Logo from "../assets/images/Logo.svg";
import GoogleIcon from "../assets/images/Google-icon.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";



export function Home() {
  const navigate = useNavigate();

  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom(){    
    if(!user) await signInWithGoogle();
    navigate("/rooms/new");
  };

  return (
    <div id="page-auth">
      <aside>
        <img src={Illustration} alt="Imagem ilustrando perguntas e respostas" />
        <strong> Crie salas de Q&amp;A ao-vivo</strong>
        <p> Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={Logo} alt="Imagem da logo - letmeask" />
          <button  onClick={handleCreateRoom} className="create-room">
            <img src={GoogleIcon} alt="Icon do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator"> ou entre em uma sala </div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit"> Entrar na sala </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
