# Deployment Guide to Vercel

## ✅ Pre-Deployment Checklist (BEFORE pushing to GitHub)

### 1. Verify .gitignore ✅ DONE
Your `.env` file is already excluded from git - passwords are safe!

### 2. Install Vercel CLI (Optional but recommended)
```bash
npm i -g vercel
```

---

## 🚀 Deployment Steps

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Set up Vercel Project

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository: `yossibello/flora-by-susanna`
4. **Don't deploy yet!** Click **"Configure Project"**

### Step 3: Set up Vercel Postgres Database

1. In your Vercel project dashboard, go to **Storage** tab
2. Click **"Create Database"**
3. Select **"Postgres"**
4. Choose a name: `flora-db`
5. Click **"Create"**
6. Vercel will automatically add `DATABASE_URL` to your environment variables

### Step 4: Add Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

```env
# Database (automatically added by Vercel Postgres)
DATABASE_URL=postgresql://...
POSTGRES_PRISMA_URL=postgresql://...
POSTGRES_URL_NON_POOLING=postgresql://...

# NextAuth
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=generate-a-new-secret-here
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app

# Email Configuration (Loopia SMTP)
EMAIL_HOST=smtp.loopia.se
EMAIL_PORT=587
EMAIL_USER=info@florabysusanna.se
EMAIL_PASSWORD=your-actual-loopia-password
EMAIL_FROM=info@florabysusanna.se
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### Step 5: Configure Build Settings

Vercel should auto-detect Next.js. Ensure these settings:

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### Step 6: Add Prisma Build Script

Your `package.json` should include:
```json
{
  "scripts": {
    "build": "prisma generate && next build",
    "postinstall": "prisma generate"
  }
}
```

### Step 7: Deploy!

Click **"Deploy"** button in Vercel dashboard.

### Step 8: Run Database Migrations

After first deployment, you need to apply your database schema:

**Option A: Using Vercel CLI (Recommended)**
```bash
vercel env pull .env.production
npx prisma migrate deploy
```

**Option B: Using Vercel Dashboard**
1. Go to your project's **Settings** → **General**
2. Scroll to **"Ignored Build Step"**
3. Set custom command: `prisma migrate deploy && next build`

---

## 🔧 Update package.json Build Script

Make sure your build command includes Prisma:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "prisma generate && prisma migrate deploy && next build",
    "start": "next start",
    "postinstall": "prisma generate"
  }
}
```

---

## ✅ Post-Deployment Checklist

1. **Test form submission** on your live site
2. **Check email notifications** are working
3. **Verify database** using Prisma Studio:
   ```bash
   npx prisma studio --url="your-vercel-postgres-url"
   ```
4. **Set up custom domain** in Vercel (optional)
5. **Configure DNS** for florabysusanna.se

---

## 🔐 Security Reminders

- ✅ `.env` is already in `.gitignore` - passwords won't be committed
- ✅ All sensitive data should be in Vercel Environment Variables
- ⚠️ Never commit passwords or API keys to GitHub
- ⚠️ Generate a new `NEXTAUTH_SECRET` for production (don't reuse local one)

---

## 🐛 Troubleshooting

### Database Connection Error
- Ensure `DATABASE_URL` is set in Vercel environment variables
- Run `prisma migrate deploy` after deployment

### Build Fails
- Check build logs in Vercel dashboard
- Ensure `prisma generate` runs before `next build`

### Email Not Working
- Verify Loopia SMTP credentials in Vercel environment variables
- Check Vercel function logs for email errors

### Form Submissions Not Saving
- Check database connection
- Verify Prisma migrations were applied
- Check Vercel function logs

---

## 📊 Monitor Your Site

**View Submissions:**
```bash
npx prisma studio --url="your-production-database-url"
```

**Or create an admin panel** at `/admin/inquiries` (future enhancement)

---

## 🔄 Future Updates

After setup, deployments are automatic:
```bash
git add .
git commit -m "Your update message"
git push origin main
```

Vercel will automatically rebuild and deploy! 🎉
