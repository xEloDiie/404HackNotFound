import os
from datetime import timedelta
from dotenv import load_dotenv
from zoneinfo import ZoneInfo

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "dev_secret_key")

    # Flask-Mail
    MAIL_SERVER = os.getenv("MAIL_SERVER")
    MAIL_PORT = int(os.getenv("MAIL_PORT", 25))
    MAIL_USERNAME = os.getenv("MAIL_USERNAME")
    MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
    MAIL_USE_TLS = os.getenv("MAIL_USE_TLS") == "True"
    MAIL_USE_SSL = os.getenv("MAIL_USE_SSL") == "True"
    MAIL_DEFAULT_SENDER = os.getenv("MAIL_DEFAULT_SENDER")

    # Fuseau horaire
    TIMEZONE = ZoneInfo("Europe/Paris")  # CET/CEST automatique

    # Durées et timeouts
    SESSION_TIMEOUT = timedelta(minutes=15)             # Timeout session
    EMAIL_CODE_TIMEOUT = timedelta(minutes=15)          # Temps de validité du code 2FA envoyé par mail
    TWO_FA_VALIDITY = timedelta(hours=24)               # Temps de validité sans redemander le code 2FA
    EMAIL_RESEND_COOLDOWN = timedelta(seconds=30)       # Anti-spam envoi email
    VERIFICATION_EMAIL_VALIDITY = timedelta(hours=14)   # Durée de validité du mail de vérif (après ça = compte supprimé)