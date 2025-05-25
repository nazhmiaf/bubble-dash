import { IoIosMenu } from "react-icons/io";

const NavigationBar = () => {

  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-14 bg-orange-400 border-b z-10 flex items-center px-4">
        <IoIosMenu className="block text-xl text-left sm:hidden" />
        <h1 className="italic font-extrabold text-2xl hidden sm:block cursor-pointer" onClick={handleRefresh}>
          Admin Dash
        </h1>
      </nav> 
    </>
  )
}

export default NavigationBar;