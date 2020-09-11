export const state = () => ({
    message: 'ops'
})

export const getters = { 
    message (state) {
        return state.message
    }
}
 
export const mutations = { 
    SET_MESSAGE (state, message) {
        state.message = message
    }
}

export const actions = { 
 flash({ commit }, message) {
     commit('SET_MESSAGE', message)
 }
}
