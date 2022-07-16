import axios from 'axios';


const instance = axios.create({
		baseURL: 'https://social-network.samuraijs.com/api/1.0/',
		withCredentials: true,
		headers: {
				'API-KEY': 'c0313221-8484-4768-9d93-144296373ae6'
		}
})

export const usersAPI = {
		getUsers(currentPage = 1, pageSize = 100) {
				return instance.get(`users?page=${currentPage}&count=${pageSize}`,
				).then(response => response.data)
		},
		follow(userId: number) {
				return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
		},
		unfollow(userId: number) {
				return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
		},
}
