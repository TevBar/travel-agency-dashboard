import { Client, Databases, Account, Storage } from 'appwrite';

// Configuration object with your environment variables
export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tripsCollectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
};

// Initialize Appwrite Client
export const client = new Client()
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId);

// Initialize Appwrite services
export const databases = new Databases(client);
export const account = new Account(client);

// Export configuration for easy access
export default appwriteConfig;

const storage = new Storage(client);
export { storage };