// Biến vai trò đăng ký (Mặc định: user)
let currentRole = 'user';

// Chuyển đổi màn hình
function switchScreen(screenId) {
  // Ẩn tất cả screens
  document.querySelectorAll('.form-screen').forEach(screen => {
    screen.classList.remove('active');
  });

  // Hiện screen mục tiêu
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  // Khôi phục các thông báo cũ
  hideBanners();
}

// Ẩn tất cả banner báo lỗi / thành công
function hideBanners() {
  document.getElementById('login-error').classList.add('hidden');
  document.getElementById('register-error').classList.add('hidden');
  document.getElementById('register-success').classList.add('hidden');
}

// Thiết lập vai trò
function setRole(role) {
  currentRole = role;
  document.querySelectorAll('.segment-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  if (role === 'user') {
    document.getElementById('role-passenger').classList.add('active');
  } else {
    document.getElementById('role-driver').classList.add('active');
  }
}

// Đổi trạng thái hiển thị mật khẩu
document.getElementById('btn-toggle-password').addEventListener('click', () => {
  const passwordInput = document.getElementById('login-password');
  const btn = document.getElementById('btn-toggle-password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    btn.innerText = '🔒';
  } else {
    passwordInput.type = 'password';
    btn.innerText = '👁️';
  }
});

// Xử lý điền demo nhanh
document.getElementById('btn-demo').addEventListener('click', () => {
  document.getElementById('login-phone').value = '0901234567';
  document.getElementById('login-password').value = 'admin123';
  hideBanners();
});

// Xử lý nộp form đăng nhập (Login Submit)
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  hideBanners();

  const phone = document.getElementById('login-phone').value;
  const password = document.getElementById('login-password').value;
  const errorBox = document.getElementById('login-error');

  // Kiểm tra tài khóa cục bộ trong localStorage
  const storedUsers = JSON.parse(localStorage.getItem('ray_users') || '[]');
  const matchedUser = storedUsers.find(u => u.phone === phone);

  if (phone === '0901234567' && password === 'admin123') {
    alert('Đăng nhập tài khoản demo của Ray thành công!');
    console.log('User logged in: Ray Admin Demo');
  } else if (matchedUser) {
    alert('Đăng nhập thành công với tài khoản: ' + matchedUser.fullName);
    console.log('Ray User logged in: ', matchedUser);
  } else if (phone.length >= 9 && password.length >= 6) {
    // Tự động vượt qua đối với mục đích dễ dàng kiểm tra thử nghiệm
    alert('Đăng nhập thành công! Tạo tài khoản thử nghiệm nhanh cho Số: ' + phone);
  } else {
    errorBox.innerText = 'Số điện thoại hoặc mật khẩu chưa đúng. (Thử demo: 0901234567 / admin123)';
    errorBox.classList.remove('hidden');
  }
});

// Xử lý nộp form đăng ký (Register Submit)
document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  hideBanners();

  const fullName = document.getElementById('reg-fullname').value;
  const phone = document.getElementById('reg-phone').value;
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  const agreed = document.getElementById('reg-agree').checked;

  const errorBox = document.getElementById('register-error');
  const successBox = document.getElementById('register-success');

  if (password.length < 6) {
    errorBox.innerText = 'Mật khẩu tối thiểu phải đạt 6 ký tự.';
    errorBox.classList.remove('hidden');
    return;
  }

  if (!agreed) {
    errorBox.innerText = 'Bạn phải tích chọn đồng ý điều khoản sử dụng.';
    errorBox.classList.remove('hidden');
    return;
  }

  // Đăng ký lưu dữ liệu
  const newUser = {
    fullName,
    phone,
    email,
    role: currentRole,
    createdAt: new Date().toISOString()
  };

  const storedUsers = JSON.parse(localStorage.getItem('ray_users') || '[]');
  if (storedUsers.some(u => u.phone === phone)) {
    errorBox.innerText = 'Số điện thoại này đã được sử dụng.';
    errorBox.classList.remove('hidden');
    return;
  }

  storedUsers.push(newUser);
  localStorage.setItem('ray_users', JSON.stringify(storedUsers));

  // Hiển thị thành công tải
  successBox.classList.remove('hidden');
  
  // Tự động điền qua ô đăng nhập sau 1.5 giây
  setTimeout(() => {
    switchScreen('login-screen');
    document.getElementById('login-phone').value = phone;
    document.getElementById('login-password').value = password;
  }, 1500);
});
