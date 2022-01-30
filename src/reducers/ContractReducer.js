import $ from 'jquery'
import Toast from 'modern-toastr'

const initialState = {
    contractList: [],
    contractCount: 0,
    pagination: {
        activePage: 0
    },
    contractDetails: {
        title: '',
        description: '',
        date_added: '',
        author: ''
    },
    categoryList: [{
        name: 'Webseiten',
        slug: 'webseiten',
        icon: 'websites',
        contracts: '132'
    }, {
        name: 'Social Media',
        slug: 'social-media',
        icon: 'social-media',
        contracts: '31'
    }, {
        name: 'Graphic Design',
        slug: 'graphic-design',
        icon: 'design',
        contracts: '15'
    }, {
        name: 'Photographs',
        slug: 'photographs',
        icon: 'photograph',
        contracts: '96'
    }, {
        name: 'Copywriting',
        slug: 'copywriting',
        icon: 'copywriting',
        contracts: '43'
    }, {
        name: 'Marketing',
        slug: 'marketing',
        icon: 'marketing',
        contracts: '25'
    }],
    currentPage: 0,
    pages: 6
}

let ContractReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CONTRACTS_PENDING':
            console.log('get contracts pending')
            return state
            break
        case 'GET_CONTRACTS_FULFILLED':
            return Object.assign({}, state, {
                contractList: action.payload.data
            })
            break
        case 'GET_CONTRACTS_REJECTED':
            console.log('get contracts rejected')            
            return state            
            break
        case 'GET_CONTRACT_DETAILS':
            return Object.assign({}, state, {
                contractDetails: {
                    title: 'Erstellung einer kleinen Landing Page',
                    desc: 'Wir suchen einen Freelancer der uns schnell eine simple Landing Page erstellen kann in der sich um Transport handeln soll. Je nach dem wie lang es auch dauert, wird es auch                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis modi quibusdam sed sunt laudantium, ea vitae porro hic delectus, quaerat nihil deleniti, rem nesciunt dolorem inventore. Unde quam, saepe assumenda! Deleniti maxime quia, commodi facere unde ipsum voluptates, delectus, saepe, eaque eveniet consequatur aliquam. Dignissimos perferendis, itaque, recusandae impedit odit voluptatibus consequatur quae aperiam. Ipsa excepturi mollitia, unde a provident.',
                    date_added: '07.12.2017',
                    author: 'lily@gmail.com'
                }
            })
        default:
            return state
    }

}

export default ContractReducer