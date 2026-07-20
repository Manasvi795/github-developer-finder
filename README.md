# GitHub Developer Finder

A React-based web application that allows users to search for GitHub developers, view their profiles, explore repositories, search repositories by name, sort repositories, and save favorite developers locally.

## 🚀 Features

- 🔍 Search GitHub users by username
- 👤 View detailed GitHub profile information
- 📂 Display user's public repositories
- 🔎 Search repositories by name
- 📊 Sort repositories by:
  - Recently Updated
  - Most Stars
  - Most Forks
- ❤️ Add or remove favorite developers
- 💾 Favorites stored using Local Storage
- ⚠️ Error handling for:
  - Invalid usernames
  - GitHub API rate limits
  - Network errors
- 📱 Responsive UI

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- Material UI Icons
- GitHub REST API

---

## 🔗 GitHub API Endpoints Used

### Get User Profile

```
GET /users/{username}
```

### Get User Repositories

```
GET /users/{username}/repos
```

---

## 🌟 Future Improvements

- Compare two GitHub developers
- Repository pagination
- Repository language filter
- Dark/Light mode
- Contribution graph
- Repository statistics
- Recent search history

---

## 👩‍💻 Author

**Manasvi**

GitHub: https://github.com/manasvi795

---

## 📄 License

This project is created for educational purposes.