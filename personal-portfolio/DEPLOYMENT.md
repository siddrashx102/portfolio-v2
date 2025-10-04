# Deployment Guide

This guide provides step-by-step instructions for deploying your personal portfolio website to various platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Vite settings
7. Click "Deploy"

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

### Option 2: Netlify

**Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up/login with GitHub
4. Click "New site from Git"
5. Choose your repository
6. Build settings are auto-detected
7. Click "Deploy site"

**Custom Domain:**
- Go to Site Settings → Domain Management
- Add custom domain
- Configure DNS settings

### Option 3: GitHub Pages

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`
4. Enable GitHub Pages in repository settings

## 🔧 Pre-Deployment Checklist

- [ ] Update personal information in all sections
- [ ] Replace placeholder images with your photos
- [ ] Update project data with your actual projects
- [ ] Test all links and forms
- [ ] Verify responsive design on mobile
- [ ] Test dark/light mode toggle
- [ ] Check all animations work properly

## 📱 Testing Your Deployment

1. **Desktop Testing:**
   - Test all sections and navigation
   - Verify dark/light mode toggle
   - Check hover effects and animations
   - Test contact form submission

2. **Mobile Testing:**
   - Test responsive design
   - Check touch interactions
   - Verify mobile navigation
   - Test form on mobile

3. **Performance Testing:**
   - Use Google PageSpeed Insights
   - Check Core Web Vitals
   - Optimize images if needed

## 🎨 Customization Before Deploy

### Essential Updates:
1. **Personal Information:**
   - Name, title, bio in Home and About sections
   - Contact information in Contact section
   - Social media links in Footer

2. **Projects:**
   - Replace with your actual projects
   - Update GitHub and live demo URLs
   - Add your own project screenshots

3. **Skills:**
   - Update with your actual skills
   - Adjust proficiency levels
   - Add/remove skills as needed

4. **Styling:**
   - Update color scheme if desired
   - Modify fonts and spacing
   - Add your personal branding

## 🚨 Common Issues & Solutions

### Build Errors:
- **Solution:** Run `npm install` and `npm run build`
- **Check:** All imports are correct and files exist

### Styling Issues:
- **Solution:** Clear browser cache and hard refresh
- **Check:** CSS imports in main.jsx and App.jsx

### Animation Issues:
- **Solution:** Ensure Framer Motion is properly installed
- **Check:** Animation variants are correctly defined

### Responsive Issues:
- **Solution:** Test on multiple devices and screen sizes
- **Check:** Bootstrap classes and custom CSS media queries

## 📊 Performance Optimization

1. **Image Optimization:**
   - Use WebP format when possible
   - Compress images before uploading
   - Use appropriate image sizes

2. **Code Optimization:**
   - Remove unused CSS
   - Minimize JavaScript bundles
   - Use lazy loading for images

3. **SEO Optimization:**
   - Add meta tags in index.html
   - Use semantic HTML structure
   - Add alt text to images

## 🔄 Continuous Deployment

### Automatic Deployments:
- **Vercel/Netlify:** Automatic on git push
- **GitHub Pages:** Manual deployment required

### Manual Updates:
1. Make changes locally
2. Test thoroughly
3. Commit and push to repository
4. Verify deployment

## 📞 Support

If you encounter issues during deployment:

1. Check the platform's documentation
2. Review build logs for errors
3. Test locally first with `npm run build`
4. Check browser console for JavaScript errors

---

**Happy Deploying! 🎉**