const express = require('express')
const app = express()
var image = require('path').join(__dirname, '/images');
app.use(express.static(image));
app.get('/home', loadstdHtml);
app.get('/admin', adminLoginPage);
app.get('/restaurent', restaurentLogin);
app.get('/user', userlogin);
app.get('/adminpage', adminpage);
app.get('/userpage', userPage);
app.get('/restaurentpage', restaurentPage);
app.get('/restaurentRegistration', restaurentRegistration);
app.get('/restaurentForgotPassword', restaurentForgotPassword);
app.get('/userforgetpassword', UserForgetPassword);
app.get('/userRegistration', userRegistration);

app.get('/Admin/viewRestaurent', viewRestaurent);
app.get('/Admin/userDetails', userDetails);
app.get('/Admin/itemDetails', itemDetails);
app.get('/Admin/feedback', feedbackDetails);

app.get('/Restaurent/profile', ViewProfile);
app.get('/Restaurent/addRestaurent', addRestaurent)
app.get('/Restaurent/viewRestaurents', ViewRestaurents);
app.get('/Restaurent/addItems', addItems);
app.get('/Restaurent/viewItems', viewItems);
app.get('/Restaurent/userViewOrders', UserOrders);
app.get('/Restaurent/feedBackview', FeedBackView);
app.get('/Restaurent/changepasswd', changepasswd);

app.get('/User/userprofile', UserProfile);
app.get('/User/viewitemdetails', viewItemDetails);
app.get('/User/viewcartdetails', viewCartDetails);
app.get('/User/orderpage', orderDetails);
app.get('/User/viewOrdersdetails', ViewOrdersDetails);
app.get('/User/feedback', feedback);
app.get('/User/payments', Payments);
app.get('/User/changepasswrd', changepasswrd);




function loadstdHtml(req, res) {
    res.sendFile('index.html', { root: __dirname });
}

function adminLoginPage(req, res) {
    res.sendFile('adminLogin.html', { root: __dirname });
}

function restaurentLogin(req, res) {
    res.sendFile('restaurantLogin.html', { root: __dirname });
}

function userlogin(req, res) {
    res.sendFile('userLogin.html', { root: __dirname });
}


function UserForgetPassword(req, res) {
    res.sendFile('userforgetpassword.html', { root: __dirname });
}

function adminpage(req, res) {
    res.sendFile('Admin/adminmainpage.html', { root: __dirname });
}
function userPage(req, res) {
    res.sendFile('User/user.html', { root: __dirname });
}

function restaurentPage(req, res) {
    res.sendFile('Restaurent/restaurant.html', { root: __dirname });
}

function restaurentForgotPassword(req, res) {
    res.sendFile('restaurentforgotpassword.html', { root: __dirname });
}

function ViewRestaurents(req, res) {
    res.sendFile('Restaurent/restaurentDetails.html', { root: __dirname });
}

function viewRestaurent(req, res) {
    res.sendFile('Admin/viewRestaurents.html', { root: __dirname });
}
function userDetails(req, res) {
    res.sendFile('Admin/userDetails.html', { root: __dirname });
}

function itemDetails(req, res) {
    res.sendFile('Admin/itemsDetails.html', { root: __dirname });
}
function feedbackDetails(req, res) {
    res.sendFile('Admin/feedBackDetails.html', { root: __dirname });
}

function ViewProfile(req, res) {
    res.sendFile('Restaurent/profile.html', { root: __dirname });
}

function UserProfile(req, res) {
    res.sendFile('User/profile.html', { root: __dirname });
}

function restaurentRegistration(req, res) {
    res.sendFile('restaurentRegistration.html', { root: __dirname });
}

function changepasswd(req, res) {
    res.sendFile('Restaurent/changepassword.html', { root: __dirname });
}
function userRegistration(req, res) {
    res.sendFile('userRegistration.html', { root: __dirname });
}

function addRestaurent(req, res) {
    res.sendFile('Restaurent/addRestaurant.html', { root: __dirname });
}

function addItems(req, res) {
    res.sendFile('Restaurent/additems.html', { root: __dirname });
}

function UserOrders(req, res) {
    res.sendFile('Restaurent/userOrders.html', { root: __dirname });
}

function FeedBackView(req, res) {
    res.sendFile('Restaurent/feedbackdetails.html', { root: __dirname });
}

function orderDetails(req, res) {
    res.sendFile('User/orderDetailspage.html', { root: __dirname });
}

function viewItems(req, res) {
    res.sendFile('Restaurent/viewItems.html', { root: __dirname });
}
function viewItemDetails(req, res) {
    res.sendFile('User/viewItemDetails.html', { root: __dirname });
}

function viewCartDetails(req, res) {
    res.sendFile('User/cartDetails.html', { root: __dirname });
}
function ViewOrdersDetails(req, res) {
    res.sendFile('User/viewOrders.html', { root: __dirname });
}

function feedback(req, res) {
    res.sendFile('User/feedback.html', { root: __dirname });
}

function Payments(req, res) {
    res.sendFile('User/payment.html', { root: __dirname });
}

function changepasswrd(req, res) {
    res.sendFile('User/changePassword.html', { root: __dirname });
}

app.listen(3000, () => console.log(`Example app listening on port number 3000!`))