CREATE TABLE users(
   user_id         SERIAL PRIMARY KEY
  ,user_name       VARCHAR(255) NOT NULL UNIQUE
  ,user_password   VARCHAR(255) NOT NULL
  ,isAdmin         BOOLEAN NOT NULL DEFAULT false
);


CREATE TABLE news(
   news_id         SERIAL PRIMARY KEY
  ,title           TEXT NOT NULL
  ,body            TEXT NOT NULL
  ,create_datetime TIMESTAMPTZ DEFAULT NOW()
);
