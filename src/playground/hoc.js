//Higher Order Component(HOC) - a component that renders another component
//purpose is to reuse code
//prop manipulation
//abstract state

import React from "react";
import  ReactDOM from 'react-dom'

const Info = (props) => (
<div>
    <p>this is a {props.info}</p>
</div>
)
//HOC example
const adminMSG = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is private</p>}
            <WrappedComponent {...props}/>
        </div>
    )


}

const WithAdminMGS = adminMSG(Info) 

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
           {props.isAdmin ? <p>welcome Back</p>:<p>please authenticate</p>}
           <WrappedComponent {...props}/>
        </div>
    )

}

const Auth = requireAuth(Info)



//ReactDOM.render(<WithAdminMGS isAdmin={false} info='test'/>, document.getElementById('app'))
ReactDOM.render(<Auth isAdmin={false} info='test'/>, document.getElementById('app'))

