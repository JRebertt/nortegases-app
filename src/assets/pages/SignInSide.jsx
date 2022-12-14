import { LockClosedIcon } from "@heroicons/react/20/solid";

import Logo from "../images/IconLogo.png";

export function SignInSide() {
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto rounded-md"
              src={Logo}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900 font-Sora">
              Faça login em sua conta
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#0da03c] focus:border-[#0da03c] font-Syne focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#0da03c] focus:border-[#0da03c] font-Syne focus:z-10 sm:text-sm"
                  placeholder="Senha"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#0eb845] focus:ring-[#0da03c] border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 font-Syne"
                >
                  Mantenha-me Conectado
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500 font-Syne"
                >
                  Esqueceu Sua Senha ?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand hover:bg-[#0da03c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0da03c] font-Syne"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-[#0da03c] group-hover:text-[#0eb845]"
                    aria-hidden="true"
                  />
                </span>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
