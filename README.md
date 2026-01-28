# 💌 Valentine's Day 2026 - Interactive Proposal Web App

 https://themtorres29.github.io/ValentinesDay2026/

A romantic and interactive web application built with React to ask that special someone to be your Valentine! Features a beautiful letter opening animation, playful interactions, and email notifications when they say "Yes!" 💕

![Valentine's Day App](https://img.shields.io/badge/Made%20With-Love-ff69b4?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite)

## ✨ Features

### 🎁 Letter Opening Animation
- Beautiful animated envelope that opens to reveal the Valentine's proposal
- Smooth transitions and hover effects
- Peeking letter paper with heartbeat animation

### 💖 Interactive Proposal
- Clean, romantic UI with Mickey Mouse themed GIFs
- **Yes Button**: Triggers celebration with floating hearts and email notification
- **No Button**: Cycles through 20+ playful messages trying to convince them to say yes!

### 🎨 Visual Effects
- Infinite floating pink and white hearts animation
- Smooth transitions and animations
- Responsive design with beautiful gradient backgrounds

### 📧 Email Notifications
- Integrated with EmailJS to send instant notifications when "Yes" is clicked
- Get real-time updates when your Valentine accepts!

## 🚀 Demo

Visit the live site: [Your Deployment URL Here]

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **EmailJS** - Email notification service
- **CSS3** - Custom animations and styling

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
git clone https://github.com/TheMTorres29/ValentinesDay2026.git cd ValentinesDay2026


2. **Install dependencies**
npm install


3. **Configure EmailJS**

- Sign up at [EmailJS.com](https://www.emailjs.com/)
- Create an email service and template
- Update `src/App.jsx` with your credentials:
emailjs.init('YOUR_PUBLIC_KEY')
emailjs.send( 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams )


4. **Run the development server**
npm run dev


5. **Build for production**
npm run build


## 📧 EmailJS Template Setup

Create a template in EmailJS with the following variables:

- `{{to_email}}` - Your email address
- `{{message}}` - The confirmation message
- `{{date}}` - Timestamp of when they said yes

Example template:
Subject: She Said YES! 💕
Message: {{message}} Time: {{date}}
Your Valentine said yes!


## 🎨 Customization

### Change Messages
Edit the `noMessages` array in `src/App.jsx` to customize the "No" button responses:
const noMessages = [ "No", "Are you sure?", "Really?", // Add your own messages here! ]


### Modify Colors
Update the color scheme in `src/App.css` and `src/Letter.css`:
- Primary pink: `#ff69b4`
- Accent pink: `#ff4d6d`
- Background: `#ebbcbc`

### Replace Images
Add your own GIFs to `src/assets/` and update the imports in `src/App.jsx`.

## 📁 Project Structure
valentinesproject/ 
├── src/ │   
   ├── assets/ │   │   
      ├── mikey.gif      # Initial Mickey Mouse GIF │   │   
      └── kith.gif       # Celebration Mickey Mouse GIF │   
   ├── App.jsx            # Main application component │   
   ├── App.css            # Main styling │   
   ├── Letter.jsx         # Letter opening animation component │   
   ├── Letter.css         # Letter styling 
   └── main.jsx           # Entry point 
├── index.html 
├── package.json 
└── README.md


## 💡 How It Works

1. **Letter Opens**: User clicks on the animated envelope
2. **Proposal Appears**: Mickey Mouse and the question "Will you be my Valentine?"
3. **Interactive Buttons**:
   - **Yes**: 
     - Changes Mickey GIF to celebration
     - Triggers infinite heart animation
     - Sends email notification
     - Changes message to success text
     - Hides buttons
   - **No**: Cycles through persuasive messages
4. **Email Sent**: You receive instant notification when they say yes!

## 🎯 Use Cases

- Valentine's Day proposals
- Anniversary surprises
- Creative way to ask someone out
- Fun interactive greeting card alternative

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
