const fs = require('fs');

$("#+btn").on("click", async function () {
fs.open(`./users-page/${$("textarea[name='title']").val()}.html`, "<!DOCTYPE html>", (err) => {
  if(err) console.log(err);
});
});
