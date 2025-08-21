$(()=>{
    console.log('add product loaded');

    let productName=$('#productName');
    let productManufacturer=$('#productManufacturer');
    let productPrice=$('#productPrice');


    $('#btnProductAdd').click(()=>{
        console.log('clicked add')
        addProduct(productName.val(),productManufacturer.val(),productPrice.val(),(addedProduct)=>{
            window.alert("Addd"+addedProduct.name+'to database')
            console.log("Addd"+addedProduct.name+'to database')
            console.log(addedProduct)
        });
    })
})