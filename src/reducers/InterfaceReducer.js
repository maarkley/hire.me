

const initialState = {

    tabs: [{
        name: 'Dashboard',
        icon: '/public/img/004-database.svg',
        path: '/dashboard',
        active: false
    }, {
        name: 'Sesje',
        icon: '/public/img/002-handshake.svg',
        path: '/contracts',
        active: false
    }, {
        name: 'Zamówienia',
        icon: '/public/img/001-man-user.svg',
        path: '/profile',
        active: false
    },  {
        name: 'Ustawienia',
        icon: '/public/img/003-configuration-cogwheel-interface-symbol.svg',
        path: '/settings',
        active: false
    }]

}

let InterfaceReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_ACTIVE_TAB':
            return Object.assign({}, state, {
                tabs: state.tabs.map((item, key) => {
                    if ( key == action.payload ) {
                        item.active = true
                    } else {
                        item.active = false
                    }
                    return item
                })
            })
        default:
            return state
    }

}

export default InterfaceReducer