const {
  blockedTerms,
  blockedTermsText,
  maxFavorite,
  maxFollower,
  maxRetweet,
} = require('./config');

const nameCheck = (name) => {
  name = name.toLowerCase();

  if(name === "100xcode" || name === "codernotesbot" || name === "xaelbot")
    retun false;
 var passed = true;

  blockedTerms.every((e,i) => {
})
};
