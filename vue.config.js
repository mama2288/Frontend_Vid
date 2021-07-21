module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: "localhost", // frontend host name or ip
    disableHostCheck: true,
    port: 8080,// frontend port
    https: false,// no ssl
    proxy: {

      "/api": {

        target: "http://localhost:8081"

      },// proxy everything from frontend http://localhost:8080/api/** to backend at http://localhost:8080/api/**
      //that is why all api path on backend should begin with /api
  },
  headers: {
  // typical headr setting
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Origin": "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Origin": "X-Requested-With, content-type, Authorization",

       },
  },

};
