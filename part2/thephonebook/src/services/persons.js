import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => { return axios.get(baseUrl)};

const create = newObject => { return axios.post(baseUrl, newObject)};

const update = (url, updatedNumber) => {
    return axios.patch(url, updatedNumber)
};

const deleteP = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
};

export default { 
    getAll: getAll,
    create: create,
    update: update,
    delete: deleteP
}