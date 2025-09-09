export function validateId(id) {
    if (!id || isNaN(id)) {
        throw new Error("ID inválido");
    }
    return id;
}

export function getBookDefault(book) {
    if (!book || book.length === 0) {
        throw new Error('Nenhum livro econtrado');
    }
    return book;
}