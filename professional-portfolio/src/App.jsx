import NavLink from "./components/shared/NavLink"
import Hero_1 from "./components/hero-1/Hero_1"
import Hero_2 from "./components/hero-2/Hero_2"
import Hero_3 from "./components/hero-3/Hero_3"
import Hero_4 from "./components/hero-4/Hero_4"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <div className="app mx-1 my-0">
      <Hero_1 />
      <Hero_2 />
      <Hero_3 />
      <Hero_4 />
      <Footer />
    </div>
  )
}

export default App
