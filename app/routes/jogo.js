module.exports = function (application) {
  application.get("/jogo", function (req, res) {
    application.app.controllers.jogo.jogo(application, req, res);
  });

  // Rota de sair
  application.get("/sair", function (req, res) {
    application.app.controllers.jogo.sair(application, req, res);
  });
};
