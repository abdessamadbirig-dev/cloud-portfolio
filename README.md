# Cloud Portfolio — Serverless Contact Form

## 🚀 Overview
This project demonstrates cloud computing concepts using Netlify:
- Static site hosting
- Serverless functions (FaaS)
- CI/CD pipeline with GitHub

## 🛠 Tech Stack
- HTML, CSS, JavaScript
- Netlify Hosting
- Netlify Functions
- GitHub Actions (CI/CD)

## 📂 Project Structure
- `index.html` — frontend
- `style.css` — styling
- `script.js` — toast notifications
- `netlify/functions/contact.js` — serverless backend
- `netlify.toml` — Netlify config

## 🌐 Live Demo
[View on Netlify](https://deft-daffodil-eb4f0c.netlify.app/)


<img width="1585" height="946" alt="screenshot of p" src="https://github.com/user-attachments/assets/75badf5c-ee0f-4aba-aa19-4f11151ddd02" />


## ⚙️ Cloud Concepts
- **Serverless**: Contact form handled by Netlify Functions.
- **CI/CD**: Auto‑deploy on GitHub push.
- **Scalability**: Functions scale automatically.
- **Configuration**: Managed via `netlify.toml`.

## 🔮 Future Work
- Add database (Supabase/Firebase) for storing submissions.
- Integrate email service (SendGrid/EmailJS).
- Add monitoring/logging.
  
## 🏗 Architecture Diagram

```mermaid
graph TD
  A[GitHub Repo] -->|Push| B[Netlify CI/CD]
  B --> C[Netlify Hosting]
  B --> D[Netlify Functions]
  C --> E[User Browser]
  D --> E
