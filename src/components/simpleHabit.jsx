import React, { useCallback, useRef, useState } from 'react';

// class에서 사용되는 createRef는 함수에서는 반복적으로 생성되어진다.
// 그래서 이런것들을 방지하고자 react에서 함수를 사용할 때는 useRef()라는 것을 이용하라고 만들어주었다.
const SimpleHabit = (props) => {
    const [count, setCount] = useState(0); //0은 초기값
    //class에서 사용되는 createRef() 함수
    //const spanRef = React.createRef();
    
    const spanRef = useRef();
    //한번 만들어놓으면 메모리에 자동으로 저장된다.


    //  이런 메소드 또한 함수에서는 반복적으로 저장되어지기 때문에 
    //  만약 메소드가 자식컴포넌트에서 불러온거라면 반복적으로 새로운 함수가
    //  호출되는것이다. 이런 반복적인 호출을 막고자
    //  useCallback이란 함수를 사용한다.
    // const handleIncrement = () => {
    //     setCount(count + 1);
    // };
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    }); 

    return (
        <li className='habit'> 
            < span ref={spanRef} className = "habit-name" > Reading</span> 
            < span className = "habit-count" > {count}</span> 
            < button  className='habit-button  habit-increase' onClick={handleIncrement}> 
                <i className="fas fa-plus-square"></i>
            </button>
        
        </li>
        );
};

export default SimpleHabit;