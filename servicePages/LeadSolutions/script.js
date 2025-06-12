// Sidebar Toggle Functions
function showSidebar() {
    document.querySelector('.sidebar').classList.add('active');
}

function hideSidebar() {
    document.querySelector('.sidebar').classList.remove('active');
}


// FAQ Toggle
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".faq").forEach((faq) => {
        faq.addEventListener("click", () => {
            document.querySelectorAll(".faq.active").forEach((item) => {
                if (item !== faq) item.classList.remove("active");
            });
            faq.classList.toggle("active");
        });
    });
});

// Popup Functions
function openPopup() {
    document.getElementById("popupOverlay").style.display = "block";
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}


