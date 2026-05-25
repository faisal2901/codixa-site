# Codixa - Deployment Guide

Your website is **ready to deploy to Vercel**. Pick one of the three options below. Easiest is #1.

---

## Option 1: One-Click Drag and Drop (Fastest, 60 seconds)

1. Go to https://vercel.com/new
2. Sign in (use Google or GitHub, free account)
3. Scroll down to "Deploy a template" and click "Browse all templates"
4. **Even easier:** go to https://app.netlify.com/drop and just drag this entire folder. You get a live URL in 30 seconds. (Netlify is great for instant testing; Vercel is recommended for production.)

To deploy on Vercel via drag-drop:
1. Open https://vercel.com/new
2. Click on **"Import Project"** then choose **"Other"**
3. Drag the entire `outputs` folder into the upload area
4. Vercel auto-detects it as a static site, deploys, and gives you a URL like `codixa-xyz.vercel.app`

---

## Option 2: Vercel CLI (Best for ongoing updates)

If you have Node.js installed on your computer:

```bash
# 1. Install Vercel CLI (one time)
npm install -g vercel

# 2. Go into the website folder
cd path/to/this/folder

# 3. Deploy
vercel

# 4. Follow prompts. First time it asks you to log in. Choose defaults for everything.
# 5. To deploy to production with custom domain:
vercel --prod
```

You will get a live URL immediately. Share that link with anyone, it works worldwide.

---

## Option 3: GitHub + Vercel (Best for long-term, auto-deploys on edits)

1. Create a free GitHub account at https://github.com
2. Create a new repository called `codixa-site`
3. Upload all the files in this folder to that repo
4. Go to https://vercel.com/new
5. Click "Import Git Repository", pick your `codixa-site` repo
6. Click "Deploy". Done in 30 seconds.

After this, every time you push a change to GitHub, Vercel auto-deploys in seconds.

---

## After Deployment: Custom Domain (Optional but recommended)

1. Buy `codixa.com` or `codixa.in` on Namecheap, GoDaddy, or Cloudflare (around 800 INR or $10 per year)
2. In your Vercel dashboard: Project Settings then Domains
3. Add your domain. Vercel gives you DNS records.
4. Copy those records to your domain registrar's DNS settings.
5. Wait 5 to 60 minutes. Your site is now at codixa.com with free HTTPS.

---

## Getting Top SEO Rankings

The site is already SEO-optimized at the technical level (meta tags, structured data, sitemap, fast loading, mobile responsive). To actually rank on Google, do these things in order:

### Week 1
- Submit your site to Google Search Console: https://search.google.com/search-console
  - Add property: codixa.com
  - Verify ownership (Vercel makes this easy)
  - Submit your sitemap: https://codixa.com/sitemap.xml
- Submit to Bing Webmaster Tools: https://www.bing.com/webmasters
- Create a Google Business Profile: https://www.google.com/business (if serving India locally)

### Week 2 to 4
- List your business on:
  - Clutch.co (top software development directory)
  - GoodFirms.co
  - DesignRush
  - SoftwareSuggest (India focused)
  - Sortlist
- Post on:
  - LinkedIn (3 posts per week showing your work)
  - Twitter/X (build in public)
  - Reddit: r/IndianStartups, r/IndieHackers, r/Entrepreneur, r/Freelance
  - Indian Facebook groups: "Indian Startup Founders", "Bootstrapping in India"

### Month 2 onwards
- Start a blog (add a blog.html page or use a separate domain)
- Write 2 articles per week targeting keywords like:
  - "How to build an MVP cheap in India"
  - "Best software development company in [city]"
  - "Affordable web development for startups"
- Each blog post = a chance to rank on Google
- Get backlinks from Indian startup blogs, founders you've worked with

### Realistic expectations
- Day 1: Site is indexed by Google in 24 to 72 hours
- Month 1: You start showing for low-competition keywords ("codixa", "mohammed faisal software")
- Month 3: You start ranking on page 2 or 3 for "affordable software development india"
- Month 6 to 12: With consistent content and backlinks, you can rank on page 1 for long-tail keywords
- Ranking #1 for "software providers" globally: takes 1 to 2 years of solid SEO work. Focus on city-specific or niche keywords first where you can win fast.

---

## Updating Contact Info Later

If you change your number or email, just open `contact.html` and `*.html` files, find and replace:
- Email: `fk5674282@gmail.com`
- WhatsApp link: `https://wa.me/919177304813`

These are the only contact touchpoints on the site.

---

## Files in this Folder

- `index.html` - Homepage
- `services.html` - Services page
- `pricing.html` - Pricing page
- `portfolio.html` - Portfolio
- `about.html` - About founder
- `contact.html` - Contact and form
- `styles.css` - All styles
- `script.js` - All interactivity
- `favicon.svg` - Browser tab icon
- `robots.txt` - SEO crawler rules
- `sitemap.xml` - Sitemap for Google
- `vercel.json` - Vercel deployment config
- `DEPLOY.md` - This file

Done. You are ready to launch.
