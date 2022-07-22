
import './App.css';
import React,{component} from 'react';
import Person from './components/person/Person';
import { render } from '@testing-library/react';

 class App extends component{
  constructor(props) {
    super(props);
    this.state = {
      demo: "Testing",
    };
  }
 

 buttonClick.log(this.state);
};
render() {
  return (
    <div className='APP'>
      <person name="wscube tech" age="11" />
    </div>
  );
}
}
export default App;