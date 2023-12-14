# Kostenverrechnung

## Tabellen

### user
- ID, int
- Name, varchar(255)
- Vorname, varchar(255)
- Email, varchar(255)
- IBAN, varchar(255)

### role
- ID, int
- Name, varchar(255)

### period
- ID, int
- Start, date
- Ende. date
- Anzahl_Tage, int
- Antrag_ID, int

### request
- ID, int
- User_ID, int
- status, int
- Date, date
- approved_by_ausbilder, int
- approved_by_leitung, int

