# 🌿 Portfolio Cá Nhân – Lê Hà Khánh Linh


## 🧭 Giới thiệu

Đây là **website portfolio cá nhân** được thiết kế với phong cách **tối giản – sang trọng – mờ ảo (liquid glass)**.  
Dự án sử dụng **HTML + CSS + JavaScript thuần**, tập trung vào hiệu ứng cuộn, navbar nổi, và bố cục rõ ràng.

---

## 📁 Cấu trúc thư mục
```

portfolio/
├─ index.html          # File HTML chính (trang portfolio)
├─ styles.css          # CSS định dạng & bố cục giao diện
├─ script.js           # JS điều khiển hiệu ứng cuộn & navbar
├─ portfolio.png       # Ảnh preview hiển thị trong README
├─ icon/               # Thư mục chứa biểu tượng
└─ README.md           # Tài liệu dự án
```


---

## 🎨 styles.css – Chú thích chi tiết

### 🧩 Cấu trúc chính

| Khu vực | Mô tả |
|----------|--------|
| `:root` | Khai báo biến màu toàn cục (xanh, cam, trắng, đen, be, v.v.) |
| `body`, `html`, `*` | Thiết lập font, màu nền, reset margin/padding |
| `.page-wrapper` | Giới hạn chiều rộng tối đa của trang |
| `a`, `ul`, `h1–h6` | Reset mặc định cho link, danh sách, heading |

---

### 📱 Media Queries
- Điều chỉnh bố cục khi màn hình < 1200px, < 992px và < 768px.  
- Các phần như `.hero-container`, `.about-content`, `.skills-container` co giãn linh hoạt.

---

### 🦸‍♀️ Hero Section
- `.hero-section`: phần giới thiệu đầu trang (ảnh, tên, tiêu đề).  
- `.hero-bg-top`: nền xám xanh bo phần trên.  
- `.hero-container`: bọc toàn bộ nội dung hero.  
- `.hero-title`: dòng chữ chính (tên hoặc tagline).  
- `.hero-image-wrapper`: khung chứa ảnh nhân vật.

---

### 🌫️ Navbar (Liquid Glass)
- `.hero-header`: thanh điều hướng **cố định nổi**, hiệu ứng **mờ (blur)** và bo tròn.  
- Hiệu ứng `.shrink`: khi cuộn xuống phần “About”, navbar mờ dần và thu nhỏ.  
- `.main-nav a:hover`: hiệu ứng sáng nhẹ khi rê chuột.

---

### 👤 About Section
- `.about-section`: nền xanh xám, chứa thông tin giới thiệu.  
- `.about-headline`: tiêu đề lớn “About me”.  
- `.about-description`: mô tả ngắn về bản thân.  
- `.social-media`, `.social-item`: liên kết mạng xã hội (icon + text).  
- `.about-image-area`, `.image-bg-shape`, `.about-photo`: khu vực hình chân dung và khối nền trang trí.  
- `.tag`: thẻ nhỏ (như ngày sinh, quốc tịch).  
- `.contact-card`: khối liên hệ gồm email, số điện thoại, v.v.

---

### 💻 Skills Section
- `.skills-section`: nền xanh đậm, chứa kỹ năng.  
- `.timeline`: dòng thời gian (học vấn / kinh nghiệm).  
- `.tech-skills-list`: danh sách kỹ năng kèm thanh tiến trình (`.progress-bar`, `.progress-fill`).  
- `.language-list`: danh sách ngôn ngữ và trình độ.  
- `.hobbies-card`: thẻ sở thích (hình + mô tả ngắn).

---

### ⬆️ Scroll-to-Top Button
- `.scroll-to-top`: nút tròn ở góc phải dưới, hiện khi cuộn gần cuối trang.  
- Hover: phát sáng màu cam + bóng mờ.  
- Tooltip (`::after`): hiển thị dòng “Quay lại trang đầu tiên”.

---

### ⚙️ Scroll Margin
- Các id `#about`, `#skills`, `#contact`, `#hero` có **scroll-margin-top** để căn nội dung hợp lý khi cuộn đến.

---

## ⚡ script.js – Giải thích chi tiết

```js
document.addEventListener("DOMContentLoaded", () => {
  // Lấy các phần tử chính
  const scrollBtn = document.querySelector(".scroll-to-top");  // Nút cuộn lên đầu
  const navBar = document.querySelector(".hero-header");       // Thanh điều hướng
  const aboutSection = document.querySelector("#about");       // Phần "About"
  const skillsSection = document.querySelector("#skills");     // Phần "Skills"

  // Ẩn nút cuộn khi mới vào trang
  scrollBtn.style.display = "none";

  // Theo dõi sự kiện cuộn trang
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;                // Vị trí cuộn hiện tại
    const windowHeight = window.innerHeight;         // Chiều cao cửa sổ
    const documentHeight = document.body.scrollHeight; // Tổng chiều cao trang
    const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight; // Cuối phần "About"

    // Hiện nút quay lại khi người dùng gần cuối trang
    scrollBtn.style.display =
      scrollTop + windowHeight >= documentHeight - 100 ? "flex" : "none";

    // Thu nhỏ navbar khi cuộn gần hết phần "About"
    navBar.classList.toggle("shrink", scrollTop + windowHeight / 1.3 >= aboutBottom);
  });

  // Khi click nút, cuộn mượt lên đầu trang
  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

```
---


## Tóm tắt:

scrollBtn ẩn/hiện tùy theo độ cuộn.

navBar co lại khi đến gần phần "About".

Nút "Scroll to top" giúp quay lại đầu trang mượt mà.

| Tác vụ                        | Cách thực hiện                                      |
| ----------------------------- | --------------------------------------------------- |
| Thay đổi màu chủ đạo          | Chỉnh biến trong `:root`                            |
| Đổi font chữ                  | Sửa trong `body { font-family: ... }`               |
| Giảm hiệu ứng blur của navbar | Giảm `backdrop-filter: blur(16px);`                 |
| Tăng tốc độ cuộn mượt         | Sửa `behavior: "smooth"` thành `"instant"` trong JS |

## 🚀 Cách chạy

Mở file index.html trong trình duyệt.

Đảm bảo các file styles.css, script.js, thư mục icon/, và hình portfolio.png nằm cùng thư mục.

Cuộn trang để trải nghiệm hiệu ứng navbar và nút quay lại đầu.

## 🖋️ Tác giả

Lê Hà Khánh Linh

Portfolio cá nhân – Thiết kế & phát triển giao diện web với phong cách tối giản hiện đại.


---
















