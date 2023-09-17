import { Router } from "express"
import { bookController } from "../controllers/bookControllers"

export const bookRoutes = (BOOKS) => {
    const bookRouter = Router()
    const { getBook, createBook, getBookById, updateBook, deleteBook } = bookController(BOOKS)      //traigo los metodos que usare

    //aqui agrupo por ruta books o por ruta books:id (son metodos de express)

    bookRouter.route('/books')
    .get(getBook)
    .post(createBook)

    bookRouter.route('/books/:id')
    .get(getBookById)
    .put(updateBook)
    .delete(deleteBook)    
    
    return bookRouter
}