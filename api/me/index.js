import authMiddleware from '../utils/auth-middleware'

module.exports = async function (req, res) {
  authMiddleware(req).then(user => {
    res.status(200).json({
      data: user
    })
  }).catch(error => {
    res.status(401).json({
      data: error
    })
  })
}
