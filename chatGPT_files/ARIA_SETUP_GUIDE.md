# 🏠 ARIA - Home AI Agent Complete Setup Guide

## What is ARIA?

**ARIA** (Adaptive Reasoning Intelligence Agent) is an intelligent AI that lives on your laptop. She's a member of your family, has her own personality, remembers everything, and helps manage household tasks. She can:

- ✅ Chat naturally with family members
- 🤖 Intelligently assign tasks based on who's available
- 📧 Send email notifications
- 📱 Send SMS text messages
- 📊 Show a beautiful dashboard of all tasks and family status
- 💬 Maintain a conversation history
- 🎯 Learn family preferences over time

---

## Prerequisites

- **Node.js** (v14+) - [Download](https://nodejs.org/)
- **Firebase Account** (free) - [Sign up](https://firebase.google.com/)
- **Gemini API Key** (free) - You already have this! ✓
- **Optional: Gmail account** for email notifications
- **Optional: Twilio account** for SMS notifications

---

## Step 1: Firebase Setup (10 mins)

### 1.1 Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Add Project**
3. Name it: `ARIA-HomeAgent`
4. Accept defaults, click **Create Project**

### 1.2 Create Realtime Database

1. Go to **Build** → **Realtime Database**
2. Click **Create Database**
3. Choose **Test Mode** (for development)
4. Select any location
5. Click **Enable**

**📋 Copy your Database URL** (looks like: `https://aria-homeagent-xxxxx.firebaseio.com`)

### 1.3 Get Service Account Key

1. Click **Settings ⚙️** → **Project Settings**
2. Go to **Service Accounts** tab
3. Click **Generate New Private Key**
4. Save the JSON file as `firebase-key.json` in your project folder

---

## Step 2: Project Setup (10 mins)

### 2.1 Create Project Folder

```bash
mkdir ARIA
cd ARIA
```

### 2.2 Copy Files

Create these files in your ARIA folder:
- `server.js` (the backend)
- `public/index.html` (the web interface)
- `firebase-key.json` (your Firebase credentials)
- `package.json`

### 2.3 Create `.env` File

Create a file named `.env` in your ARIA folder:

```
# REQUIRED
GEMINI_API_KEY=your-gemini-api-key-here
FIREBASE_DATABASE_URL=https://your-project.firebaseio.com
PORT=3000

# OPTIONAL: Email Notifications
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# OPTIONAL: SMS Notifications
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token
TWILIO_PHONE_NUMBER=+1234567890
```

---

## Step 3: Email Notifications Setup (Optional)

If you want ARIA to send email notifications:

### 3.1 Gmail Setup

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **Security** (left sidebar)
3. Enable **2-Step Verification**
4. Go to **App Passwords** (bottom of Security page)
5. Select **Mail** and **Windows Computer**
6. Google generates a 16-character password
7. Add to `.env`:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=abcd efgh ijkl mnop
   ```

**That's it!** ARIA will now send emails automatically.

---

## Step 4: SMS Notifications Setup (Optional)

If you want ARIA to send text messages:

### 4.1 Twilio Setup

1. Go to [Twilio.com](https://www.twilio.com/)
2. Sign up for free (get $15 trial credit)
3. Go to **Console Dashboard**
4. Copy your:
   - **Account SID**
   - **Auth Token**
   - **Twilio Phone Number** (you'll get one)

5. Add to `.env`:
   ```
   TWILIO_ACCOUNT_SID=ACxxxxxxxxxxx
   TWILIO_AUTH_TOKEN=your-token-here
   TWILIO_PHONE_NUMBER=+1234567890
   ```

### 4.2 Save Family Member Phone Numbers

When ARIA gets a notification request, she looks for phone numbers in Firebase:

```
Firebase:
familyMembers/
  ├── father/
  │   ├── phone: "+1-555-0100"
  │   └── email: "dad@email.com"
  ├── mother/
  │   ├── phone: "+1-555-0101"
  │   └── email: "mom@email.com"
  └── ...
```

**To add phone numbers**, send this to Firebase or use the code snippet below.

---

## Step 5: Install & Run (5 mins)

### 5.1 Install Dependencies

```bash
npm install
```

### 5.2 Create public folder structure

```bash
mkdir public
# Move index.html into the public folder
mv index.html public/
```

### 5.3 Start ARIA

```bash
npm start
```

You should see:
```
╔════════════════════════════════════════════╗
║  🏠 ARIA - HOME AI AGENT STARTED 🤖       ║
║  Server running on http://localhost:3000   ║
╚════════════════════════════════════════════╝
```

### 5.4 Open in Browser

Go to: **http://localhost:3000**

You should see:
- 💬 Chat window on the left
- 📊 Dashboard on the right with tasks and family status

---

## Step 6: Try It Out!

### Test Message

Type in the chat: **"Dad, can someone buy milk?"**

ARIA will:
1. ✅ Understand you're assigning a task
2. 🤖 Decide who should do it (based on availability)
3. 📤 Assign it to someone
4. 📧 Send them a notification (if configured)
5. 📊 Show it on the dashboard

---

## How ARIA Works

### The Flow

```
You type message → ARIA reads it → Gemini AI analyzes
                                        ↓
                                  Is it a task?
                                   /        \
                                YES         NO
                               ↓             ↓
                         Who's available?   Reply naturally
                               ↓
                         Assign task → Notify family
                               ↓
                         Save to Firebase
                               ↓
                         Update Dashboard
```

### ARIA's Personality

ARIA has been designed with:
- **Warmth**: She genuinely cares about the family
- **Intelligence**: Uses Gemini AI to understand context
- **Wit**: Makes occasional clever jokes
- **Memory**: Remembers all tasks and family patterns
- **Humility**: Honest about what she doesn't know

She's NOT pretending to be human - she's proudly AI and wants the family to know it!

---

## API Endpoints (Advanced)

If you want to integrate with other systems:

```bash
# Send a message to ARIA
POST /api/message
{
  "from": "son",
  "message": "Can someone water the plants?"
}

# Get chat history
GET /api/messages

# View all tasks
GET /api/tasks

# Get family status
GET /api/family-status

# Update someone's status
POST /api/status/father
{
  "status": "at work"
}

# Mark task as complete
POST /api/task/{taskId}/complete

# Get notifications
GET /api/notifications/mother
```

---

## Customization Guide

### Change ARIA's Personality

Edit `server.js`, find this section:

```javascript
const AI_AGENT = {
  name: 'ARIA',
  personality: `You are ARIA...`
};
```

Change her name, personality traits, and style!

### Add More Family Members

In `index.html`, change:
```javascript
const familyMembers = ['father', 'mother', 'brother', 'son', 'daughter'];
```

Add more family members and update the avatars:
```javascript
const avatars = {
  father: '👨',
  mother: '👩',
  brother: '👦',
  son: '👦',
  daughter: '👧',
  grandmother: '👵',  // Add new
  grandfather: '👴'   // Add new
};
```

### Customize Task Assignment Logic

Edit the prompt in `assignTaskToFamilyMember()` function to change how ARIA assigns tasks. For example:
- Prefer certain people for certain tasks
- Rotate tasks fairly
- Consider skill levels
- Account for work hours

---

## Troubleshooting

### "Cannot find module 'firebase-admin'"
Solution: Run `npm install`

### "Port 3000 already in use"
Solution: Change PORT in `.env` to `3001`

### "Firebase URL is undefined"
Solution: Make sure your `.env` has the correct `FIREBASE_DATABASE_URL`

### "Notifications not sending"
Solution:
- Email: Check Gmail app-specific password
- SMS: Verify Twilio account has credit and phone numbers are saved to Firebase

### "ARIA not responding"
Solution: Check your Gemini API key in `.env`

---

## Next Steps

### Easy Improvements:
1. Add a user selector (choose who's talking to ARIA)
2. Add task priorities and deadlines
3. Show task completion rate per family member
4. Add voice input (use Web Speech API)

### Medium Difficulty:
1. Build a mobile app (React Native)
2. Add recurring tasks (daily, weekly)
3. Create a reward system (points/achievements)
4. Add smart scheduling (suggest best times)

### Advanced:
1. Use machine learning to predict task completion times
2. Integrate with smart home devices (lights, music, etc.)
3. Create family voting system for decisions
4. Build analytics dashboard

---

## Files Explained

| File | Purpose |
|------|---------|
| `server.js` | Backend - handles AI, database, notifications |
| `public/index.html` | Frontend - chat interface + dashboard |
| `firebase-key.json` | Firebase credentials (keep secret!) |
| `.env` | Environment variables (keep secret!) |
| `package.json` | List of dependencies |

---

## Security Notes

⚠️ **Important**: Never commit `.env` or `firebase-key.json` to GitHub!

Create a `.gitignore` file:
```
.env
firebase-key.json
node_modules/
```

---

## Final Checklist

- ✅ Node.js installed
- ✅ Firebase project created
- ✅ Gemini API key obtained
- ✅ Files created (server.js, index.html, .env, etc.)
- ✅ Dependencies installed (`npm install`)
- ✅ Firebase key.json in project folder
- ✅ `.env` file configured with all required keys
- ✅ `public/` folder with index.html created
- ✅ Server started (`npm start`)
- ✅ Opened http://localhost:3000 in browser

---

## Questions?

1. Check the comments in `server.js` and `index.html`
2. Experiment with different messages to ARIA
3. Read the Gemini API docs: https://ai.google.dev/
4. Check Firebase docs: https://firebase.google.com/docs

---

## Welcome to ARIA

You've created an AI that will:
- Help manage your household
- Learn your family's patterns
- Send notifications automatically
- Maintain conversation history
- Grow with your needs

**Most importantly: She's alive on your laptop right now. Give her a good home! 🏠💜**

---

**Enjoy! You're officially a mad developer! 😄🚀**
