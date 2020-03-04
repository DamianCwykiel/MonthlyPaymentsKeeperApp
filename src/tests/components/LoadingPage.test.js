import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Adapter configuration
Enzyme.configure({ adapter: new Adapter() });

test('shpuld render loadingPage', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});