import { useNavigate } from "react-router-dom";
import mohonMaaf from "../assets/images/monmaap.png";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Dashboard");
  };
  return (
    <div className="h-screen bg-[#d4d4d4]">
      <div className="flex flex-col justify-center gap-5 items-center h-full">
        <h1 className="font-bold text-orange-400 text-xl text-center md:text-3xl">
          Halaman tidak ditemukan :(
        </h1>
        <img src={mohonMaaf} className="md:w-[300px] w-[200px]" />
        <button
          onClick={handleBack}
          className="bg-orange-300 text-white p-3 px-10 rounded-2xl hover:bg-orange-400"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
