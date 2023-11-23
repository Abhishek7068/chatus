import './rightBar.css';

const RightBar = () => {
    return (
        <div className='RightBar'>
            <div className='container'>
                <div className='item'>
                    <span className='ItemTitles'>Suggestions for you</span>
                    <div className='user'>
                        <div className='userInfo'>
                            <img className='userProfile' src=''></img>
                            <span className='UserTitle'>John Doe</span>
                        </div>
                        <div className='buttons'>
                        <button className='Followbtn'>Follow</button>
                            <button className='Dismissbtn'>Dismiss</button>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img className='userProfile' src=''></img>
                            <span className='UserTitle'>John Doe</span>
                        </div>
                        <div className='buttons'>
                            <button className='Followbtn'>Follow</button>
                            <button className='Dismissbtn'>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <span className='ItemTitles'>Latest activties</span>
                    <div className='user'>
                        <div className='userInfo'>
                            <img className='userProfile' src=''></img>
                            <p className='prightbar'><span className='UserTitle'>John Doe</span> changed their cover picture </p>
                        </div>
                        <span className='Activitytime'>1 min ago</span>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img className='userProfile' src=''></img>
                            <p className='prightbar'><span className='UserTitle'>John Doe</span> changed their cover picture </p>
                        </div>
                        <span className='Activitytime'>1 min ago</span>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img className='userProfile' src=''></img>
                            <p className='prightbar'><span className='UserTitle'>John Doe</span> changed their cover picture </p>
                        </div>
                        <span className='Activitytime'>1 min ago</span>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img className='userProfile' src=''></img>
                            <p className='prightbar'><span className='UserTitle'>John Doe</span> changed their cover picture </p>
                        </div>
                        <span className='Activitytime'>1 min ago</span>
                    </div>
                </div>
                <div className='item'>
                    <span className='ItemTitles'>online Friends</span>
                    <div className='user'>
                        <div className='userInfo'>
                            <img className='userProfile' src=''></img>
                            <div className='online'/>
                            <span className='UserTitle'>John Doe</span>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img className='userProfile' src=''></img>
                            <div className='online'/>
                            <span className='UserTitle'>John Doe</span>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img className='userProfile' src=''></img>
                            <div className='online'/>
                            <span className='UserTitle'>John Doe</span>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img className='userProfile' src=''></img>
                            <div className='online'/>
                            <span className='UserTitle'>John Doe</span>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img className='userProfile' src=''></img>
                            <div className='online'/>
                            <span className='UserTitle'>John Doe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar;