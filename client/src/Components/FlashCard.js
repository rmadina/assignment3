import React, { useState } from 'react';
import './FlashCard.css'; // Ensure this path is correct

function FlashCard({ flashCard, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedFront, setEditedFront] = useState(flashCard.front);
  const [editedBack, setEditedBack] = useState(flashCard.back);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    const updatedFlashCard = {
      ...flashCard,
      front: editedFront,
      back: editedBack,
      lastModified: new Date().toISOString(),
    };
    onUpdate(flashCard.id, updatedFlashCard);
    setIsEditing(false);
  };

  return (
    <div className="flashcard">
      {isEditing ? (
        <div className="editing">
          <div>
            <label>Front:</label>
            <input type="text" value={editedFront} onChange={(e) => setEditedFront(e.target.value)} />
          </div>
          <div>
            <label>Back:</label>
            <input type="text" value={editedBack} onChange={(e) => setEditedBack(e.target.value)} />
          </div>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <>
          <div><strong>Front:</strong> {flashCard.front}</div>
          <div><strong>Back:</strong> {flashCard.back}</div>
          <div><strong>Status:</strong> {flashCard.status}</div>
          <div><strong>Last Modified:</strong> {new Date(flashCard.lastModified).toLocaleString()}</div>
          <div className="card-actions">
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={() => onDelete(flashCard.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default FlashCard;
