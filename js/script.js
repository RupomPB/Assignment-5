
// heart btn functions
let count = 0;
let heartCount = (document.getElementById("heart-count"));
console.log("heart count")

let heartBtns = document.querySelectorAll("#heart-btn");
for (let btn of heartBtns) {
    btn.addEventListener("click", function () {
        count++
        heartCount.innerHTML = count;
    })

}


// time functions 

const  data ={
    date: new Date().toLocaleTimeString()
}

// call buttons functions


document.getElementById("all-body").addEventListener("click", function (e) {
    if (e.target.className.includes("call-btn")) {
        // alert("card clicked");
        const callBtns = e.target;

        const callTitle = callBtns.parentNode.parentNode.children[1].innerText;
        console.log(callTitle);

        const callNumber = callBtns.parentNode.parentNode.children[3].innerText;
        console.log(callNumber);


        alert("📞 Calling : " + callTitle + " " + callNumber)


        const coinValue = callBtns.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[1].children[0];
        console.log(coinValue);

        const currentCoin = Number(coinValue.innerText);
        const newCoin = currentCoin - 20;

        coinValue.innerText = newCoin;

        //   adding calling list to  cart-container 

        const cartContainerNew = document.getElementById("cart-container-new");

        const newCart = document.createElement("div");
        newCart.innerHTML = `
    
        <div id="new-cart-element" class="bg-[#fafafa] flex justify-between items-center my-4 mx-4 p-4 rounded-lg">
                        <div>
                            <h4 class="font-bold text-lg">${callTitle}</h4>
                            <p class="text-[#828282]">${callNumber}</p>
                        </div>
                        <div>
                            <h1>${data.date}</h1>
                        </div>
            </div>

    `
        cartContainerNew.append(newCart);


    }

    // clear btn functions 
    const clearBtns = document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("cart-container-new").innerHTML = ""
    })


    // copy buttons functions 


})

// copy buttons functions

const copyBtns = document.querySelectorAll(".copy-btn");

const copyCountElement = document.getElementById("copy-count");
let copyCount= 0;


for(const btn of copyBtns){
    btn.addEventListener("click", function(){
        
        const card = btn.parentNode.parentNode
        console.log(card)

        const copyText = card.children[3].innerText
        console.log(copyText)


         navigator.clipboard.writeText(copyText)
             {
                alert("নম্বর কপি হয়েছে: " + copyText);

                copyCount++;
                copyCountElement.innerText = copyCount;
            }

    })
}

