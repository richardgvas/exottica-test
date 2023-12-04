import SideBar from "./components/SideBar";
import MainSection from "./components/MainSection";
import "./App.css";

function App() {
  return (
    <div className="flex flex-row min-h-full w-full">
      <SideBar />
      <MainSection />
    </div>
  );
}

export default App;
