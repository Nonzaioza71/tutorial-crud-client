import BaseModel from './BaseModel'

export default class ProductsModel extends BaseModel {
    async getProductsBy() {
        return this.directFetch({
            url: 'products/getProductsBy',
            method: 'POST',
            body: null
        })
    }
    
    async getProductByCode(data) {
        return this.directFetch({
            url: 'products/getProductByCode',
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    async insertProductByCode(data) {
        return this.directFetch({
            url: 'products/insertProductByCode',
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    async updateProductByCode(data) {
        return this.directFetch({
            url: 'products/updateProductByCode',
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    async deleteProductByCode(data) {
        return this.directFetch({
            url: 'products/deleteProductByCode',
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}