# Doctorly Server

## Authorization
- Login
User can Login using the Phone Number/Username & Password / OTP Login.
    1. Username & Password Login
    2. Send OTP
    3. Verify OTP
- Sign up
User can sign up using the Phone Number. On Signing Up the user will receive an OTP which will be verified, on verifiying user will enter the password. On Successful Validation of Password, User Account will be created.
    1. Send OTP to Phone Number
    2. Verify OTP
    3. Create New User
- Forgot Password
User can change the password of his/her account as per need.
    1. Issue Password Reset Token
    2. Verify Password Reset Token
    3. Change Password
- Logout
Logout will end all sessions of the User & redirect to the Home Page

## Doctors
- Create Doctor
- Update Doctor
- List Doctors
- List Doctor

## Appointments
- Create New Appointment - [Initial/Followup]
- Update Appointment
- List All Appointments - [Persona[User/Doctor]] [Type[Initial/Followup]]
- List One Appointment

## Prescriptions
- Create new Prescriptions
- Update Prescription
- List Prescriptions [Persona(User/Doctor)] [Type(Initial/Followup)]
- List One Prescription

## Tests
- Create New Test [Type]
- Update Test
- List All Tests
- List one Test

## Reminders
- Appointment Reminders
- Test Reminders
- Prescription Reminders