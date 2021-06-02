import React, { memo } from 'react';

//이게 fuction으로 만들었을때 , rsi로 만들경우
const HabitAddForm = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    
    const onSubmit = event =>{
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    };
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className='add-input' placeholder='pleas enter yout Habit!'/>
            <button className="add-button" >Add</button> 
        </form>
    );

});

export default HabitAddForm;


// rcc 해빗애드폼 클래스로 만들기
// class HabitAddForm extends Component {
//     inputRef = React.createRef();
    
//     onSubmit = event =>{
//         event.preventDefault();
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name);
//         this.inputRef.current.value = '';
//     };

//     render() {
        
//     }
// }

// export default HabitAddForm;