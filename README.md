# 404HackNotFound

## 🚀 Présentation

404HackNotFound est une application web dédiée à des challenges CTF liés à la cybersécurié, développée avec **Flask (Python)**. 

Elle permet la gestion d’utilisateurs avec un système d’authentification sécurisé incluant :

- Inscription / connexion
- Vérification par email
- Authentification à deux facteurs (2FA)
- Gestion de sessions sécurisées
- Protection contre les attaques courantes (CSRF, XSS, brute force)

Le projet utilise une base de données **MongoDB Atlas** et est déployé sur **Render**.

---

## 🧱 Stack technique

- **Back-end** : Flask (Python)
- **Base de données** : MongoDB Atlas
- **Sécurité** :
  - Argon2 (hash des mots de passe)
  - Flask-WTF (CSRF)
  - Flask-Talisman (headers de sécurité + HTTPS)
  - Flask-Limiter (rate limiting)
  - ...
- **E-mail** : envoi de codes de vérification
- **Déploiement** : Render

---

## 🔐 Fonctionnalités principales

- 🔑 Authentification sécurisée (login / register)
- 📧 Vérification d’email
- 🛡️ Double authentification (2FA)
- ⏱️ Sessions avec expiration automatique
- 🚫 Protection contre brute force (rate limiting)
- 🧾 Gestion des rôles utilisateurs
- 🔒 Sécurité renforcée (headers, HTTPS, CSRF, ...)

---

## 🌐 Accès à notre site

Notre site est accessible depuis ce lien : **https://four04hacknotfound.onrender.com**

---

## 🛡️ Sécurité

Le projet implémente plusieurs mécanismes de sécurité, comme :

- Hash des mots de passe avec Argon2
- Protection CSRF
- Cookies sécurisés (HttpOnly, Secure, SameSite)
- Content Security Policy (CSP)
- Forçage HTTPS via Flask-Talisman
- Rate limiting avec Flask-Limiter
- Vérification email + 2FA
- Restriction d’accès MongoDB par IP
Et bien d'autres... !

---

## 🗄️ Base de données

MongoDB Atlas est utilisé avec :

- Collections principales :
  - users
  - users_progression
  - roles
  - challenges
  - logs
- Accès restreint avec whitelist d'IPs autorisées

---

## 🌍 Déploiement

L’application est déployée sur Render :

- Backend Flask hébergé en production
- Variables d’environnement configurées sur Render
- Connexion HTTPS automatique

---

## 📌 Bonnes pratiques respectées
- Séparation configuration / code
- Utilisation de variables d’environnement
- Protection contre injections NoSQL
- Validation des entrées utilisateur
- Sécurisation des sessions et cookies
- Gestion des erreurs et logs

---

## 👥 Auteurs

- **Front-end** : Alan NAFTEUR
- **Back-end** : Elodie DECRAIE

---

## 📄 Cadre du projet

Ce projet a été réalisé dans le cadre d'un projet de fin d'études de licence en informatique à l'UPHF-INSA.
