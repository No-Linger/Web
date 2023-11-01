import axios from 'axios';
import { NEXT_PUBLIC_BUCKET_URL } from './config';

export default class BucketService {
    /**
     * Represents a service for uploading files to a specified bucket URL.
     * @constructor
     */
    constructor(){
        if(!BucketService.instance){
            BucketService.instance = this;

            this.signedURL = NEXT_PUBLIC_BUCKET_URL;
        }

        return BucketService.instance;
    }

    /**
     * Uploads a file to the specified bucket URL.
     * @param {string} imageData - The base64 encoded image data.
     * @param {string} fileName - The name of the file.
     * @returns {Promise} - A promise that resolves with the response from the server if the upload is successful.
     * @throws {Error} - If either imageData or fileName is missing.
     */
    async uploadFile(imageData, fileName){
        if (!imageData || !fileName) {
            throw new Error('Invalid input parameters');
        }
        
        console.log(fileName)
        try {
            const response = await axios.put(`${this.signedURL}/${fileName}`, imageData, {
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Content-Type': 'image/jpeg',
                }});
            console.log(response);
            
            const downloadURL = `${this.signedURL}/${fileName}`;

            return downloadURL;
        } catch (error) {
            console.log(error)
        }
    }
}

