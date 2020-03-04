import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Adapter configuration
Enzyme.configure({ adapter: new Adapter() });

test ('shpuld render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});