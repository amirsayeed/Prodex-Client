# ProDex - Next.js E-commerce Overview

A basic Next.js 15 application demonstrating a simple e-commerce workflow with public and protected pages, product management, and MongoDB integration via Express.js. Users can view products, see product details, and add new products after login.

---

## Live Demo

- **Frontend:** [ProDex Client](https://prodex-client.vercel.app/)
- **Backend:** [ProDex Server](https://prodex-server-eight.vercel.app/)

---

## Technologies Used

**Frontend:**

- Next.js 15 (App Router)
- Tailwind CSS
- DaisyUI
- NextAuth.js (Google OAuth)
- React Toastify

**Backend:**

- Node.js
- Express.js
- MongoDB (native driver)

**Authentication:**

- NextAuth.js with Google OAuth

**Styling & UI:**

- Tailwind CSS
- DaisyUI
- Responsive design with Flexbox & Grid

---

## Setup & Installation

### Frontend (Next.js)

1. Clone the repository:

   ```bash
   git clone https://github.com/amirsayeed/Prodex-Client
   cd Prodex-Client
   ```

2. Install dependencies::

   ```bash
   npm install
   ```

3. Configure environment variables in .env.local:

   ```bash
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXT_PUBLIC_API_URL=your_deployed_server_link
   ```

4. Run the development server::
   ```bash
   npm run dev
   ```

### Backend (Express + MongoDB)

1. Clone the repository:

   ```bash
   git clone https://github.com/amirsayeed/Prodex-Server
   cd Prodex-Server
   ```

2. Install dependencies::

   ```bash
   npm install
   ```

3. Configure environment variables in .env:

   ```bash
   DB_USER=your_mongodb_user_name
   DB_PASS=your_mongodb_pass
   ```

4. Start the server::
   ```bash
   node index.js
   ```

## Route Summary

### Frontend

| Path                     | Description                                  |
| ------------------------ | -------------------------------------------- |
| `/`                      | Landing page with banner and latest products |
| `/products`              | Product listing page                         |
| `/products/[id]`         | Product details page                         |
| `/login`                 | Login page (Google OAuth with NextAuth.js)   |
| `/dashboard/add-product` | Add Product page                             |

### Backend (Express API)

| Method | Path            | Description                   |
| ------ | --------------- | ----------------------------- |
| GET    | `/products`     | Fetch all products            |
| GET    | `/products/:id` | Fetch single product by ID    |
| POST   | `/products`     | Add a new product (protected) |
