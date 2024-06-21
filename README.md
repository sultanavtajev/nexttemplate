Next.js template 
- Tailwind CSS
- Postcss
- Shadcn UI komponenter
- Struktur baasert på best practice

1. Klon dette repo
-> git clone https://github.com/sultanavtajev/nexttemplate.git

2. Fjern den gamle remote-referansen
-> git remote remove origin

3. Fjern eksisterende git history
-> Remove-Item -Recurse -Force .git

4. Åpne package.json og endre feltet "name" til det appen din skal hete

5. Slett package-lock.json

6. Avslutt VSCode

7. Endre navnet på prosjektmappen til det du ønsker

8. Start VSCode på nytt og åpne prosjektmappen

9. Installer avhengigheter 
-> npm install

10. Initialiser et nytt git-repository
-> git init --initial-branch=main
-> git add .
-> git commit -m "Første commit"

11. Opprett et nytt repo på GitHub
Først må du opprette et nytt tomt repo på GitHub. Dette kan du gjøre manuelt via GitHub nettsiden, eller du kan bruke GitHub CLI (gh) hvis du har den installert.

For å opprette et repo via GitHub nettsiden:
-> Gå til GitHub.
-> Klikk på "New repository".
-> Fyll inn nødvendige detaljer og opprett repoet.

Hvis du vil bruke GitHub CLI:
Åpne PowerShell som administrator og kjør følgende kommando for å installere GitHub CLI via winget:
-> winget install --id GitHub.cli

Verifisere installasjonen
Etter installasjonen kan du verifisere at GitHub CLI er installert riktig ved å kjøre følgende kommando i PowerShell:
-> gh --version

Logg inn på GitHub CLI:
Hvis du ikke allerede er logget inn, kan du logge inn ved å kjøre:
-> gh auth login

Opprette et nytt repo
-> gh repo create nytt-repo-navn --public --source . --remote

12. Legg til fjernrepo (remote repository)
Hvis du opprettet repoet via GitHub nettsiden, må du legge til fjernrepoet manuelt. Kopier URL-en til det nyopprettede repoet fra GitHub og kjør følgende kommando:
-> git remote add origin https://github.com/brukernavn/nytt-repo-navn.git

13. Push til remote-repo 
-> git push -u origin main

14. Start utviklingsserveren
Etter å ha installert avhengigheter og initialisert ditt git-repository, kan du starte utviklingsserveren.
-> npm run dev