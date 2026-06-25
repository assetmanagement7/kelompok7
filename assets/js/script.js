// ====================================
// LOGIN
// ====================================

const loginForm =
document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit",function(e){

        e.preventDefault();

        const username =
        document.getElementById("username").value;

        const password =
        document.getElementById("password").value;

        if(
            username === "admin" &&
            password === "AssetMgmt*##$"
        ){

            window.location.href =
            "pages/dashboard.html";

        }else{

            alert(
                "Username atau Password salah!"
            );

        }

    });

}

// ====================================
// SIDEBAR TOGGLE
// ====================================

const menuToggle =
document.querySelector(".menu-toggle");

const sidebar =
document.querySelector(".sidebar");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        sidebar.classList.toggle("show");

    });

}

// ====================================
// LOGOUT
// ====================================

const logoutBtn =
document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener("click",(e)=>{

        e.preventDefault();

        const confirmLogout =
        confirm(
            "Apakah Anda yakin ingin logout?"
        );

        if(confirmLogout){

            window.location.href =
            "../index.html";

        }

    });

}

// ====================================
// ACTIVE MENU AUTO
// ====================================

const currentPage =
window.location.pathname.split("/").pop();

document
.querySelectorAll(".menu li")
.forEach(li=>{

    li.classList.remove("active");

});

const menuLinks =
document.querySelectorAll(".menu li a");

menuLinks.forEach(link=>{

    const href =
    link.getAttribute("href");

    if(
        href &&
        href.includes(currentPage)
    ){

        link.parentElement
        .classList.add("active");

    }

});

// Asset Inventory Trend - Bar Chart
const ctxTrend = document.getElementById('inventoryTrendChart').getContext('2d');
const inventoryTrendChart = new Chart(ctxTrend, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Assets',
            data: [120, 150, 130, 170, 180, 160],
            backgroundColor: '#5E81F4',
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Asset Condition - Doughnut Chart
const ctxCondition = document.getElementById('assetConditionChart').getContext('2d');
const assetConditionChart = new Chart(ctxCondition, {
    type: 'doughnut',
    data: {
        labels: ['Good', 'Fair', 'Poor', 'Damaged'],
        datasets: [{
            data: [824, 210, 120, 12],
            backgroundColor: ['#1E40AF','#60A5FA','#92400E','#991B1B'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});