const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email can not be empty"],
    unique: [true, "Email already in use"],
  },
  password: {
    type: String,
    required: [true, "Password can not be empty"],
  },
  firstName: {
    type: String,
    required: [true, "First name can not be empty"],
  },
  role: {
    type: String,
    required: [true, "Role can not be empty"],
    enum: {
      values: ["waiter", "kitchen", "admin"],
      message: "Please select correct option for role",
    },
  },
});

userSchema.statics.signup = async function (email, password, role, firstName) {
  if (!email || !password || !role || !firstName) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash, role, firstName });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};
userSchema.statics.setPassword = async function (
  email,
  password,
  confirmPassword
) {
  if (password !== confirmPassword) {
    throw Error("Passwords do not match");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.findOneAndUpdate(
    { email },
    {
      password: hash,
    }
  );
  if (!user) {
    throw Error("Could not found user");
  }
  return user;
};
module.exports = mongoose.model("User", userSchema);
