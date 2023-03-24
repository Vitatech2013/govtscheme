const express = require('express')
const app = express()
const port =1000;

app.get('/', index);
app.get('/registration', userRegistration);
app.get('/adminlogin', adminLogin);
app.get('/userlogin', userLogin);
app.get('/admin', admin);
app.get('/user', user);

app.get('/admin/ViewUsers', adminViewUsers);
app.get('/admin/addschemes', adminaddschemes);
app.get('/admin/viewkalyanalaxmi', adminviewKalyanalaxmi);
app.get('/admin/viewschemes', adminviewschemes);
app.get('/admin/viewscholor', adminviewstudy);
app.get('/admin/viewoldage', adminviewOldAge);
app.get('/admin/viewdouble', adminviewHousing);
app.get('/admin/ChangePassword', adminPassword);
app.get('/admin/viewFeedback',adminFeedback);

 app.get('/user/viewprofile', userViewProfile);
 app.get('/user/ViewSchemes', UserViewSchemes);
app.get('/user/oldage', userAddOldAge);
app.get('/user/kalyanalaxmi', userAddKalyanalaxmi);
app.get('/user/scholar', userAddStudy);
app.get('/user/viewkalyanalaxmi', userviewKalyanalaxmi);
app.get('/user/viewscholor', userviewStudy);
app.get('/user/viewoldage', userviewOldAge);
app.get('/user/viewdouble', userviewHousing);
app.get('/user/double', userAddDoudle);
app.get('/user/sendFeedBack', userFeedback);
app.get('/user/ChangePassword', userPassword);
function index(req, res) {
	res.sendFile("./index.html",{root:__dirname});
}

function userRegistration(req, res) {
	res.sendFile("./registration.html",{root:__dirname});
}

function adminLogin(req, res) {
	res.sendFile("./admin.html",{root:__dirname});
}

function userLogin(req, res) {
	res.sendFile("./user.html",{root:__dirname});
}

function admin(req, res) {
	res.sendFile("Admin/home.html",{root:__dirname});
}

function adminViewUsers(req, res) {
	res.sendFile("Admin/ViewUsers.html",{root:__dirname});
}

function adminaddschemes(req, res) {
	res.sendFile("Admin/addschemes.html",{root:__dirname});
}

function adminviewschemes(req, res) {
	res.sendFile("Admin/viewschemes.html",{root:__dirname});
}

function adminPassword(req, res) {
	res.sendFile("Admin/ChangePassword.html",{root:__dirname});
}

function adminFeedback(req, res) {
	res.sendFile("Admin/viewFeedBack.html",{root:__dirname});
}

function userAddOldAge(req, res) {
	res.sendFile("User/oldage.html",{root:__dirname});
}

function userAddDoudle(req, res) {
	res.sendFile("User/double.html",{root:__dirname});
}

function user(req, res) {
	res.sendFile("User/home.html",{root:__dirname});
}

function userViewProfile(req, res) {
	res.sendFile("User/viewprofile.html",{root:__dirname});
}

function UserViewSchemes(req, res) {
	res.sendFile("User/ViewSchemes.html",{root:__dirname});
}

function userAddKalyanalaxmi(req, res) {
	res.sendFile("User/kalyanalaxmi.html",{root:__dirname});
}

function userAddStudy(req, res) {
	res.sendFile("User/scholar.html",{root:__dirname});
}

function userviewStudy(req, res) {
	res.sendFile("User/viewscholor.html",{root:__dirname});
}

function userviewOldAge(req, res) {
	res.sendFile("User/viewoldage.html",{root:__dirname});
}

function adminviewstudy(req, res) {
	res.sendFile("Admin/viewscholor.html",{root:__dirname});
}

function adminviewOldAge(req, res) {
	res.sendFile("Admin/viewoldage.html",{root:__dirname});
}

function userviewHousing(req, res) {
	res.sendFile("User/viewdouble.html",{root:__dirname});
}

function adminviewHousing(req, res) {
	res.sendFile("Admin/viewdouble.html",{root:__dirname});
}

function userviewKalyanalaxmi(req, res) {
	res.sendFile("User/viewkalyanalaxmi.html",{root:__dirname});
}

function userPassword(req, res) {
	res.sendFile("User/ChangePassword.html",{root:__dirname});
}


function userFeedback(req, res) {
	res.sendFile("User/sendFeedBack.html",{root:__dirname});
}


function adminviewKalyanalaxmi(req, res) {
	res.sendFile("Admin/viewkalyanalaxmi.html",{root:__dirname});
}

app.listen(port, () => console.log(`Server Started on ${port} Port Number`))
