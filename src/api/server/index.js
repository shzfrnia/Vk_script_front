import axios from 'axios'

const API_ENDPINT = 'http://localhost:5000/api'

const API_ROUTES = {
  'user': `${API_ENDPINT}/user`,
  'banned': `${API_ENDPINT}/user/banned_friends`,
  'deleted': `${API_ENDPINT}/user/deleted_friends`,
  'abandoned': `${API_ENDPINT}/user/abandoned_friends`
}


export class UserAPI {
  static async getUser(user_ids) {
    try {
      const result = await axios.get(API_ROUTES.user,{params: {user_ids: user_ids}})
      return result.data
    } catch (e) {
      throw {error: "User was not found"}
    }
  }

  static async getBannedFriends(user_ids) {
    try {
      const result = await axios.get(API_ROUTES.banned,{params: {user_ids: user_ids}})
      return result.data
    } catch (e) {
      throw {error: e}
    }
  }

  static async getDeletedFriends(user_ids) {
    try {
      const result = await axios.get(API_ROUTES.deleted,{params: {user_ids: user_ids}})
      return result.data
    } catch (e) {
      throw {error: e}
    }
  }

  static async getAbandonedFriends(user_ids) {
    try {
      const result = await axios.get(API_ROUTES.abandoned,{params: {user_ids: user_ids}})
      return result.data
    } catch (e) {
      throw {error: e}
    }
  }
}
