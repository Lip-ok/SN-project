import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "65b483b0-a6cb-4653-b206-8b756cad32cd"},
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    getPrifile(userId) {
        return instance.get(`profile/${userId}`)
    },
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }

}