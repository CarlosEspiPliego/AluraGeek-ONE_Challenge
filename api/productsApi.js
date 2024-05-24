const BASE_URL = 'http://localhost:3000/products';

export const getProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data.reverse();
    }
    catch (error) {
        console.error(error);
        throw new Error('Error al obtener los productos');
    }
}

export const addProduct = async (product) => {
    try {
        const response = await axios.post(BASE_URL, product);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error al agregar el producto');
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error al eliminar el producto');
    }
}