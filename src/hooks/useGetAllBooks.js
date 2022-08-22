import {useEffect, useState} from 'react'
import { CancelToken } from 'apisauce'
import { getAllBooks } from '../api/noAuth'



export default function useGetAllBooks() {
    const [response, setResponse]=useState('')
    useEffect(
      ()=>{
        const source = CancelToken.source()
        const getAllStoreBooks = async()=>{
        const r = await getAllBooks(source.token);
        setResponse(r)
       }
        getAllStoreBooks()
        
        return ()=>{source.cancel()}
      },
      [])
      return response
}
