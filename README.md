# 💳 Transaction Analyzer

## 📌 Описание проекта

**Transaction Analyzer** — это консольное приложение на JavaScript, предназначенное для анализа списка транзакций. Программа демонстрирует навыки работы с массивами и функциями в JavaScript, включая фильтрацию, агрегацию, сортировку и поиск по заданным параметрам.

Программа реализована в рамках лабораторной работы по JavaScript.

### 🎯 Цель проекта

* Изучение работы с массивами объектов
* Применение функций `map()`, `filter()`, `reduce()` и других
* Использование функций высшего порядка
* Работа с датами в JavaScript

---

## 🚀 Установка и запуск

### 💻 Требования

* Установленный браузер (например, Google Chrome)
* Или среда Node.js для запуска в консоли

### 🧩 Запуск в браузере

1. Откройте `index.html` в браузере.
2. В консоли разработчика (DevTools → Console) вы увидите результаты выполнения анализа.

### 🧪 Запуск через Node.js

```bash
node main.js
```

---

## 📂 Структура проекта

* `main.js` — основной скрипт с логикой анализа транзакций
* `index.html` — HTML-файл для запуска в браузере
* `README.md` — описание проекта

---

## ⚙️ Функциональность

* Получение уникальных типов транзакций
* Расчёт общей суммы транзакций
* Фильтрация по дате, диапазону сумм, названию магазина, типу транзакции
* Подсчёт дебетовых/кредитовых транзакций
* Поиск по ID и дате
* Вывод описаний транзакций
* Анализ месяцев с наибольшим количеством транзакций

---

## 🧪 Пример использования

Пример вызова в `main.js`:

```javascript
console.log("Уникальные типы:", getUniqueTransactionTypes(transactions));
console.log("Общая сумма:", calculateTotalAmount(transactions));
```

---

## 👩‍💻 Автор

Дарья — студентка Государственного университета Молдовы, факультет информатики. 2025 год.

---

## 📚 Использованные источники

* [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript)
* [JavaScript.info](https://learn.javascript.ru/)
* Лекции и методички преподавателя

---

## ✅ Дополнительно

* Приложение протестировано на нескольких наборах данных
* Обработка пустых массивов и одиночных транзакций включена
* Код снабжен комментариями и оформлен в стиле JSDoc

---


