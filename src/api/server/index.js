import axios from 'axios'

const API_ENDPINT = 'http://localhost:5000/api'

const API_ROUTES = {
  'user': `${API_ENDPINT}/user`
}


export class UserAPI {
  static async getUser(user_ids) {
    try {
      const result = await axios.get(API_ROUTES.user,{params: {user_ids: user_ids}})
      return result.data
    } catch (e) {
      throw {error: e}
    }
  }

  static async getBannedFriends(user_ids) {
  }

  static async getDeletedFriends(user_ids) {
  }

  static async getAbandonedFriends(user_ids) {
  }
}
