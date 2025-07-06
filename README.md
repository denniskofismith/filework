# 📡 Room Occupancy Monitoring System

A smart Room Occupancy Monitoring System built with **Flask**, **Python**, and **Bootstrap** that detects motion using a PIR sensor, captures images with a camera module, and uses face detection to determine room occupancy status. The system provides a real-time web dashboard to monitor classroom availability.

---

## 🔧 Features

* ✅ Detects motion using PIR sensor
* 📸 Captures images when motion is detected
* 🧠 Performs face detection to count people
* 📊 Determines room occupancy based on a configurable threshold
* 🌐 Displays real-time status (Available/Occupied) on a Flask-powered web dashboard
* 💾 Stores data using SQLite
* 🎨 Responsive UI with Bootstrap

---

## 🖥️ Technologies Used

* Python 3
* Flask (Backend)
* OpenCV (Face detection)
* SQLite (Database)
* Bootstrap (Frontend)
* HTML5, CSS3, JavaScript

---

## ⚙️ System Architecture

```text
[ PIR Sensor ] ---> [ Raspberry Pi / Motion Detection Script ] ---> 
[ Camera Module ] ---> [ Face Detection (OpenCV) ] ---> 
[ Occupancy Logic ] ---> [ SQLite DB ] ---> 
[ Flask App ] ---> [ Web Dashboard ]
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/denniskofismith/filework.git
cd room-occupancy-system
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

> Make sure you have `opencv-python`, `flask`, and `sqlite3` installed.

### 3. Setup database

```bash
python setup_database.py
```

### 4. Run the app

```bash
python app.py
```

Visit `http://localhost:5000` in your browser.

---

## 📷 Image Capture & Face Detection

* When motion is detected, the system captures an image.
* The image is processed using OpenCV to detect the number of faces.
* If faces detected ≥ 60% of the room capacity (default is 100), the room is marked as **Occupied**.
* Otherwise, the room is **Available**.

---

## 🖼️ UI Design

* Room status is displayed using **Bootstrap cards**.
* Image snapshots and occupancy labels are shown in real-time.
* Tabs or sections for *Available* and *Unavailable* rooms.

---

## 🛠️ Configuration

You can edit the config values in `config.py` (or directly in your script):

```python
ROOM_CAPACITY = 100
OCCUPANCY_THRESHOLD = 0.6  # 60%
```

---

## 🧪 Future Enhancements

* 🔌 Integrate cloud logging (e.g., Adafruit IO / Firebase)
* 🧠 Use deep learning for more accurate headcounting
* 📲 Add SMS/Email notifications
* 📈 Admin dashboard with analytics

---

## 🤝 Contributing

Contributions are welcome! Open an issue or submit a pull request for features or bug fixes.

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Koddy Smith**
Python/Flask Developer
University of Cape Coast

---
