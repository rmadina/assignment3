import axios from 'axios';

const FLASHCARDS_URL = 'http://localhost:3000/flashcards';
const MESSAGES_URL = 'http://localhost:3000/messages';

const FlashCardService = {
  getAllFlashCards: async () => {
    try {
      const response = await axios.get(FLASHCARDS_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getFlashCard: async (id) => {
    try {
      const response = await axios.get(`${FLASHCARDS_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createFlashCard: async (flashCard) => {
    try {
      const response = await axios.post(FLASHCARDS_URL, flashCard);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  updateFlashCard: async (id, updatedFlashCard) => {
    try {
      const response = await axios.put(`${FLASHCARDS_URL}/${id}`, updatedFlashCard);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  deleteFlashCard: async (id) => {
    try {
      const response = await axios.delete(`${FLASHCARDS_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createMessage: async (messageData) => {
    try {
      const response = await axios.post(MESSAGES_URL, messageData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default FlashCardService;
