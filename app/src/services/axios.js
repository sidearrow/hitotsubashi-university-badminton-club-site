import Axios from 'axios'
import config from '../config';

console.log(config)

Axios.defaults.baseURL = config.apiBaseUrl

export default Axios
