exports.index = function (req, res) {
    res.json({
        accessToken: req.session.access_token || null,
        psuInfo: req.session.psuInfo ? JSON.parse(req.session.psuInfo) : null
    })
}

exports.logout = function (req, res) {

    req.session.destroy()
    res.send('LOGOUT')
    
}