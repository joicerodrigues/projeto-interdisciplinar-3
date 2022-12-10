import instance from '../index';
interface Product {
    id              :string;
    name            :string;
    price           :number;
    category        :string;
    description     :string;
    weight          :number;
    image           :string;
}

function getProducts() {
    return instance.get('/produtos')
}

function getProduct(id: string) {
    return instance.get(`/produtos/${id}`)
}

function createProduct(product: Product) {
    instance.post('/products', product)
}

function updateProduct(id: string, product: Product) {
    instance.put(`/products/${id}`, product)
}

function deleteProduct(id: string) {
    instance.delete(`/products/${id}`)
}

function getCategoriesProducts() {
    return instance.get('/categoria')
}

export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getCategoriesProducts
}