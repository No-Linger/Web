import axios from 'axios';
import BucketService from '@/app/utils/oracleBucket';
import { BUCKET_URL } from '../../app/utils/config';
// Mockear Axios para evitar llamadas a la red real
jest.mock('axios');

describe('BucketService', () => {
    let bucketService;

    beforeEach(() => {
        bucketService = new BucketService();
    });

    it('should create a BucketService instance', () => {
        expect(bucketService).toBeInstanceOf(BucketService);
    });

    it('should have the correct signed URL', () => {
        expect(bucketService.signedURL).toBe(BUCKET_URL);
    });

    it('should upload a file successfully', async () => {
        const imageData = 'base64encodedimage';
        const fileName = 'example.jpg';
        const mockResponse = { data: 'File uploaded successfully' };
        axios.post.mockResolvedValue(mockResponse);

        const response = await bucketService.uploadFile(imageData, fileName);

        expect(response).toEqual(mockResponse);
    });

    it('should throw an error if either imageData or fileName is missing', async () => {
        const imageData = 'base64encodedimage';
        const fileName = null;

        await expect(bucketService.uploadFile(imageData, fileName)).rejects.toThrow('Invalid input parameters');
    });

    it('should handle upload failure and rethrow the error', async () => {
        const imageData = 'base64encodedimage';
        const fileName = 'example.jpg';
        const mockError = new Error('Upload failed');
        axios.post.mockRejectedValue(mockError);

        await expect(bucketService.uploadFile(imageData, fileName)).rejects.toThrow(mockError);
    });
});
