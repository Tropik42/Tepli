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

CREATE TABLE price(
     price_id       SERIAL PRIMARY KEY
    ,price_name      VARCHAR(255)       
    ,price_path      VARCHAR(255)       NOT NULL
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

INSERT INTO main_page_images (img) VALUES ('d69ab00a-fe84-4425-acdd-e0794d1203c7.jpg');
INSERT INTO main_page_images (img) VALUES ('2563d3e1-b2f7-4a6d-88e9-0bd6a83cfbc2.jpg');
INSERT INTO main_page_images (img) VALUES ('65044516-4b80-4585-8126-bc0e5a4d3f06.jpg');
INSERT INTO main_page_images (img) VALUES ('05a59c7b-731b-4e28-afad-6da3c9061f46.jpg');
INSERT INTO main_page_images (img) VALUES ('72ec7219-905a-4e35-a7ab-afef9731deb4.jpg');
INSERT INTO main_page_images (img) VALUES ('8ec7509b-80e2-4642-b4e2-c46d11a36503.jpg');
INSERT INTO main_page_images (img) VALUES ('f9599e1b-2265-4f6c-8352-3628f1dd9cda.jpg');
INSERT INTO main_page_images (img) VALUES ('a18b25a5-0024-4e0b-9381-37567be09732.jpg');

INSERT INTO about (body) VALUES ('абзац для главной страницы');
INSERT INTO about (body) VALUES ('дополнительная информация');

INSERT INTO price (price_name, price_path) VALUES ('Основной прайс PDF', 'proverkaPrice.pdf');
INSERT INTO price (price_name, price_path) VALUES ('Дополнительная серия продукции Essentials PDF', 'Price_essentials.pdf');
INSERT INTO price (price_name, price_path) VALUES ('Основной прайс XLS', 'Price_main.xlsx');
INSERT INTO price (price_name, price_path) VALUES ('Дополнительная серия продукции Essentials XLS', 'Price_essentials.xls');