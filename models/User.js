const { Schema, model } = require('mongoose');
const { TransformStreamDefaultController } = require('node:stream/web');

const UserSchema = new Schema(
  {
    username: {
      type: String, 
      required: 'Username is Required',
      trim: true,
      unique: true
    },
    email: {
      type: String, 
      required: 'Email is Required',
      unique: true,
      match: [/.+@.+\..+/]

    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// get total count of friends
UserSchema.virtual('friendCount').get(function() {
  return this.friends.reduce((total, friends) => total + friends.length + 1, 0);
});

// create User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;