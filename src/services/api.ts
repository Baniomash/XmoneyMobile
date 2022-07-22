const axios = require("axios").default;

const api = axios.create({
  baseURL: "https://62d946605d893b27b2e21670.mockapi.io",
});

module.exports.api = api;
