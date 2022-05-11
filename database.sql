CREATE DATABASE tepli;

CREATE TABLE tepli_news(
  news_id SERIAL PRIMARY KEY,
  body TEXT,
  news_header VARCHAR(255),
  content VARCHAR(255),
  news_date DATE
);