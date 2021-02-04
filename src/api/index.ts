export const apiBase = 'https://tn.ecshop.bonwebuy.com/api';
export const apiUrl = {
  cart: {
    add: '/cart/addProduct',
    refresh: '/cart/refreashCart',
    getCartNum: '/cart/getCartGoodsNum',
    updateGoodsNum: '/cart/modifyProductCount',
    removeGoods: '/cart/removeProduct',
    removeBatchGoods: '/cart/removeBatchProduct',
    selectItem: '/cart/checkCartItemStatus',
    selectAll: '/cart/updateCartItemStatus',
    createOrder: '/cart/refreashCartToOrderService',
    getGiftList: '/cart/getGiftGoodsListInfo',
    getCouponList: '/cart/getPackageList',
    getFreeList: '/cart/getFreeList',
    useCoupon: '/cart/usePackages',
    useFree: '/cart/useFree',
    checkCoupon: '/cart/checkPackagesForCart',
    getDefaultAddr: '/cart/getDefaultAddress',
    checkShop: '/cart/checkShop',
  },
  display: {
    getConfigByKey: '/display/getConfigByKey',
    getDefaultShop: '/shop/getDefaultShop',
    getCountNumAndAvgGrade: '/comment/getCountNumAndAvgGrade',
    getAssistanceUser: '/assistance/getAssistanceUser',
    getProductList: '/display/searchThemeFloorGoodsList',
    getPanelInfo: '/display/getResultBySiteMark',
    getCateInfo: '/display/getThemeCodeFloorByThemeCode',
  },
  user: {
    login: '/app/login',
    updateUnionId: '/user/updateUnionId',
    getUserInfo: '/user/getUserInfo',
    getUserCardInfo: '/user/getUserCardInfo',
    updateUserInfo: '/user/updateUserInfo',
    updateMobile: '/user/updateMobile',
    productList: '/search/getSearchProductList',
    saleProductList: '/search/getSuperSaleProductList',
    getSearchFilter: '/search/getProductRelateInfo',
    shareTicket: '/user/addInviterForUser',
    staffInfo: '/user/staff-info',
    performance: '/user/staff/performance',
    saveShopRelation: '/user/saveUserShopRelation',
    getShopRelation: '/user/getUserShopRelation',
    bindStaff: '/user/bindUserStaff',
    getStaffCode: '/user/getStaffActiveCode',
  },
};
