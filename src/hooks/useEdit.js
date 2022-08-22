import {useEffect, useContext} from 'react'
import { AppContext } from '../context/AppContext'
import { CancelToken } from 'apisauce'
import { editUser } from '../api/tokenAuth'
import { useNavigate } from 'react-router-dom'


export default function useEdit(userEdits, setUserEdits) {
    const {user, setUser} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
      ()=>{
        const source = CancelToken.source()
        if(userEdits.password && userEdits.email){
          const editThisUser = async()=>{
            const response = await editUser(user.token, userEdits, source.token);
            console.log(response)
            if(!response?.error){
              console.log(`User: ${user.first_name} edited successfully`)
              setUser(userEdits)
              setUserEdits('')
              navigate('/')
            }else{
                console.log(response.error)
            }
            
          }
          editThisUser()
        }
        return ()=>{source.cancel()}
      },
      [userEdits, setUserEdits, user.first_name, user.token, setUser, navigate]
    )
}
