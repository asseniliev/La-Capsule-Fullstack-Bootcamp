function checkAdminPassword(password){
  if(password === 'adminazerty123')
    return true;
  else
    return false;
}

function checkModeratorPassword(password){
  console.log('Called...');
  if(password === 'modpwd123')
    return true;
  else
    return false;
}

module.exports = {checkAdminPassword, checkModeratorPassword};

