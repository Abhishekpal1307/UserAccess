// MongoDB client
import { MongoClient } from 'mongodb';

const MONGODB_URI = import.meta.env.VITE_MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = 'user-access-system';

export const mongoClient = new MongoClient(MONGODB_URI);
export const db = mongoClient.db(DB_NAME);