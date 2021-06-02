import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    
    handleIncrement = (habit) => {
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = (habit) => {
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = (habit) => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        // 기존에 내가 하던방법 : 
        var habitName = this.props.habit.name;

        //엘리가 알려준 방법
        var {name , count} = this.props.habit;
        //이렇게하면 전달받은 프로포티스값이 각 이름으로 입렫된다.
        // 하지만 이 경우, 같은 변수명으로 입력해주어야 한다.

        return (
        <li className='habit'> 
            < span className = "habit-name" > {name}</span> 
            < span className = "habit-count" > {count}</span> 
            < button  className='habit-button  habit-increase' onClick={this.handleIncrement}> 
                <i className="fas fa-plus-square"></i>
            </button>
            
            <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
        
            <button className='habit-button habit-delete' onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
        );
    }
}

export default Habit;