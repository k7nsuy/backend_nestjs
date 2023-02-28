import { ProductService } from "./services/product.service.js"

export class ProductController {
    constructor(newCashService, newProductService) {
        this.cashService = newCashService
        this.productService = newProductService
    }

    buyProduct = (req,res) => {
        // 1. 가진돈 검증하는 코드

        // const cashService = new CashService()
        const hasMoney = this.cashService.checkValue() // true or false
    
        // 2. 판매여부 검증하는 코드
        // const productService = new ProductService()
        const isSoldout = this.productService.checkSoldout() // true or false
    
        // 3. 상품을 구매하는 코드
        if(hasMoney && !isSoldout) {
            res.send('success to purchase')
        }
    }

    refundproduct =  (req,res) => {
        // 1. 판매여부 검증하는 코드
        const productService = new ProductService()
        const isSoldout = productService.checkSoldout()
    
        // 2. 상품 환불하는 코드
        if(isSoldout) {
            res.send('success to refund')
        }
    }
}