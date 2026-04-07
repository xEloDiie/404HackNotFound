import os
from datetime import timedelta
from dotenv import load_dotenv
from zoneinfo import ZoneInfo

load_dotenv()

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")

    if not SECRET_KEY:
        raise ValueError("SECRET_KEY manquante !")

    # Fuseau horaire
    TIMEZONE = ZoneInfo("Europe/Paris")  # CET/CEST automatique

    # Durées et timeouts
    SESSION_TIMEOUT = timedelta(minutes=15)             # Timeout session
    EMAIL_CODE_TIMEOUT = timedelta(minutes=15)          # Temps de validité du code 2FA envoyé par mail
    TWO_FA_VALIDITY = timedelta(hours=24)               # Temps de validité sans redemander le code 2FA
    EMAIL_RESEND_COOLDOWN = timedelta(seconds=30)       # Anti-spam envoi email
    VERIFICATION_EMAIL_VALIDITY = timedelta(hours=24)   # Durée de validité du mail de vérif (après ça = compte supprimé)

    # Cookies sécurisés
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = "Lax"