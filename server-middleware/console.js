//Logs...

module.exports = (req, res, next) => {
  console.log('res',res)
  console.log('req',req)
  next()
}
