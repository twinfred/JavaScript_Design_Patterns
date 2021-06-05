import { v4 as uuidv4 } from 'uuid';
import shortUuid from 'short-uuid';

function uuid() {
  this.generateId = function() {
    return uuidv4();
  }

  this.generateShortId = function() {
    return shortUuid.generate();
  }
}

export default new uuid;