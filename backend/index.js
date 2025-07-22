const express = require('express');
const cors = require('cors');
const { ethers } = require('ethers');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/relay', async (req, res) => {
    const { to, data } = req.body;

    const provider = new ethers.providers.JsonRpcProvider(process.env.BDAG_RPC_URL);
    const wallet = new ethers.Wallet(process.env.SPONSOR_PRIVATE_KEY, provider);

    const tx = await wallet.sendTransaction({
        to,
        data,
        gasLimit: 1000000
    });

    res.json({ txHash: tx.hash });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
