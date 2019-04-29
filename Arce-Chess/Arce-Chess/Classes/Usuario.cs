using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Arce_Chess.Classes
{
    public class Usuario
    {
        private int codUsuario;
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
            set => nome = value;
        }
        public string Email
        {
            get => email;
            set => email = value;
        }
        public string Senha
        {
            get => senha;
            set => senha = value;
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
            set => imagem = value;
        }
        public int NDeAmigos
        {
            get => nDeAmigos;
            set => nDeAmigos = value;
        }
    }
}