//import { Component } from 'react';
import './employees-list-item.css';

// class EmployeesListItem extends Component{
// constructor(props) {
// super(props);
// this.state = {
//    increase: false,
//      rise : false,
//    };
//    }

//  onIncrease = () => {
//   this.setState(({increase}) => ({
//      increase : !increase,
//  }))};
  
//  onRise = () =>{
//    this.setState(({rise}) =>({
//      rise : !rise,
//    }))
//  };
  
  // render() {
  //   const {name,salary,onDelete,onToggleIncrease,onToggleRise} = this.props;
  //   const {increase,rise} =this.state;
  //   let classNames = 'list-group-item d-flex justify-content-between';
  //   if(increase) {
  //     classNames += ' increase';}
  //   if(rise) {
  //     classNames += ' like';}
  //     return (
  //     <li className = {classNames}>
  //       <span className="list-group-item-label" onClick={onToggleRise} >{name} </span>
  //       <input
  //       type="text"
  //       className="list-group-item-input"
  //       defaultValue={salary + '$'} />
  //       <div className="d-flex justify-content-center align-items-center">
  //         <button
  //         type="button" 
  //         className="btn-cookie btn-sm "
  //         onClick={onToggleIncrease}>
  //         <i className="fas fa-cookie"></i>
  //         </button>
  //         <button type="button" className="btn-trash btn-sm "
  //         onClick = {onDelete}>
  //         <i className="fas fa-trash"></i>
  //         </button>
  //         <i className="fas fa-star"></i>
  //       </div>
  //     </li>
  //     );
  //   };}
const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleIncrease,
    onToggleRise,
    increase,
    rise,
  } = props;
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }
  if (rise) {
    classNames += " like";
  }
  return (
    <li className={classNames}>
      <span onClick={onToggleRise} className="list-group-item-label">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={onToggleIncrease}
          type="button"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          onClick={onDelete}
          className="btn-trash btn-sm "
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
