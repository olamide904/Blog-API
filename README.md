# BLOG API

A robust API designed with authentication to create, read, edit and delete articles.

---

## PROJECT OVERVIEW
This backend provides full CRUD functionality. It features advanced querying capabilities including searching keywords across titles and content, sorting, and pagination.

---

## | Tech Stack

- Runtime: Node.js
- Framework: Express.js
- Database: MongoDB Atlas
- Validation: Joi / Mongoose Validation
- Hosting: Render.com

---

## | Setup

1.  **Clone the repository:**

        git clone https://github.com/olamide904/Blog-API

2.  **Install dependencies:**
    npm install

3.  **Configure Environment Variables (Create a .env file):**

        PORT=your_port_number
        MONGO_URI=your_mongodb_connection_string_here
        JWT_SECRET=your_string_secret
        CLOUDINARY_NAME =your_cloudinary_name
        CLOUDINARY_KEY =your_cloudinary_key
        CLOUDINARY_SECRET =your_string_secret


4.  **Start the server:**

        npm start

5.  ## Endpoints

All requests should be made to the following base URL:
`https://your-app-name.onrender.com/api`

---

### Auth Resource

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and receive a token |

**POST Body (register):** `{ username, email, password }`
**POST Body (login):** `{ email, password }`

**Response:** Returns a JWT token on success.

---

### Articles Resource

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/articles | Create a new article |
| GET | /api/articles | Fetch all articles |
| GET | /api/articles/:id | Fetch a single article |
| PUT | /api/articles/:id | Update an existing article |
| DELETE | /api/articles/:id | Remove an article |

**POST/PUT Body:** `{ title, content, category }`

> All the article routes require authentication.

---

### Authentication

Protected routes require a Bearer token in the request header:
---

## Query Parameters

GET `/api/articles` supports the following query parameters:

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| page | number | Page number | ?page=2 |
| limit | number | Results per page | ?limit=10 |
| sort | string | Sort by field | ?sort=createdAt |
| search | string | Search by keyword | ?search=fire |

**Example request:**
`GET /api/articles?page=1&limit=10&sort=createdAt&search=sacred`

---

## Error Responses

| Status | Meaning |
|--------|---------|
| 400 | Bad request / validation failed |
| 401 | Unauthorized - token missing or invalid |
| 404 | Resource not found |
| 500 | Internal server error |