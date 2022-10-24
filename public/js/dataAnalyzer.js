import jsonData from "./coupons.json" assert { type: "json" };

function filterByPromotionType(valueToFind){
    return _.filter(jsonData.coupons, 
        (coupon) => {return coupon.promotion_type == valueToFind;})
        .map(coupon => coupon.value );    
}

function getAverageByPromotionType(valueToFind){
    return _.mean(filterByPromotionType(valueToFind)); 
}

function getMinValueByPromotionType(valueToFind){
    return _.min(filterByPromotionType(valueToFind)); 
}

function getMaxValueByPromotionType(valueToFind){
    return _.max(filterByPromotionType(valueToFind) );
}

function countEachPromoTypeOccurrences (valueToFind){  
    let filteredByPromotionType = filterByPromotionType(valueToFind)
    let numberOfCouponsPerValue = _.countBy(filteredByPromotionType);

    return Object.entries(numberOfCouponsPerValue).map(([key, value]) => ({ key, value }));;
}

function countWebShopOccurrences (){  
    let webshopArray = jsonData.coupons.map(coupon => coupon.coupon_webshop_name);
    let elementOccurrences = _.countBy(webshopArray);

    return Object.entries(elementOccurrences).map(([key, value]) => ({ key, value }));
}

function countPromotionTypes (){  
    let webshopArray = jsonData.coupons.map(coupon => coupon.promotion_type);
    let elementOccurrences = _.countBy(webshopArray);

    return Object.entries(elementOccurrences).map(([key, value]) => ({ key, value }));;
}

export default {getAverageByPromotionType, getMaxValueByPromotionType, getMinValueByPromotionType, countWebShopOccurrences, countPromotionTypes, countEachPromoTypeOccurrences};
