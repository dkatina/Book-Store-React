import React, {useEffect} from 'react'
import { AppContext } from '../context/AppContext'
import { CancelToken } from 'apisauce'
import { getBook } from '../api/noAuth'
import { useNavigate } from 'react-router-dom'


export default function useGetBook(BookID, setBookID, setError) {
    const {setBook} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
      ()=>{
        const source = CancelToken.source()
        if(BookID.id){
          const getThisBook = async()=>{
            const {error, book} = await getBook(BookID.id, source.token);
            if(error){
                console.log(error)
            }{
              console.log(`Found book: ${book.title}`)
              setBook(book)
              setBookID({})
              navigate('/find_book')
            }
            setError(response.error)
          }
          getThisBook()
        }
        return ()=>{source.cancel()}
      },
      [BookID, setBookID, setError, navigate]
    )
}
