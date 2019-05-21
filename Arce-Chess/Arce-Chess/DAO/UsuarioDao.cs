using System;
using Arce_Chess.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Web;

namespace Arce_Chess.DAO
{
    public class UsuarioDAO
    {
        public void Adiciona(Usuario usu)
        {
            using (var context = new ChessContext())
            {
                context.Usuario.Add(usu);
                context.SaveChanges();
            }
        }


        public IList<Usuario> Lista()
        {
            using (var contexto = new ChessContext())
            {
                return contexto.Usuario.ToList();
            }
        }

        public Usuario BuscaPorNome(string name)
        {
            using (var contexto = new ChessContext())
            {
                return contexto.Usuario
                    .Where(p => p.Nome == name)
                    .FirstOrDefault();
            }
        }

        public IList<Usuario> PesquisaUsuarios(string palavra)
        {
            using (var contexto = new ChessContext())
            {
                Usuario[] lista = new Usuario[contexto.Usuario.ToArray().Length];
                int indice = 0;
               for(int i = 0; i < contexto.Usuario.ToArray().Length; i++)
                {
                    if(contexto.Usuario.ToArray()[i].Nome.ToUpper().Contains(palavra.ToUpper()))
                    {
                        lista[indice] = contexto.Usuario.ToArray()[i];
                        indice++;
                    }
                }
                return lista.ToList();
            }
        }

        public void Atualiza(Usuario usu)
        {
            using (var contexto = new ChessContext())
            {
                contexto.Entry(usu).State = EntityState.Modified;
                contexto.SaveChanges();
            }
        }
    }
}