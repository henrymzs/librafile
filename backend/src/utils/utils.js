export function validateId(id) {
    if (!id || isNaN(id)) {
        throw new Error("ID inválido");
    }
    return id;
}