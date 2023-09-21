import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
dotenv.config('../');
export async function con() {
    try {
        const uri = `mongodb+srv://root:${process.env.ATLAS_PASSWORD}@cluster0.hiif8hy.mongodb.net/${process.env.ATLAS_DB}`
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        const client = await MongoClient.connect(uri, options);
        return client.db();
    } catch (error) {
        return { status: 500, message: error.message }
    }
}
export const collectionGen = async (coleccion) => {
    const db = await conexion();
    const newCollection = await db.collection(coleccion);
    return newCollection;
}