module.exports = function(plop) {
  // controller generator
  plop.setPartial("controller", "controller");
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "controller name please"
      }
    ],
    actions: [
      {
        type: "add",
        path: "app/http/controllers/{{name}}/{{name}}-{{>controller}}.ts",
        templateFile: "templates/controller.hbs"
      },
      {
        type: "add",
        path: "app/http/controllers/{{name}}/requests/get-{{name}}-request.ts",
        templateFile: "templates/request.hbs"
      },
      {
        type: "add",
        path: "app/daos/{{name}}-dao.ts",
        templateFile: "templates/dao.hbs"
      },
      {
            type: "add",
            path: "app/daos/{{name}}-dao-impl.ts",
            templateFile: "templates/dao-impl.hbs"
      }
    ]
  });
};
