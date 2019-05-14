using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Interactive.Async;
using System.Web.Mvc;
using Arce_Chess.Models;
using Arce_Chess.DAO;

namespace Arce_Chess.Controllers
{
    public class HomeController : Controller
    {
        [Route("home")]
        public ActionResult Index(Usuario usu)
        {
            if (usu.Nome != null && usu.Nome.Length < 30)
            {
                UsuarioDAO dao = new UsuarioDAO();
                if (dao.BuscaPorNome(usu.Nome) != null)
                    return View();
                else
                    return null;
            }
            else
                return null;
            
        }

        public ActionResult Cadastrar(Usuario usu)
        {
            UsuarioDAO dao = new UsuarioDAO();
            dao.Adiciona(usu);
            Session["usu"] = usu;
            return RedirectToAction("home", "Home");
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

        [Route("Principal")]
        public ActionResult Login(Usuario usu) //Usuario usu
        {

            /* if (usu.Nome != null && usu.Nome.Length < 30)
             {
                 UsuarioDAO dao = new UsuarioDAO();
                 dao.Adiciona(usu);
                 return RedirectToAction("Index", "Home");
             }
             return RedirectToAction("Login", "Home");*/
            return null;
        }

        public ActionResult Cadastro()
        {

            return View();
        }

        [Route("teste")]
        public ActionResult Teste()
        {
            return View("Index");
        }
    }
}
