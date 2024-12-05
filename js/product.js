    var product = [
        {
            id:"RM1",
            name:"Standard Room ",
            img : "s11.jpg",
            price:2299000,
        },
        {
            id:"RM2",
            name:"Superior Room",
            img : "s12.jpg",
            price:3499000,
        },
        {
            id:"RM3",
            name:"Deluxe Room",
            img : "s13.jpg",
            price:4999000,
        },
        {
            id:"RM4",
            name:"President Room",
            img : "s14.jpg",
            price:25000000,
        },
        {
            id:"RM5",
            name:"Sea-view Room",
            img : "s15.jpg",
            price:4444000,
        },
        {
            id:"RM6",
            name:"Mountain-view Room",
            img : "s16.jpg",
            price:3999000,
        },
        {
            id:"RM7",
            name:"Villa Suite",
            img : "s17.jpg",
            price:14999000,
        },
        {
            id:"RM8",
            name:"Jacuzzi Room",
            img : "s18.jpg",
            price:6500000,
        },
    ];
// đẩy mảng product vào local
    function Save(){
        localStorage.setItem('listProduct',JSON.stringify(product))
    }
   //lấy sản phẩm 
   function load(){
       product = JSON.parse(localStorage.getItem('listProduct'));
   } 
   //xuất sản phẩm ra html
   if (localStorage.getItem("listProduct") != null) {
    load();
}
Save();
   var listLocal = function(){
       var listproduct ="";
       for (var i in product){
           var data = JSON.parse(JSON.stringify(product[i]))
        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" styte="width:auto">'; 
        listproduct += '<img class="card-img-top" src="img/' + data.img +'" alt="...">';
        listproduct += '<div class="card-title product-title text-center h5" >'+data.name+'</div>';
        listproduct += '<div class="price text-center h6">'+data.price+'₫</div>';
        listproduct +=  '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" onclick="tks()">';
        // listproduct +=  '<a class=" add-to-cart btn" data-name="'+product[i].name+'" data-price="'+product[i].price+'" onclick="tks()">';
        listproduct +=  '<a>';
        listproduct +=  '<i class="fas fa-cart-plus"></i>';
        listproduct +=  '</a>';
        listproduct +=  '</span>';
        listproduct += '</div>';
        listproduct += '</div>';

        document.getElementById("banchay").innerHTML += listproduct;
       }
       Save();
       
   }

listLocal();


