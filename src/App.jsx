import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Button from './components/Button'
import {
	RiSearch2Line,
	RiChat1Line,
	RiNotification3Line,
	RiArrowDownSLine,
	RiCheckboxBlankCircleFill,
} from 'react-icons/ri'

const App = () => {
	const [showMenu, setShowMenu] = useState(false)
	return (
		<div className='min-h-screen'>
			<Sidebar showMenu={showMenu} />
			<Button showMenu={showMenu} setShowMenu={setShowMenu} />
			<header className=' flex flex-col md:flex-row fixed bg-gray-100 w-full xl:w-[calc(100%-384px)] xl:ml-96 gap-4 items-center justify-between p-4'>
				<form className='order-1 md:order-none'>
					<div className='relative'>
						<RiSearch2Line className='absolute text-gray-600 left-4 top-1/2 -translate-y-1/2 ' />
						<input
							type='text'
							className='bg-white outline-none py-1 pl-10 pr-4 rounded-full'
							placeholder='Search'
						/>
					</div>
				</form>
				<nav className='flex items-center gap-2 text-lg text-gray-600'>
					<button className='hover:bg-gray-200 p-2 rounded-lg transition-colors'>
						<RiChat1Line />
					</button>

					<button className=' relative  hover:bg-gray-200 p-2 rounded-lg transition-colors'>
						<RiNotification3Line />
						<RiCheckboxBlankCircleFill className=' absolute top-1 right-2 text-orange-500 text-[10px]' />
					</button>

					<button className='flex items-center gap-4 hover:bg-gray-200 p-2 rounded-lg transition-colors py-2 px-4'>
						<img
							className='w-6 h-6 object-cover rounded-full '
							src='https://img.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg'
							alt=''
						/>
						<span>Epsaind dev</span>
						<RiArrowDownSLine />
					</button>
				</nav>
			</header>
		</div>
	)
}

export default App
