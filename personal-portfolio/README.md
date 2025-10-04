# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Bootstrap, and Framer Motion. Features a clean design, smooth animations, dark/light mode toggle, and mobile-first responsive layout.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Bootstrap grid system
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: Framer Motion animations and scroll effects
- **Modern UI**: Clean, professional design with hover effects
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Dynamic project cards with live demos
- **Skills Display**: Interactive skill badges with progress bars
- **SEO Optimized**: Semantic HTML structure

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation bar with theme toggle
│   ├── Footer.jsx      # Footer with social links
│   ├── ProjectCard.jsx # Project display component
│   └── SkillBadge.jsx  # Skill display component
├── sections/           # Page sections
│   ├── Home.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   ├── Skills.jsx      # Skills display
│   └── Contact.jsx     # Contact form
├── styles/             # CSS files
│   ├── App.css         # Main styles and CSS variables
│   ├── components.css  # Component-specific styles
│   └── sections.css    # Section-specific styles
├── data/               # Data files
│   └── projects.js     # Projects and skills data
├── utils/              # Utility functions
│   └── scrollAnimation.js # Scroll utilities
├── App.jsx             # Main app component
└── main.jsx           # App entry point
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **Home Section** (`src/sections/Home.jsx`)
   - Change name, title, and description
   - Update profile image URL

2. **About Section** (`src/sections/About.jsx`)
   - Update bio and personal information
   - Change profile image URL

3. **Projects Data** (`src/data/projects.js`)
   - Replace with your actual projects
   - Update GitHub and live demo URLs
   - Add your own project images

4. **Contact Information** (`src/sections/Contact.jsx`)
   - Update email, phone, and location
   - Modify social media links in Footer component

5. **Footer** (`src/components/Footer.jsx`)
   - Update social media links
   - Change copyright information

### Styling
- **Colors**: Modify CSS variables in `src/styles/App.css`
- **Fonts**: Update font families in the CSS files
- **Layout**: Adjust Bootstrap classes and custom CSS

### Adding New Sections
1. Create new component in `src/sections/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`
4. Style in `src/styles/sections.css`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts** to connect your GitHub repository

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to [Netlify](https://netlify.com)

3. **Or connect GitHub** repository for automatic deployments

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script** to `package.json`
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Bootstrap 5** - CSS framework
- **React Bootstrap** - Bootstrap components for React
- **Framer Motion** - Animation library
- **CSS3** - Custom styling with CSS variables

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help with customization, feel free to reach out:

- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

---

**Happy Coding! 🎉**