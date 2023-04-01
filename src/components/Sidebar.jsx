import {
	RiHome6Line,
	RiFolder2Line,
	RiBook2Line,
	RiCalendarLine,
	RiChat2Line,
	RiLayout4Line,
} from 'react-icons/ri'
const Sidebar = ({ showMenu }) => {
	return (
		<div
			className={`fixed top-0 w-3/4 md:w-96 h-full xl:left-0 bg-gray-100 p-8 flex flex-col justify-between z-50 transition-all ${
				showMenu ? 'left-0' : '-left-full'
			}`}>
			<div>
				<div className='text-2xl uppercase font-bold mb-10 text-gray-700'>
					Epsaind
				</div>

				<ul className='text-base text-gray-800  '>
					<li>
						<a
							href='#'
							className='flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg'>
							<RiHome6Line className='text-2xl text-gray-500' />
							Inicio
						</a>
					</li>

					<li>
						<a
							href='#'
							className='flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg'>
							<RiFolder2Line className='text-2xl text-gray-500' />
							Classes
						</a>
					</li>

					<li>
						<a
							href='#'
							className='flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg'>
							<RiLayout4Line className='text-2xl text-gray-500' />
							Dashboard
						</a>
					</li>

					<li>
						<a
							href='#'
							className='flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg'>
							<RiBook2Line className='text-2xl text-gray-500' />
							Resources
						</a>
					</li>

					<li>
						<a
							href='#'
							className='flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg'>
							<RiCalendarLine className='text-2xl text-gray-500' />
							Learning plane
						</a>
					</li>

					<li>
						<a
							href='#'
							className='flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg'>
							<RiChat2Line className='text-2xl text-gray-500' />
							Chat
						</a>
					</li>
				</ul>
			</div>

			<div className='flex items-center  gap-4 '>
				<img
					className='w-8 h-8 object-cover rounded-full ring-4 ring-white'
					src='https://img.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg'
					alt=''
				/>
				<div>
					<h5 className='font-medium'>Epsaid dev</h5>
					<p className='text-gray-500 text-sm'>Ing. Sofware</p>
				</div>
			</div>
		</div>
	)
}
export default Sidebar
