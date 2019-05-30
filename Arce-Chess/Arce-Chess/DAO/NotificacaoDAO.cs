using System;
using Arce_Chess.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Web;

namespace Arce_Chess.DAO
{
    public class NotificacaoDAO
    {
        public void Adiciona(Notificacao not)
        {
            using (var context = new ChessContext())
            {
                context.Notificacao.Add(not);
                context.SaveChanges();
            }
        }


        public IList<Notificacao> Lista()
        {
            using (var contexto = new ChessContext())
            {
                return contexto.Notificacao.ToList();
            }
        }

        public Notificacao BuscaPorId(int id)
        {
            using (var contexto = new ChessContext())
            {
                return contexto.Notificacao
                    .Where(p => p.Id == id)
                    .FirstOrDefault();
            }
        }

        public IList<Notificacao> PesquisaNotificacoes(int dest)
        {
            using (var contexto = new ChessContext())
            {
                Notificacao[] lista = new Notificacao[contexto.Notificacao.ToArray().Length];
                int indice = 0;
               for(int i = 0; i < contexto.Notificacao.ToArray().Length; i++)
                {
                    if(contexto.Notificacao.ToArray()[i] != null)
                        if(contexto.Notificacao.ToArray()[i].Destinatario == dest)
                        {
                            lista[indice] = contexto.Notificacao.ToArray()[i];
                            indice++;
                        }
                }
                return lista.ToList();
            }
        }

        public bool ExisteNot(Usuario reme, Usuario dest)
        {
            using (var contexto = new ChessContext())
            {
                int i = 0;
                while ( i < contexto.Notificacao.ToArray().Length)
                {
                    if (contexto.Notificacao.ToArray()[i] != null)
                        if (contexto.Notificacao.ToArray()[i].Destinatario == dest.Id && contexto.Notificacao.ToArray()[i].Remetente == reme.Id)
                            return true;
                        else
                            i++;
                }
                return false;
            }
        }


        public Notificacao NotInTwo(Usuario reme, Usuario dest)
        {
            using (var contexto = new ChessContext())
            {
                int i = 0;
                while (i < contexto.Notificacao.ToArray().Length)
                {
                    if (contexto.Notificacao.ToArray()[i] != null)
                        if (contexto.Notificacao.ToArray()[i].Destinatario == dest.Id && contexto.Notificacao.ToArray()[i].Remetente == reme.Id)
                            return contexto.Notificacao.ToArray()[i];
                        else
                            i++;
                }
                return null;
            }
        }

        public void Atualiza(Notificacao not)
        {
            using (var contexto = new ChessContext())
            {
                contexto.Entry(not).State = EntityState.Modified;
                contexto.SaveChanges();
            }
        }

        public void Remover(Notificacao not)
        {
            using (var contexto = new ChessContext())
            {
                contexto.Notificacao.Remove(not);
                contexto.SaveChanges();
            }
        }
    }
}