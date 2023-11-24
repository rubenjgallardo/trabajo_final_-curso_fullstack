const login = (req,res)=>{
    res.render('pages/login');
}

const register = (req,res)=>{
    res.render('pages/register');
}


module.exports = {
    login: login,
    register: register
} 