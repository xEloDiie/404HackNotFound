from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ["https://www.googleapis.com/auth/gmail.send"]

def main():
    flow = InstalledAppFlow.from_client_secrets_file(
        "credentials.json",
        SCOPES
    )

    # Port fixe → doit correspondre à celui configuré dans Google Cloud
    creds = flow.run_local_server(port=8080)

    # Sauvegarde du token
    with open("token.json", "w") as token:
        token.write(creds.to_json())

    print("✅ token.json généré avec succès")

if __name__ == "__main__":
    main()