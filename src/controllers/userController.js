
export async function getUser(req, res) {
 const user = res.locals.user
 res.send(user)
}