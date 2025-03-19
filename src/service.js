
import axios from 'axios';

axios.defaults.baseURL = "https://localhost:7237"; // עדכון baseURL

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error("Axios Error", error.message);
        return Promise.reject(error);
    }
);

export default {
    // לקבל
    getItems: async () => {
        try {
            const result = await axios.get(`/tasks`); // השאר את הבקשה כפי שהיא
            return result.data;
        } catch (error) {
            console.error("Network Error: Unable to fetch tasks", error.message);
            throw error;
        }
    },
    // הוספה
    addItem: async (name) => {
        try {
            const result = await axios.post(`/tasks`, { name });
            return result.data;
        } catch (error) {
            console.error("Error adding tasks:", error);
            throw error;
        }
    },
    // עידכון
    setCompleted: async (id, isComplete) => {
        try {
            const result = await axios.put(`/tasks/${id}`, { isComplete });
            return result.data;
        } catch (error) {
            console.error("Error updating tasks:", error);
            throw error;
        }
    },
    // מחיקה
    deleteItem: async (id) => {
        try {
            const result = await axios.delete(`/tasks/${id}`); 
            return result.data;
        } catch (error) {
            console.error("Error deleting tasks:", error);
            throw error;
        }
    },
};