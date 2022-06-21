CREATE DATABASE tepli;

CREATE TABLE users(
   user_id         SERIAL PRIMARY KEY
  ,user_name       VARCHAR(255) NOT NULL UNIQUE
  ,user_password   VARCHAR(255) NOT NULL
  ,is_admin        BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE news(
   news_id         SERIAL PRIMARY KEY
  ,title           TEXT NOT NULL
  ,body            TEXT NOT NULL
  ,create_datetime TIMESTAMPTZ DEFAULT NOW()
  ,state           TEXT DEFAULT 'enabled'
);

--  чтоб плодить юзеров
INSERT INTO users (user_name, user_password) VALUES ('user', 'userpassword');
INSERT INTO users (user_name, user_password, is_admin) VALUES ('admin', 'adminpassword', true);
