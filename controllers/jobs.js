const getAllJobs = async (req, res) => {
    res.send('get all jobs')
}
const getJob = async (req, res) => {
    res.send('get Job')
}
const createJob = async (req, res) => {
    res.send('login user')
}
const updateJob = async (req, res) => {
    res.send('update job')
}
const deleteJob = async (req, res) => {
    res.send('delete user')
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}