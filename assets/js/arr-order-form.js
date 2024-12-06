let orderForm ;//mảng đơn hàng
let lenghtOrderForm = 1;
//localStorage.removeItem("orderForm");

if(localStorage.getItem("orderForm") == null) // orderForm chưa có trong localStoragge 
{
    console.log("insert orderForm to ls");
    orderForm = [
        {
            idOrderForm: "1",
            idUser: "1",
            dateOrder: "12:56 11/11/2024",
            totalPrice: "995.000",
            status: true,
            arrProductId: [
                {id: "1", quantity: 1},
                {id: "2", quantity: 1}
            ]
        },
        {
            idOrderForm: "2", 
            idUser: "2",
            dateOrder: "13:20 12/11/2024",
            totalPrice: "1.295.000",
            status: false,
            arrProductId: [
                {id: "3", quantity: 2},
                {id: "4", quantity: 1}
            ]
        }
    ];
    localStorage.setItem("orderForm",JSON.stringify(orderForm));
}
else    
{
    orderForm = JSON.parse(localStorage.getItem("orderForm"));
}

function getDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;// month start at 0
    let yy = today.getFullYear();
    let hour = today.getHours()<10?'0' + today.getHours():'' + today.getHours();
    let minute = today.getMinutes()<10?'0' + today.getMinutes():'' + today.getMinutes();
    let ddMMyy = hour + ':' + minute + ' ' + dd + '/' + mm + '/' + yy;
    return ddMMyy;
}





