export const tiposError = [
    "valueMissing",
    "tooShort",
    "customError",
]

export const mensajesError = {
    name: {
        valueMissing: "El nombre es requerido",
        tooShort: "El nombre debe tener al menos 5 caracteres",
    },
    price: {
        valueMissing: "El precio es requerido",
        customError: "El precio no puede ser negativo",
    },
    image: {
        valueMissing: "La imagen es requerida",
        customError: "La imagen debe ser una URL válida",
    }
}