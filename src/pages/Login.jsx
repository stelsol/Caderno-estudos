import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className=" min-h-screen w-auto flex flex-col bg-[#3B1E54] font-sans text-foreground box-border text-[]#eeee">
      <div className="flex justify-center items-center text-3xl  font-extrabold uppercase h-20 text-[#EEEEEE]">
        Caderno De Estudos
      </div>
      <div className=" flex flex-1 items-center justify-center pb-30  ">
        <form className="w-full max-w-sm  min-h-90 gap-5 bg-[#9B7EBD]/40 flex flex-col border-2 border-[#9B7EBD] justify-center items-center p-5 rounded-xl">
          <h1 className="text-center text-2xl font-bold text-[#220d34] ">
            LOGIN
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
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*******"
              className="p-2 px-5 rounded-4xl bg-[#EEEEEE]"
            />
          </div>
          <button className="bg-[#220d34] hover:bg-[#B983FF] p-2 w-30 rounded-4xl font-bold text-[#eeee]">
            Entrar
          </button>
          <Link to="/Cadastro" className="text-[#eeee] font-bold">
            Criar{" "}
            <span className="text-[#220d34]  hover:text-[#9B7EBD]">Conta</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
