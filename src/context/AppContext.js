import {createContext, useState, useReducer} from 'react'
import { listReducer, listActions } from '../reducers/listReducer';
export const AppContext = createContext();

const AppContextPovider = ({children})=>{

    //Checks to see if there is a user from local storage, if there is, it parses the info and returns it
    const getUserFromLS=()=>{
        let user =localStorage.getItem('user-banana-bookstore')
        if (user){
            return JSON.parse(user)
        }
    }

    //if there is a user in ls the parsed info get stored in user else user = ''
    const [user, _setUser] = useState(getUserFromLS()??'')
    const [readingList, dispatch] = useReducer(listReducer, [])

    //set user will be a function in the login paramater, the values returned by
    //the login form will be sent through an api get request to get our user's info
    //this info is then stored in the ls and the context

    //also used in logout, an empty value is sent through which clears the ls and context
    const setUser=(user)=>{
        localStorage.setItem('user-banana-bookstore', JSON.stringify(user))
        _setUser(user)
    }

    //These values are the ones that will be available accross our app
    const values={
        user,
        setUser,
        readingList,
        addToList:(book)=>{
                dispatch({type: listActions.addToList,book})
            },
        removeFromList:(book)=>{
            dispatch({type: listActions.removeFromList,book})
        },
        clearList:()=>{
            dispatch({type: listActions.clearList})
        },
        moveUp:(book)=>{
            dispatch({type: listActions.moveUp,book})
        },
        moveDown:(book)=>{
            dispatch({type: listActions.moveDown,book})
        }

    }

    return(
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>

    )
}

export default AppContextPovider