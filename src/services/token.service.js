import { database } from "../firebase";

const db = database.ref("/tokens");

class TokenDataService {
  create(token) {
    return db.push(token);
  }
}

export default new TokenDataService();