# 🎓 Thiệp Mời Tốt Nghiệp Đại Học

Một thiệp mời tốt nghiệp đại học đẹp mắt với hiệu ứng động, âm nhạc và giao diện responsive.

## ✨ Tính năng

- 🎨 **Thiết kế đẹp mắt** với gradient và hiệu ứng 3D
- 🎵 **Âm nhạc nền** có thể bật/tắt
- 🎊 **Hiệu ứng confetti** khi mở thiệp
- 📱 **Responsive** hoạt động tốt trên mọi thiết bị
- 🎯 **Tương tác đa dạng**: click, swipe, keyboard
- ✨ **Hiệu ứng động** với floating elements
- 🎭 **Loading screen** với animation

## 🚀 Cách sử dụng

### 1. Chạy trực tiếp
Mở file `index.html` trong trình duyệt web.

### 2. Deploy lên hosting
Upload tất cả files lên hosting (Netlify, Vercel, GitHub Pages, etc.) để chia sẻ link.

## 🎨 Tùy chỉnh

### Thay đổi thông tin cá nhân
Chỉnh sửa trong file `index.html`:

```html
<!-- Thông tin sinh viên -->
<h2 class="student-name">Tên của bạn</h2>
<p class="student-details">
    <span class="field">Chuyên ngành:</span> Tên chuyên ngành<br>
    <span class="field">Trường:</span> Tên trường đại học<br>
    <span class="field">Niên khóa:</span> 2020 - 2024
</p>

<!-- Thông tin buổi lễ -->
<div class="detail-item">
    <i class="fas fa-calendar-alt"></i>
    <span>Ngày tháng năm</span>
</div>
<div class="detail-item">
    <i class="fas fa-clock"></i>
    <span>Giờ bắt đầu - kết thúc</span>
</div>
<div class="detail-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Địa điểm</span>
</div>

<!-- Thông tin liên hệ -->
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>Số điện thoại</span>
</div>
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>Email</span>
</div>
```

### Thay đổi màu sắc
Chỉnh sửa trong file `style.css`:

```css
/* Màu chủ đạo */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Màu accent */
.graduation-icon {
    color: #667eea;
}

/* Màu gradient cho text */
.title {
    background: linear-gradient(45deg, #667eea, #764ba2);
}
```

### Thay đổi âm nhạc
Thay đổi source trong file `index.html`:

```html
<audio id="background-music" loop>
    <source src="đường_dẫn_đến_file_nhạc.mp3" type="audio/mpeg">
</audio>
```

### Thêm hình ảnh
Thay thế avatar placeholder bằng hình ảnh thật:

```html
<div class="avatar-placeholder">
    <img src="đường_dẫn_ảnh.jpg" alt="Ảnh cá nhân" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
</div>
```

## 🎮 Điều khiển

### Chuột
- **Click** nút "Mở thiệp" để mở thiệp
- **Click** nút "Đóng thiệp" để đóng thiệp
- **Click** nút nhạc để bật/tắt âm nhạc
- **Hover** để xem hiệu ứng

### Bàn phím
- **Space/Arrow Right**: Mở thiệp
- **Arrow Left/Escape**: Đóng thiệp
- **M**: Bật/tắt nhạc

### Touch (Mobile)
- **Swipe left**: Mở thiệp
- **Swipe right**: Đóng thiệp
- **Tap**: Các tương tác khác

## 🎯 Easter Eggs

- **Click 5 lần** vào icon mũ tốt nghiệp để kích hoạt celebration mode
- **Di chuyển chuột** để tạo hiệu ứng parallax cho floating elements

## 📱 Responsive

Thiệp mời được tối ưu cho:
- 📱 Mobile (320px - 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (1024px+)

## 🛠️ Công nghệ sử dụng

- **HTML5** - Cấu trúc
- **CSS3** - Styling và animations
- **JavaScript (ES6+)** - Tương tác và hiệu ứng
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📁 Cấu trúc file

```
graduation-invitation/
├── index.html          # File chính
├── style.css           # Styles và animations
├── script.js           # JavaScript interactions
└── README.md           # Hướng dẫn này
```

## 🚀 Deploy

### Netlify (Miễn phí)
1. Tạo tài khoản trên [Netlify](https://netlify.com)
2. Drag & drop thư mục project
3. Nhận link chia sẻ ngay lập tức

### GitHub Pages
1. Push code lên GitHub repository
2. Vào Settings > Pages
3. Chọn source branch
4. Nhận link chia sẻ

### Vercel
1. Tạo tài khoản trên [Vercel](https://vercel.com)
2. Import từ GitHub hoặc upload files
3. Deploy tự động

## 🎨 Tùy chỉnh nâng cao

### Thêm hiệu ứng mới
Thêm vào file `script.js`:

```javascript
// Hiệu ứng mới
function newEffect() {
    // Code hiệu ứng
}
```

### Thay đổi animation
Chỉnh sửa trong file `style.css`:

```css
@keyframes customAnimation {
    0% { /* Trạng thái đầu */ }
    100% { /* Trạng thái cuối */ }
}
```

## 📞 Hỗ trợ

Nếu có vấn đề hoặc cần hỗ trợ, hãy:
1. Kiểm tra console trong Developer Tools
2. Đảm bảo tất cả files được load đúng
3. Thử trên trình duyệt khác

## 🎉 Chúc mừng tốt nghiệp!

Chúc bạn có một buổi lễ tốt nghiệp thật ý nghĩa và thành công! 🎓✨ 