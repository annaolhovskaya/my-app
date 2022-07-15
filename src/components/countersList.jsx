import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужная вещь' },
    { id: 1, value: 4, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Тарелка' },
    { id: 4, value: 0, name: 'Набор минималиста' },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((count) => count.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    console.log('handle reset');
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    const updatedCounters = counters.map((count) => {
      if (count.id === id) {
        const newQuantity = count.value + 1;
        return {
          ...count,
          value: newQuantity,
        };
      } else {
        return count;
      }
    });

    setCounters(updatedCounters);
  };

  const handleDecrement = (id) => {
    const updatedCounters = counters.map((count) => {
      if (count.id === id) {
        const newQuantity = count.value - 1;
        return {
          ...count,
          value: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return count;
      }
    });

    setCounters(updatedCounters);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        ></Counter>
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
