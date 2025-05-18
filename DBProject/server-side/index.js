const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

// ${process.env.DB_USER}:${process.env.DB_PASs}

// Add MongoDB Start

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@myclusterone.mhcenxj.mongodb.net/?retryWrites=true&w=majority&appName=MyClusterOne`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        // DATA CONNECTION START....
        const dataCollection = client.db('dataDB').collection('data')
        // DATA CONNECTION END....

        // CURD OPERATION START.
        // ----------------------------------------------------------------------------------


        // GET ALL DATA START.........................
        // GET ALL DATA START.
        app.get('/data', async (req, res) => {
            const result = await dataCollection.find().toArray();
            res.send(result);
        })
        // GET ALL DATA END.
        // GET SINGLE DATA START.
        app.get('/data/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await dataCollection.findOne(query);
            res.send(result);
        })
        // GET SINGLE DATA END.
        // GET ALL DATA END..........................

        // POST UPDATA DELETE OPERATION START................
        // POST DATA START.
        app.post('/data', async (req, res) => {
            const newData = req.body;
            const result = await dataCollection.insertOne(newData);
            res.send(result);

        })
        // POST DATA END.

        // UPDATE DATA START.
        app.put('/data/:id', async (req, res) => {
            const updatedData = req.body;
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: updatedData,
            };

            const result = await dataCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })
        // UPDATE DATA END.

        // DELETE DATA START.
        app.delete('/data/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await dataCollection.deleteOne(query);
            res.send(result);
        })
        // DELETE DATA END.
        // POST UPDATA DELETE OPERATION END...................


        // ----------------------------------------------------------------------------------
        // CURD OPERATION END.
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);

// Add MongoDB End

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`server side app listening on port ${port}`);
})
