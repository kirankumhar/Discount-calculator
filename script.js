const saleCalculator = () =>{
    let productPrice = parseFloat(document.getElementById("productPrice").value);

    let discountCode = document.getElementById("discountCode").value;

    if(isNaN(productPrice)){
        alert("Please enter valid number");
        return;
    }

    if(discountCode === ""){
        alert("Please enter the discount Code");
        return;
    }

    let result ;

    switch (discountCode) {
        case "SALE10":
            result = productPrice- (productPrice * (10/100));
            break;
        case "SALE20":
            result = productPrice-(productPrice * (20/100));
            break;
        default:
            result = "Please enter valid number";
            break;
    }

    document.getElementById("disValue").textContent = result;

};


const ClearFields = () =>{
    document.getElementById("productPrice").value = "";
    document.getElementById("discountCode").value = "";
    document.getElementById("disValue").textContent="$";
};