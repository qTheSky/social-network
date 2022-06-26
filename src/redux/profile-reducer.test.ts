import profileReducer, {addPostActionCreator, ProfilePageType, updateNewPostTextActionCreator} from './profile-reducer';

test('new post should be added',()=>{
		const initialState: ProfilePageType = {
				posts: [
						{id: 1, message: 'Hi,how are you', likesCount: 12},
				],
				newPostText: 'newpost'
		}

		const action = addPostActionCreator()
		const endState = profileReducer(initialState,action)

		expect(endState.posts[0].message).toBe('newpost')

})
test('new postText should be updated',()=>{
		const initialState: ProfilePageType = {
				posts: [
						{id: 1, message: 'Hi,how are you', likesCount: 12},
				],
				newPostText: ''
		}

		const action = updateNewPostTextActionCreator('blabla')
		const endState = profileReducer(initialState,action)

		expect(endState.newPostText).toBe('blabla')

})