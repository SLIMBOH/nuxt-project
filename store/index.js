import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://vue-http-demo-6ee07-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json').then(
                    res => {
                        const postArray = [];
                        for (const key in res.data) {
                            postArray.push({ ...res.data[key], id: key })
                        }
                        vuexContext.commit('setPosts', postArray);
                    }
                ).catch(e => context.error(e));
            },

            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts);
            }
        }
    })
}

export default createStore;