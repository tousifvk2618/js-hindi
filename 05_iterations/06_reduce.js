myNums = [199, 299, 399]

initialValue = 0
const cess = 18
const total = myNums.reduce( (total_cart_value, each_stock_price) => {
    console.log(`total_cart_value: ${total_cart_value} and each_stock_price: ${each_stock_price} plus cess: ${cess}}`)
    return total_cart_value = total_cart_value + each_stock_price + cess
}, initialValue )

console.log(total)