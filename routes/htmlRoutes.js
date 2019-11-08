var db = require("../models");

module.exports = function(app) {
  // Home page
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  // Register
  app.get("/register", function(req, res) {
    res.render("register", {});
  });

  // Log-in
  app.get("/login", function(req, res) {
    res.render("login", {});
  });

  // Dashboard
  app.get("/dashboard", function(req, res) {
    res.render("dashboard", {});
  });

  // Resource
  app.get("/resources", function(req, res) {
    res.render("resources", {});
  });

  // Admin
  app.get("/admin", function(req, res) {
    res.render("admin", {});
  });

  // Invite
  app.get("/invite/:id", function(req, res) {
    res.render("invite", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
 
  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // authors route loads collab-manager.html
  app.get("/collabs", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/collab-manager.html"));
  });
};
