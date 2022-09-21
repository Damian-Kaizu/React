import React from 'react';
import Toolbar from './Toolbar';

const MyContext = React.createContext("Hello React");
// class App extends React.Component {
// render (){
//     return <Header/>
// }
// }

// class Header extends React.Component {
//     render (){
//         return <div><Title/></div>
//     }
// }

// class Title extends React.Component {
//     static contextType=MyContext;
// render (){
//     return <h1>{this.context}</h1>
// }
// }
const App = props => {
    return <div>
        <Header />
    <Toolbar>
        <h2>This is the number the One</h2>
        <ul>
            <li>Hast</li>
            <li>Hast</li>
            <li>Hast</li>
            <li>Hast</li>
        </ul>
    </Toolbar>
        </div>
}
const Header = props => {
    return (
    <Title />
    )
}

const Title = props => {
    const name = React.useContext(MyContext);
    return <h1>{name}</h1>
}
export default App;
