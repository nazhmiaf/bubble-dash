import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import mesinCuci from '../Login/mesin cuci.png';
import "./login.css"
import axios from "axios";
import { useEffect } from "react";

const Login = () => {
    const allAdmin = "http://localhost:5000/admin"
    
    const getAllData = async () => {
        const res =await axios.get(allAdmin)
        console.log(res)
    }
    
    useEffect (() =>{
        getAllData()
    }, [])


    return (
        <div className="login flex justify-center items-center pt-[100px]">
            <div className="wrapper bg-white flex justify-center items-center flex-col p-[16px] w-[350px] rounded-xl shadow-md">
                <form className="w-full" action="">
                    <div className="title-mobile">
                        <h1 className="text-3xl font-extrabold text-center text-[#ffc85c] border-b p-2">BUBBLE DASH</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={mesinCuci} className="w-[250px] " />
                    </div>
                    <h1 className="font-semibold">Username</h1>

                    <div className="input-box h-[40px] relative mt-[5px] mb-[5px]">
                        <input className="border border-black rounded-3xl p-[10px] h-full w-full  "type="text" placeholder="Username" required></input>
                        <FaUser className="icons absolute right-[20px] top-[50%]" />
                    </div>
                    <h1 className="font-semibold">Password</h1>
                    <div className="input-box h-[40px] relative mt-[5px] mb-[20px]">
                        <input className="border border-black rounded-3xl p-[10px] h-full w-full  "type="password" placeholder="Password" required></input>
                        <FaLock className="icons absolute right-[20px] top-[50%]" />
                    </div>
                    <button className="w-full bg-[#ffc85c] pt-[5px] pb-[5px] rounded-xl">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login