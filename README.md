# Dokumentácia webovej časti projektu FP Code

## 1. Úvod

### 1.1 Cieľ projektu
Webová aplikácia FP Code je súčasťou hybridného projektu zameraného na výučbu programovania v jazyku Python. Cieľom je poskytnúť používateľom interaktívne prostredie pre učenie sa programovania s dôrazom na jednoduchosť a prehľadnosť.

### 1.2 Použité technológie
- **Frontend**: React.js, Bootstrap 5
- **Backend**: Node.js, Express
- **Databáza**: MongoDB Atlas
- **Autentifikácia**: JWT (JSON Web Tokens)
- **Markdown editor**: React Markdown

## 2. Architektúra aplikácie

### 2.1 Frontend štruktúra
```
src/
├── components/     # Znovupoužiteľné komponenty
├── pages/         # Hlavné stránky aplikácie
├── App.js         # Hlavná komponenta aplikácie
└── index.js       # Vstupný bod aplikácie
```

### 2.2 Backend štruktúra
```
server/
├── index.js       # Hlavný súbor servera
├── routes/        # API endpointy
├── models/        # Databázové modely
└── middleware/    # Middleware funkcie
```

## 3. Hlavné funkcie

### 3.1 Autentifikácia
- Registrácia nových používateľov
- Prihlásenie existujúcich používateľov
- Správa JWT tokenov pre bezpečnú komunikáciu

### 3.2 Správa učiva
- Prehľadné zobrazenie lekcií
- Interaktívne príklady kódu
- Možnosť testovania kódu priamo v prehliadači

### 3.3 Testy
- Automatické vyhodnocovanie odpovedí
- Okamžitá spätná väzba
- Průběžné sledování pokroku

### 3.4 Poznámky
- Editor poznámok s podporou Markdown
- Automatické ukladanie
- Možnosť exportu poznámok

## 4. Implementácia

### 4.1 Frontend komponenty
- Responzívny dizajn pre všetky zariadenia
- Intuitívne používateľské rozhranie
- Optimalizované načítavanie obsahu

### 4.2 Backend API
- RESTful API endpointy
- Bezpečná autentifikácia
- Efektívne spracovanie požiadaviek

### 4.3 Databázový model
- Optimalizované schémy pre rýchly prístup
- Indexovanie často používaných polí
- Bezpečné ukladanie citlivých údajov

## 5. Bezpečnosť

### 5.1 Autentifikácia a autorizácia
- Šifrovanie hesiel pomocou bcrypt
- Validácia JWT tokenov
- Ochrana proti CSRF útokom

### 5.2 Databázová bezpečnosť
- Bezpečné pripojenie k MongoDB Atlas
- Validácia vstupných dát
- Pravidelné zálohovanie

## 6. Optimalizácia

### 6.1 Výkon
- Lazy loading komponentov
- Optimalizácia obrázkov
- Cachovanie často používaných dát

### 6.2 SEO
- Meta tagy pre lepšie indexovanie
- Responzívny dizajn
- Optimalizácia pre rýchlosť načítania

## 7. Testovanie

### 7.1 Unit testy
- Testovanie jednotlivých komponentov
- Validácia business logiky
- Testovanie API endpointov

### 7.2 Integračné testy
- Testovanie interakcií medzi komponentmi
- Testovanie toku dát
- Testovanie chybových stavov

## 8. Nasadenie

### 8.1 Požiadavky na server
- Node.js verzia 14 alebo vyššia
- MongoDB Atlas účet
- SSL certifikát pre HTTPS

### 8.2 Proces nasadenia
1. Build frontend aplikácie
2. Nastavenie environment premenných
3. Spustenie backend servera
4. Konfigurácia reverse proxy

## 9. Údržba a rozvoj

### 9.1 Monitoring
- Sledovanie výkonu aplikácie
- Logovanie chýb
- Analýza používania

### 9.2 Plánované vylepšenia
- Pridanie nových lekcií
- Vylepšenie testovacej sekcie
- Rozšírenie funkcionalít poznámok

## 10. Záver

Webová aplikácia FP Code poskytuje robustné riešenie pre výučbu programovania v Pythone. Jej modulárna architektúra a moderné technológie umožňujú ľahkú údržbu a rozširovanie funkcionalít. Aplikácia je pripravená na integráciu s mobilnou verziou, čo umožní používateľom plynulý prechod medzi platformami. 
