using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.EntityFrameworkCore;
using Arce_Chess.Models;

namespace Arce_Chess.DAO
{
    public class ChessContext: DbContext
    {
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Amizade> Amizade { get; set; }
        public DbSet<Notificacao> Notificacao { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=regulus.cotuca.unicamp.br;Initial Catalog=PR118188;User ID=PR118188;Password=PR118188");
        }
    }
}