import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

export default function Home() {
  return (
    <div className="wrapper">
      <div>
        <Header />
        <Hero />
        <Main />
      </div>
      <Footer />
    </div>
  )
}
