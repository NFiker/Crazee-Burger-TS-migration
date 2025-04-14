# 🍔 Crazee-Burger

**Crazee-Burger** est une application B2B de commande de burgers, conçue pour gérer automatiquement la création d'utilisateurs et leur associer un menu personnalisé. Elle inclut une interface administrateur pour la gestion des menus, ainsi qu'un panier pour les commandes.

Le projet est développé avec **React**, **TypeScript**, **Styled Components** et **Firebase**, et déployé sur **Vercel**.

---

## 🚀 Démo

🔗 [Accéder à l'application Crazee-Burger](https://crazee-burger-32ptj44qq-nfikers-projects.vercel.app/)

---

## 🛠️ Stack technique

- ⚛️ [React](https://reactjs.org/)
- 🟦 [TypeScript](https://www.typescriptlang.org/)
- ⚡ [Vite.js](https://vitejs.dev/)
- 💅 [Styled Components](https://styled-components.com/)
- 🔥 [Firebase](https://firebase.google.com/)
  - Firestore (base de données NoSQL en temps réel)
- ☁️ [Vercel](https://vercel.com/) (déploiement)

---

## ✨ Fonctionnalités principales

### 🔐 Authentification et utilisateurs

- Authentification par simple `userId`
- Création automatique d’un utilisateur s’il n’existe pas dans la base
- Attribution d’un menu par défaut (`fakeMenu.SMALL`)

### 🛒 Gestion du panier

- Ajout et suppression de burgers
- Calcul automatique du total
- Panier persistant lié à l’utilisateur

### 🛠 Interface administrateur

- Consultation des menus
- Création, modification, suppression de burgers
- Synchronisation en temps réel avec Firestore

---

## ⚙️ Installation et configuration

### 1. Cloner le dépôt

```bash
git clone https://github.com/<ton-utilisateur>/crazee-burger.git
cd crazee-burger
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Ajouter le fichier .env à la racine du projet

Ce fichier contient vos identifiants Firebase. Ne le versionnez jamais. Exemple de clés à inclure (ne pas copier celles-ci, utilisez les vôtres depuis la console Firebase) :

```env
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
```

### 4. Lancer le projet

```bash
npm run dev
```

## 👤 Auteur

<p align="center">
  <strong>Développé avec ❤️ par NFiker</strong>
</p>
