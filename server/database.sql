CREATE DATABASE tepli;

CREATE TABLE users(
   user_id         SERIAL PRIMARY KEY
  ,user_email      VARCHAR(255) NOT NULL
  ,user_name       VARCHAR(255) NOT NULL UNIQUE
  ,user_password   VARCHAR(255) NOT NULL
  ,is_admin        BOOLEAN NOT NULL DEFAULT false
);
а pernторизация
CREATE TABLE news(username, role, userEmail, password
   news_id         SERIAL PRIMARY KEY
  ,title           TEXT NOT NULL
  ,body            TEXT NOT NULL
  ,create_datetime TIMESTAMPTZ DEFAULT NOW()
  ,state           TEXT DEFAULT 'enabled'
);

INSERT INTO users (user_name, user_password,user_email) VALUES ('user', 'userpassword','qwety@yandex.ru');
INSERT INTO users (user_name, user_password, user_email,is_admin) VALUES ('admin', 'adminpassword','ytrewq@yandex.ru', true);
