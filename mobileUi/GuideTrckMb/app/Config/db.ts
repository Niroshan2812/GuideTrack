import { openDatabaseAsync, SQLiteDatabase } from "expo-sqlite";

let db: SQLiteDatabase | null = null;

const initializeDatabace = async () => {

    try {
        db = await openDatabaseAsync('GuideTrack.db');


        if (!db) {
            console.log('Database not initialized');
            return;
        }
        // table for guides
        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS guides(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                category TEXT NOT NULL
                )
            `);
            
            
        // table for steps
        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS steps(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                guideId INTEGER NOT NULL,
                stepNumber INTEGER NOT NULL,
                task TEXT NOT NULL,
                image TEXT,
                recording TEXT,
                hint TEXT,
                FOREIGN KEY(guideId) REFERENCES guides(id) ON DELETE CASCADE
                )
         `);
        console.log('Database initialized sucessfully');

    } catch (error) {
        console.log('Failed to initialize database', error);
    }
};

const insertGuide =  async(title: string, description: string, category: string) => {
    if(!db) {
        console.log('Database not initialized');
        throw new Error('Database not initialized');
    }
    try{
        const result =  await db.runAsync(`
            INSERT INTO guides(title, description, category)
            VALUES(?, ?, ?)`
            , [title, description, category]);

        console.log('Guide inserted', result.lastInsertRowId);
        return result.lastInsertRowId;
    }catch(error) {
        console.log('Failed to insert guide', error);
        throw error;
    }
}

const insertStep = async (guideId: number,stepNumber: number, task: string, image: string | null, recording: string | null, hint: string) => {
    if (!db) {
        console.log('Database not initialized');
        throw new Error('Database not initialized');

    }
    console.log('Inserting step');
    try {
        await db.runAsync(`
            INSERT INTO steps(guideId, stepNumber, task, image, recording, hint)
            VALUES(?, ?, ?, ?, ?, ?)`, [guideId, stepNumber, task, image, recording, hint]

        );
        console.log('Step inserted');
    } catch (error) {
        console.log('Failed to insert step', error);
        throw error;
    }

};


const fegtchSteps = async () => {
    if (!db) {
        console.log('Database not initialized');
        return [];
    }

    const result = await db.getAllAsync(`
        SELECT * FROM steps
    `);

    return result;
}

const deleteTables = async () => {
    if (!db) {
        console.log('Database not initialized');
        throw new Error('Database not initialized');
    }

    try {
        await db.execAsync(`DROP TABLE IF EXISTS steps;`);
        console.log('Steps table deleted');

        await db.execAsync(`DROP TABLE IF EXISTS guides;`);
        console.log('Guides table deleted');
    } catch (error) {
        console.log('Error deleting tables:', error);
        throw error;
    }
};



export { initializeDatabace, insertStep, fegtchSteps , insertGuide,deleteTables};