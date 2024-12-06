# IP Address Finder

A simple ReactJS-based application to fetch and display a user's public IP address, approximate location, and Internet Service Provider (ISP) details on a map using the Mapbox API.

## 📝 Features

- Fetches the user's IP address and location details using the [ipapi.co](https://ipapi.co) API.
- Displays the user's IP address, city, region, country, and ISP.
- Shows the approximate location on a map using Mapbox.
- Lightweight and easy-to-use application.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/ip-finder.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ip-finder
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Install additional npm packages:
   ```bash
   npm install axios react-map-gl react-icons
   ```

5. Get a Mapbox API key:
   - Create a free account on [Mapbox](https://www.mapbox.com/).
   - Copy the default public access token from your dashboard.

6. Add the Mapbox API key to your project:
   - Replace `<YOUR_API_KEY>` in the `Map.js` file with your Mapbox access token.

### Running the Application

Start the development server:
```bash
npm start
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📂 Project Structure

```
ip-finder/
├── src/
│   ├── components/
│   │   └── Map.js   # Map component to display location
│   ├── App.js       # Main application logic
│   ├── App.css      # Styling
│   └── index.js     # Entry point
├── public/
├── package.json
└── README.md        # Project documentation
```

---

## 🛠️ Built With

- **ReactJS**: Frontend framework
- **Axios**: For API requests
- **Mapbox GL JS**: Map rendering and location visualization
- **ipapi.co**: IP address and geolocation API

---

## 🎨 Screenshots

### Application UI:
![image](https://github.com/user-attachments/assets/fc97ab4c-cabf-4fe1-9c32-734f8bcb030a)

---


## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
