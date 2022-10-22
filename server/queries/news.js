module.exports = {
  /* eslint-disable */
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
  /* eslint-enable */
  createImages: `
    INSERT INTO 
      images (news_id, img)
    VALUES ($1, $2)
    RETURNING 
      images_id        AS "imagesId"
      news_id          AS "newsId"
      ,img
      
  `,

  joinImages: `
    SELECT
      news.title      AS "newsTitle"
      ,news.body      AS "newsBody"   
      ,images.img     AS "imagesImg"
      FROM
      news 
      LEFT  OUTER JOIN images 
      ON 
      news.news_id = images.news_id;
      
  `,
};
