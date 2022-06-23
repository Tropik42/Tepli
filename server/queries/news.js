module.exports = {
  getAllNews: `
    SELECT
      *
    FROM 
      news 
    ORDER BY 
      news_id
  `,

  getOneNews: `
    SELECT 
      * 
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
      *
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
