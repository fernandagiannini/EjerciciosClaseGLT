
import { V4 as uuid } from 'uuid'    //TENGO PROBLEMAS CUANDO LEVANTO EL SERVER


//aqui estaran todos los metodos para manejar libros
export const bookController = (BOOKS) = {

    const getBook = (_, response) => {
        return response.json(BOOKS)
    } 

    const getBookById = (request, response) => {
        const id = request.params.id
        const book = BOOKS.find(book => book.id === id)

        if (!book) {
            return response.status(404).json({ message: 'Book not found' })
        }
        return response.json(book)
    }

    const createBook = (request, response) => {
        const newBook = request.body
        const books = structuredClone(BOOKS)
        books.push({
            //   id: uuid(),
            ...newBook,
        })
        return response.json(books)
    }

    const updateBook = (request, response) => {
        const id = request.params.id
        const books = structuredClone(BOOKS)
        const book = BOOKS.find(book => book.id === id)
        if (!book) {
            return response.status(404).json({ message: 'Book not found' })
        }
        const newBook = request.body
        const index = books.indexOf(book)
        book.splice(index, 1, { id: book.id, ...newBook })
        return response.status(200).json(books)
    }

    const deleteBook = (request, response) => {
        const id = request.params.id
        const books = structuredClone(BOOKS)
        const book = BOOKS.find(book => book.id === id)
        if (!book) {
            return response.status(404).json({ message: 'Book not found' })
        }
        const index = books.indexOf(book)
        books.splice(index, 1)
        return response.status(200).json(books)
    }

    return {
        getBook,
        getBookById,
        createBook,
        updateBook,
        deleteBook,
    }

}