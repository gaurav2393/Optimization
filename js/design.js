currentValidCoupons = {
    couponA: function ({currentItems, totalItems, n}) {
        let newCurrentItems = [...currentItems];
        let newTotalItems = [...totalItems];
        newTotalItems = totalItems.map((item) => {
            return {
                ...item,
                value: (item.value * (100 - n))/100
            }
        })
        return {
            newCurrentItems,
            newTotalItems
        }
    },
    counponB: function (currentItems, totalItems, n) {
        const length = currentItems.length;
        let newTotalItems = [...totalItems];
        if (totalItems[length]) {
                totalItems[totalItems.length].value = (totalItems[totalItems.length].value * (100 - n ) )/100
        }
        return {
            newCurrentItems,
            newTotalItems
        }
    },
    couponC: function (currentItems, totalItems, n, type, d) {
        let counter = 0;
        totalItems.forEach(item, index => {
            if (item.productType === type) {
                counter++;
                if (counter%n === 0) {
                    totalItems[index].value = totalItems[index].value - d;
                }
            }
        })
        return {
            newCurrentItems,
            newTotalItems
        }
    }
}

items = [
    {
        type: 'product',
        value: 10,
        productType: 'shirt'
    },
    {
        type: 'coupon',
        couponName: 'couponA',
        n: 10
    }
]

function cart() {
    function generateAmount (items) {
        let totalItems = [];
        let currentItems = [];
        let type = {};
        items.forEach((item) => {
            if (item.type === 'product') {
                totalItems.push(item)
            }
        });
        items.forEach((item) => {
            if (item.type === 'coupon' && currentValidCoupons[item.couponName]) {
                ({ newCurrentItems: currentItems , newTotalItems: totalItems } = 
                    currentValidCoupons[item.couponName](
                        {
                        currentItems, totalItems, item, type}));
            } else {
                if(type[productType]) {
                    type[productType] = 1;
                } else {
                    type[productType] +=1;
                }
                currentItems.push(item);
            }
        })
    }

    return {
        generateAmount 
    }
};
