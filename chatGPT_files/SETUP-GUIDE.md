# 🚀 Setup Guide

**Get your AI Twin running in 15 minutes**

---

## Prerequisites

✅ Google account  
✅ Gemini API key (from Google AI Studio)  
✅ Honor x6b (or any smartphone)  
✅ Internet connection

---

## Part 1: Get Your Gemini API Key

### Step 1: Go to Google AI Studio
1. Visit: https://makersuite.google.com/app/apikey
2. Click **"Create API Key"**
3. Select a Google Cloud project (or create new)
4. Copy the API key (starts with `AIza...`)

**💰 Cost:** Gemini 3.0 Flash is cheap! Free tier covers a LOT of usage.

---

## Part 2: Set Up Google Apps Script

### Step 1: Create New Apps Script Project
1. Go to: https://script.google.com
2. Click **"New Project"**
3. Name it: "Graham AI Twin"

### Step 2: Create the Files
Create **3 script files** in your project:

#### File 1: Code.gs
```
Click the "+" next to "Files"
Name: Code.gs
Paste: [Content from Code.gs file]
```

#### File 2: GeminiService.gs
```
Click the "+" again
Name: GeminiService.gs
Paste: [Content from GeminiService.gs file]
```

#### File 3: SheetsDB.gs
```
Click the "+" again
Name: SheetsDB.gs
Paste: [Content from SheetsDB.gs file]
```

### Step 3: Add Your API Key
1. Open **GeminiService.gs**
2. Find line 1: `const API_KEY = 'YOUR_GEMINI_API_KEY_HERE';`
3. Replace `YOUR_GEMINI_API_KEY_HERE` with your actual API key
4. Should look like: `const API_KEY = 'AIzaSyC...';`

### Step 4: Create the Spreadsheet
1. In Apps Script, go to **Extensions** > **Apps Script**
2. Or create a new Google Sheet: https://sheets.google.com
3. Name it: "AI Twin Memory"
4. Copy the Sheet ID from URL (the long string after `/d/`)

### Step 5: Link Script to Sheet
1. In Apps Script project settings (⚙️ icon)
2. Add the Sheet ID to your script properties
3. Or the script will auto-create sheets on first run

---

## Part 3: Deploy the Backend

### Step 1: Deploy as Web App
1. In Apps Script, click **Deploy** > **New Deployment**
2. Click "Select Type" ⚙️ > **Web App**
3. Settings:
   - Description: "AI Twin API"
   - Execute as: **Me**
   - Who has access: **Anyone** (or "Anyone with Google account" for security)
4. Click **Deploy**
5. **Copy the Web App URL** (you'll need this!)

### Step 2: Authorize Permissions
1. Click **Review Permissions**
2. Choose your Google account
3. Click **Advanced** > **Go to Graham AI Twin (unsafe)**
4. Click **Allow**

**Note:** Google warns because it's your own script. It's safe!

### Step 3: Test the Backend
1. Open the Web App URL in browser
2. You should see a blank page (that's normal)
3. Backend is running! ✅

---

## Part 4: Set Up Google Sheets (Memory Database)

### The sheets will auto-create, but here's what they are:

#### **Conversations** Sheet
Logs every interaction:
- Timestamp
- Your input
- AI reply
- Insights extracted
- Actions taken

#### **Personality** Sheet
Your evolving profile:
- Trait (e.g., "communication_style")
- Value (JSON data)
- Last Updated

#### **Evolution** Sheet
Tracks how AI learns:
- Timestamp
- Changes made
- Context

#### **Actions** Sheet
Autonomous actions log:
- Timestamp
- Type (calendar/email/drive)
- Action details
- Status
- Result

**Pro Tip:** Open this spreadsheet on your phone - watch your AI learn in real-time! 📊

---

## Part 5: Enable Google Integrations (Optional)

### Calendar Access
Already enabled! `CalendarApp` is built into GAS.

### Gmail Access
Already enabled! `GmailApp` is built into GAS.

### Drive Access
Already enabled! `DriveApp` is built into GAS.

**To use these:**
1. Uncomment the action handlers in `GeminiService.gs`
2. Add actual implementation
3. Redeploy

---

## Part 6: Build the PWA Frontend (Coming Soon)

This guide covers backend setup. PWA frontend coming next!

For now, you can test the backend using:

### Quick Test Script
```javascript
function testChat() {
  const testMessage = "Hey, this is Graham testing!";
  const context = SheetsDB.getContext();
  const response = GeminiService.chat(testMessage, context);
  
  Logger.log("Reply: " + response.reply);
  Logger.log("Insights: " + JSON.stringify(response.insights));
  
  SheetsDB.log(testMessage, response);
  SheetsDB.evolvePersonality(testMessage, response);
}
```

1. Add this to `Code.gs`
2. Select `testChat` from dropdown
3. Click **Run** ▶️
4. Check your Sheet - you should see logs!

---

## Part 7: Mobile Setup (When PWA is Ready)

### Install PWA on Honor x6b
1. Open PWA URL in Chrome
2. Tap menu ⋮ > **Add to Home Screen**
3. Name it "AI Twin"
4. Tap on home screen icon
5. Grant microphone permissions
6. Start talking! 🎤

### Offline Mode
- Voice notes recorded locally
- Sync when back online
- Everything logged to Sheets

---

## Troubleshooting

### "Script function not found"
- Make sure all 3 files are created
- Check file names (case-sensitive)
- Save all files (Ctrl+S)

### "API Key Invalid"
- Check you copied the full key
- No spaces or quotes around the key
- Key should start with `AIza`

### "Permission Denied"
- Re-deploy and re-authorize
- Check "Execute as: Me"
- Check sheet permissions

### "No response from Gemini"
- Check API key is valid
- Check you have Gemini 3.0 Flash access
- Check API quota (unlikely to hit it)

### "Sheets not created"
- Run `testChat()` function first
- Check spreadsheet ID is correct
- Check Apps Script has Sheet access

---

## Security Notes

### Keep Your API Key Secret
- Never commit to GitHub
- Don't share your Apps Script project
- Use Script Properties for sensitive data

### Control Access
- Set Web App access to "Anyone with Google account"
- Only you can edit the script
- Only you can access your Sheet data

### Monitor Usage
- Check Google AI Studio for API usage
- Watch for unexpected calls
- Set up billing alerts

---

## Next Steps

1. ✅ Backend deployed
2. ✅ Memory system working
3. ⏳ Build PWA frontend
4. ⏳ Test on Honor x6b
5. ⏳ Enable autonomous actions
6. ⏳ Watch your AI twin evolve!

---

## Support

**Issues?** Check the DEVLOG.md for troubleshooting insights.

**Questions?** Graham's building this live - it's a journey, not a destination!

**Want to contribute?** This is Graham's personal twin, but feel free to fork the concept for your own AI journey.

---

## Quick Reference

**Apps Script Project:** https://script.google.com  
**Google AI Studio:** https://makersuite.google.com/app/apikey  
**Memory Sheet:** [Your Google Sheet URL]  
**Web App URL:** [Your deployed URL]  

---

**Remember:** This AI is learning YOU. Feed it real conversations, let it make mistakes, give it feedback. The more authentic you are, the better it becomes. 🧠✨

**Time to build:** ~15 minutes  
**Time to master:** A lifetime  

Let's go! 🚀
