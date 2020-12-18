
const data = require("../../data");
const postData = data.postData;
const uniqueTags = data.uniqueTags;

const recentPostsAmount= 6;


const getHomePage = function(req, res){
  res.render("index", {title: "bloguru",  posts: postData , active:"index" , categoryData: data.categoryData});
  console.log(req.params);
}

const getBLogPost = function({params}, res){
  let single_post  = postData.find((val)=> val.id == params.postid);

  if(!single_post){
    res.redirect("/404");
  }
  res.render("single_post", {title: "bloguru",  single_post: single_post, uniqueTags: uniqueTags, recentPosts: postData.slice(0, recentPostsAmount), recentPostsAmount: recentPostsAmount, categoryData: data.categoryData, data1: postData});
};

const  get404 = function(req, res){
  res.render('404', {title: "404 error page", uniqueTags: uniqueTags, recentPosts: postData.slice(0, recentPostsAmount), categoryData: data.categoryData, data1: postData});
}
const redirect404 = function(req, res){
  res.redirect("/404");
}

const getAboutPage = function(req, res){
  res.render("about", {title: "About bloguru",  active:"about", categoryData: data.categoryData});
}
const getContactPage = function(req, res){
  res.render("contact", {title: "Contact bloguru",  active:"contact", categoryData: data.categoryData});
}

const getFilteredList = function({query}, res){
  let filteredPosts = postData.filter((val)=> val.category == query.category);
  res.render('filter', {title: "Just BLog: Filtered", active: query.category, posts: filteredPosts, categoryData: data.categoryData, data: postData});
}




module.exports = {
  getHomePage,
  getBLogPost,
  get404,
  redirect404,
  getAboutPage,
  getContactPage,
  recentPostsAmount,
  getFilteredList
}
