
# StorageComparison – Расширенная демонстрация типов памяти в Solidity

## 🎯 Цель проекта

Цель контракта — продемонстрировать различия между основными типами памяти в Solidity (`storage`, `memory`, `calldata`, `stack`) и измерить потребление газа при их использовании.

Проект включает юнит-тесты с анализом `gasUsed` и рассчитан на обучение и демонстрацию оптимизации смарт-контрактов.

---

## 📦 Структура контракта

Контракт `StorageComparison.sol` содержит:

- ✅ `writeToStorage(uint256)` – записывает значение в хранилище `storage`
- ✅ `sumMemory(uint[] memory)` – складывает элементы массива в памяти `memory`
- ✅ `sumCalldata(uint[] calldata)` – складывает элементы массива `calldata`
- ✅ `computeStack()` – вычисление выражения со значениями в `stack`

---

## 🧠 Сравнение типов памяти

| Тип       | Назначение                           | Изменяемый | Эффективность по газу |
|-----------|--------------------------------------|------------|------------------------|
| `storage` | Постоянное хранилище в блокчейне     | Да         | ❌ дорого              |
| `memory`  | Временное, изменяемое                | Да         | ⚠️ среднее             |
| `calldata`| Только для чтения, внешние вызовы    | Нет        | ✅ дешевле             |
| `stack`   | Локальные значения                   | Да         | ✅ очень эффективно    |

---

## ✅ Результаты тестов

```text
Gas used [writeToStorage]: 43724
✔️ should write to storage
✔️ should return correct sum (memory)
✔️ should return correct sum (calldata)
✔️ should return stack result
```

---

## 🔬 Выводы

- Запись в `storage` требует наибольшее количество газа
- `memory` и `calldata` выполняют одни и те же задачи, но `calldata` предпочтительнее при передаче только для чтения
- Использование `stack` — наиболее эффективное по газу

---

## ⚙️ Установка и запуск

```bash
npm install
npx hardhat test
```

---

## 📌 Дополнительно

Проект можно расширить:
- Добавлением сравнительных тестов `gasUsed` между `memory` и `calldata`
- Отчетами в CSV или Markdown
- Визуализацией графиков через scripts

