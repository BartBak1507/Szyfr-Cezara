# Dokumentacja – Szyfr Cezara

## 1. Cel projektu

Celem projektu było stworzenie interaktywnej aplikacji webowej umożliwiającej szyfrowanie i deszyfrowanie tekstu przy użyciu klasycznego szyfru Cezara.

Projekt miał na celu utrwalenie wiedzy z zakresu:

- podstaw kryptografii  
- algorytmów przetwarzania tekstu  
- JavaScript  
- tworzenia prostych aplikacji webowych  

---

## 2. Wymagania funkcjonalne

- Program umożliwia wpisanie tekstu  
- Program umożliwia podanie klucza (liczby przesunięcia)  
- Program szyfruje tekst  
- Program deszyfruje tekst  
- Program zachowuje znaki specjalne  

---

## 3. Wymagania niefunkcjonalne

- Intuicyjny interfejs użytkownika  
- Czytelny układ graficzny  
- Szybkie działanie w przeglądarce  
- Brak konieczności instalacji  
- Działanie offline  

---

## 4. Opis działania algorytmu

1. Pobranie tekstu od użytkownika  
2. Pobranie klucza (liczby całkowitej)  
3. Iteracja po każdym znaku tekstu  
4. Sprawdzenie czy znak należy do alfabetu  
5. Wyznaczenie nowej pozycji litery w alfabecie  
6. Zastosowanie operacji modulo (zawijanie alfabetu)  
7. Zastąpienie litery przesuniętą wartością  
8. Wyświetlenie wyniku  

---

## 5. Implementacja

Algorytm został zaimplementowany w języku JavaScript.

Cechy implementacji:

- wykorzystuje alfabet łaciński (a–z)  
- używa operacji modulo do przesuwania liter  
- ignoruje wielkość liter lub traktuje je jednolicie  
- pozostawia znaki specjalne bez zmian  

---

## 6. Testowanie

Przetestowano następujące przypadki:

- Krótkie teksty  
- Długie teksty  
- Klucz = 0  
- Klucz większy niż długość alfabetu  
- Teksty zawierające spacje i znaki specjalne  
- Sprawdzenie czy deszyfrowanie przywraca tekst pierwotny  

Program działa poprawnie.

---

## 7. Możliwe rozszerzenia

- Obsługa wielkich i małych liter osobno  
- Obsługa polskich znaków diakrytycznych  
- Historia szyfrowania  
- Eksport wyników do pliku  
- Tryb ciemny (dark mode)  
- Wersja mobilna (responsive design)  
- Obsługa innych szyfrów klasycznych  

---

## 8. Autor

Bartosz Bąk  
GitHub: https://github.com/BartBak1507
