import Link from "next/link";
import { Coiny } from "next/font/google";

const coinySans = Coiny({
  variable: "--font-coiny",
  subsets: ["latin"],
  weight: "400"
});

const Header = () => {
  return (
    <header className={` ${coinySans.variable}  w-full  text-white font-[family-name:var(--font-coiny)]`}>
      <div className="container mx-auto flex justify-center mt-9">
        <p className="text-3xl font-bold tracking-[.25em]  transition-transform duration-200 hover:scale-110">
          Hairy
        </p>
      </div>
    </header>
  );
};

export default Header;
