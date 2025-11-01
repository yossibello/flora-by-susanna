# Flora by Susanna - Flower Studio Website

A full-stack e-commerce website for a flower studio based in Stockholm, Sweden. Built with Next.js, TypeScript, Prisma, and PostgreSQL.

## Features

- 🌸 **Product Catalog**: Browse beautiful flower arrangements and bouquets
- 🛒 **Order Management**: Complete order processing system
- 👥 **Customer Database**: Track customer information and order history
- ⭐ **Reviews System**: Customer feedback and ratings
- 📊 **Admin Dashboard**: Manage inventory, orders, and customers
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 🚀 **Fast Performance**: Built with Next.js 14 and React Compiler

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Compiler** - Optimized React performance

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma ORM** - Modern database toolkit
- **PostgreSQL** - Robust relational database

### Deployment Options
- **Vercel** (Recommended) - Seamless Next.js hosting
- **Railway** - Full-stack deployment with database
- **AWS Amplify** - Enterprise-grade hosting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your database credentials:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/flora_db?schema=public"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   ```

3. **Set up the database**
   
   Generate Prisma client:
   ```bash
   npx prisma generate
   ```
   
   Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Schema

The application uses the following database models:

- **Customer**: Customer information and contact details
- **Flower**: Product catalog with pricing and availability
- **Order**: Order details and delivery information
- **OrderItem**: Individual items within an order
- **Review**: Customer reviews and ratings

## API Endpoints

### Flowers
- `GET /api/flowers` - Get all flowers
- `GET /api/flowers/[id]` - Get single flower
- `POST /api/flowers` - Create new flower
- `PUT /api/flowers/[id]` - Update flower
- `DELETE /api/flowers/[id]` - Delete flower

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/[id]` - Get single order
- `POST /api/orders` - Create new order
- `PUT /api/orders/[id]` - Update order
- `DELETE /api/orders/[id]` - Delete order

### Customers
- `GET /api/customers` - Get all customers
- `GET /api/customers/[id]` - Get single customer
- `POST /api/customers` - Create new customer
- `PUT /api/customers/[id]` - Update customer
- `DELETE /api/customers/[id]` - Delete customer

### Reviews
- `GET /api/reviews` - Get all reviews
- `POST /api/reviews` - Create new review

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables (DATABASE_URL)
4. Deploy!

Vercel automatically detects Next.js and configures everything.

### Database Hosting Options

- **Vercel Postgres** - Integrated with Vercel
- **Railway** - Includes PostgreSQL
- **Supabase** - Free PostgreSQL with additional features
- **Neon** - Serverless PostgreSQL

## Development Tools

### Prisma Studio

View and edit your database with Prisma Studio:
```bash
npx prisma studio
```

### Database Migrations

Create a new migration:
```bash
npx prisma migrate dev --name your_migration_name
```

## Contact

Flora by Susanna
- Email: hello@florabysusanna.se
- Location: Stockholm, Sweden

---

Built with ❤️ in Stockholm
