# Quick Setup Guide - Contact Information

## 📱 Update Phone Numbers and WhatsApp

You need to update the phone numbers in these locations:

### 1. Floating Action Buttons (index.html)
Find and replace in `index.html`:

```html
<!-- Replace XXXXXXXXX with your actual phone number -->
<a href="https://wa.me/971XXXXXXXXX" ...>  <!-- WhatsApp -->
<a href="tel:+971XXXXXXXXX" ...>           <!-- Phone Call -->
```

**Format:**
- WhatsApp: `https://wa.me/971XXXXXXXXX` (no spaces, no +, just numbers)
- Phone: `tel:+971XXXXXXXXX`

**Example:** If your number is +971 50 123 4567
- WhatsApp: `https://wa.me/971501234567`
- Phone: `tel:+971501234567`

### 2. Header/Navigation Phone (index.html)
Search for: `+971 XX XXX XXXX` in the header

### 3. Contact Section (index.html)
Search for: `+971 XX XXX XXXX` in the contact info section

### 4. Footer (index.html)
Search for: `+971 XX XXX XXXX` in the footer

## 📧 Update Email Address
Search and replace: `info@spano-fuels.com` with your actual email

## 🏢 Update Company Address
Replace the address text in:
- Contact section
- Footer section

## 🖼️ Add Your Images

Place your images in `src/assets/images/`:
- `logo.png` - Your company logo (transparent background recommended)
- `warehouse.jpg` - Your warehouse/facility photo
- `hero-bg.jpg` - Hero section background (optional)
- `favicon.ico` - Browser tab icon

## 🎨 Customize Colors (Optional)

Edit `src/styles/main.scss`:

```scss
$primary-color: #c41e3a;    // Red (UAE flag color)
$secondary-color: #1a472a;  // Green (UAE flag color)
$accent-color: #ffd700;     // Gold
```

## 🚀 Test Your Changes

After making changes:
1. Save all files
2. Check your browser at `http://localhost:3001/spano-fuels-website/`
3. The page should auto-reload with your changes

## 📱 Test Floating Buttons

The floating buttons appear in the bottom-right corner:
- Click WhatsApp button → Opens WhatsApp chat
- Click Phone button → Makes a call (on mobile devices)
- Hover over buttons (on desktop) → Shows tooltip

---

Need help? Check the main README.md file!
