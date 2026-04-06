import os
from datetime import timedelta
from dotenv import load_dotenv
from zoneinfo import ZoneInfo

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "dev_secret_key")

    # Fuseau horaire
    TIMEZONE = ZoneInfo("Europe/Paris")  # CET/CEST automatique

    # Durées et timeouts
    SESSION_TIMEOUT = timedelta(minutes=15)             # Timeout session
    EMAIL_CODE_TIMEOUT = timedelta(minutes=15)          # Temps de validité du code 2FA envoyé par mail
    TWO_FA_VALIDITY = timedelta(hours=24)               # Temps de validité sans redemander le code 2FA
    EMAIL_RESEND_COOLDOWN = timedelta(seconds=30)       # Anti-spam envoi email
    VERIFICATION_EMAIL_VALIDITY = timedelta(hours=14)   # Durée de validité du mail de vérif (après ça = compte supprimé)