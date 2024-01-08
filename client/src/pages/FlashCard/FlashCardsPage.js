import React, { useState, useEffect } from 'react';
import FlashCardList from '../../components/FlashCardList';
import FlashCardForm from '../../components/FlashCardForm';
import FlashCardService from '../../api/FlashCardService';
import './FlashCardsPage.css';


function FlashCardsPage() {
  const [flashCards, setFlashCards] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortAttribute, setSortAttribute] = useState('lastModified');

  const fetchFlashCards = async () => {
    try {
      const allFlashCards = await FlashCardService.getAllFlashCards();
      setFlashCards(allFlashCards);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
      setFlashCards([]);
    }
  };

  const handleUpdate = async (id, updatedFlashCard) => {
    try {
      const flashCardToUpdate = {
        ...updatedFlashCard,
        lastModified: new Date().toISOString()
      };
      await FlashCardService.updateFlashCard(id, flashCardToUpdate);
      fetchFlashCards();
    } catch (error) {
      console.error("Error updating flashcard:", error);
    }
  };



  const handleFlashCardSubmit = async (newFlashCardData) => {
    try {
      const flashCardToCreate = {
        ...newFlashCardData,
        lastModified: new Date().toISOString(),
        status: newFlashCardData.status || 'Want to Learn'
      };
      await FlashCardService.createFlashCard(flashCardToCreate);
      fetchFlashCards();
    } catch (error) {
      console.error("Error creating flashcard:", error);
    }
  };


  const handleDelete = async (id) => {
    try {
      await FlashCardService.deleteFlashCard(id);
      fetchFlashCards();
    } catch (error) {
      console.error("Error deleting flashcard:", error);
    }
  };

  useEffect(() => {
    fetchFlashCards();
  }, []);
  const processedFlashCards = flashCards
    .filter(card =>
      card.front.toLowerCase().includes(searchText.toLowerCase()) ||
      card.back.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter(card => (filterStatus ? card.status === filterStatus : true))
    .sort((a, b) => {
      if (sortAttribute === 'lastModified') {
        return new Date(b.lastModified) - new Date(a.lastModified); // Example for sorting by lastModified
      }
      // Implement additional sorting logics as required
    });

    return (
      <div className="flashcards-container">
        <div className="flashcards-header">
          <h1>Flash Cards</h1>
          <input
            type="text"
            className="input-text"
            placeholder="Search cards..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div>
            <select
              className="select-box"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="">All Statuses</option>
              <option value="Learned">Learned</option>
              <option value="Want to Learn">Want to Learn</option>
              <option value="Noted">Noted</option>
            </select>
            <select
              className="select-box"
              value={sortAttribute}
              onChange={(e) => setSortAttribute(e.target.value)}>
              <option value="lastModified">Last Modified</option>
              {/* Add other sort options as necessary */}
            </select>
          </div>
        </div>
        <FlashCardForm onFlashCardSubmit={handleFlashCardSubmit} />
        <div className="flashcards-list mt-20">
          <FlashCardList flashCards={processedFlashCards} onDelete={handleDelete} onUpdate={handleUpdate} />
        </div>
      </div>
    );
    
}

export default FlashCardsPage;
