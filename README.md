# StorageOptimized – Учебный пример по типам памяти в Solidity (домашнее задание №3)

## � Цель проекта

Данный проект демонстрирует, как используются различные типы памяти в Solidity: `storage`, `memory`, `calldata`, `stack`. 
Контракт разработан для учебных целей и показывает, как работает каждый тип и как они влияют на поведение и потребление газа.

---

## � Используемые типы памяти

| Тип памяти | Функция | Назначение |
|------------|---------|------------|
| `storage`  | `setStoredValue()`, `getStoredValue()` | Постоянное хранение данных в блокчейне |
| `memory`   | `useMemory(uint[] memory input)` | Временная изменяемая память (RAM) |
| `calldata` | `useCalldata(uint[] calldata input)` | Только для чтения, эффективно по газу |
| `stack`    | `useStack()` | Операции с временными переменными в стеке EVM |

---

## � Обзор функций

```solidity
function setStoredValue(uint256 _value) public
```
Сохраняет значение в `storage`. Это дорогая операция, так как меняет состояние блокчейна.

```solidity
function getStoredValue() public view returns (uint256)
```
Читает значение из `storage`. Дешёвая операция.

```solidity
function useMemory(uint256[] memory input) public pure returns (uint256)
```
Использует временное хранилище `memory`, можно модифицировать данные.

```solidity
function useCalldata(uint256[] calldata input) external pure returns (uint256)
```
Использует `calldata`, эффективно по газу, доступ только для чтения.

```solidity
function useStack() public pure returns (uint256)
```
Показывает арифметику в стеке с оптимизацией `unchecked`.

---

## ✅ Unit-тесты

Тесты проверяют:
- Запись и чтение значения в `storage`
- Возврат данных из `memory` и `calldata`
- Арифметику в `stack`

---

## ⚙️ Как запустить

```bash
npm install
npx hardhat test
```

---

## � Заключение

Контракт предназначен для демонстрации различий между `storage`, `memory`, `calldata` и `stack`. 
Он может быть расширен для измерения потребления газа и оптимизации функций.
