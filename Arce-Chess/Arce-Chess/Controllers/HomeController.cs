﻿using System;
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

        [Route("mimg")]
        public ActionResult MudarImg(string imagPerf)
        {
            UsuarioDAO dao = new UsuarioDAO();
            Usuario usu = (Usuario)Session["usu"];
            usu.ImgPerfil = imagPerf;
            dao.Atualiza(usu);
            Session["usu"] = dao.BuscaPorNome(usu.Nome);
            return RedirectToAction("Perfil", "Home");
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
            Session["usu"] = null;
            Session["alert"] = "Crie uma conta no nosso site!";
            return View();
        }

        
        [Route("cadastrar")]
        public ActionResult Cadastrar(Usuario usu)
        {
            if(Request["senha2"] != usu.Senha)
            {
                Session["alert"] = "Digite a mesma senha nos dois campos!";
                return RedirectToAction("Cadastro", "Home");
            }
            UsuarioDAO dao = new UsuarioDAO();
            usu.ImgPerfil = "data:image/png;base64,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";
            dao.Adiciona(usu);
            Session["usu"] = usu;
            return RedirectToAction("Index", "Home");
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
            ViewBag.Cadastro = Session["alert"];
            return View();
        }


        [Route("busca")]
        public ActionResult Busca()
        {
            @ViewBag.Usuario = Session["usu"];
            if (Session["listaPesquisa"] != null)
            {
                ViewBag.PesquisaResult = Session["listaPesquisa"];
            }
            else
                ViewBag.PesquisaResult = null;
            return View();
        }

        [Route("buscar")]
        public ActionResult Buscar(string trecho)
        {
            UsuarioDAO dao = new UsuarioDAO();
            Session["listaPesquisa"] = dao.PesquisaUsuarios(trecho);
            return RedirectToAction("Busca", "Home");
        }


    }
}