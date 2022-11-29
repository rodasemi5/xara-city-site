


export const Navbar = (prop: any) => {
	return (
		<nav className = " container w-32 flex flex-row  whitespace-nowrap">
			<div className="flex absolute left-4 top-4 pl-10">
				<img className = "w-[300px]" src="/xara_logo.png" alt="profile flex-1" />
				{/* <h1>XARA CITY</h1> */}
			</div>
			
		<div className="flex gap-5 p-5 justify-end items-center">
			<button className = " h-12 w-20 text-white" >Home</button>
			<button className = " h-12 w-30 text-white">Ecosystem</button>
			<button className = " h-12 w-20 text-white">Collection</button>
            <button className = " h-12 w-20 text-white">Xaraverse</button>
            <button className = " h-12 w-10 text-white">FAQ</button>
            <button className = " h-12 w-10 text-white">Team</button>
            <button className = " inline-flex items-center text-white border-3 font-bold py-2 px-4 rounded bg-violet-600">Market Place</button>
		</div>
			
		</nav>
	);
}