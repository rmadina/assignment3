import React from 'react';
import FlashCard from './FlashCard';

import './FlashCardList.css';

function FlashCardList({ flashCards, onDelete, onEdit, onUpdate }) {
  return (
    <div className="flashcard-list">
      {flashCards.map(card => (
        <FlashCard 
          key={card.id} 
          flashCard={card} 
          onDelete={onDelete} 
          onEdit={onEdit}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}


export default FlashCardList;
