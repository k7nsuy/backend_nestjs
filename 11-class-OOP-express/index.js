import express from 'express'
import { CashService } from './mvc/controllers/services/cash.service.js'
import { ProductService } from './mvc/controllers/services/product.service.js'
import { ProductController } from './mvc/controllers/product.controller.js'
import { CouponController } from './mvc/controllers/coupon.controller.js'
import { PointService } from './mvc/controllers/services/point.service.js'

const app = express()

const cashService = new CashService() // new 한번으로 모든 곳에서 재사용 가능(싱글톤 패턴)
const productService = new ProductService()
const pointService = new PointService() // 쿠폰 구매 방식으로 포인트 결제로 변경
// cashService => pointService로 상황에 따라 변경 가능

const productController = new ProductController(cashService, productService)
app.post('/products/buy', productController.buyProduct)
app.post('/products/refund', productController.refundproduct)

const couponController = new CouponController(pointService)
app.post('/coupons/buy', couponController.buyCoupon)


app.listen(3000)