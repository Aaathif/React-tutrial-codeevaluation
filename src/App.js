import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import BindEvent from './components/BindEvent';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import NameList2 from './components/NameList2';
import StyleSheet from './components/StyleSheet'

import Inline from './components/Inline';

// import styles 
import './components/AppStyles.css'
import styles from './components/appStyles.module.css'

function App() {
  return (
    <div className="App">

      <h1 className={styles.success}>My name is Aathif</h1>

      <Inline />


      {/* <StyleSheet color={true} /> */}

      {/* <NameList2 /> */}

      {/* <NameList /> */}

      {/* <UserGreeting /> */}

      {/* <ParentComponent /> */}

      {/* <BindEvent /> */}

      {/* <ClassClick /> */}

      {/* <FunctionClick /> */}

      {/* <Greet name="Diana" heroname="Wonder women">
        <p>this is children element</p>
        <h1>Heading</h1>
      </Greet> */}
     


      {/* <Welcome name="bruce" heroname="Batman" />
      <Welcome name="Clark" heroname="SuperMan" />
      <Welcome name="Tony" heroname="IronMan" /> */}
    </div>
  );
}

export default App;
