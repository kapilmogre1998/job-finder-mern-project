const express = require('express');
const router = express.Router();
const Job = require('../Schema/jobSchema');

router.get('/', async (req, res) => {
    const jobs = await Job.find();
    if(!jobs){
        return res.status(401).json({message: 'No Jobs Found'});
    }
    else{
        return res.json({ sts: 1, data: jobs});
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const job = await Job.findById(id);
    if(!job){
        return res.status(401).json({message: 'No Job Found By This Id'});
    }
    else{
        return res.json({ sts: 1, data: job});
    }
})

router.post('/add', async(req, res) => {
    const { companyName, logoUrl, position, location, salary, skillsRequired, type, description, aboutCompany, skills, addInfo } = req.body;
    let newJob = new Job({
        companyName, 
        logoUrl, 
        position, 
        location, 
        salary, 
        type, 
        description, 
        aboutCompany, 
        skills, 
        addInfo 
    });

    try{
        await newJob.save();
        return res.json({sts: 1, message:'New Job Added Successfully'});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message: err.message});
    }
    
})

module.exports = router;