let isAdmin = false;
let isSignedin = false;
let currentUser = account[2]; // Mặc định user với id 3

// Kiểm tra trạng thái đăng nhập khi load trang
if (sessionStorage.getItem('isSignedin') === 'true') {
    isSignedin = true;
}

function dangnhap(event) {
    if (event) {
        event.preventDefault();
    }
    isSignedin = true;
    sessionStorage.setItem('isSignedin', 'true');
    window.location.href = "user.html";
}

function dangXuat() {
    isSignedin = false;
    sessionStorage.removeItem('isSignedin');
    window.location.href = "index.html";
}

function createAcc(event) {
    if(event) {
        event.preventDefault();
    }
    alert("Đăng ký thành công!");
    window.location.href = "user.html";
}


