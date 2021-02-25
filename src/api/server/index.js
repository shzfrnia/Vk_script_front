import axios from 'axios'

const API_ENDPOINT = `${process.env.VUE_APP_API_HOST}/api`

const API_ROUTES = {
  'user': `${API_ENDPOINT}/user/`,
  'banned': `${API_ENDPOINT}/user/banned_friends/`,
  'deleted': `${API_ENDPOINT}/user/deleted_friends/`,
  'abandoned': `${API_ENDPOINT}/user/abandoned_friends/`,
  'friendsList': `${API_ENDPOINT}/user/friends/`
}


export class UserAPI {
  static async getUser(user_ids) {
    try {
      const result = await axios.get(API_ROUTES.user + user_ids)
      return result.data
    } catch (e) {
      throw {error: "Аккаунт не найден"}
    }
  }

  static async getBannedFriends(user_ids) {
    try {
      const result = await axios.get(API_ROUTES.banned + user_ids)
      return result.data
    } catch (e) {
      throw {error: e}
    }
  }

  static async getDeletedFriends(user_ids) {
    try {
      const result = await axios.get(API_ROUTES.deleted + user_ids)
      return result.data
    } catch (e) {
      throw {error: e}
    }
  }

  static async getAbandonedFriends(user_ids) {
    try {
      const result = await axios.get(API_ROUTES.abandoned + user_ids,{params: {days_offline: 999}})
      return result.data
    } catch (e) {
      throw {error: e}
    }
  }

  static async getFriendsList(user_ids) {
    try {
      const result = await axios.get(API_ROUTES.friendsList + user_ids)
      return result.data
    } catch (e) {
      throw {error: e}
    }
  }
}
