const express = require('express');
const router = express.Router();

router.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = "Mayank_Kumar_Pal_25062003"; 
    const email = "mp7616@srmist.edu.in"; 
    const roll_number = "RA2111028010214"; 

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highest_alphabet = alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    });
});

router.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

module.exports = router;
