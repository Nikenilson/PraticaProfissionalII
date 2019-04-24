using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Arce_Chess.Classes
{
    public class Pieces
    {
        static string cs = "Data Source=regulus;Initial Catalog=;User ID=;Password=";

        public static Piece[] getPiecesJogador(string jogador)
        {
            Piece[] ret = new Piece[12];

            SqlConnection conexao = new SqlConnection();
            conexao.ConnectionString = cs.Substring(cs.IndexOf("Data Source"));

            SqlCommand comando = new SqlCommand("Select * from Piece where jogador = @user", con);
            comando.Parameters.AddWithValue("@user", jogador);

            conexao.Open();
            SqlDataAdapter adaptador = new SqlDataAdapter(comando);
            DataSet ds = new DataSet();

            adaptador.Fill(ds);
            conexao.Close();

            if (ds.Tables[0].Rows.Count == 1)
            {
                int i = 0;
                foreach (DataRow dr in ds.Tables[0].Rows)
                    ret[i] = new Piece(dr.ItemArray[0].ToString(), dr.ItemArray[1].ToString(), Convert.ToInt32(dr.ItemArray[2]));
            }
            else
                throw new Exception("Jogador não existe ou a senha está incorreta");

            return ret;
        }

        public static void incluirMovimentos(string jogador, string nomePiece)
        {
            SqlConnection conexao = new SqlConnection();
            conexao.ConnectionString = cs.Substring(cs.IndexOf("Data Source"));

            string sqlCmd = "update Piece set movimentos = ((select vezesMovida from piece where jogador = @usuario and nome = @nome)+1) where usuario = @usuario and nome = @nome";

            SqlCommand comando = new SqlCommand(sqlCmd, con);

            comando.Parameters.AddWithValue("@usuario", jogador);
            comando.Parameters.AddWithValue("@nome", nomePiece);

            conexao.Open();
            cmd.ExecuteNonQuery();
            conexao.Close();
        }
    }
}