window.addEventListener("load", () => {
    const loader = document.querySelector(".loading-screen");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 3000); // 3 seconds
});