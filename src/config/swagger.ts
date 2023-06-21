import path from "path";
import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.3",
  info: {
    title: "skeleton_typescript_modules_poo",
    description: "End Points for skeleton_typescript_modules_poo",
    contact: {
      email: "juanochando00@gmail.com",
    },
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:" + process.env.PORT + "/api/v2/",
    },
  ],
  tags: [
    {
      name: "User",
      description: "EndPoints asociados a la configuracion del perfil de los usuarios.",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: [path.join(__dirname, "../modules/**/{routes,routes.*}{.ts,.js}")],
};

export default swaggerJSDoc(swaggerOptions);
