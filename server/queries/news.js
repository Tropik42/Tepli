module.exports = {
/* eslint-disable */
    getAllNews: `
         SELECT
             news.news_id                                
            ,TO_CHAR(create_datetime, 'DD.MM.YYYY') AS "newsDate"
            ,news.title
            ,news.body
            ,news.state
            ,images.img
        FROM 
            news
            LEFT JOIN images ON (news.news_id = images.news_id)  
            
        ORDER BY 
            news_id DESC
        ;`,

    getOneNews: `
        SELECT 
             news_id                                AS "newsId"
            ,TO_CHAR(create_datetime, 'DD.MM.YYYY') AS "newsDate"
            ,title
            ,body
            ,state
        FROM 
            news 
        WHERE 
            news_id = $1
        ;`,

    createNews: `
        INSERT INTO news (
             title
            ,body
        )
        VALUES (
             $1
            ,$2
        )
        RETURNING 
             news_id          AS "newsId"
            ,create_datetime  AS "newsDate"
            ,title
            ,body
            ,state
        ;`,

    updateNews: `
        UPDATE 
            news 
        SET 
            title = $1
           ,body  = $2 
        WHERE 
            news_id = $3
        ;`,

    createImage: `
        INSERT INTO images (
             news_id
            ,img
        )
        VALUES (
             $1
            ,$2
        )
        RETURNING 
             image_id AS "imageId"
            ,news_id  AS "newsId"
            ,img      
        ;`,

/* eslint-enable */
};
