import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryRoundedIcon from '@mui/icons-material/StoreMallDirectoryRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsSystemDaydreamRoundedIcon from '@mui/icons-material/SettingsSystemDaydreamRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top"><span className="logo">Admin Panel</span></div>
            <hr />

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>

                    <p className="title">LISTS</p>
                    
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span>Users</span>
                    </li>
                    <li>
                        <StoreMallDirectoryRoundedIcon className='icon' />
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardRoundedIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingRoundedIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentRoundedIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneRoundedIcon className='icon' />
                        <span>Notifications</span>
                    </li>

                    <p className="title">SERVICE</p>
                    
                    <li>
                        <SettingsSystemDaydreamRoundedIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyRoundedIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsRoundedIcon className='icon' />
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>

                    <li>
                        <AccountBoxRoundedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutRoundedIcon className='icon' />
                        <span>Log Out</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar