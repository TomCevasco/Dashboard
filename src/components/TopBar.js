import React from 'react';
import image from '../assets/images/Logo.png';
function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-negro topbar static-top shadow">
					
					<div className="sidebar-brand-icon navbar-title bg-negro">
                        <img src={image} alt="Digital House" />
						<div className='navbar-title-p'>
						<p>LlamaQueLlama</p>
						</div>
                    </div>
					
					

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;