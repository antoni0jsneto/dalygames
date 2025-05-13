import Image from "next/image";
import logoImg from "../../../public/logo.svg";
import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";

export function Header() {
  return (
    <header className="w-full h-28 bg-slate-100 text-black px-2">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center h-28 sm:justify-between">
        <nav className="flex justify-center items-center gap-4">
          <Link href="/">
            <Image
              src={logoImg}
              alt="Logo do site dalygames"
              quality={100}
              priority
              className="w-full"
            />
          </Link>
          <Link
            href="/"
            className="font-medium hover:text-[#ea580c] duration-200"
          >
            Jogos
          </Link>
          <Link
            href="/profile"
            className="font-medium hover:text-[#ea580c] duration-200"
          >
            Perfil
          </Link>
        </nav>

        <div className="hidden sm:flex justify-center items-center">
          <Link
            href="/profile"
            className="font-medium text-[#475569] hover:text-[#ea580c] duration-200"
          >
            <LiaGamepadSolid size={34} />
          </Link>
        </div>
      </div>
    </header>
  );
}
