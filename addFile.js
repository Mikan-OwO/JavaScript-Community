const fs = require('fs');

$("#+btn").on("click", async function () {
fs.open(`./users-page/${$("textarea[name='title']").val()}.html`, '<!DOCTYPE html><html lang="ja"></html>', (err) => {
  if(err) console.log(err);
});
});
