# Quichat - Modern Real-Time Chat Application

A sleek, modern real-time chat application built with Node.js, Express, and Socket.IO. Features a clean WhatsApp-style interface with mobile-responsive design.

## ✨ Features

### 🚀 Core Functionality
- **Real-time messaging** with instant delivery
- **Auto-join system** - no manual room joining required
- **Single public room** for all users
- **Click-to-edit usernames** with random name generation
- **Military time format** (24-hour) timestamps
- **Message persistence** during session

### 🎨 Modern UI/UX
- **WhatsApp-style message alignment** (your messages right, others left)
- **Dark theme** with gradient backgrounds
- **Content-fitting message bubbles** with auto-sizing
- **Custom scrollbar** styling
- **Clean typography** with optimized font sizing
- **Responsive design** for desktop and mobile

### 📱 Mobile-Optimized
- **Compact header** with logo and title scaling
- **Users dropdown** in header (replaces sidebar on mobile)
- **Touch-friendly** buttons and interactions
- **Single-line header** layout on mobile
- **Responsive breakpoints** for tablets and phones

### 🔧 Technical Features
- **Socket.IO** for real-time communication
- **Express.js** backend with clean architecture
- **Auto-generated usernames** (adjective + animal combinations)
- **User count display** with live updates
- **Modern ES6+** JavaScript
- **CSS Grid and Flexbox** layouts

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js, Socket.IO
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Real-time**: WebSocket communication via Socket.IO
- **Styling**: Custom CSS with CSS variables and modern layouts

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/amnxd/quichat.git
   cd quichat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node server.mjs
   ```

4. **Open your browser**
   ```
   http://localhost:3500
   ```

## 📱 Usage

1. **Auto-join**: The app automatically joins you to the public chat room
2. **Random username**: A cool username is generated automatically (e.g., "CoolTiger", "SmartDragon")
3. **Edit name**: Click on your name to edit it
4. **Send messages**: Type and press Enter or click Send
5. **View users**: Click the "Users" button to see who's online
6. **Mobile**: Optimized interface adapts to your screen size

## 🏗️ Architecture

### Server (server.mjs)
- **Socket.IO server** handling real-time connections
- **User management** with join/leave functionality  
- **Message broadcasting** to all connected users
- **Username change handling** with live updates
- **Military time formatting** for timestamps

### Client (Frontend)
- **Modern HTML5** structure with semantic elements
- **Responsive CSS** with mobile-first approach
- **Interactive JavaScript** for real-time features
- **Auto-join functionality** for seamless UX

## 🎯 Key Components

### Message System
- **Smart alignment**: Your messages appear on the right, others on the left
- **Content-adaptive sizing**: Message bubbles fit their content
- **Bold user messages**: Your text is bold and white for emphasis
- **Subtle timestamps**: Military time format, small and unobtrusive

### User Interface
- **Compact header**: Logo, title, name input, and users dropdown
- **Full-width chat**: No sidebar distractions
- **Mobile dropdown**: Users list accessible via header button
- **Clean forms**: Minimal, modern input styling

### Responsive Design
- **Desktop**: Full header with all elements
- **Tablet**: Adjusted spacing and sizing
- **Mobile**: Stacked layout with users dropdown

## 🔧 Configuration

### Environment Variables
- `PORT`: Server port (default: 3500)
- `NODE_ENV`: Environment mode

### Customization
- **Colors**: Modify CSS variables in `style.css`
- **Names**: Update adjectives/nouns arrays in `app.js`
- **Timing**: Adjust timestamp format in `server.mjs`

## 📁 Project Structure

```
quichat/
├── server.mjs          # Express + Socket.IO server
├── package.json        # Dependencies and scripts
├── public/
│   ├── index.html     # Main HTML structure
│   ├── style.css      # Modern styling with responsive design
│   ├── app.js         # Client-side JavaScript
│   └── bg.jpeg        # Background image (removed from UI)
├── README.md          # This file
└── SECURITY.md        # Security guidelines
```

## 🚀 Features in Detail

### Auto-Join System
No need to manually join rooms - users are automatically connected to the public chat when they open the app.

### Smart Username Generation
Combines cool adjectives with powerful animals:
- Adjectives: Cool, Smart, Fresh, Epic, Wise, Nice, Fun, Wild, Chill, Brave
- Animals: Tiger, Dragon, Phoenix, Wolf, Eagle, Lion, Bear, Shark, Falcon, Panther

### WhatsApp-Style Messaging
- Your messages: Right-aligned with white text on blue background
- Others' messages: Left-aligned with light text on gray background
- Content-fitting bubbles that adapt to message length

### Mobile-First Design
- Responsive breakpoints at 900px and 600px
- Touch-optimized button sizes
- Efficient use of screen space
- Single-line header on mobile devices

## 🛡️ Security

See `SECURITY.md` for security guidelines and best practices.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Socket.IO for real-time communication
- Express.js for the web framework
- Modern CSS techniques for responsive design

---

**Quichat** - Where conversations flow naturally 💬