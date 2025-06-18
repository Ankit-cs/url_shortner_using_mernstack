import bcrypt from "bcrypt";

export const hashPassword = async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
};

export const comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
