# repliq-ecommerce

A modern and fully responsive e-commerce platform built with React, offering both user-friendly shopping and powerful admin features. Designed with a focus on simplicity, flexibility, and an enhanced user experience.

## Features

- **User & Admin Login**: 
  - Single platform for both users and admins.
  - Admin can log in with the following credentials:  
    - **Phone**: `01123456789`  
    - **Password**: `admin`
  - Admin can manage users, products, and orders through a dedicated dashboard.

- **User Registration**: 
  - Register with a phone number, saved as an array in `localStorage`.
  - Log in using the registered phone number and password.

- **Protected Routes**: 
  - Access to certain routes (e.g., `/checkout`) requires users to log in.

- **Cart Management**: 
  - Add or remove products from the cart with ease.
  - Supports both single-product and multi-product checkout.

- **Responsive Design**: 
  - Device compatibility is ensured with a fully responsive layout.
  - The app adjusts smoothly across different screen sizes.

- **Multiple Layout System**: 
  - Separate layouts for users and admins for a tailored experience.

- **Admin Capabilities**: 
  - Admins can view and manage the list of customers, products, and orders.
  - New users can be added directly from the admin dashboard.

- **Custom Hooks**: 
  - Reusable hooks are used throughout the project to simplify code and improve maintainability.

- **Enhanced User Experience**: 
  - Utilizes `setTimeout` to simulate real-world delays and improve the checkout experience.

## Key Packages

- **[react-hook-form](https://react-hook-form.com/)**: Simplifies form handling and validation.
- **[react-hot-toast](https://react-hot-toast.com/)**: Sleek and customizable notification system.
- **[react-icons](https://react-icons.github.io/react-icons/)**: A collection of icons for enhancing the design.
- **[react-router-dom](https://reactrouter.com/)**: Enables seamless multi-page routing.

## How to Run

1. Clone the repository:
   ```bash
   [git clone https://github.com/your-username/eCommerce-repliq.git](https://github.com/hasibulmahi/repliq-ecommerce.git)
