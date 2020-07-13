/*ALTER TABLE accounts ADD email varchar(100) NOT NULL DEFAULT '';
ALTER TABLE accounts ADD created_time int(11) DEFAULT NULL;*/

SET FOREIGN_KEY_CHECKS=0;

CREATE TABLE site_balance (
  account varchar(16) NOT NULL,
  saldo int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_banners (
  bid int(10) NOT NULL AUTO_INCREMENT,
  imgurl_pt varchar(40) NOT NULL,
  imgurl_en varchar(40) DEFAULT NULL,
  imgurl_es varchar(40) DEFAULT NULL,
  pos tinyint(2) NOT NULL DEFAULT '1',
  link varchar(255) DEFAULT NULL,
  target tinyint(1) NOT NULL DEFAULT '1',
  vis tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (bid)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE site_bosses (
  id smallint(5) unsigned NOT NULL,
  name varchar(200) NOT NULL DEFAULT '',
  level tinyint(2) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

CREATE TABLE site_gallery (
  gid int(11) NOT NULL AUTO_INCREMENT,
  url varchar(40) NOT NULL,
  pos smallint(5) NOT NULL DEFAULT '1',
  isvideo tinyint(1) NOT NULL DEFAULT '0',
  vis tinyint(1) NOT NULL DEFAULT '1',
  sent_by varchar(50) DEFAULT NULL,
  sent_date int(11) DEFAULT NULL,
  PRIMARY KEY (gid)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

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

CREATE TABLE site_log_enchant (
  iid int(11) NOT NULL,
  oid int(11) NOT NULL,
  cid int(11) NOT NULL,
  ench_old mediumint(6) NOT NULL,
  ench_new mediumint(6) NOT NULL,
  price int(11) NOT NULL,
  edate int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_log_shop (
  log_account varchar(50) NOT NULL,
  log_cid int(11) NOT NULL,
  log_item_id int(11) NOT NULL,
  log_item_name varchar(70) NOT NULL,
  log_item_sa varchar(40) DEFAULT NULL,
  log_pack_id int(11) NOT NULL,
  log_amount int(11) NOT NULL,
  log_enchant smallint(5) NOT NULL,
  log_item_objs_id text NOT NULL,
  log_price int(11) NOT NULL,
  log_date datetime NOT NULL,
  by_full_pack tinyint(1) NOT NULL DEFAULT '0',
  by_full_pack_price int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_log_transfercoins (
  quantidade int(11) NOT NULL,
  remetente varchar(30) NOT NULL,
  destinatario varchar(30) NOT NULL,
  destinatario_char int(11) NOT NULL,
  tdata datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_log_convertcoins (
  quantidade int(11) NOT NULL,
  account varchar(50) NOT NULL,
  destinatario varchar(30) NOT NULL,
  cdata datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_log_convertcoins_online (
  quantidade int(11) NOT NULL,
  account varchar(50) NOT NULL,
  personagem int(11) NOT NULL,
  cdata datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_news (
  nid int(11) NOT NULL AUTO_INCREMENT,
  img varchar(40) DEFAULT NULL,
  post_date int(11) NOT NULL,
  vis tinyint(1) NOT NULL DEFAULT '0',
  title_pt varchar(150) NOT NULL,
  title_en varchar(150) DEFAULT NULL,
  title_es varchar(150) DEFAULT NULL,
  content_pt text NOT NULL,
  content_en text,
  content_es text,
  PRIMARY KEY (nid)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE site_reg_code (
  account varchar(30) NOT NULL,
  code varchar(32) NOT NULL,
  date int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_shop_categories (
  scat_id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(70) NOT NULL,
  ordem tinyint(3) NOT NULL,
  data_c int(11) NOT NULL,
  data_a int(11) DEFAULT NULL,
  PRIMARY KEY (scat_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE site_shop_itens (
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

CREATE TABLE site_shop_packs (
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

CREATE TABLE site_skills_classes (
  skill_id int(11) DEFAULT NULL,
  level int(11) DEFAULT NULL,
  class int(11) DEFAULT NULL,
  nome varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE site_ucp_lastlogins (
  login varchar(45) NOT NULL,
  ip varchar(15) NOT NULL,
  logdate int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `site_finditem` (
  `cid` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `qnt` bigint(19) NOT NULL,
  `fdat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
