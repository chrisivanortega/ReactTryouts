import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import Auth from '../services/Auth'
export default function ProtectedRoute({isAuth:isAuth,component:Component,...rest}) {
    return (
        <Route {...rest} render={(props)=>{
            if (Auth.authenticated){
                return <Component/>;
            }else{
                return (
                <Redirect to={{pathname:"/Login" ,state:{from:props.location} }}/> 
                );
               
            }
            
        }
    
    }  />
    ) 
}
