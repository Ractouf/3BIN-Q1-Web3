const mongoose = require('mongoose');

if (process.argv.length < 3) {
    console.log('Usage :');
    console.log('GET: node mongo.js [password]');
    console.log('POST: node monge.js [password] [name] [number]');
    process.exit(1);
}

const password = process.argv[2];

const url =
    `mongodb+srv://Ractouf:${password}@web3.p5ushlp.mongodb.net/web3?retryWrites=true&w=majority`;

mongoose.set('strictQuery',false);
mongoose.connect(url);

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: Number,
});

const Phonebook = mongoose.model('Phonebook', phonebookSchema);

/**
 * node mongo.js [password]
 */
if (process.argv.length === 3) {
    console.log("phonebook");
    Phonebook.find({}).then(result => {
        result.forEach(phone => {
            console.log(`${phone.name} ${phone.number}`);
        })
        mongoose.connection.close();
        process.exit(0);
    });
}

/**
 * node monge.js [password] [name] [number]
 */
if (process.argv.length === 5) {
    const name = process.argv[3];
    const number = process.argv[4];

    const phonebook = new Phonebook({
        name: name,
        number: number,
    });

    phonebook.save().then(result => {
        console.log(`Added ${name} number ${number} to phonebook`)
        mongoose.connection.close();
        process.exit(0);
    });
}
