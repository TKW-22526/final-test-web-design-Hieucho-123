// POPUP ĐẶT HÀNG

const orderForm = document.getElementById("orderForm");

if(orderForm){

    orderForm.addEventListener("submit",function(e){

        e.preventDefault();

        document.getElementById("popup").style.display="flex";

    });

}

function closePopup(){

    document.getElementById("popup").style.display="none";

}

// FORM LIÊN HỆ

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",function(e){

        e.preventDefault();

        alert("Cảm ơn bạn đã liên hệ với Tiechs Store!");

        contactForm.reset();

    });

}

// TÌM KIẾM SẢN PHẨM

const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup",function(){

        let value =
        searchInput.value.toLowerCase();

        let cards =
        document.querySelectorAll(".product-card");

        cards.forEach(card=>{

            let text =
            card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

}

// BACK TO TOP

const topBtn =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(topBtn){

        if(window.scrollY > 300){

            topBtn.style.display="block";

        }else{

            topBtn.style.display="none";

        }

    }

});

if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}