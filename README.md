# AuthBan Board Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage Information](#usage-information)
* [Screenshots](#screenshots)
* [Links](#Links)
* [License](#license)
* [Questions](#questions)

## Description

This Kanban Board Application is a web-based project management tool that helps users visualize and manage their work. The application includes a secure login page and uses JSON Web Tokens (JWT) for authentication to ensure data security and user privacy.

## Installation

1. Clone the repo, 2. npm i, 3. npm run build, 4. npm run server:build, 5. npm run start:server

## Usage Information

### Loading the Login Page:

When you load the application, you will be presented with a login page.

The login page includes form inputs for your username and password.

#### Authentication:

Valid Credentials: Enter your valid username and password, then click the "Login" button. If the credentials are correct, you will be authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page.

Invalid Credentials: Entering an invalid username or password will result in an error message indicating that the credentials are incorrect.

#### JWT Storage:

Upon successful login, a JWT is securely stored in the client's local storage. This token is used for subsequent authenticated requests to the server.

#### Main Kanban Board Page

#### Accessing the Board:

Once authenticated, you will be redirected to the main Kanban board page.

The Kanban board allows you to visualize and manage your tasks through various columns representing different stages of your workflow.

#### Creating and Managing Tasks:

You can create new tasks, edit existing tasks, and move tasks between columns.

Each task can have details such as a title, description, due date, and status.

#### Logout Functionality

#### Logging Out:

To log out, click the "Logout" button available in the navigation bar.

This will remove the JWT from the client's local storage and redirect you to the login page.

#### Access Control

#### Protected Routes:

The main Kanban board page is protected. If you try to access this page without being authenticated, you will be redirected to the login page.

#### Session Expiration:

If you remain inactive for a defined period, your session will expire.

When the session expires, the JWT is invalidated. On your next action, you will be redirected to the login page.

#### Summary

Login: Enter valid credentials to log in and receive a JWT.

JWT Storage: The JWT is stored in local storage for authenticated requests.

Logout: Click "Logout" to remove the JWT and redirect to the login page.

Protected Routes: Unauthorized access redirects to the login page.

Session Expiration: Inactivity leads to session expiration and redirection to the login page.

## Screenshots

![2024-11-07_154938](https://github.com/user-attachments/assets/a547b689-67c7-41a8-9b76-87156a902b4f)

![2024-11-07_155008](https://github.com/user-attachments/assets/f49b638b-50e6-4b46-83f4-49354ec32b28)

![2024-11-07_155043](https://github.com/user-attachments/assets/d4b7c2c5-3556-4a60-b9e8-7bb11aed3537)

![2024-11-07_155107](https://github.com/user-attachments/assets/6820f3d2-be65-4b61-9dda-d59d885fbec9)

### Default Users that you can use.

![2024-11-07_155146](https://github.com/user-attachments/assets/386e2746-07a9-4bb1-a671-41464848840b)


## Links

Walkthrough Video - https://drive.google.com/file/d/13ZK1U6Tw3a7rF-xnxjxjrC4ebInZyZZ9/view?usp=sharing

Git Hub repository - https://github.com/Leo-webdev7/AuthBan_Board

Render link - https://authban-board.onrender.com

## License

This application is covered under the MIT license.

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to GitHub](https://github.com/Leo-webdev7)

<a href="mailto:lshapirov2@gmail.com">lshapirov2@gmail.com</a>

