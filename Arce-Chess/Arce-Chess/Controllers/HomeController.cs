using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Arce_Chess.Models;
using Arce_Chess.DAO;

namespace Arce_Chess.Controllers
{
    public class HomeController : Controller
    {
        [Route("home")]
        public ActionResult Index()
        {
            @ViewBag.Usuario = Session["usu"];
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [Route("regras")]
        public ActionResult Regras()
        {
            @ViewBag.Usuario = Session["usu"];
            return View();
        }

        [Route("sobreNos")]
        public ActionResult SobreNos()
        {
            @ViewBag.Usuario = Session["usu"];
            return View();
        }

        [Route("perfil")]
        public ActionResult Perfil()
        {
            @ViewBag.Usuario = Session["usu"];
            return View();
        }

        [Route("historia")]
        public ActionResult Historia()
        {
            @ViewBag.Usuario = Session["usu"];
            return View();
        }

        [Route("login")]
        public ActionResult Login()
        {

            return View();
        }

        
        [Route("cadastrar")]
        public ActionResult Cadastrar(Usuario usu)
        {

            UsuarioDAO dao = new UsuarioDAO();
            dao.Adiciona(usu);
            Session["usu"] = usu;
            return RedirectToAction("home", "Home");
        }

        [Route("logar")]
        public ActionResult Logar(Usuario usuario)
        {
            UsuarioDAO dao = new UsuarioDAO();
            if (dao.BuscaPorNome(usuario.Nome) != null)
            {
                Usuario verific = dao.BuscaPorNome(usuario.Nome);
                if (verific.Nome == usuario.Nome && verific.Senha == usuario.Senha)
                {
                   Session["usu"] = verific;
                    return RedirectToAction("Index", "Home");
                }
            }

            return RedirectToAction("Logar", "Home");
        }

        [Route("cadastro")]
        public ActionResult Cadastro()
        {

            return View();
           
         
        }

    
    }
}