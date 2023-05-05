import { Component } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from "../../resources/img/vision.png";

// const App = () => {
//     return (
//         <div className="app">
//             <AppHeader/>
//             <main>
//                 <RandomChar/>
//                 <div className="char__content">
//                     <CharList/>
//                     <CharInfo/>
//                 </div>
//                 <img className="bg-decoration" src={decoration} alt="vision"/>
//             </main>
//         </div>
//     )
// }

class App extends Component {
  //   state = {
  //     showRandomChar: true,
  //   };

  //   toggleRandomChar = () => {
  //     this.setState((state) => {
  //       return {
  //         showRandomChar: !state.showRandomChar,
  //       };
  //     });
  //   };

  state = {
    selectedChar: null,
  };

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  //  {/* {this.state.showRandomChar ? <RandomChar /> : null}
  //<button onClick={this.toggleRandomChar}>Click me </button> */}
  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
            <RandomChar />
  

          <div className="char__content">
              <CharList onCharSelected={this.onCharSelected} />
              {/* <CharList /> */}
              <CharInfo charId={this.state.selectedChar} />
              {/* <CharInfo /> */}
          </div>

          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;