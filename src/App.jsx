import Header from "./component/Header";
import HomeFinalPart from "./component/HomeFinalPart";
import HomeSecond from "./component/HomeSecondPart";
import Navbar from "./component/Navbar";
import Profile from "./component/Profile";
import Sidebar from "./component/Sidebar";
import "./style/Main.css";
function App() {
  return (
    <div>
      <Navbar />
      <div className="main text-yellow-500">
        <div className="first ">
          <Profile />
          <Sidebar />
        </div>
        <div className="second">
          <Header />
          <HomeFinalPart />
          <HomeSecond />
        </div>
      </div>
    </div>
  );
}

export default App;
