/*ALTER TABLE accounts ADD email varchar(100) NOT NULL DEFAULT '';
ALTER TABLE accounts ADD created_time int(11) DEFAULT NULL;*/

SET FOREIGN_KEY_CHECKS=0;

CREATE TABLE site_donations (
  protocolo int(10) NOT NULL AUTO_INCREMENT,
  account varchar(30) NOT NULL,
  personagem int(11) DEFAULT NULL,
  quant_coins int(10) NOT NULL,
  coins_bonus int(10) NOT NULL DEFAULT '0',
  coins_entregues int(10) NOT NULL DEFAULT '0',
  valor decimal(11,2) NOT NULL,
  price decimal(11,2) NOT NULL,
  currency varchar(3) NOT NULL,
  metodo_pgto varchar(50) NOT NULL,
  status tinyint(1) NOT NULL DEFAULT '1',
  status_real varchar(40) DEFAULT NULL,
  data int(11) NOT NULL,
  ultima_alteracao int(11) DEFAULT NULL,
  transaction_code varchar(255) DEFAULT NULL,
  PRIMARY KEY (protocolo)
) ENGINE=InnoDB AUTO_INCREMENT=10000 DEFAULT CHARSET=utf8;

CREATE TABLE site_emailchange (
  account varchar(30) NOT NULL,
  newemail varchar(100) NOT NULL,
  code varchar(32) NOT NULL,
  date int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_forgotpass (
  account varchar(120) NOT NULL,
  code varchar(32) NOT NULL,
  date int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_log_admin (
  log_value varchar(255) NOT NULL,
  log_ip varchar(20) NOT NULL,
  log_date datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_log_services (
  log_account varchar(50) NOT NULL,
  log_cid int(11) NOT NULL,
  log_key varchar(30) NOT NULL,
  log_value varchar(255) NOT NULL,
  log_price int(11) NOT NULL,
  log_date datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_log_transfercoins ( /*trocar por baus comprados*/
  quantidade int(11) NOT NULL,
  remetente varchar(30) NOT NULL,
  destinatario varchar(30) NOT NULL,
  destinatario_char int(11) NOT NULL,
  tdata datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_shop_itens (  /***** depois ver o que fazr com isso  */
  sitem_id int(11) NOT NULL AUTO_INCREMENT,
  id_ingame int(11) NOT NULL,
  amount int(11) NOT NULL DEFAULT '1',
  cumulativo tinyint(1) NOT NULL DEFAULT '0',
  spack_id int(11) NOT NULL,
  nome varchar(70) NOT NULL,
  sa varchar(40) DEFAULT NULL,
  enchant int(5) NOT NULL DEFAULT '0',
  valor int(11) NOT NULL,
  ordem tinyint(3) NOT NULL,
  data_c int(11) NOT NULL,
  data_a int(11) DEFAULT NULL,
  PRIMARY KEY (sitem_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE site_shop_packs ( /***** depois ver o que fazr com isso  */
  spack_id int(11) NOT NULL AUTO_INCREMENT,
  scat_id int(11) NOT NULL,
  nome varchar(70) NOT NULL,
  ordem tinyint(3) NOT NULL,
  imagem varchar(255) DEFAULT NULL,
  valor int(11) NOT NULL DEFAULT '0',
  data_c int(11) NOT NULL,
  data_a int(11) DEFAULT NULL,
  PRIMARY KEY (spack_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE site_ucp_lastlogins (
  login varchar(45) NOT NULL,
  ip varchar(15) NOT NULL,
  logdate int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
