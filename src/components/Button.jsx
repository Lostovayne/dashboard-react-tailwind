import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri'

const Button = ({ showMenu, setShowMenu }) => {
	return (
		<button
			type='button'
			title='button menu'
			className=' xl:hidden fixed bottom-6 right-6 bg-gray-100 p-4 rounded-full'
			onClick={() => setShowMenu(!showMenu)}>
			{showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
		</button>
	)
}
export default Button
