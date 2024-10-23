# 🚀 SmartDoc

The first open-source **RAG (Retrieval-Augmented Generation)** application built with **Gemini**, **Pinecone**, and **Next.js**, featuring robust authentication and complete control over your data. 🌐

![Screenshot 2024-10-23 101438](https://github.com/user-attachments/assets/9afb2954-aa74-40cb-a970-c4b0fbd3e18a)

## 💡 Why I Built This Project

I’ve always wanted to build a **RAG system** on the web, but most resources required using the OpenAI API, which demands a credit card. I wanted to work with **free models** like **Gemini** and couldn’t find a comprehensive solution with **Next.js**. So, I decided to take the initiative and create my own open-source RAG solution.

**SmartDoc** is designed for anyone looking for a free, secure, and powerful RAG system with full control over document storage. The app features **OAuth-based authentication** and **Rive animations** for smooth user feedback, especially on unauthorized pages.

---

## ✨ Key Features

- **📄 Document Upload & Query**:  
   Upload your **PDF** documents, securely store them in **Pinecone**, and query their content using **Gemini embeddings**.
  
- **🧠 RAG-Powered Question Answering**:  
   Ask questions related to your uploaded documents, and receive precise answers thanks to **Gemini's advanced embeddings** and **Pinecone's vector storage**.

- **🔒 Full Data Control**:  
   You have total control over your documents, including the ability to **delete**, **manage**, or **reference** them whenever needed.

- **🔐 Secure Authentication**:  
   - Integrated **OAuth** with **Google** and **GitHub** via **Auth.js** for a smooth and secure login experience.
   - Access a dedicated **profile page** with session information and a **sign-out** option.

- **🌗 Dark/Light Mode Toggle**:  
   Personalize your experience by toggling between **Dark Mode** and **Light Mode** to suit your environment. 🌓

- **🎨 Dynamic UI with Animations**:  
   Built with **TailwindCSS** for responsiveness and **Framer Motion** for smooth transitions. Unauthorized pages are highlighted with engaging **Rive animations** for user feedback.
---

## 🛠️ How It Works

1. **Upload a PDF Document**: Upload your file and store it in a dedicated **Pinecone namespace**.
2. **Data Storage**: All your data is stored privately in a Pinecone index, with the ability to delete or reference it at any time.
3. **Ask Questions**: Use **RAG** to query your documents and retrieve accurate responses.
4. **Manage Documents**: Complete control over your uploaded documents with the ability to manage, reference, or delete.
5. **Responsive & Secure**: Seamless experience with a **responsive UI** and **OAuth-based authentication**.
6. **YouTube Integration**: Easily download YouTube transcripts and thumbnails.
7. **Customizable Theme**: Switch between **Dark Mode** and **Light Mode** for a personalized UI experience.

---

## 🚀 Quick Start

### 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/SmartDoc.git
   ```
2. Change the directory
   ```bash
   cd SmartDoc
   ```
3. Add the environment variables in the .env.local
  ```bash
  cp .env.example .env.local
  ```
4. Install the packages
   ```bash
   npm install
   ```
5. Run the project
   ```bash
   npm run dev
   ```
   
## 🚀 Tech Stack

1. ⚡ **Next.js** - Powerful React framework for building web applications.
2. 🛠️ **TypeScript** - Strongly typed programming language that builds on JavaScript.
3. 🎨 **TailwindCSS** - Utility-first CSS framework for rapid UI development.
4. 🌀 **Rive** - Interactive animations for dynamic user interfaces.
5. 🔒 **Auth.js** - Authentication library for seamless login flows.
6. 🐱 **GitHub** - Version control and collaboration platform.
7. 🌍 **Google** - Authentication and other services for apps.
8. 🧠 **Pinecone Vector Database** - Vector database for machine learning models.
9. 🤖 **Gemini Model & Embeddings** - Advanced AI for embeddings and language understanding.
10. **Framer Motion** - Used for Adding Animations

## ▶️ Demo

[![SnapText](https://img.youtube.com/vi/9d-zrrcsEew/0.jpg)](https://www.youtube.com/watch?v=9d-zrrcsEew)
