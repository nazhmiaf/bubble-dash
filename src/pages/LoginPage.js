import Bubble from "../components/Bubble";
import Login from "../components/Login";
import NavigationBar from "../components/NavigationBar";

const LoginPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="home-page h-screen bg-[#d4d4d4]">
        <Bubble />
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
