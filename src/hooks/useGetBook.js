import {useEffect, useState} from 'react'
import { CancelToken } from 'apisauce'
import { getBook } from '../api/noAuth'


export default function useGetBook(bookId){
    const [response, setResponse]=useState('')
    

    useEffect(
      ()=>{
        const source = CancelToken.source()
         

        const getABook = async()=>{
        const r = await getBook(bookId, source.token);
        setResponse(r)
       
        
        
        return ()=>{source.cancel()}
      }
      if (bookId){getABook()}
    },
      [bookId])
    return response
}
