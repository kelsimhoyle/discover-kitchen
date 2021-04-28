const axios = require("axios");

export const runUpdate = type => {
   return axios.post(type === "build" ? process.env.GATSBY_BUILD_WEBHOOK : process.env.GATSBY_PREVIEW_WEBHOOK)
    
}

