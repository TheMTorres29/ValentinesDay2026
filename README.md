# 💌 Valentine's Day - Interactive Proposal Web App

A romantic and interactive web application to ask that special someone to be your Valentine! Features a beautiful letter opening animation, personalized messages, and playful interactions. 💕

![Valentine's Day App](https://img.shields.io/badge/Made%20With-Love-ff69b4?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite)

## ✨ Features

### 🎁 Letter Opening Animation
- Beautiful animated envelope that opens to reveal the Valentine's proposal
- Smooth transitions and hover effects
- Peeking letter paper with heartbeat animation

### 💖 Personalized Experience
- Enter your partner's name to personalize the entire experience
- Custom messages throughout the app
- Remembers the name for future visits (stored locally)

### 🎨 Visual Effects
- Infinite floating pink and white hearts animation
- Smooth GIF transitions with heart-shaped masking
- Responsive design with beautiful gradient backgrounds

### 🎮 Interactive Proposal
- **Yes Button**: Triggers celebration with floating hearts and heart-shaped GIF
- **No Button**: Cycles through 20+ playful messages trying to convince them to say yes!

## 🚀 Live Demo

Visit: [https://themtorres29.github.io/ValentinesDay2026/](https://themtorres29.github.io/ValentinesDay2026/)

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Custom animations and styling
- **LocalStorage** - Saves partner name for returning visitors

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
git clone https://github.com/TheMTorres29/ValentinesDay2026.git cd ValentinesDay2026

2. **Install dependencies**
npm install

3. **Run the development server**
npm run dev

4. **Build for production**
npm run build
 
5. **Deploy to GitHub Pages**
npm run deploy


## 🎨 Customization

### Change the Partner's Name
Simply clear your browser's localStorage or enter a new name when prompted on first visit.

### Change Messages
Edit the `noMessages` array in `src/App.jsx` to customize the "No" button responses:


### Modify Colors
Update the color scheme in `src/App.css`, `src/Letter.css`, and `src/Config.css`:
- Primary pink: `#ff4d6d`
- Accent pink: `#ff69b4`
- Background: `#ebbcbc`

### Replace Images
Add your own GIFs to `src/assets/` and update the imports in `src/App.jsx`:
import mickeyFlowers from './assets/your-first-gif.gif' import mickeyKiss from './assets/your-second-gif.gif'


## 💡 How It Works

1. **Setup**: User enters their partner's name
2. **Letter Opens**: Partner clicks on the animated envelope
3. **Proposal Appears**: Personalized question "Will you be my Valentine?"
4. **Interactive Buttons**:
   - **Yes**: 
     - Changes GIF with smooth transition
     - Applies heart-shaped mask to new GIF
     - Triggers infinite heart animation
     - Changes message to success text
     - Hides buttons
   - **No**: Cycles through persuasive messages
5. **Memory**: Name is saved locally for future visits

## 🎯 Use Cases

- Valentine's Day proposals
- Anniversary surprises
- Creative way to ask someone out
- Fun interactive greeting card alternative
- Romantic gestures for any occasion

## 📱 PWA Support

This app is a Progressive Web App! Users can install it on their mobile devices for a native app-like experience.

## 🤝 Contributing

Feel free to fork this project and customize it for your own romantic endeavors! Pull requests are welcome.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 💖 Acknowledgments

- Inspired by love and creativity
- Built with React and lots of heart emojis
- Special thanks to Mickey Mouse for the GIFs 🐭

## 📞 Contact

Created by [@TheMTorres29](https://github.com/TheMTorres29)

---

**Made with 💕 for Valentine's Day 2026**

*"Love is in the code!"* 💻💘

## 🎁 Branches

- `master` - Personal version (configured for specific use)
- `public-template` - Public template (customizable for anyone)