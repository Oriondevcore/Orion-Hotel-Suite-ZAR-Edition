# 📁 ARIA Project Folder Structure

Here's exactly how your project should be organized:

```
ARIA/                          ← Your project folder
│
├── server.js                  ← Backend (Gemini AI, notifications, etc.)
├── package.json               ← Dependencies (RENAME from new-package.json)
├── .env                        ← Your secret API keys (RENAME from env-example.txt)
├── firebase-key.json          ← Firebase credentials (download from Firebase)
│
├── public/                    ← Web files (served by Express)
│   └── index.html             ← Chat interface + Dashboard
│
├── node_modules/              ← Dependencies (auto-created by npm install)
│
├── ARIA_SETUP_GUIDE.md        ← Complete setup instructions
├── ARIA_FEATURES_SUMMARY.txt  ← Feature list
├── QUICK_START_VISUAL.txt     ← Step-by-step visual guide
│
└── .gitignore                 ← Don't upload secrets to GitHub
```

---

## 🚀 QUICK START STEPS (In Order)

### 1️⃣ Create the folder
```bash
mkdir ARIA
cd ARIA
```

### 2️⃣ Download and organize files
Place these files in your ARIA folder:
- `server.js`
- `new-package.json` (rename to `package.json`)
- `env-example.txt` (rename to `.env` and fill in your keys)
- `index.html`
- `ARIA_SETUP_GUIDE.md`
- `ARIA_FEATURES_SUMMARY.txt`
- `QUICK_START_VISUAL.txt`

### 3️⃣ Create public folder and move HTML
```bash
mkdir public
mv index.html public/
```

### 4️⃣ Rename files
```bash
mv new-package.json package.json
mv env-example.txt .env
```

### 5️⃣ Get Firebase key
- Download `firebase-key.json` from Firebase Console
- Place it directly in the ARIA/ folder

### 6️⃣ Edit .env file
Open `.env` and add your API keys:
```
GEMINI_API_KEY=your-gemini-api-key
FIREBASE_DATABASE_URL=https://your-project.firebaseio.com
PORT=3000
EMAIL_USER=your-email@gmail.com (optional)
EMAIL_PASSWORD=your-app-password (optional)
```

### 7️⃣ Install dependencies
```bash
npm install
```

### 8️⃣ Start ARIA
```bash
npm start
```

### 9️⃣ Open browser
Go to: **http://localhost:3000**

---

## 📄 File Descriptions

### Core Application Files

**server.js** (Backend - ~550 lines)
- Runs the Express web server
- Handles Gemini AI calls
- Manages Firebase database operations
- Sends email/SMS notifications
- Processes intelligent task assignments
- Key functions:
  - `callGeminiAI()` - Talk to Gemini AI
  - `assignTaskToFamilyMember()` - Smart task assignment logic
  - `notifyFamilyMember()` - Send notifications
  - `/api/message` - Chat endpoint
  - `/api/tasks` - Task management endpoint
  - `/api/family-status` - Family status tracking

**public/index.html** (Frontend - ~800 lines)
- Beautiful chat interface (left side)
- Real-time dashboard (right side)
- Displays tasks and family status
- Auto-refreshes every 3 seconds
- Features:
  - Send messages to ARIA
  - View task list with priorities
  - See family member status
  - Mark tasks complete
  - Beautiful gradient design
  - Responsive on all devices

**package.json** (Dependencies)
Lists all npm packages needed:
- `firebase-admin` - Connect to Firebase
- `axios` - Make HTTP requests to Gemini
- `express` - Web server framework
- `dotenv` - Load environment variables
- `nodemailer` - Send emails
- `twilio` - Send SMS messages

