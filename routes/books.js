// ./routes/books.js

const express			= require("express")
const router			= express.Router()

const bookController	= require("./../controllers/bookController")

// OBTENER LIBROS
router.get("/", bookController.getBooks)

// CREAR PÁGINA PARA CREAR UN LIBRO EN BD
router.get("/create", bookController.createBooks)



module.exports = router
