//reactshallowrenderer allows you to test jsx
//Shallow rendering renders parents only
//full rendereing renders parent and child components
//enzyme allows for more complex snapshots and test cases

import React from 'react'
import {Header} from '../../components/Header'
//import ReactShallowRenerer from 'react-test-renderer/shallow'
//import toJSON from 'enzyme-to-json'
import {shallow} from 'enzyme'

let startLogout

beforeEach(()=>{
    startLogout = jest.fn()
    
})

test('Header should render properly',()=>{ 
    //with React renderer
    // const renderer = new ReactShallowRenerer()
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()

    //with enzyme
    const wrapper = shallow(<Header startLogout={()=>{}}/>)
    //without serializer config
    //expect(toJSON(wrapper)).toMatchSnapshot()

    //with Serializer config
    expect(wrapper).toMatchSnapshot()
})

test('Header should log out properly',()=>{ 
    
    const wrapper = shallow(<Header  startLogout={startLogout}/>)
    wrapper.find('button').simulate('click')
    //with Serializer config
    expect(startLogout).toHaveBeenCalled()
})

