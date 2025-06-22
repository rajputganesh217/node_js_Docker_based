

````markdown
# Node.js Docker-Based App

A simple Node.js application using Express and Docker.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Docker

---

## 🚀 Getting Started

### 📥 Clone the Repository

```bash
git clone https://github.com/rajputganesh217/node_js_Docker_based.git
cd node_js_Docker_based
````

---

## 🧱 Build the Docker Image

Make sure you are in the project directory and run:

```bash
docker build -t nodejs-docker-app .
```

> **Note**: If you're using an EC2 instance, ensure that **port 3000 is open** in your **security group** (Inbound Rules).

---

## 🖼️ Verify Docker Image

```bash
docker images
```

You should see `nodejs-docker-app` listed.

---

## 🐳 Run the Docker Container

```bash
docker run -d -p 3000:3000 --name my-node-container nodejs-docker-app
```

Check running containers:

```bash
docker ps
```

---

## 🌐 Access the App

Open your browser and go to:

```
http://<your-EC2-public-IP>:3000
```

You should see a message:
**🚀 Hello from Express inside Docker!**

---

## ✅ You're Done!

Your containerized Node.js app is now running and accessible on the web!

---

## 📦 Additional Commands

* View container logs:

  ```bash
  docker logs my-node-container
  ```

* Stop the container:

  ```bash
  docker stop my-node-container
  ```

* Remove the container:

  ```bash
  docker rm my-node-container
  ```

---

## 👨‍💻 Author

* **Ganesh Rajput**

````

---


