import Footer from "./components/Footer";
import Header from "./components/Header";
import Journey from "./components/Journey";
import Learning from "./components/Learning";
import MyProjects from "./components/MyProjects";
import Tech from "./components/Tech";

export default function App() {
  return (
    <div>
      <Header />
      <Tech />
      <Learning/>
      <MyProjects/>
      <Journey/>
      <Footer/>
    </div>
  )
}