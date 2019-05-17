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

        public ActionResult Regras()
        {
            return View();
        }

        public ActionResult SobreNos()
        {
            return View();
        }

        public ActionResult Perfil()
        {
            return View();
        }

        public ActionResult Historia()
        {
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
           
            return RedirectToAction("Login", "Home");
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

            return RedirectToAction("Cadastro", "Home");
        }

        [Route("cadastro")]
        public ActionResult Cadastro()
        {
            
                return RedirectToAction("Index", "Home");
           
         
        }

    
    }
}