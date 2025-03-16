# Doctor Booking App  

*A full-stack web application that allows patients to book appointments with doctors, doctors to manage their schedules, and administrators to oversee the system.*  


## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [API Endpoints](#api-endpoints)

## Features  

- **User Management:** Patients and doctors have separate roles with authentication.  
- **Appointment Booking:** Patients can schedule and manage appointments.  
- **Doctor Panel:** Doctors can view their schedules and update appointment statuses.  
- **Admin Dashboard:** Admins can manage users, doctors, and appointments.  
- **Secure Authentication:** JWT-based authentication for all users.  
- **Cloud Storage:** Profile images and files are stored via Cloudinary.  

## Tech Stack  

- **Frontend & Admin Panel:** React, React Router, TailwindCSS, Axios  
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT, Multer (for file uploads)  
- **Cloud Services:** Cloudinary (for image storage)  

## API Overview  

### **Admin API**  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/add-doctor` | Add a doctor (requires admin authentication) |
| `POST` | `/all-doctors` | Get all doctors (requires authentication) |
| `POST` | `/change-availability` | Change doctor availability |
| `GET`  | `/appointments` | View all appointments |
| `POST` | `/cancel-appointment` | Cancel an appointment |
| `GET`  | `/dashboard` | Get admin dashboard data |

### **Doctor API**  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/list` | Get list of doctors |
| `POST` | `/login` | Doctor login |
| `GET`  | `/appointments` | View doctor appointments |
| `POST` | `/complete-appointment` | Mark an appointment as completed |
| `POST` | `/cancel-appointment` | Cancel an appointment |
| `GET`  | `/doctor-dashboard` | Get doctor dashboard stats |
| `GET`  | `/profile-data` | Get doctor profile |
| `POST` | `/update-profile` | Update doctor profile |

### **User API**  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/register` | Register new user |
| `POST` | `/login` | User login |
| `GET`  | `/get-profile` | Get user profile |
| `POST` | `/update-profile` | Update user profile |
| `POST` | `/book-appointment` | Book an appointment |
| `GET`  | `/appointments` | View user appointments |
| `POST` | `/cancel-appointment` | Cancel an appointment |

---