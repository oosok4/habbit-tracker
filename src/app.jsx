import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import NavBar from './components/navBar';


class App extends Component {
  state = {
    habits : [
        { id : 1, name : 'Reading',count : 0},
        { id : 2, name : 'Running',count : 0},
        { id : 3, name : 'Coding',count : 0},
    ] 
  };

  handleIncrement = habit => {
    const habits = this.state.habits.map(item =>{
      if(item.id === habit.id){
        return {...habit,count : habit.count +1};
      }else{
        return item;
      }
    });
    this.setState({habits});


      //  console.log(`handleIncrement ${habit}`);
      //  const habits = [...this.state.habits];
      //  위에서 쓰인 ... 연산자는 배열에서 내용물을 복사해서 가져와서
      //  새로운 배열 껍대기를 만들 때 사용한다.
      //  위와같이 단순하게 덧셈뺄샘의 경우 위에서 가져온 인자를 ++ 한다음
      //  setState를 해도 될것 같지만 그렇게하는게 안좋다고 한다
      //  const index = habits.indexOf(habit);
      //  habits[index].count++;
      //  this.setState({habits});
      //  원래의 경우엔 this.setState({habits :habits });가 맞다 
      //  this.setState({key : value})
      //  멤버 state안에 있는 habits를 새로 복사한 habits로 setState하는건데
      //  위와같은경우 새로만든 배열과 기존의 있던 배열이 이름이 같으므로 위와같이 사용한다.
  };
  handleDecrement = habit => {

    //pure 컴포넌트일때 사용방법
    const habits = this.state.habits.map(item =>{
      if(item.id === habit.id){
        const count = habit.count - 1;
        return {...habit,count : count < 0 ? 0 :count };
      }else{
        return item;
      }
    });
    this.setState({habits});
    /*
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({habits});
    */
  };
  handleDelete = habit => {    
      // const habits = [...this.state.habits];
      // const index = habits.indexOf(habit);
      // habits.splice(index, 1);
      // this.setState({habits});
      
      // 어떤 특정한 것을 제외하고 또는 포함해서 만들수있는 배열의 유용한 api인 
      // filter를 이용하자.
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits});


  };

  handleAdd = name => {
    // 내가 짠 코드 //
    // const habits = [...this.state.habits];
    // const count = 0;
    // const habit = {name , count} ;
    // const new_habits2 = habits.concat(habit);    
    // this.setState({habits : new_habits2});

    // 엘리가 짠 코드
    const habits = [...this.state.habits,{id : Date.now(),name,count : 0}];
    this.setState({habits});
  };

  handleReset = () => {
    // 퓨어컴포넌트일때
    const habits = this.state.habits.map(habit =>{
      if(habit.count !== 0){
        return {...habit,count : 0};
      }
      return habit;
    });
    this.setState({habits});

    //일반 컴포넌트일때
    // const habits = this.state.habits.map(habit =>{
    //   habit.count = 0;
    //   return habit;
    // });
    // this.setState({habits});
    
  };
  
  render() {
    return (
      <>
        <NavBar totalCount ={this.state.habits.filter(item => item.count > 0).length} />
        <Habits 
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
        
      </>
    );
    
  }
}

export default App;
