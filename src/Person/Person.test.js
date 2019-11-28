import {configure, shallow} from 'enzyme' //a 'named' import
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

//first arg is just a description of the test bundle this file holds
//it is displayed in the console later and helps identify later what tests were run
//SECOND arg, is the testing function
describe('<Person />', () => {
  //it('description that appears in console', )  
   //another function made available by JEST
  
  it('should recieve a Person object', () => {

  })
}
)