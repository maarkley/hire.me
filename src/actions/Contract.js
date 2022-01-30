import axios from 'axios'

export function getContracts() {
    return {
        type: 'GET_CONTRACTS',
        payload: axios.get('https://demo6282959.mockable.io/contracts')
    }
}

export function getContractDetails(slug) {
    return {
        type: 'GET_CONTRACT_DETAILS',
        slug: slug
    }
}