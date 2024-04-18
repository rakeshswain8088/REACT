
import './App.css';
import PropClass from './props/PropClass';
import PropFun from './props/PropFun';
import StateClass from './state/ClassState';
import FunClass from './Function/FunClass';
import FunFun from './Function/FunFun';
import ListMapCC from './ListMap/ListMapCC';
import LifeCycleMethod from './LifeCycleMethod/LifeCycleMethod';
import APIfetch from './API/APIfetch'
import Form from './Form/Form';
function App() {
  return (
    <div className="App" >
      
      <PropClass proptypeVal="Class Component"/>
      <PropFun proptypeVal="Function Component"/>

      <StateClass/>
      
      <FunClass/>
      <FunFun/>

      <ListMapCC/>

      <LifeCycleMethod/>

      <APIfetch/>

      <Form/>
    </div>
  );
}

export default App;
