export function validateId(id) {
    if (isNaN(id)) {
        throw new Error("ID inválido");
    }
    return id;
}