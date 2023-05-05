//Переписать счетчик, который вы делали в домашке 5 урока, 
//с классового компонента на функциональный.
import { useState} from 'react';
import './App.css';

const App = () => { 
  const [result, setResult] = useState(0); 

const nextNumber = () => {
  setResult((result) => 
  result < 10 ? result + 1  : result  
  );
};

const previousNumber = () => {
  setResult((result) => 
  result > -10 ? result - 1  : result  
  );
};

const randomNumber = () => {
  setResult(() => 
  +(Math.random() * (10 - -10) + -10).toFixed(0)
  );
};

const resetNumber = () => {  
  setResult((result) => 
  result = 0
  );
}; 

  return (
    <div className="app">
      <div className="counter">{result}</div>
        <div className="controls">
          <button onClick={nextNumber}>INC</button>
          <button onClick={previousNumber}>DEC</button>
          <button onClick={randomNumber}>RND</button>
          <button onClick={resetNumber}>RESET</button>
        </div>
      </div>
    );
  }
export default App;


// 1. Использовать только стрелочную форму методов
// 2. Начальное значение счетчика должно передаваться через props
// 3. INC и DEC увеличивают и уменьшают счетчик на 1. Добавить
// ограничения в -10/10. По достижению границы ничего не происходит.
// 4. RND изменяет счетчик в случайное значение от -10 до 10. Конструкция
// в setState:
// +(Math.random() * (10 - -10) + -10).toFixed(0)
// Не зависит от предыдущего состояния.
// 5. RESET сбрасывает счетчик в 0 или в начальное значение из
// пропсов(выберите сами)
// import { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
// };
//     };
// nextNumber = () => {
//   this.setState((state) =>({
//     //condition ? true : false 
//     count: state.count < 10 ? state.count +1 : state.count,
//   }))
// };
// previousNumber = () => {
//   this.setState((state) =>({
//     count: state.count > -10 ? state.count -1 : state.count,
//   }))
// };
// randomNumber = () => {
//   this.setState({
//       count: +(Math.random() * (10 - -10) + -10).toFixed(0),
//     });
//   };
// resetNumber = () => {
//   this.setState((state) =>({
//     count: 0,
//   }));}


// render() {
//   return (
//     <div className="app">
//       <div className="counter">{this.state.count}</div>
//         <div className="controls">
//           <button onClick={this.nextNumber}>INC</button>
//           <button onClick={this.previousNumber}>DEC</button>
//           <button onClick={this.randomNumber}>RND</button>
//           <button onClick={this.resetNumber}>RESET</button>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
