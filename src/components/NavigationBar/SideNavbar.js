const SideNavbar = ({ }) => {
    return (
        <div className="relative h-screen">
            <nav className="fixed top-0 left-0 w-full h-14 bg-white border-b z-10 flex justify-end items-center px-4">
                <p className="text-lg">Welcome! <span className="font-bold">Admin</span></p>
            </nav>
            <aside className="fixed top-0 left-0 h-screen w-[300px] bg-white border-r shadow-lg z-20 ">
                <div className='p-4 pb-2 flex justify-between items-center'>
                    <h1 className='italic font-extrabold text-2xl'>Bubble Dash</h1>
                </div>
                <div className='p-3 pb-[120px] pt-[30px] border-b'>
                    <button className='hover:bg-[#ffc85c] text-[#333333] hover:text-[#996602] text-lg font-semibold rounded-xl w-full text-left pt-2 pb-2 pl-3 pr-3'>Manajemen User</button>
                    <button className='hover:bg-[#ffc85c] text-[#333333] hover:text-[#996602] text-lg font-semibold rounded-xl w-full text-left pt-2 pb-2 pl-3 pr-3'>Data Laundry</button>
                    <button className='hover:bg-[#ffc85c] text-[#333333] hover:text-[#996602] text-lg font-semibold rounded-xl w-full text-left pt-2 pb-2 pl-3 pr-3'>Manajemen Pesanan</button>
                    <button className='hover:bg-[#ffc85c] text-[#333333] hover:text-[#996602] text-lg font-semibold rounded-xl w-full text-left pt-2 pb-2 pl-3 pr-3'>Live Tracking</button>
                </div>
            </aside>
        </div>
    )
}

export default SideNavbar;