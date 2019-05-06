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

        public ActionResult Login()
        {
            return View();
        }

        public ActionResult Cadastro()
        {
            return View();
        }

    
    }
}