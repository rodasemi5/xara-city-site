import { useState } from 'react';
import { close, menu } from '../public/assets'
import { navLinks } from '../src/constants' 



export const Navbar = (prop: any) => {

	const [toggle, setToggle] = useState(false)
	

	return (
		<nav className = "container w-[100vw] flex flex-row  whitespace-nowrap">
			
			<div className="flex absolute left-4 top-4 pl-10">
				<img className = "w-[200px]" src="/xara_logo.png" alt="profile" />
			</div>

			{/* Fix later for mobile */}
			{/* <ul className="list-none sm:flex hidden justify-end items-center flex-1">
				
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
					>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>

				))}

			</ul>

			<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img 
					src={toggle ? close : menu} 
					alt="menu"
					className='w-[28px] h-[28px] object-contain'
					onClick={() => setToggle((prev) => !prev)}
					/>

				<div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
				
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
					>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>

				))}

			</ul>
				</div>
			</div> 
			
			
			*/}

			

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