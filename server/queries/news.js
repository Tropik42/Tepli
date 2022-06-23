module.exports = {
  getAllNews: `
    SELECT
      news_id          AS "newsId"
      ,create_datetime AS "newsDate"
      ,title
      ,body
      ,state
    FROM 
      news 
    ORDER BY 
      news_id
  `,

  getOneNews: `
    SELECT 
      news_id          AS "newsId"
      ,create_datetime AS "newsDate"
      ,title
      ,body
      ,state
    FROM 
      news 
    WHERE 
      news_id = $1
  `,

  createNews: `
    INSERT INTO 
      news (title, body)
    VALUES ($1, $2)
    RETURNING 
      news_id          AS "newsId"
      ,create_datetime AS "newsDate"
      ,title
      ,body
      ,state
  `,

  updateNews: `
    UPDATE 
      news 
    SET 
       title = $1
      ,body = $2 
    WHERE 
      news_id = $3
  `,
};
