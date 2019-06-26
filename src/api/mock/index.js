import {FakeUser, FakeFriends} from "./data";


export class UserAPI {
    static async getUser(user_ids) {
        if (UserAPI.foo()) {
            const account = FakeUser
            return account
        } else {
            throw {error: "User not found"}
        }
    }

    static foo() {
        return true
    }
}