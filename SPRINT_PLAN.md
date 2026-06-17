# 🚀 Sprint Planning - Dự án Ray (Ride Booking Application)

## 📊 Tổng Quan Tiến Độ

| Thành viên | Vai trò | Tiến độ | Trạng thái |
|-----------|--------|--------|----------|
| Nguyễn Văn A | Project Manager | 90% | ⏳ Finalizing |
| Trần Văn B | Frontend Developer | 80% | ⏳ UI Polish |
| Lê Văn C | Backend Developer | 70% | ⏳ Core Logic |
| Phạm Văn D | Tester & Database | 85% | ⏳ Performance |

**Tiến độ trung bình dự án: 81.25%**

---

## Sprint 1: Requirement Analysis & Project Setup

**Thời gian:** Tuần 1

### Mục tiêu
* Hiểu yêu cầu nghiệp vụ của hệ thống đặt xe.
* Xây dựng kế hoạch phát triển dự án.
* Khởi tạo môi trường làm việc.

### Product Backlog
* Khảo sát ứng dụng Grab.
* Thu thập yêu cầu người dùng.
* Xây dựng User Story.
* Vẽ Use Case Diagram.
* Tạo Repository GitHub.
* Phân chia nhiệm vụ thành viên.

### Deliverables
* Requirement Specification.
* Use Case Diagram.
* GitHub Repository.
* Product Backlog.

### Trạng thái: ✅ Hoàn thành

**Responsible:** Nguyễn Văn A (100%)

---

## Sprint 2: System Design

**Thời gian:** Tuần 2

### Mục tiêu
* Thiết kế giao diện và cơ sở dữ liệu.

### Product Backlog
* Thiết kế Wireframe.
* Thiết kế UI/UX.
* Thiết kế Database.
* Thiết kế luồng đăng nhập.
* Thiết kế luồng đặt xe.

### Deliverables
* Wireframe.
* ERD Diagram.
* Database Schema.
* UI Prototype.

### Trạng thái: ✅ Hoàn thành

**Responsible:** Phạm Văn D (100%), Trần Văn B (Wireframe)

---

## Sprint 3: Authentication Module

**Thời gian:** Tuần 3

### Mục tiêu
* Hoàn thành chức năng quản lý tài khoản.

### Product Backlog
* ✅ Đăng ký tài khoản (Register Screen)
* ✅ Đăng nhập tài khoản (Login Screen)
* ✅ Đăng xuất
* ✅ Kiểm tra dữ liệu đầu vào
* ✅ Phân quyền người dùng (Khách hàng / Quản lý)

### Deliverables
* ✅ Login Screen - UI complete (Trần Văn B)
* ✅ Register Screen - UI complete (Trần Văn B)
* ✅ Authentication Logic (Lê Văn C)
* ✅ Database Connection (Phạm Văn D)

### Trạng thái: ✅ Hoàn thành

**Responsible:** 
- Frontend: Trần Văn B (100%)
- Backend: Lê Văn C (100%)
- Database: Phạm Văn D (100%)

**Ghi chú:** 
- Login/Register UI đã triển khai với hỗ trợ:
  - Toggle password visibility
  - Remember login option
  - Demo account (0901234567 / admin123)
  - Role selection (Khách Hàng / Quản lý)
  - Form validation

---

## Sprint 4: Ride Booking Module

**Thời gian:** Tuần 4

### Mục tiêu
* Hoàn thành chức năng đặt xe.

### Product Backlog
* ⏳ Chọn điểm đón
* ⏳ Chọn điểm đến
* ⏳ Tạo chuyến đi
* ⏳ Hiển thị thông tin chuyến xe
* ⏳ Lưu lịch sử chuyến đi

### Deliverables
* ⏳ Booking Screen (Trần Văn B - 80%)
* ⏳ Ride Management Module (Lê Văn C - 70%)
* ⏳ Booking Database (Phạm Văn D - 85%)

### Trạng thái: ⏳ Đang tiến hành (75%)

**Responsible:** 
- Frontend: Trần Văn B (80%)
- Backend: Lê Văn C (70%)
- Database: Phạm Văn D (85%)

**Ghi chú:** Chờ hoàn thiện API booking logic

---

## Sprint 5: Testing & Deployment

**Thời gian:** Tuần 5

### Mục tiêu
* Kiểm thử hệ thống và hoàn thiện sản phẩm.

