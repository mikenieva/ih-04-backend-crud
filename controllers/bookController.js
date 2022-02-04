// ./controllers/bookController.js

const Book		= require("./../models/Book")

exports.getBooks = async (req, res) => {

	try {
	
		const foundBooks = await Book.find({})

		res.render("books/list", {
			data: foundBooks
		})

	} catch (error) {
		
		console.log(error)

	}	

}

exports.createBooks = async (req, res) => {

	return res.render("books/create")

}

exports.createBooksForm = async (req, res) => {

	// 1. VERIFICAR QUE LOS DATOS DEL FORMULARIO LLEGUEN AL SERVIDOR
	const { title, description, author, rating } = req.body
	// const title = req.body.title


	// 2. CREAR EL DOCUMENTO EN BASE DE DATOS

	try {
		
		await Book.create({ title, description, author, rating })

		return res.redirect("/books")	

	} catch (error) {
		
		console.log(error)

		return

	}
	


}

exports.getSingleBook = async (req, res) => {

	// 1. SABER CUÁL LIBRO QUIERES LEER. OBTENER EL IDENTIFICADOR DEL LIBRO
	const { bookID } = req.params

	// 2. REALIZAR BÚSQUEDA DEL LIBRO INDIVIDUAL A TRAVÉS DE SU ID
	const getTheBook = await Book.findById(bookID)

	res.render("books/single", {
		book: getTheBook
	})


}

exports.editBook = async (req, res) => {

	const { bookID } = req.params

	const foundBook = await Book.findById(bookID)

	res.render("books/edit", { book: foundBook })


}

exports.editBookForm = async (req, res) => {

	// 1. NECESITO EL ID DEL LIBRO QUE VOY A EDITAR
	const { bookID } = req.params

	// 2. NECESITO LOS DATOS DEL FORMULARIO NUEVOS CON LOS CUALES VOY A ACTUALIZAR EL LIBRO EN BD
	const { title, description, author, rating } = req.body


	// 3. ACTUALIZAR EN BASE DE DATOS
	const updatedBook = await Book.findByIdAndUpdate(
		bookID,
		{ title, description, author, rating },
		{ new: true }
	)	

	// 4. REDIRECCIONAR A LA PÁGINA INDIVIDUAL DEL LIBRO
	return res.redirect(`/books/${updatedBook._id}`)


}

exports.deleteBook = async (req, res) => {

	const { bookID } = req.params

	await Book.findByIdAndDelete(bookID)

	res.redirect("/books")

}