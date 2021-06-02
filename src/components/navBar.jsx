import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
    
    render() {
        return (
            <div className='habit-navbar'>
                <span>🌱&nbsp;&nbsp;Habit Traker</span>
                <span className ='navbar-count'>{this.props.totalCount}</span>
            
            </div>
        );
    }
}

export default NavBar;