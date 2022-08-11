import './navbar.scss'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchRoundedIcon className='icon' />
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageRoundedIcon className='icon' />
                        English
                    </div>
                    <div className="item">
                        <DarkModeRoundedIcon className='icon'  />
                    </div>
                    <div className="item">
                        <FullscreenExitRoundedIcon className='icon' />
                    </div>
                    <div className="item">
                        <NotificationsNoneRoundedIcon className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineRoundedIcon className='icon' />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListRoundedIcon className='icon' />
                    </div>
                    <div className="item">
                        <img src="https://picsum.photos/30/30" alt="avatar" className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar