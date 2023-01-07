const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(4500, () => {
	console.log('server has started on port 4500');
});
