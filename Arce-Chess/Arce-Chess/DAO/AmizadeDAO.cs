using System;
using Arce_Chess.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Web;

namespace Arce_Chess.DAO
{
    public class AmizadeDAO
    {
        public void Adiciona(Amizade amigos)
        {
            using (var context = new ChessContext())
            {
                context.Amizade.Add(amigos);
                context.SaveChanges();
            }
        }


        public IList<Amizade> Lista()
        {
            using (var contexto = new ChessContext())
            {
                return contexto.Amizade.ToList();
            }
        }

        private Amizade VerificaAmizade(int usu1, int usu2)
        {
            using (var contexto = new ChessContext())
            {
                return contexto.Amizade
                    .Where(p => p.IdUsu1 == usu1 && p.IdUsu2 == usu2)
                    .FirstOrDefault();
            }
        }

        public Amizade ExisteAmizade(int id)
        {
            using (var contexto = new ChessContext())
            {
                return contexto.Amizade
                    .Where(p => p.Id == id)
                    .FirstOrDefault();
            }
        }

        public Amizade ExisteAmizade(int id1, int id2)
        {
            if (VerificaAmizade(id1, id2) != null)
                return VerificaAmizade(id1, id2);
            else
            {
                if (VerificaAmizade(id2, id1) != null)
                    return VerificaAmizade(id2, id1);
                else
                    return null;
            }
        } 
        


        public Usuario[] Amigos(int amizade)
        {
            using (var context = new ChessContext())
            {
                Usuario[] amigos = new Usuario[2];
                if (ExisteAmizade(amizade) != null)
                {
                    Amizade friends = ExisteAmizade(amizade);
                    UsuarioDAO usuDao = new UsuarioDAO();
                    amigos[0] = usuDao.BuscaPorId(friends.IdUsu1);
                    amigos[1] = usuDao.BuscaPorId(friends.IdUsu2);
                }
                return amigos;  
            }
        }


        public IList<Amizade> PesquisaAmizades(int idUsu)
        {
            using (var contexto = new ChessContext())
            {
                Amizade[] lista = new Amizade[contexto.Amizade.ToArray().Length];
                int indice = 0;
               for(int i = 0; i < contexto.Amizade.ToArray().Length; i++)
                {
                    if(contexto.Amizade.ToArray()[i].IdUsu1 == idUsu || contexto.Amizade.ToArray()[i].IdUsu2 == idUsu)
                    {
                        lista[indice] = contexto.Amizade.ToArray()[i];
                        indice++;
                    }
                }
                return lista.ToList();
            }
        }

        public IList<Usuario> PesquisaAmigos(int id)
        {
            
               IList<Amizade> listinha = PesquisaAmizades(id);
                Usuario[] amigos = new Usuario[listinha.ToArray().Length];
                UsuarioDAO dao = new UsuarioDAO();
                for (int i = 0; i < listinha.ToArray().Length; i++)
                {
                    if(listinha.ToArray()[i] != null)
                    {
                        if (listinha.ToArray()[i].IdUsu1 == id)
                            amigos[i] = dao.BuscaPorId(listinha.ToArray()[i].IdUsu2);
                        else
                            amigos[i] = dao.BuscaPorId(listinha.ToArray()[i].IdUsu1);
                    }
                }

                return amigos.ToList();
            
        }



        public void Remover(Amizade amigos)
        {
            using (var contexto = new ChessContext())
            {
                contexto.Amizade.Remove(amigos);
                contexto.SaveChanges();
            }
        }

        /*public void Atualiza(Usuario usu)
        {
            using (var contexto = new ChessContext())
            {
                contexto.Entry(usu).State = EntityState.Modified;
                contexto.SaveChanges();
            }
        }*/
    }
}