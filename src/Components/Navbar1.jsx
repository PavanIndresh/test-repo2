import { Link } from 'react-router-dom'
import image1 from '../assets/corrus cloud.png'
import image2 from '../assets/profile pic.jpg'
import { useNavigate } from 'react-router-dom'


function Navbar1() {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
    }
  return (
    <div>
        <div className='navbar'>
            <div className='nav'>
                <div className='corrus'>
                    <img src={image1} className='image1'/>
                </div>
                <div className='profile'>
                    <div className='profileimage'>
                        <img src={image2} className='image2'/>
                    </div>
                    <div className='profilename'>
                        <div className='RonSam'>
                            Pavan Indresh
                        </div>
                        <button onClick={handleLogout} className='logout'>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar1
