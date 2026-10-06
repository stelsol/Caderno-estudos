import { Link } from "react-router-dom";
import logo from "../assets/pasta1/logo.png";
import MeninaCad from "../assets/pasta1/meninacadastro.svg";
export default function Cadastro() {
  return (
    <div className="relative overflow-hidden min-h-screen w-auto flex flex-col bg-[#3B1E54] font-sans text-foreground box-border text-[#eeeeee]">
      <div className="flex justify-center items-center text-3xl  font-extrabold uppercase  text-[#EEEEEE]">
        {/* Caderno De Estudos */}
        <div>
          <img src={logo} alt="Logo" className="w-full h-50" />
        </div>
      </div>
      <div className=" flex flex-1 items-center justify-center pb-30  ">
        <form className="relative w-full max-w-sm min-h-90 gap-5 bg-[#9B7EBD]/40 flex flex-col border-2 border-[#9B7EBD] justify-center items-center p-5 rounded-xl">
          <h1 className="text-center text-2xl font-bold text-[#220d34] ">
            CADASTRO
          </h1>
          <div className="w-full flex flex-col gap-3 text-[#eeee]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Endereco@email.com"
              className="p-2 px-5 rounded-4xl bg-[#EEEEEE]"
            />
            <label htmlFor="Confemail">Confirmar Email</label>
            <input
              type="email"
              name="email"
              id="Confemail"
              placeholder="Endereco@email.com"
              className="p-2 px-5 rounded-4xl text-black bg-[#EEEEEE]"
            />
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*******"
              className="p-2 px-5 rounded-4xl bg-[#EEEEEE]"
            />
            <label htmlFor="Confpassword">Confirmar Senha</label>
            <input
              type="password"
              name="password"
              id="Confpassword"
              placeholder="*******"
              className="p-2 px-5 rounded-4xl text-black bg-[#EEEEEE]"
            />
          </div>
          <button className="bg-[#220d34] hover:bg-[#B983FF] p-2 w-30 rounded-4xl font-bold text-[#eeee]">
            Cadastrar
          </button>
          <Link to="/Login" className="text-[#eeee] font-bold">
            Entrar na{" "}
            <span className="text-[#220d34] hover:text-[#9B7EBD]">Conta</span>
          </Link>

          <img
            src={MeninaCad}
            alt="menina"
            className="absolute right-full top-0 -mr-0.5 -scale-x-100 h-5/6 w-auto max-w-none pointer-events-none hidden lg:block"
          />
        </form>
      </div>
    </div>
  );
}
