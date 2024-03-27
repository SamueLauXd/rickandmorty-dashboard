import { Characters } from "./components/Characters";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
      <header className="py-10 md:py-20 px-7">
        <h1 className="font-bold text-lg md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-500">
          Welcome to the Rick And Morty Dashboard
        </h1>
        <p className="mt-2 text-center text-sm md:text-base text-balance">Here you can find some information about the most famous characters of the show</p>
      </header>
      <Characters/>
      <Footer/>
    </main>
  );
}
