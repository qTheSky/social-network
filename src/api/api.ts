import axios from 'axios';


const instance = axios.create({
		baseURL: 'https://social-network.samuraijs.com/api/1.0/',
		withCredentials: true,
		headers: {
				'API-KEY': 'c0313221-8484-4768-9d93-144296373ae6'
		},
})

export const usersAPI = {
		getUsers(currentPage = 1, pageSize = 100) {
				return instance.get(`users?page=${currentPage}&count=${pageSize}`,
				).then(response => response.data)
		},
		follow(userId: number) {
				return instance.post(`follow/${userId}`)
		},
		unfollow(userId: number) {
				return instance.delete(`follow/${userId}`)
		},
		getProfile(userId: string) {
				console.warn('Obselete method. Please profileAPI object.')
				return profileAPI.getProfile(userId)
		},
}
export const profileAPI = {
		getProfile(userId: string) {
				return instance.get(`profile/` + userId)
		},
		getStatus(userId: string) {
				return instance.get(`profile/status/` + userId)
		},
		updateStatus(newStatus: string) {
				return instance.put(`profile/status/`, {status: newStatus})
		},
}

export const authAPI = {
		me() {
				return instance.get(`auth/me`)
		},
}