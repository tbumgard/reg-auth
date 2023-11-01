import { MongoClient } from "mongodb";

export async function connectToCluster(uri){
    let mongoClient;

    try{
        mongoClient = new MongoClient(uri)
        console.log("Connecting to DB");
        await mongoClient.connect();
        console.log("Successfully connected to DB");

        return mongoClient
    } catch(error){
        console.log("Connection to DB failed.", error)
        process.exit();
    }
}

export async function executeCrud(option, user, updateInfo){
    const uri = process.env.DB_URI;
    let mongoClient;
   
    try{
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('user_registry');
        const collection = db.collection('users');
        collection.updateMany
        switch(option) {
            case 'create': return await createUser(collection, user);
            case 'read': return await readUser(collection, user);
            case 'update': const updatedUser = await updateUser(collection, user, updateInfo);
                        return updatedUser;
            case 'delete': return await deleteUser(collection, user);
        }
    } finally {
        await mongoClient.close();
    }

}

async function createUser(collection, user){
    return await collection.insertOne(user);
}

async function readUser(collection, user){
    return await collection.find(user).toArray();
}

async function updateUser(collection, user, updateInfo) {
    return await collection.updateMany(user, { $set: updateInfo });
}

async function deleteUser(collection, user){
    return await collection.deleteMany(user);
}