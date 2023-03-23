const { fetchData } = require('../helpers/fetchData')

const getEntries = async (req, res) => {
    const resp = await fetchData('getEntries', req);  
    if (resp.ok) {
        return res.render('index',{
            data: resp.response
        })
    }
}

module.exports = {
    getEntries
}