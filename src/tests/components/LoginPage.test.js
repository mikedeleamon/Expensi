import React from "react";
import {shallow} from 'enzyme'
import {LoginPage} from '../../components/LoginPage'

let startLogin

beforeEach(()=>{
    startLogin = jest.fn()
    
})

test('should render LoginPage',()=>{
    const wrapper =  shallow(<LoginPage/>)

    expect(wrapper).toMatchSnapshot()
})

test(' should log in properly',()=>{ 
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>)
    wrapper.find('button').simulate('click')
    //with Serializer config
    expect(startLogin).toHaveBeenCalled()
})