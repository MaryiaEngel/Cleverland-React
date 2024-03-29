import './app-info.css';

const AppInfo = ({ forIncrease, totalEmployes }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании </h1>
      <h2>Общее число сотрудников: {totalEmployes}</h2>
      <h2>Премию получат: {forIncrease}</h2>
    </div>
  );
};

export default AppInfo;
