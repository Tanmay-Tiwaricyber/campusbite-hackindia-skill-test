# CampusBite 🍽️

**CampusBite helps hostel students check the planned daily mess menu in one simple, shareable page.**

A lightweight, responsive HTML/CSS/JavaScript project built to make one everyday campus task easier: finding out what's being served before heading to the mess.

> **Demo note:** The menu is sample data. Replace it with verified information from your hostel before presenting this as a live campus service.

## 🔗 Links

- **Live demo:** `ADD_YOUR_DEPLOYED_URL_HERE`
- **GitHub repository:** `https://github.com/Tanmay-Tiwaricyber/campusbite-hackindia-skill-test`
- **Screenshots:** Add screenshots in `assets/` and embed them here.

## ✨ Features

- Daily menu cards for breakfast, lunch, evening snacks, and dinner
- Day selector for all seven days
- Responsive layout for phones, tablets, and desktops
- Share button using the device's share sheet where supported
- Clipboard fallback on supported browsers
- Clear sample-data notice so visitors know the menu is illustrative
- No build step, package installation, API key, or backend required

## 🧰 Tech stack

- HTML5
- CSS3
- Vanilla JavaScript

## 🚀 Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Tanmay-Tiwaricyber/campusbite-hackindia-skill-test.git
   cd campusbite
   ```

2. Open `index.html` in your browser.

   For a local development server, use the VS Code **Live Server** extension or run:

   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000`.

## 🌐 Deploy

### GitHub Pages
1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under the build/deployment section, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. Wait for the deployment and add the published URL to the Links section above.

### Netlify
1. Import the public GitHub repository into Netlify, or drag the project folder into Netlify Drop.
2. Leave the build command empty.
3. Set the publish directory to the repository root (`.`) if Netlify asks for one.
4. Deploy and test the generated URL on a phone.

## 🛠️ Customize the menu

Edit the `menu` array near the top of `app.js`. Each day has four meal objects. Update the time, meal name, items, emoji, and style class as needed.

Before using this for a real hostel:
- Confirm meal timings and menu with the mess team.
- Decide who will update the menu and how often.
- Do not imply that the sample data is official or current.
- Add a last-updated timestamp if the menu will be maintained regularly.

## 📁 Project structure

```text
campusbite/
├── assets/
│   └── favicon.svg
├── index.html
├── styles.css
├── app.js
├── .gitignore
├── LICENSE
└── README.md
```

## ♿ Accessibility and quality

- Semantic page sections and headings
- Labels for the day selector
- Live announcements when the menu changes
- Keyboard-accessible native buttons and select
- Reduced-motion preference support
- No secrets or environment variables required

## 🧭 Roadmap

- [ ] Replace sample meals with verified hostel menu data
- [ ] Add an admin-friendly way to update meals
- [ ] Add a visible last-updated date
- [ ] Add screenshots and a short demo recording
- [ ] Collect feedback from hostel students

## 🤝 Contributing

Issues and pull requests are welcome. For a useful contribution, describe the problem, explain the change, and include screenshots for UI updates.

## 📄 License

Released under the MIT License. See [`LICENSE`](LICENSE).

---

Built as a small, practical campus project. **One clear problem, one easy-to-review solution.**
