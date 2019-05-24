﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Arce_Chess.Models;
using Arce_Chess.DAO;
using System.Web.Mvc;


namespace Arce_Chess.Filtros
{
    public class AutorizacaoFilterAtribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            //base.OnActionExecuting(filterContext);
            object usuario = filterContext.HttpContext.Session["usu"];
            filterContext.HttpContext.Session.Add("Pagina", filterContext.HttpContext.Request.Url.OriginalString);

            // se o usuario não estiver logado
            if (usuario == null)
            {
                // redirecionar usuário para pagina de login
                filterContext.Result = new RedirectToRouteResult(
                new System.Web.Routing.RouteValueDictionary(
                new { controller = "Home", action = "Login" }
                )
                );
            }
           
        }
    }
}