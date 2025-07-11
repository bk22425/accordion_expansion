document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const accordionSets = document.querySelectorAll(".accordion-set");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove("active"));
            // Hide all accordion sets
            accordionSets.forEach(set => set.style.display = "none");

            // Activate the clicked tab
            button.classList.add("active");
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).style.display = "block";
        });
    });

    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach(acc => {
        acc.addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});
