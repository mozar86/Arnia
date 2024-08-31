import axios from 'axios';
import { GEMINI_API_KEY } from '../config/env';

export const getMeasureFromImage = async (imageBase64: string) => {
    try {
        const response = await axios.post('https://api.google.com/gemini/vision', {
            image: imageBase64,
            apiKey: GEMINI_API_KEY
        });

        return {
            imageUrl: response.data.imageUrl,
            measureValue: response.data.measureValue,
            measureUuid: response.data.measureUuid
        };
    } catch (error) {
        throw new Error('Failed to get measure from image');
    }
};
