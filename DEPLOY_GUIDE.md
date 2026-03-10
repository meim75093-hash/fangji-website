# 🚀 GitHub Pages Deployment Guide - Fen Fang Ji Website

Complete step-by-step guide to deploy your website to GitHub Pages.

---

## 📋 Prerequisites

- A GitHub account (free at https://github.com)
- Git installed on your computer
- Your website files ready in the `fangji-website` folder

---

## Step 1: Create a GitHub Repository

### 1.1 Go to GitHub
1. Open your browser and go to **https://github.com**
2. Log in to your GitHub account

### 1.2 Create New Repository
1. Click the **"+"** icon in the top-right corner
2. Select **"New repository"** from the dropdown

### 1.3 Fill Repository Details
```
Repository name: fangji-website
Description:     Fen Fang Ji (粉防杞) Official Website
Visibility:      ○ Public  (required for free GitHub Pages)
```

### 1.4 Repository Settings
- ☐ **DO NOT** check "Initialize this repository with a README"
- ☐ **DO NOT** add .gitignore
- ☐ **DO NOT** add a license

### 1.5 Create Repository
Click the green **"Create repository"** button

📸 *Screenshot: You'll see a page showing "Quick setup" with git commands*

---

## Step 2: Initialize Git and Push Your Code

### 2.1 Open Terminal/Command Prompt
Navigate to your website folder:
```bash
cd C:\Users\Administrator\.openclaw\workspace\fangji-website
```

### 2.2 Initialize Git Repository
```bash
git init
```

### 2.3 Add All Files
```bash
git add .
```

### 2.4 Create Initial Commit
```bash
git commit -m "Initial commit - Fen Fang Ji official website"
```

### 2.5 Connect to GitHub Repository
Replace `YOUR_USERNAME` with your actual GitHub username:
```bash
git remote add origin https://github.com/YOUR_USERNAME/fangji-website.git
```

### 2.6 Push to GitHub
```bash
git push -u origin main
```

⚠️ **Note**: If your default branch is named `master` instead of `main`, use:
```bash
git branch -M main
git push -u origin main
```

---

## Step 3: Enable GitHub Pages

### 3.1 Go to Repository Settings
1. Navigate to your repository on GitHub
2. Click the **"Settings"** tab (gear icon)

### 3.2 Find Pages Section
1. In the left sidebar, scroll down and click **"Pages"**
   (under the "Code and automation" section)

### 3.3 Configure Pages Source
1. Under **"Build and deployment"**:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` (or `master`)
   - **Folder**: Select `/ (root)`

2. Click **"Save"**

📸 *Screenshot: You'll see a message "Your site is live at..."*

---

## Step 4: Wait for Deployment

GitHub Pages will build your site. This usually takes **1-2 minutes**.

### Check Deployment Status
1. Stay on the Pages settings page
2. You'll see a progress indicator
3. When ready, you'll see:
   ```
   ✅ Your site is live at https://YOUR_USERNAME.github.io/fangji-website/
   ```

---

## 🎉 Your Website is Live!

### Access Your Website
```
https://YOUR_USERNAME.github.io/fangji-website/
```

### Share Your Website
- Copy the URL and share it with customers
- Add it to your social media profiles
- Include it in your business cards

---

## 🔄 Updating Your Website

After making changes to your website files:

```bash
# Navigate to website folder
cd C:\Users\Administrator\.openclaw\workspace\fangji-website

# Stage changes
git add .

# Commit changes
git commit -m "Update: describe your changes here"

# Push to GitHub (auto-updates the live site)
git push
```

GitHub Pages will automatically rebuild and deploy your updates within 1-2 minutes.

---

## 🛠️ Troubleshooting

### Problem: "Permission denied" or authentication error
**Solution**: Use a Personal Access Token (PAT)
```bash
# When prompted for password, use your PAT instead
# Generate PAT at: https://github.com/settings/tokens
```

### Problem: 404 Page Not Found
**Solutions**:
1. Wait 2-3 minutes for deployment to complete
2. Check that `.nojekyll` file exists in your repository
3. Verify `index.html` is in the root folder (not in a subfolder)
4. Refresh the page with Ctrl+F5 (hard refresh)

### Problem: Site shows but CSS/JS not loading
**Solutions**:
1. Check file paths in your HTML (should be relative: `css/style.css`)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Hard refresh the page (Ctrl+F5)

### Problem: Images not showing
**Solutions**:
1. Verify image files are in the `images/` folder
2. Check image paths in HTML are correct
3. Ensure file extensions match (`.jpg` vs `.png`)
4. Check file name case sensitivity (GitHub is case-sensitive)

---

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Desktop (GUI alternative)](https://desktop.github.com/)

---

## ✅ Deployment Checklist

- [ ] GitHub account created
- [ ] Repository created (public, no README)
- [ ] Git initialized locally
- [ ] All files committed
- [ ] Remote repository connected
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled (main branch, root folder)
- [ ] Website accessible at the URL
- [ ] All pages load correctly
- [ ] CSS and JavaScript working
- [ ] Images displaying properly

---

**🎊 Congratulations! Your Fen Fang Ji website is now live on GitHub Pages!**
