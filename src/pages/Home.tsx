import Illustration from "../assets/images/Illustration.svg";
import Logo from "../assets/images/Logo.svg";
import GoogleIcon from "../assets/images/Google-icon.svg";


import '../styles/auth.scss';
import { Button } from "../components/Button";

export function Home() {
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
          <button className="create-room">
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