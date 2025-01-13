ALX Portfolio Project: Grocery Store Management System
Project Overview
This portfolio project involves building a Grocery Store Management System as part of the ALX program. The application is designed as a three-tier architecture, encompassing the following components:

Front End: Developed using HTML, CSS, JavaScript, and Bootstrap for a responsive and user-friendly interface.
Backend: Built with Python and Flask, ensuring robust business logic and API support.
Database: Powered by MySQL for efficient and structured data storage.
Installation Instructions
Install MySQL
Download and install MySQL on your system from the official website:
MySQL Installer

Install Required Python Package
Use the following command to install the MySQL connector for Python:

bash
Copy code
pip install mysql-connector-python
Feature Enhancements and Exercises
As part of the development process, you will implement additional features and resolve identified issues based on user feedback. Below are the tasks for enhancement:

Products Module: Edit Product Functionality

Add an Edit button alongside the Delete button in the product listing page.
Clicking the button should display a form to modify product details.
Both the backend API and the frontend UI need to support this feature.
Products Module: Add New Unit of Measurement (UOM)

Create a form to allow users to add new Units of Measurement (e.g., "Cubic Meter").
Update the backend logic to store and retrieve UOMs from the database.
Ensure the frontend integrates seamlessly with this feature.
Orders Module: Input Validation

Add client-side validation to the New Order form to prevent the following errors:
Empty customer names.
Invalid or empty item names.
Missing or invalid quantities.
Orders Module: Fix Grand Total Calculation Bug

Address the issue where manually editing an item's total price does not update the grand total.
Ensure the grand total recalculates dynamically when item totals change.
Orders Module: View Order Details

Enhance the orders grid by adding a View button in the last column.
Clicking the button should open a detailed view of the selected order, displaying:
Each item's name, price, and quantity.
The overall order total.
This feature requires updates to both the frontend and backend.
Project Goals and Learning Outcomes
This project is designed to demonstrate proficiency in building full-stack applications by integrating various technologies and addressing real-world challenges. Through this project, you will:

Apply frontend development skills to create a functional and interactive UI.
Use Python and Flask for backend development and API integration.
Work with MySQL to manage and manipulate data efficiently.
Debug and enhance application features based on user feedback.
Showcase an ability to create scalable and maintainable software solutions.
This project will serve as a key component of your ALX portfolio, highlighting your skills and readiness for real-world software development challenges.







