const socket = io('https://chat.thebenevolent.in')   //  http://localhost:3500

const msgInput = document.querySelector('#message')
const nameInput = document.querySelector('#name')
const usersList = document.getElementById('users-list')
const usersCount = document.getElementById('users-count')
const usersPanel = document.getElementById('users-panel')
const usersToggle = document.querySelector('.users-toggle')

// Single, permanent room for the app
const ROOM = 'public'
const chatRoom = null

// Users dropdown functionality
usersToggle.addEventListener('click', () => {
    usersPanel.classList.toggle('active')
})

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.users-dropdown')) {
        usersPanel.classList.remove('active')
    }
})

// Default name generation and edit flow
let joined = false

function randomName() {
    const adjectives = ['Cool','Smart','Fresh','Epic','Wise','Nice','Fun','Wild','Chill','Brave']
    const nouns = ['Tiger','Dragon','Phoenix','Wolf','Eagle','Lion','Bear','Shark','Falcon','Panther']
    return `${adjectives[Math.floor(Math.random()*adjectives.length)]}${nouns[Math.floor(Math.random()*nouns.length)]}`
}

// Populate a default name on load if empty
if (nameInput && !nameInput.value) {
    nameInput.value = randomName()
}

// Auto-join the user as soon as the page loads
function autoJoin() {
    if (nameInput && nameInput.value) {
        joinRoom(nameInput.value)
    }
}

// Call auto-join when page loads
autoJoin()

// Make name input clickable for editing
if (nameInput) {
    // Click to edit name
    nameInput.addEventListener('click', () => {
        if (nameInput.readOnly) {
            nameInput.readOnly = false
            nameInput.focus()
            nameInput.select() // Select all text for easy editing
        }
    })

    // Save name on blur (when clicking away) or Enter key
    nameInput.addEventListener('blur', saveNameChange)
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            nameInput.blur() // This will trigger the blur event to save
        }
    })
}

function saveNameChange() {
    if (nameInput && !nameInput.readOnly) {
        nameInput.readOnly = true
        // If user already joined, notify server of name change
        if (joined && nameInput.value.trim()) {
            socket.emit('changeName', { name: nameInput.value, room: ROOM })
            // re-join with new name to update presence
            joinRoom(nameInput.value)
        }
    }
}

const chatDisplay = document.querySelector('.chat-display')

// Defensive guards in case UI elements are not present immediately
if (!chatDisplay) throw new Error('Missing .chat-display element')

function sendMessage(e) {
    e.preventDefault()
    if (nameInput.value && msgInput.value && joined) {
        socket.emit('message', {
            name: nameInput.value,
            text: msgInput.value
        })
        msgInput.value = ""
    }
    msgInput.focus()
}

// Function to join/rejoin room (used for auto-join and name changes)
function joinRoom(name) {
    if (name) {
        socket.emit('enterRoom', {
            name: name,
            room: ROOM
        })
        joined = true
    }
}

const formMsg = document.querySelector('.form-msg')
// No longer need form join since auto-join is enabled

if (formMsg) formMsg.addEventListener('submit', sendMessage)
// Removed form join event listener - auto-join handles this now

if (msgInput) {
    msgInput.addEventListener('keypress', () => {
        // Activity removed - no typing indicators
    })
}

// Listen for messages 
socket.on("message", (data) => {
    const { name, text, time } = data
    const li = document.createElement('li')
    li.className = 'post'
    if (name === 'Admin') li.className = 'post post--admin'
    else if (name === nameInput.value) li.className = 'post post--right'
    else if (name !== nameInput.value && name !== 'Admin') li.className = 'post post--left'
    if (name !== 'Admin') {
        li.innerHTML = `<div class="post__header ${name === nameInput.value
            ? 'post__header--user'
            : 'post__header--reply'
            }">
        <span class="post__header--name">${name}</span> 
        <span class="post__header--time">${time}</span> 
        </div>
        <div class="post__text">${text}</div>`
    } else {
        li.innerHTML = `<div class="post__text">${text}</div>`
    }
    document.querySelector('.chat-display').appendChild(li)

    chatDisplay.scrollTop = chatDisplay.scrollHeight
})

socket.on('userList', ({ users }) => {
    showUsers(users)
})



function showUsers(users) {
    usersList.textContent = ''
    usersCount.textContent = users ? users.length : 0
    
    if (users && users.length > 0) {
        // Display each user on a new line without header text
        users.forEach((user) => {
            const userDiv = document.createElement('div')
            userDiv.textContent = user.name
            userDiv.style.marginBottom = '4px'
            usersList.appendChild(userDiv)
        })
    } else {
        usersList.textContent = 'No users online'
    }
}

function showRooms(rooms) {
    roomList.textContent = ''
    if (rooms) {
        roomList.innerHTML = '<em>Active Rooms:</em>'
        rooms.forEach((room, i) => {
            roomList.textContent += ` ${room}`
            if (rooms.length > 1 && i !== rooms.length - 1) {
                roomList.textContent += ","
            }
        })
    }
}

