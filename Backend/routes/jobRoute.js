const express = require('express');
const router = express.Router();
const Job = require('../Schema/jobSchema');
const authenticateToken = require('../middleware/authenticateToken');

router.get('/', async (req, res) => {
    let query = {};
    
    if(req.query.title){
        query.position = {$regex:req.query.title,$options:"i"}
    }
    if(req.query.skills){
        query.skills = {$in:[req.query.skills]}
    }
    
    const jobs = await Job.find(query);
    
    if (!jobs) {
        return res.status(404).json({ message: 'No Jobs Found', sts: 1 });
    } else {
        return res.status(201).json({ sts: 1, data: jobs });
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const job = await Job.findById(id);

    if (!job) {
        return res.status(404).json({ message: 'No Job Found By This Id', sts: 1 });
    } else {
        return res.json({ sts: 1, data: job });
    }
})

router.post('/add', authenticateToken ,async (req, res) => {
    try {
        const { companyName, logoUrl, position, location, salary, type, description, aboutCompany, skills, addInfo } = req.body;
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
            addInfo,
            createdBy: req.user.userId
        });
        await newJob.save();
        return res.json({ sts: 1, message: 'New Job Added Successfully' });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error in creating job" });
    }

})

router.put('/update/:id', authenticateToken, async (req, res) => {
    const id = req.params.id;
    const { companyName, logoUrl, position, location, salary, type, description, aboutCompany, skills, addInfo } = req.body;
    
    try {
        const job = await Job.findById(id);
        if(!job){
            return res.json({ message: "No Job Found" })
        }
        
        if(req.user.userId !== job.createdBy.toString()){
            return res.json({ message: "You are not authorized to update this job" })
        }

        await Job.findByIdAndUpdate(id, {
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
        return res.json({ message: "Job updated Successfully" })
    } catch (error) {
        console.log(error)
        res.json({ message: error })
    }
})

router.delete('/delete/:id', authenticateToken, async (req, res) => {
    const id = req.params.id;

    try {
        const job = await Job.findById(id);
        if(!job){
            return res.json({ message: "No Job Found" })
        }
        if(req.user.userId !== job.createdBy.toString()){
            return res.json({ message: "You are not authorized to delete this job" })
        }

        await Job.findByIdAndDelete(id);
        return res.json({ message: "Job deleted Successfully" })
    } catch (error) {
        console.log(error)
        res.json({ message: error })
    }
})

module.exports = router;