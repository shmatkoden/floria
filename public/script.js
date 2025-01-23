document.addEventListener("DOMContentLoaded", () => {
    const formOverlay = document.querySelector("#formOverlay");
    const buyButtons = document.querySelectorAll(".buyButton");
    const cancelButton = document.querySelector("#cancelButton");
    const selectedProduct = document.querySelector("#selectedProduct");
    const productInput = document.querySelector("#productInput");
    const priceInput = document.querySelector("#priceInput");

    buyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.closest(".product");
            selectedProduct.innerText = `Ви обрали: ${product.dataset.product}`;
            productInput.value = product.dataset.product;
            priceInput.value = product.dataset.price;
            formOverlay.classList.remove("hidden");
        });
    });

    cancelButton.addEventListener("click", () => {
        formOverlay.classList.add("hidden");
        document.querySelector("#form").reset();
    });
});
