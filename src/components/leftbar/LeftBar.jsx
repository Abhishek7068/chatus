import './leftBar.css';

import Friends from '../../assests/1.png';
import Groups from '../../assests/2.png';
import Market from '../../assests/3.png';
import Watch from '../../assests/4.png';
import Memories from '../../assests/5.png';
import Events from '../../assests/6.png';
import Gaming from '../../assests/7.png';
import Gallery from '../../assests/8.png';
import Videos from '../../assests/9.png';
import Messages from '../../assests/10.png';
import Tutorials from '../../assests/11.png';
import Courses from '../../assests/12.png';
import Fund from '../../assests/13.png';



const LeftBar = () => {
    return (
        <div className='LeftBar'>
            <div className='container'>
                <div className='menu'>
                    <div className='userLeftBar'>
                        <img className='UserProfile' src=''></img>
                        <span>John Doe</span>
                    </div>
                    <div className='Friends'>
                        <img src={Friends}></img>
                        <span>Friends</span>
                    </div>
                    <div className='Groups'>
                        <img src={Groups}></img>
                        <span>Groups</span>
                    </div>
                    <div className='Marketplace'>
                        <img src={Market}></img>
                        <span>Marketplace</span>
                    </div>
                    <div className='Watch'>
                        <img src={Watch}></img>
                        <span>Watch</span>
                    </div>
                    <div className='Memories'>
                        <img src={Memories}></img>
                        <span>Memories</span>
                    </div>
                </div>
                <hr/>
                <div className='menu'>
                    <span>Your Shortcuts</span>
                    <div className='Events'>
                        <img src={Events}></img>
                        <span>Events</span>
                    </div>
                    <div className='Gaming'>
                        <img src={Gaming}></img>
                        <span>Gaming</span>
                    </div>
                    <div className='Gallery'>
                        <img src={Gallery}></img>
                        <span>Gallery</span>
                    </div>
                    <div className='Videos'>
                        <img src={Videos}></img>
                        <span>Videos</span>
                    </div>
                    <div className='Messages'>
                        <img src={Messages}></img>
                        <span>Messages</span>
                    </div>
                </div>
                <hr/>
                <div className='menu'>
                    <span>others</span>
                    <div className='Fundraiser'>
                        <img src={Fund}></img>
                        <span>Fundraisers</span>
                    </div>
                    <div className='Tutorials'>
                        <img src={Tutorials}></img>
                        <span>Tutorials</span>
                    </div>
                    <div className='Courses'>
                        <img src={Courses}></img>
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar;