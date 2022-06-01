CREATE TABLE users(
   id              SERIAL PRIMARY KEY
  ,isAdmin         BOOLEAN NOT NULL DEFAULT 0 
);


CREATE TABLE news(
   news_id         SERIAL PRIMARY KEY
  ,title           TEXT NOT NULL
  ,body            TEXT NOT NULL
  ,create_datetime TIMESTAMPTZ DEFAULT NOW()
);
