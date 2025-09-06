# Quichat

A real-time chat application with a clean interface and mobile-responsive design.

## Features

- Real-time messaging
- Auto-join system
- Single public room
- Click usernames to edit
- WhatsApp-style message alignment
- Mobile-responsive design
- Random username generation

## What makes it different

The app focuses on simplicity. No complex room systems or confusing interfaces. Everyone joins the same public chat automatically when they visit. Messages align like popular messaging apps - yours on the right, others on the left.

The interface adapts to mobile screens by moving the users list to a dropdown in the header, keeping the chat area clean and focused.

## Technology

Built with Node.js, Express, and Socket.IO for real-time communication. The frontend uses modern CSS with custom properties and flexbox layouts. No frameworks - just clean, vanilla JavaScript.

## Architecture

The server handles WebSocket connections through Socket.IO, manages user state, and broadcasts messages to all connected clients. The client-side code automatically connects users and handles the real-time interface updates.

### Server (server.mjs)
Manages user connections, message broadcasting, and username changes. Uses Socket.IO for real-time communication.

### Client (public/)
- `index.html` - Clean semantic structure
- `style.css` - Modern dark theme with responsive design  
- `app.js` - Real-time functionality and user interactions

## Customization

You can modify the username generation by editing the adjectives and nouns arrays in `app.js`. Color scheme can be changed through CSS variables in `style.css`.

The app automatically generates usernames by combining adjectives like "Cool", "Smart", "Epic" with animals like "Tiger", "Dragon", "Wolf".

## File Structure

```
quichat/
├── server.mjs          # Main server file
├── package.json        # Dependencies
├── public/
│   ├── index.html     # Main page
│   ├── style.css      # Styling
│   └── app.js         # Client logic
└── README.md          # This file
```

## Development

The app runs on port 3500 by default. The server serves static files from the public directory and handles Socket.IO connections for real-time messaging.

Messages are broadcast to all connected users instantly. User lists update automatically when people join or leave. The interface maintains state during the session but doesn't persist data between server restarts.

## Design Decisions

- Single room keeps things simple
- Auto-join removes friction
- WhatsApp-style alignment feels familiar
- Mobile-first responsive design
- No typing indicators to reduce noise
- Content-fitting message bubbles

This is a straightforward chat app focused on ease of use and clean design.