export class CouponController {
    constructor(newPointService) {
        this.pointService = newPointService
    }

    buyCoupon = (req,res) => {
    // 1. 가진돈 검증
    // const cashService = new CashService()
    const hasMoney = this.pointService.checkValue() // true or false

    // 3. 상품을 구매하는 코드
    if(hasMoney) {
        res.send('success to purchase')
    }
    }      
}