### Product Backlog
* ✅ Unit Testing (Phạm Văn D)
* ✅ Test Cases (Phạm Văn D)
* ✅ Bug Report (Phạm Văn D)
* ⏳ Integration Testing
* ⏳ Bug Fixing
* ⏳ Tối ưu giao diện (Trần Văn B)
* ⏳ Hoàn thiện tài liệu (Nguyễn Văn A)

### Deliverables
* ✅ Test Report (Phạm Văn D)
* ⏳ Final Source Code
* ⏳ User Manual
* ⏳ Project Report (Nguyễn Văn A - 90%)

### Trạng thái: ⏳ Đang tiến hành (75%)

**Responsible:** 
- Testing: Phạm Văn D (85%)
- Frontend: Trần Văn B (80%)
- PM: Nguyễn Văn A (90%)

---

# 📋 Sprint Review

## Chức năng hoàn thành

* ✅ Đăng ký tài khoản
* ✅ Đăng nhập tài khoản
* ✅ Quản lý người dùng (2 vai trò)
* ✅ Giao diện Responsive
* ✅ Form validation & error handling
* ✅ Database design

## Chức năng đang phát triển

* ⏳ Đặt xe cơ bản
* ⏳ Xem lịch sử chuyến đi
* ⏳ API integration

## Chức năng chưa hoàn thành

* ❌ Thanh toán trực tuyến
* ❌ Google Maps API
* ❌ Định vị GPS thời gian thực
* ❌ Chat giữa tài xế và khách hàng

---

# 🔍 Sprint Retrospective

## Điểm tốt ✨

* ✅ Hoàn thành đúng tiến độ cho authentication module
* ✅ Phân chia công việc hợp lý theo chuyên môn
* ✅ Sử dụng GitHub để quản lý mã nguồn hiệu quả
* ✅ Giao diện UI/UX sạch và chuyên nghiệp
* ✅ Database design đầy đủ và có kế hoạch

## Cần cải thiện 🔧

* 🔨 Tăng cường kiểm thử sớm hơn (Unit tests for API)
* 🔨 Cải thiện giao tiếp giữa Frontend & Backend
* 🔨 Tối ưu hiệu suất API queries
* 🔨 Chuẩn hóa naming conventions

## Hướng phát triển 🚀

* 🎯 Tích hợp Google Maps / Open Street Map
* 🎯 Theo dõi vị trí tài xế thời gian thực (WebSocket)
* 🎯 Hệ thống thanh toán online (Stripe / VNPay)
* 🎯 Hệ thống đánh giá và phản hồi (Rating system)
* 🎯 Notification system (Push notifications)
* 🎯 Chat real-time (Socket.io)

---

# 👥 Team Assignment & Progress

## Nguyễn Văn A - Project Manager (90%)
```
█████████░ 90%
```
- ✅ Requirement Analysis
- ✅ Use Case Diagram
- ✅ Project Planning
- ⏳ Final Report (in progress)

**Tasks:** Sprint coordination, documentation

---

## Trần Văn B - Frontend Developer (80%)
```
████████░░ 80%
```
- ✅ Login UI (Complete)
- ✅ Register UI (Complete)
- ✅ Booking UI (Partial - 70%)
- ⏳ Responsive Design (in progress)

**Tasks:** 
- Polish booking interface
- Mobile responsiveness
- Form optimization

---

## Lê Văn C - Backend Developer (70%)
```
███████░░░ 70%
```
- ✅ Authentication (Complete)
- ✅ API Development (Partial)
- ⏳ Ride Booking Logic (in progress)
- ⏳ Database Connection (Complete)

**Tasks:**
- Booking API endpoints
- Payment gateway integration
- Real-time tracking API

---

## Phạm Văn D - Tester & Database (85%)
```
████████▌░ 85%
```
- ✅ Database Design (Complete)
- ✅ Test Cases (Complete)
- ✅ Bug Report (in progress)
- ⏳ Performance Testing (in progress)

**Tasks:**
- Integration testing
- Load testing
- Database optimization

---

# 📅 Timeline

```
Week 1: Requirements & Setup    ✅ Complete
Week 2: System Design           ✅ Complete
Week 3: Authentication          ✅ Complete
Week 4: Ride Booking (75%)      ⏳ In Progress
Week 5: Testing & Deploy (75%)  ⏳ In Progress
```

**Last Updated:** 2026-06-17
