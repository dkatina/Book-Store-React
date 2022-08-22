import {useEffect, useContext} from 'react'
import { AppContext } from '../context/AppContext'
import { CancelToken } from 'apisauce'
import { delUser } from '../api/tokenAuth'
import { useNavigate } from 'react-router-dom'


export default function useDelete(delConf, setDelConf) {
    const {user, setUser} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
      ()=>{
        const source = CancelToken.source()
        if(user.token && delConf){
          const delThisUser = async()=>{
            const response = await delUser(user.token, source.token);
            console.log(response)
            if(!response?.error){
              console.log(`User: ${user.first_name} deleted from system`)
              setUser('')
              setDelConf(false)
              navigate('/')
            }else{
                console.log(response.error)
            }
            
          }
          delThisUser()
        }
        return ()=>{source.cancel()}
      },
      [delConf, setDelConf,  setUser, user.first_name, user.token, navigate]
    )
}
