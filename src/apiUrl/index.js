let api = {
  // 後台登入
  signIn: `${process.env.VUE_APP_APIPATH}/admin/signin`,
  // 後台登出
  logout: `${process.env.VUE_APP_APIPATH}/logout`,
  // 檢查用戶是否仍持續登入
  checkLogin: `${process.env.VUE_APP_APIPATH}/api/user/check`,

  // 商品建立
  createProduct: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/admin/product`,
  // 取得商品列表
  getProduct: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/admin/products?page=:page`,
  // 取得商品列表_all$(需驗證)
  getAllProduct: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/admin/products/all`,
  // 取得商品列表_all$(不需驗證)
  getAllProductNoKet: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/products/all`,
  // 取得單一商品
  getSingleProduct: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/product`,
  // 修改產品
  modifyProduct: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/admin/product`,
  // 刪除產品
  deleteProduct: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/admin/product`,
  // 取得訂單列表(須驗證)
  getOrderList: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/admin/orders?page=`,
  // 取得訂單列表(不須驗證)
  getOrderListNokey: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/orders?page=`,
  // 取得單筆訂單
  getSingleOrder: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/order`,

  // 新增優惠券
  addCoupon: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/admin/coupon`,
  // 取得優惠券列表
  getCouponList: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/admin/coupons?page=`,
  // 修改優惠券
  modifyCoupon: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/admin/coupon`,
  // 刪除優惠券
  deleteCoupon: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/admin/coupon`,
  // 上傳圖片
  uploadImage: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/admin/upload`,
  // 加入購物車
  addCart: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/cart`,
  // 刪除某一筆購物車資料
  deleteCart: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/cart`,
  // 取得購物車列表
  getCartList: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/cart`,
  // 套用優惠券
  useCoupon: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/coupon`,
  // 結帳頁面
  createOrder: `${process.env.VUE_APP_APIPATH}/api/${
    process.env.VUE_APP_CUSTOMPATH
  }/order`
};

export default api;
