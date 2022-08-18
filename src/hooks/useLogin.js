import React, {useEffect, useContext} from 'react'
import { AppContext } from '../context/AppContext'
import { CancelToken } from 'apisauce'
import { loginUser } from '../api/basicAuth'
import { useNavigate } from 'react-router-dom'


export default function useLogin(loginInfo, setLoginInfo, setError) {
    const {setUser} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
      ()=>{
        const source = CancelToken.source()
        if(loginInfo.email && loginInfo.password){
          const login = async()=>{
            const response = await loginUser(loginInfo.email, loginInfo.password, source.token);
            console.log(response)
            if(response.user?.token){
              console.log(`User: ${response.user.first_name} logged in`)
              setUser(response.user)
              setLoginInfo({})
              navigate('/')
            }
            setError(response.error)
          }
          login()
        }
        return ()=>{source.cancel()}
      },
      [loginInfo, setLoginInfo, setError, setUser, navigate]
    )
}
