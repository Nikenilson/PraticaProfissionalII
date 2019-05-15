using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Arce_Chess.Models
{
    public class Usuario
    {

        public int CodUsuario { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string senha;
        public int Vitorias { get; set; }
        public int Partidas { get; set; }
        public string Imagem { get; set; }
        public int NDeAmigos { get; set; }



        /*private int codUsuario;
        private string nome;
        private string email;
        private string senha;
        private int vitorias;
        private int partidas;
        private string imagem;
        private int nDeAmigos;

        public Usuario(int codUsuario, string nome, string email, string senha, int vitorias, int partidas, string imagem, int nDeAmigos)
        {
            this.CodUsuario = codUsuario;
            this.Nome = nome;
            this.Email = email;
            this.Senha = senha;
            this.Vitorias = vitorias;
            this.Partidas = partidas;
            this.Imagem = imagem;
            this.NDeAmigos = nDeAmigos;
        }

        public int CodUsuario
        {
            get => codUsuario;
            set => codUsuario = value;
        }
        public string Nome
        {
            get => nome;
            set
            {
                if (value == null || value.Equals(""))
                    throw new Exception("Nome do Usuario ausente");
            }
        }
        public string Email
        {
            get => email;
            set
            {
                if (value == null || value.Equals(""))
                    throw new Exception("Email ausente");
            }
        }
        public string Senha
        {
            get => senha;
            set
            {
                if (value == null || value.Equals(""))
                    throw new Exception("Senha ausente");
            }
        }
        public int Vitorias
        {
            get => vitorias;
            set => vitorias = value;
        }
        public int Partidas
        {
            get => partidas;
            set => partidas = value;
        }
        public string Imagem
        {
            get => imagem;
            set
            {
                if (value == null || value.Equals(""))
                    throw new Exception("Link para a imagem ausente");
            }
        }
        public int NDeAmigos
        {
            get => nDeAmigos;
            set => nDeAmigos = value;
        }
    }*/
    }
}