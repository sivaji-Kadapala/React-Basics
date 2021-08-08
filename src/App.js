
import './App.css';
// import AxiosDemo from './components/AxiosDemo';
// import FetchDemo from './components/FetchDemo';
import LifecyCleMethods from './components/LifecyCleMethods';
import MapFunction from './components/MapFunction';
import RouterDemo from './components/RouterDemo';

import Form from './components/Form';
import CountThree from './components/CountThree';
import NameChange from './components/NameChange';
import UseStateDemo from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import ConditionalRendering from './components/ConditionalRendering';
import UseContext from './components/UseContext';
import ContextApi from './components/ContextApi';
import CustomHook from './components/CustomHook';
import UseReducer from './components/UseReducer';
import RouterDemo2 from './RouterDemo2';
import Error from './components/Error';
import ErrorBoundary from './components/ErrorBoundary';
import LifeCyle from './components/LifeCyle';
import ForceUpadte from './components/ForceUpadte';
import AppDemo from './HOC/AppDemo'
function App() {
  return (
    <div className="App">
      <AppDemo/>
      <ForceUpadte/>
<LifeCyle/>
      <ErrorBoundary>
        <Error/>
      </ErrorBoundary>
      <RouterDemo2/>
      <RouterDemo/> 
   <MapFunction/>
   <LifecyCleMethods/>
   {/* <AxiosDemo/> */}
   <UseReducer/>
   <CustomHook/>
   <ContextApi/>
   <UseContext/>
   <ConditionalRendering/>
   <UseEffectDemo/>
   <UseStateDemo/>
   <NameChange/>
   <CountThree/>
  <Form/>
   {/* <FetchDemo/> */}
    </div>
  );
}

export default App;
