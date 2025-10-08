# 🚀 DevOps Internship Assessment

## Title
**Containerize and Deploy a Next.js Application using Docker, GitHub Actions, and Minikube**

---

## 🧩 Objective
This project demonstrates:
- Docker-based containerization of a Next.js app  
- CI/CD pipeline using GitHub Actions  
- Image storage in GitHub Container Registry (GHCR)  
- Deployment to Kubernetes (Minikube)

---

## 🛠️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/<bhargavi-devops>/devops-nextjs-assessment.git
cd devops-nextjs-assessment
```

### 2️⃣ Run Locally
```bash
npm install
npm run dev
```
App runs on `http://localhost:3000`

---

## 🐳 Docker Commands

### Build Docker Image
```bash
docker build -t nextjs-app .
```

### Run Docker Container
```bash
docker run -p 3000:3000 nextjs-app
```

App accessible at: `http://localhost:3000`

---

## ⚙️ GitHub Actions (CI/CD)

- Triggered automatically on push to **main**
- Builds and pushes Docker image to **GHCR**
- Image available at:
  ```
  ghcr.io/<bhargavi-devops>/nextjs-app:latest
  ```

---

## ☸️ Kubernetes Deployment on Minikube

### Start Minikube
```bash
minikube start
```

### Apply Kubernetes Manifests
```bash
kubectl apply -f k8s/
```

### Check Resources
```bash
kubectl get pods
kubectl get svc
```

### Access App
```bash
minikube service nextjs-service
```

---

## 🧠 Troubleshooting
| Issue | Solution |
|-------|-----------|
| Pod not running | Check logs: `kubectl logs <pod-name>` |
| Image not pulling | Ensure GHCR repo visibility is public |
| Service not accessible | Verify NodePort: `kubectl get svc` |

---
