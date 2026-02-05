# 🎉 Happy Birthday Melasha - Dirty 30 Interactive Card

An interactive 30th birthday card featuring animations, flippable photos, and confetti!

## 🌟 Features

- **Elegant "Dirty 30" front page** with black, blue, and silver theme
- **Interactive opening animation** with confetti burst
- **2x2 photo grid** with black & white photos that flip to reveal memories
- **Personalized birthday message**
- **Fully responsive design** for desktop, tablet, and mobile

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shamirabrownnn/happybirthdaymelasha.git
   cd happybirthdaymelasha
   ```

2. **Open in browser:**
   Simply open `index.html` in your web browser!

## 🎨 Customization Guide

### Changing Photos

Replace the placeholder images in `index.html`:

```html
<img src="YOUR_IMAGE_PATH_HERE" alt="Memory 1">
```

**Tips:**
- Use square photos (1:1 aspect ratio) for best results
- Photos will automatically be displayed in black & white
- Recommended size: 300x300px or larger

### Customizing Memories

Edit the memory text on the back of each photo in `index.html`:

```html
<p class="memory-text">Your custom memory text here! 💙</p>
```

### Updating the Birthday Message

Modify the message content in the right side section of `index.html`:

```html
<div class="message-content">
    <h2 class="message-title">Your Custom Title</h2>
    <p class="message-text">Your custom message here...</p>
</div>
```

### Changing Colors

Edit the color scheme in `styles.css`:

- **Blue accent**: Search for `#4a90e2` and replace
- **Silver accent**: Search for `#c0c0c0` and replace
- **Background black**: Search for `#000000` and replace

## 📱 Mobile Support

The card is fully responsive and touch-enabled:
- Tap the "Open" button to reveal the card
- Tap any photo to flip and see the memory
- Tap again to flip back

## 🎊 Confetti Animation

The confetti animation automatically triggers when the card opens. The colors match the blue and silver theme.

## 🛠️ Technologies Used

- HTML5
- CSS3 (Animations, Transforms, Grid, Flexbox)
- Vanilla JavaScript
- Canvas API for confetti

## 📄 License

This project is open source and available for personal use.

## 💝 Credits

Created with love for Melasha's 30th birthday! 🎂✨

---

**Happy Birthday, Melasha! Welcome to the Dirty 30 club!** 🎉
