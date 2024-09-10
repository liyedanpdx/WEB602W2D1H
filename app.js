var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]

const { MongoClient } = require('mongodb');
// Create instance of MongoClient for mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017/statsdb');

// Connect to database
client.connect()
    .then(() => {
        var dbo = client.db('statsdb');
/*        console.log('Connected Successfully & Database Created!');
        // Close the database client connection
        client.close();*/
/*        dbo.createCollection('uscensus').then(()=>{
            console.log('Successfully create collection uscensus.');
            client.close();
        })*/
/*        dbo.collection('uscensus').insertMany(stats).then(()=>{
            console.log('Successfully insert stats to uscensus.');
            client.close();
        })*/
/*        new_records=[
            {
                'city': 'Pacoima', 
                'zip': '91331', 
                'state': 'CA', 
                'income': '60360',
                'age': '33'
            },
            {
                'city': 'Ketchikan', 
                'zip': '99950', 
                'state': 'AK', 
                'income': '00000',
                'age': '00'
            }
        ]
        dbo.collection('uscensus').insertMany(new_records).then(()=>{
            console.log(`Successfully insert two new records ${JSON.stringify(new_records)}.`)
        })*/
/*        var query = {city: 'Corona'}
        dbo.collection('uscensus').findOne(query).then((res)=>{
            console.log(`Zip code for Corona, NY is ${res.zip}`);
        })*/
/*        var myquery = { state: /^CA/};
        dbo.collection('uscensus').find(myquery)
            .toArray()
            .then(items =>{
                console.log(`Successfully found ${items.length} documents.`);
                console.log(items);
                client.close();
            })*/
/*        var update_value={ $set: {income:'38910', age:'46'}};
        var query={state: 'AK'};
        dbo.collection('uscensus').updateOne(query,update_value).then(()=>{
            console.log(`Successfully update ${JSON.stringify(query)} documents.`);
            console.log(`Updated Value: ${JSON.stringify(update_value)}`);
        })*/
        sort_value={state: 1};
        dbo.collection('uscensus').find()
            .sort(sort_value)
            .toArray()
            .then(items=>{
                console.log('Successfully sort the uscensus docyments.');
                console.log(items)
            })
    })
    .catch(error => console.log('Failed to connect', error));







