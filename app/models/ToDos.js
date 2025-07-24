// {
//   "completed": {
//     "type": "Boolean",
//     "required": true,
//     "default": false
//   },
//   "description": {
//     "type": "String",
//     "required": true,
//     "maxLength": 500
//   },
//   "creatorId": {
//     "type": "SchemaObjectId",
//     "required": true,
//     "ref": "Account"
//   },
//   "creator": {
//     "virtual": true,
//     "name": "String",
//     "picture": "String",
//     "id": "SchemaObjectId",
//     "comments": "The creator is a truncated representation of the user who created the todo. Creator data is pulled by matching an Account._id with the todo.creatorId"
//   },
//   "id": {
//     "type": "SchemaObjectId"
//   },
//   "timestamps": true
// }
export class ToDos {

  constructor(data) {

  }



}