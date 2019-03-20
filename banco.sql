Create Table AC_Usuario(
CodUsuario int primary key not null,
Nome varchar(40) not null,
Login ntext not null,
Senha ntext not null,
email ntext not null,
imgPerfil image,
nDeAmigos int not null
)

create table AC_PNG(
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

Create table AC_Partida(
CodPartida int primary key not null,
CodPNG int not null
constraint fkPartidaPNG foreign key (codPNG) references AC_PNG (codPNG)
)

create table AC_Amizade(
CodAmizade int primary key,
CodUsuario1 int not null,
CodUsuario2 int not null
constraint fkACAmigo1 foreign key (codUsuario1) references AC_Usuario(codUsuario),
constraint fkACAmigo2 foreign key (codUsuario2) references AC_Usuario(codUsuario),
)

create table AC_Conversa(
CodConversa int primary key not null ,
CodAmizade int not null,
constraint fkCodAmizade foreign key (codAmizade) references AC_Amizade (codAmizade)
)

create table AC_Mensagem(
CodMensagem int primary key,
CodConversa int not null,
CodRemetente int not null,
Mensagem ntext not null,
constraint fkCodConversa foreign key (codConversa) references AC_Conversa (CodConversa),
constraint fkCodRemetente foreign key (codRemetente) references AC_Usuario (CodUsuario)
)





select * from AC_Usuario

constraint fkSeilaOque foreign key (codAlgo) references tabela codAlgo