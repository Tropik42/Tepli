CREATE DATABASE tepli;

CREATE TABLE users(
   user_id         SERIAL PRIMARY KEY
  ,user_name       VARCHAR(255)         NOT NULL UNIQUE
  ,user_password   VARCHAR(255)         NOT NULL
  ,is_admin        BOOLEAN              NOT NULL DEFAULT false
);

CREATE TABLE news(
   news_id         SERIAL PRIMARY KEY
  ,title           TEXT                 NOT NULL
  ,body            TEXT                 NOT NULL
  ,create_datetime TIMESTAMPTZ          DEFAULT NOW()
  ,state           TEXT                 DEFAULT 'enabled'
);

CREATE TABLE images(
    image_id       SERIAL PRIMARY KEY
   ,news_id        INT REFERENCES news (news_id)
   ,img            VARCHAR(255)         NOT NULL
);

INSERT INTO users (user_name, user_password) VALUES ('user', 'userpassword');
INSERT INTO users (user_name, user_password, is_admin) VALUES ('admin', 'adminpassword', true);

INSERT INTO news(title, body) VALUES ('proverka','proverkakartinok');
INSERT INTO images (news_id, img) VALUES ('1','pathone');

