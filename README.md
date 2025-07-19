##Project Overview:
Gym Class Scheduling and Membership Management System is a role-based web application built with TypeScript, Express.js and MongoDB. It manages gym activities for three roles: admin, trainer and trainee.

Admins can manage trainers, trainees and create schedules for up to 5 classes per day, each lasting 2 hours and with a maximum of 10 trainees per class.

Trainees can view schedules, book/cancel classes and update their profile.

Trainers can only view their assigned schedules.

The system uses JWT authentication, follows a modular pattern and ensures booking conflict prevention and role-based access.

✨ Key Features:
Admin Dashboard for managing trainers, classes, and users.
Trainer Management with the ability to create, update, and assign classes.
Class Scheduling system for adding and organizing gym sessions.
User Registration & Login with JWT authentication.
Membership Booking functionality for members to join classes.
Role-based Access Control for Admin and Trainer trainees.

###Technology Stack:
TypeScript,javascript, Express.js,node JS, MongoDB, Mongoose, JWT, Zod , bycript,cors,http-status

API Endpoints:
1️⃣ Auth Module
Path: /api/auth
| Route | Method | Access | Description |
| -------------------- | ------ | ------ | ----------------------- |
| /api/auth/login | POST | Public | User Login |
| /api/auth/register | POST | Public | Register (Trainee only) |

User Module (Admin Role Only)
Path: /api/trainer

| Route                      | Method | Access | Description      |
| -------------------------- | ------ | ------ | ---------------- |
| /api/trainer/create-tainer | POST   | Admin  | Create Trainer   |
| /api/trainer               | GET    | Admin  | Get All Trainers |
| /api/trainer/:trainerId    | DELETE | Admin  | Delete a Trainer |

3️⃣ Class Schedule Module
Path: /api/classSchedul

| Route                    | Method | Access | Description               |
| ------------------------ | ------ | ------ | ------------------------- |
| /api/classSchedul/create | POST   | Admin  | Create new class schedule |
| /api/classSchedul        | GET    | Public | Get all classSchedul      |
| /api/classSchedul/:id    | PATCH  | Admin  | Update schedule           |
| /api/classSchedul/:id    | DELETE | Admin  | Delete schedule           |

4️⃣ Booking Module
Path: /api/booking
| Route | Method | Access | Description |
| --------------------------| ------ | ------- | --------------------- |
| /api/booking/booked | POST | TRAINEE | Book a class schedule |
| /api/booking/cancel/:id | DELETE | TRAINEE | Cancel booking |
| /api/booking/:id | GET | TRAINEE | Get my bookings |

Relational Diagram:
User
├── \_id
├── name
├── email
├── password
├── role: 'ADMIN' | 'TRAINER' | 'TRAINEE'

ClassSchedule
├── \_id
├── date
├── startTime
├── endTime
├── trainer (ref: User)

Booking
├── \_id
├── trainee (ref: User)
├── schedule (ref: ClassSchedule)

Admin Credentials:
email :admin@example.com
password :strongpassword123

লোকালি রান করানোর জন্য:

git clone github link..
cd project-folders
npm install
npm run dev

###Live Hosting Links: https://gym-class-scheduling-an-membership.vercel.app/

Postman documentation: https://docs.google.com/document/d/1_F8mmzfM2O9awajs_b51Gkr7Fsd0dW59wIka7oLfMss/edit?usp=sharing
