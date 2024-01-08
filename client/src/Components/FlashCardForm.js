import React, { useState } from 'react';
import './FlashCardForm.css'; 

function FlashCardForm({ onFlashCardSubmit }) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [status, setStatus] = useState('Want to Learn');
  
  const handleSubmit = (event) => {
    event.preventDefault(); 

    
    const newFlashCardData = {
      front: front,
      back: back,
      lastModified: new Date().toISOString(), 
      status: status, 
    };

    onFlashCardSubmit(newFlashCardData); 

   
    setFront('');
    setBack('');
    setStatus('Want to Learn');
  };

  return (
    <form onSubmit={handleSubmit} className="flashcard-form">
      <div className="form-group">
        <label htmlFor="front">Front (Question/Text/Image URL)</label>
        <input
          type="text"
          id="front"
          value={front}
          onChange={(e) => setFront(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Back (Answer/Information)</label>
        <textarea
          id="back"
          value={back}
          onChange={(e) => setBack(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Learned">Learned</option>
          <option value="Want to Learn">Want to Learn</option>
          <option value="Noted">Noted</option>
        </select>
      </div>
      <button type="submit" className="submit-btn">Add FlashCard</button>
    </form>
  );
}

export default FlashCardForm;
