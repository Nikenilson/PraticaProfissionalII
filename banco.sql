/*create table AC_PNG(
CodPNG int primary key not null,
CodUsuarioBrancas int not null,
CodUsuarioNegras int not null,
Data date not null, 
NdeRodadas int not null,
Brancas varchar(40) not null,
Negras varchar(40) not null,
Resultado varchar(20) not null,
Movimentos ntext not null,
constraint fkCodbrancas foreign key (codUsuarioBrancas) references AC_Usuario(codUsuario),
constraint fkCodNegras foreign key (codUsuarioNegras) references AC_Usuario(codusuario),
)

drop table AC_PNG
*/

Create Table Usuario( --DAR UPDATE NA TABELA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
CodUsuario int primary key not null,
Nome varchar(40) not null,
email ntext not null,
Senha ntext not null,
partidas int not null,
vitorias int not null,
imgPerfil ntext,
nDeAmigos int not null
)

select * from AC_Usuario

Create table Partida(
CodPartida int primary key not null,
CodUsuario1 int not null,
CodUsuario2 int not null
constraint fkPartidaJogador1 foreign key (codUsuario1) references Usuario(codUsuario),
constraint fkPartidaJogador2 foreign key (codUsuario2) references Usuario(codUsuario),
)

Create table Jogada(
CodJogada int primary key not null,
CodPartida int not null,
Cor varchar(7) not null, 
piece varchar(16) not null,		  
posicaoOrigem varchar(30) not null,
posicaoFim varchar(30) not null,



create table Amizade(
CodAmizade int primary key,
CodUsuario1 int not null,
CodUsuario2 int not null
constraint fkAmizadeAmigo1 foreign key (codUsuario1) references Usuario(codUsuario),
constraint fkAmizadeAmigo2 foreign key (codUsuario2) references Usuario(codUsuario),
)



create table Conversa(
CodConversa int primary key not null ,
CodAmizade int not null,
constraint fkCodAmizade foreign key (codAmizade) references Amizade (codAmizade)
)



create table Mensagem(
CodMensagem int primary key,
CodConversa int not null,
CodRemetente int not null,
Mensagem ntext not null,
constraint fkCodConversa foreign key (codConversa) references Conversa (CodConversa),
constraint fkCodRemetente foreign key (codRemetente) references Usuario (CodUsuario)
)

