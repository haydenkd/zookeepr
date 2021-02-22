const path = require('path');
const router = require('express').Router();

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

module.exports = router;