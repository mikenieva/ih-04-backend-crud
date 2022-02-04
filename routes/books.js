// ./routes/books.js

const express			= require("express")
const router			= express.Router()

const bookController	= require("./../controllers/bookController")

// OBTENER LIBROS
router.get("/", bookController.getBooks)

// CREAR PÁGINA PARA CREAR UN LIBRO EN BD
router.get("/create", bookController.createBooks)

// ENVIAR DATOS DE FORMULARIO PARA CREAR LIBRO EN BD
router.post("/create", bookController.createBooksForm)


// CREAR UNA PÁGINA INDIVIDUAL PARA CADA LIBRO CON LOS DATOS RESPEECTIVOS
// http://localhost:3005/books/1357968416316574654654
router.get("/:bookID", bookController.getSingleBook)


module.exports = router
