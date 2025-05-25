import AdminLaundry from "../assets/images/admin.png"

const Header = (props) => {
  return (
    <div className="flex mt-10 justify-center items-center text-center">
          <img src={AdminLaundry} className="w-[80px] h-full pt-10" />
          <div className="flex flex-col pt-[70px] justify-center items-center text-center space-y-2">
            <h1 className="text-2xl md:text-6xl font-extrabold text-orange-400">
              ADMIN DASH
            </h1>
            <p className="text-gray-700 md:text-md text-lg font-semibold">
              {props.desc}
            </p>
          </div>
          <img src={AdminLaundry} className="w-[80px] h-full pt-10" />
        </div>
  )
}

export default Header;