**.env** (Configuration - KEEP SECRET!)
Your API keys and configuration:
- `GEMINI_API_KEY` - Your Gemini API key
- `FIREBASE_DATABASE_URL` - Your Firebase database URL
- `PORT` - Server port (usually 3000)
- `EMAIL_USER` - Gmail address (optional)
- `EMAIL_PASSWORD` - Gmail app-specific password (optional)
- `TWILIO_ACCOUNT_SID` - Twilio account ID (optional)
- `TWILIO_AUTH_TOKEN` - Twilio token (optional)
- `TWILIO_PHONE_NUMBER` - Twilio phone number (optional)

**firebase-key.json** (Credentials - KEEP SECRET!)
- Downloaded from Firebase Console
- Authenticates your app to Firebase
- Contains private keys - NEVER commit to GitHub!

### Documentation Files

**ARIA_SETUP_GUIDE.md**
- Complete step-by-step setup instructions
- Firebase configuration tutorial
- Gmail setup for email notifications
- Twilio setup for SMS notifications
- Troubleshooting guide
- Customization tips

**ARIA_FEATURES_SUMMARY.txt**
- List of all features
- What ARIA can do
- Example conversations
- Technology stack explained

**QUICK_START_VISUAL.txt**
- Visual step-by-step guide
- ASCII diagrams
- 9 numbered steps with examples
- Quick troubleshooting

---

## 🔐 Security Checklist

Create a `.gitignore` file so you don't accidentally upload secrets:

```
.env
firebase-key.json
node_modules/
*.log
```

**NEVER upload to GitHub:**
- ✋ `.env` (has your API keys!)
- ✋ `firebase-key.json` (has Firebase credentials!)
- ✋ `node_modules/` (auto-generated, huge folder)

---

## 🎯 What Happens When You Run npm start?

```
1. npm start
   ↓
2. server.js loads:
   - Reads .env file
   - Loads Firebase credentials
   - Initializes Express server
   - Sets up routes (/api/message, /api/tasks, etc.)
   ↓
3. Server starts listening on http://localhost:3000
   ↓
4. Browser loads index.html
   ↓
5. Frontend shows:
   - Chat window on left (purple gradient)
   - Dashboard on right (stats, family, tasks)
   - Auto-connects to backend API
   ↓
6. You type a message
   ↓
7. Sent to /api/message endpoint
   ↓
8. Server processes:
   - Saves to Firebase
   - Sends to Gemini AI
   - Analyzes: Task or Chat?
   ↓
9. If Task: Assign, notify, save
   If Chat: Respond naturally
   ↓
10. Dashboard updates in real-time
```

---

## 💡 Useful Commands

```bash
# Start ARIA
npm start

# Check Node version
node --version

# Check npm version
npm --version

# List installed packages
npm list

# Install specific package
npm install package-name

# Stop the server
Ctrl + C (in terminal)

# Clear terminal
clear (Mac/Linux) or cls (Windows)
```

---

## 🐛 Debug Tips

### Check Server Logs
The terminal shows all messages from ARIA. Look for:
- `✓` = Success
- `✗` or ❌ = Error
- Red text = Problems

### Open Browser Console
1. Press **F12**
2. Go to **Console** tab
3. See any JavaScript errors

### View Firebase Data
1. Go to Firebase Console
2. Click **Realtime Database**
3. Expand to see live data:
   - `/tasks/` - All household tasks
   - `/messages/` - Chat history
   - `/familyStatus/` - Who's home, busy, etc.
   - `/notifications/` - Unread alerts

### Test Endpoints Manually
```bash
# Get chat history
curl http://localhost:3000/api/messages

# Get all tasks
curl http://localhost:3000/api/tasks

# Get family status
curl http://localhost:3000/api/family-status

# Send a test message
curl -X POST http://localhost:3000/api/message \
  -H "Content-Type: application/json" \
  -d '{"from":"son","message":"test message"}'
```

---

## 🎨 Customizing ARIA

### Change Her Personality
Edit `server.js`, find this section:

```javascript
const AI_AGENT = {
  name: 'ARIA',
  title: 'Home Intelligence Assistant',
  personality: `You are ARIA...`
};
```

