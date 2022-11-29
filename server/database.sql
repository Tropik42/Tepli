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

CREATE TABLE main_page_images(
    image_id        SERIAL PRIMARY KEY
   ,img             VARCHAR(255)         NOT NULL
   ,create_datetime TIMESTAMPTZ          DEFAULT NOW()
);

CREATE TABLE about(
     about_id       SERIAL PRIMARY KEY
    ,body           TEXT                NOT NULL
);

INSERT INTO users (user_name, user_password) VALUES ('user', 'userpassword');
INSERT INTO users (
  user_name,
  user_password,
  is_admin
)
VALUES (
 'admin',
 '$2b$05$mlLEzfTMMUyBk85uUQNkfOHPo.M2CG9xIPuXybQaSVQPgKsgDApn2',
  true
);

INSERT INTO news (title, body) VALUES ('proverka','proverkakartinok');
INSERT INTO images (news_id, img) VALUES ('1','pathone');

INSERT INTO main_page_images (img) VALUES ('b8333b36-81f0-4462-9d04-b2f6ea29b74e.jpg');
INSERT INTO main_page_images (img) VALUES ('9d9a8fdd-c7bd-4a6f-8e29-c0db8cdeb1d9.jpg');
INSERT INTO main_page_images (img) VALUES ('c4d6e71d-2c21-4f82-af61-b56fa0f28e47.jpg');
INSERT INTO main_page_images (img) VALUES ('15093eda-b593-4666-90a9-ccb75814d3f7.jpg');

INSERT INTO about (body) VALUES ('проверка');
