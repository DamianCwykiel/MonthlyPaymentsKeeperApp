import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

//Adapter configuration
Enzyme.configure({
    adpater: new Adapter()
});

DotEnv.config({ path: '.env.test' });