Modify the personality string to change how she behaves!

### Change Colors/Theme
Edit `public/index.html`, find the CSS `:root` section:

```css
:root {
    --primary: #2c3e50;
    --secondary: #3498db;
    --accent: #e74c3c;
    --success: #27ae60;
    --warning: #f39c12;
    /* ... more colors ... */
}
```

Change the hex colors to your preferred palette!

### Add More Family Members
Edit `public/index.html`, find:

```javascript
const familyMembers = ['father', 'mother', 'brother', 'son', 'daughter'];
const avatars = {
    father: '👨',
    mother: '👩',
    brother: '👦',
    son: '👦',
    daughter: '👧'
};
```

Add more:
```javascript
const familyMembers = ['father', 'mother', 'brother', 'son', 'daughter', 'grandmother', 'grandfather'];
const avatars = {
    father: '👨',
    mother: '👩',
    brother: '👦',
    son: '👦',
    daughter: '👧',
    grandmother: '👵',
    grandfather: '👴'
};
```

---

## 📊 Firebase Database Structure

Here's how data is organized in your Firebase database:

```
root/
│
├── tasks/
│   ├── -LjxKw1...: {
│   │   id: "-LjxKw1...",
│   │   task: "Buy milk",
│   │   assignedTo: "father",
│   │   status: "assigned" or "completed",
│   │   reason: "He's available",
│   │   priority: "high/medium/low",
│   │   estimatedTime: "15 mins",
│   │   createdAt: 1708099200,
│   │   completedAt: null
│   │}
│   └── -LjxKw2...: {...}
│
├── messages/
│   ├── -LjxKw3...: {
│   │   from: "son",
│   │   message: "Can someone buy milk?",
│   │   type: "user" or "ai",
│   │   createdAt: 1708099200,
│   │   timestamp: "2024-02-16T10:30:00Z"
│   │}
│   └── -LjxKw4...: {...}
│
├── familyStatus/
│   ├── father: {
│   │   status: "at work",
│   │   updatedAt: 1708099200
│   │}
│   ├── mother: {status: "at home", updatedAt: ...}
│   └── ...
│
├── notifications/
│   ├── father/
│   │   ├── -LjxKw5...: {
│   │   │   message: "Son assigned you: Buy milk",
│   │   │   read: false,
│   │   │   createdAt: 1708099200,
│   │   │   type: "in-app"
│   │   │}
│   │   └── ...
│   └── ...
│
└── familyMembers/
    ├── father/
    │   ├── email: "dad@gmail.com"
    │   ├── phone: "+1-555-0100"
    │   └── status: "online"
    └── ...
```

---

## ❓ FAQs

**Q: Can I run ARIA on multiple computers?**
A: Not at the same time - ARIA lives on one laptop. But you can move the folder to another laptop and it will sync with the same Firebase database!

**Q: Does ARIA work without internet?**
A: No, she needs internet for Gemini AI and Firebase. But you could modify the code to use a local database.

**Q: How do I change ARIA's name?**
A: Edit `server.js`, change `name: 'ARIA'` to whatever you want.

**Q: Can everyone chat at once?**
A: Yes! Each person uses a different `from` name and everyone sees the same chat history.

**Q: What if I don't want email/SMS?**
A: No problem! They're optional. The system works great with just in-app notifications.

**Q: How do I stop ARIA?**
A: Press **Ctrl+C** in the terminal.

---

## 🚀 Next Steps

1. Follow **QUICK_START_VISUAL.txt** (easiest!)
2. Read **ARIA_SETUP_GUIDE.md** for detailed instructions
3. Check **ARIA_FEATURES_SUMMARY.txt** to see all capabilities
4. Experiment with different messages to ARIA
5. Customize her personality in `server.js`
6. Add email/SMS notifications when ready

---

Made with ❤️ for the mad developer who believes in setting AI free! 🤖💜

**Ready to welcome ARIA to your family?** 🏠✨
