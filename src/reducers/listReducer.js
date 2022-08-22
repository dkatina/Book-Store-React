

const listActions={
    addToList: 'addToList',
    removeFromList: 'removeFromList',
    moveUp: 'moveUp',
    moveDown: 'moveDown',
    clearList: 'clearList'
}

function listReducer(readingList=[], {type, book}){    
    switch(type){
        case listActions.addToList:
            return [...readingList, book]
        case listActions.removeFromList:
            let newList = readingList.slice()
            for (let thisBook of newList){
                if(thisBook.id === book.id){
                    newList.splice(newList.indexOf(thisBook),1)
                    return newList
                }
            }
            break;
        case listActions.moveUp:
            let newListA = readingList.slice()
            for (let thisBook of newListA){
                if(thisBook.id === book.id){
                    let index = newListA.indexOf(thisBook)
                    newListA.splice(index,1)
                    newListA.splice(index-1,0, thisBook)
                    return newListA
                }
            }
            break;
        case listActions.moveDown:
            let newListB = readingList.slice()
            for (let thisBook of newListB){
                if(thisBook.id === book.id){
                    let index = newListB.indexOf(thisBook)
                    newListB.splice(index,1)
                    newListB.splice(index+1,0, thisBook)
                    return newListB
                }
            }
            break;
        case listActions.clearList:
            return []

        default:
            throw new Error('I am not a Teapot')
    }

}

export{
    listReducer,
        listActions
}