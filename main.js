/**
 * @fileoverview Анализатор транзакций на JavaScript
 */

const transactions = [
  {
    transaction_id: "tx001",
    transaction_date: "2024-03-12",
    transaction_amount: 120.50,
    transaction_type: "credit",
    transaction_description: "Зарплата",
    merchant_name: "Компания XYZ",
    card_type: "debit"
  },
  {
    transaction_id: "tx002",
    transaction_date: "2024-03-13",
    transaction_amount: 40.00,
    transaction_type: "debit",
    transaction_description: "Покупка продуктов",
    merchant_name: "Супермаркет",
    card_type: "debit"
  },
  // Можно добавить больше транзакций
];

function getUniqueTransactionTypes(transactions) {
  return [...new Set(transactions.map(t => t.transaction_type))];
}

function calculateTotalAmount(transactions) {
  return transactions.reduce((total, t) => total + t.transaction_amount, 0);
}

function calculateTotalAmountByDate(transactions, year, month, day) {
  return transactions
    .filter(t => {
      const d = new Date(t.transaction_date);
      return (!year || d.getFullYear() === year) &&
             (!month || d.getMonth() + 1 === month) &&
             (!day || d.getDate() === day);
    })
    .reduce((sum, t) => sum + t.transaction_amount, 0);
}

function getTransactionByType(transactions, type) {
  return transactions.filter(t => t.transaction_type === type);
}

function getTransactionsInDateRange(transactions, startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return transactions.filter(t => {
    const date = new Date(t.transaction_date);
    return date >= start && date <= end;
  });
}

function getTransactionsByMerchant(transactions, merchantName) {
  return transactions.filter(t => t.merchant_name === merchantName);
}

function calculateAverageTransactionAmount(transactions) {
  if (!transactions.length) return 0;
  return calculateTotalAmount(transactions) / transactions.length;
}

function getTransactionsByAmountRange(transactions, minAmount, maxAmount) {
  return transactions.filter(t => t.transaction_amount >= minAmount && t.transaction_amount <= maxAmount);
}

function calculateTotalDebitAmount(transactions) {
  return transactions
    .filter(t => t.transaction_type === "debit")
    .reduce((sum, t) => sum + t.transaction_amount, 0);
}

function findMostTransactionsMonth(transactions) {
  const counts = {};
  transactions.forEach(t => {
    const month = new Date(t.transaction_date).getMonth();
    counts[month] = (counts[month] || 0) + 1;
  });
  return Object.entries(counts).reduce((a, b) => b[1] > a[1] ? b : a)[0];
}

function findMostDebitTransactionMonth(transactions) {
  const counts = {};
  transactions.forEach(t => {
    if (t.transaction_type === "debit") {
      const month = new Date(t.transaction_date).getMonth();
      counts[month] = (counts[month] || 0) + 1;
    }
  });
  return Object.entries(counts).reduce((a, b) => b[1] > a[1] ? b : a)[0];
}

function mostTransactionTypes(transactions) {
  let debit = 0, credit = 0;
  transactions.forEach(t => {
    if (t.transaction_type === "debit") debit++;
    else if (t.transaction_type === "credit") credit++;
  });
  if (debit > credit) return "debit";
  else if (credit > debit) return "credit";
  return "equal";
}

function getTransactionsBeforeDate(transactions, date) {
  const d = new Date(date);
  return transactions.filter(t => new Date(t.transaction_date) < d);
}

function findTransactionById(transactions, id) {
  return transactions.find(t => t.transaction_id === id);
}

function mapTransactionDescriptions(transactions) {
  return transactions.map(t => t.transaction_description);
}

// Вывод в консоль:
console.log("Уникальные типы транзакций:", getUniqueTransactionTypes(transactions));
console.log("Общая сумма:", calculateTotalAmount(transactions));
console.log("Средняя сумма:", calculateAverageTransactionAmount(transactions));
