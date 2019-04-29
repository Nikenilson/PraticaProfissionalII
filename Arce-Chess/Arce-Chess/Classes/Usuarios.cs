using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Arce_Chess.Classes
{
    public class Usuarios
    {
        static string cs = "Data Source=regulus;Initial Catalog=;User ID=PR118188;Password=PR118188";

        public static Usuario getUsuario(string email, string senha)
        {
            Usuario ret;

            SqlConnection conexao = new SqlConnection();
            conexao.ConnectionString = cs.Substring(cs.IndexOf("Data Source"));

            SqlCommand comando = new SqlCommand("SELECT * FROM USUARIO WHERE email = @email AND senha = @senha", conexao);
            comando.Parameters.AddWithValue("@email", email);
            comando.Parameters.AddWithValue("@senha", senha);

            conexao.Open();
            SqlDataAdapter adaptador = new SqlDataAdapter(comando);
            DataSet ds = new DataSet();

            adaptador.Fill(ds);
            conexao.Close();

            /*
            if (ds.Tables[0].Rows.Count == 1)
            {
                DataRow dr = ds.Tables[0].Rows[0];
                ret = new Usuario(dr.ItemArray[0].ToString(), Convert.ToInt32(dr.ItemArray[2]), dr.ItemArray[1].ToString(), int.Parse(dr.ItemArray[2].ToString()), int.Parse(dr.ItemArray[2].ToString()), int.Parse(dr.ItemArray[3].ToString()));
            }
            else
                throw new Exception("Usuário não existente ou senha incorreta");*/

            return ret;
        }

        public static int[] getVLT(string login)
        {
            int[] ret;

            SqlConnection con = new SqlConnection();
            cs = cs.Substring(cs.IndexOf("Data Source"));
            con.ConnectionString = cs;

            SqlCommand cmd = new SqlCommand("Select Victories, Losses, Ties from usuario where username = @user", con);
            cmd.Parameters.AddWithValue("@user", login);

            con.Open();
            SqlDataAdapter adapt = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();

            adapt.Fill(ds);
            con.Close();

            if (ds.Tables[0].Rows.Count == 1)
            {
                DataRow dr = ds.Tables[0].Rows[0];
                ret = new int[3] { Convert.ToInt32(dr.ItemArray[0]), Convert.ToInt32(dr.ItemArray[1]), Convert.ToInt32(dr.ItemArray[2]) };
            }
            else
                throw new Exception("Usuário não existente");

            return ret;
        }

        public static void Cadastrar(Usuario usu)
        {
            SqlConnection con = new SqlConnection();
            cs = cs.Substring(cs.IndexOf("Data Source"));
            con.ConnectionString = cs;

            SqlCommand cmd = new SqlCommand("Insert into usuario values(@user, @senha, @pontos, @wins, @ties, @losses)", con);
            cmd.Parameters.AddWithValue("@user", usu.Login);
            cmd.Parameters.AddWithValue("@senha", usu.Senha);
            cmd.Parameters.AddWithValue("@pontos", usu.Pontos);
            cmd.Parameters.AddWithValue("@wins", usu.Wins);
            cmd.Parameters.AddWithValue("@ties", usu.Ties);
            cmd.Parameters.AddWithValue("@losses", usu.Losses);

            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
        }
    }
}