import {shallow} from 'enzyme'
import React from 'react'
import NotFoundPage from '../../components/NotFoundPage'

test('should render error page', ()=>{
    const wrapper = shallow(<NotFoundPage/>)
    expect(wrapper).toMatchSnapshot()
})