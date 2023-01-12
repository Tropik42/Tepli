module.exports = {
/* eslint-disable */
    getAllNews: `
        SELECT
             n.news_id                              AS "newsId"
            ,TO_CHAR(create_datetime, 'DD.MM.YYYY') AS "newsDate"
            ,n.title
            ,n.body
            ,n.state
            ,i.img      
        FROM 
            news AS n
            LEFT JOIN images AS i ON n.news_id = i.news_id
        ORDER BY 
            n.news_id DESC
        ;`,

    getOneNews: `
        SELECT 
             n.news_id                              AS "newsId"
            ,TO_CHAR(create_datetime, 'DD.MM.YYYY') AS "newsDate"
            ,n.title
            ,n.body
            ,n.state
            ,i.img      
        FROM 
            news AS n
            LEFT JOIN images AS i ON n.news_id = i.news_id   
        WHERE 
            n.news_id = $1
        ORDER BY 
            n.news_id DESC
        ;`,

    createNews: `
        WITH insert_news AS ( 
        INSERT INTO news (
             title
            ,body
           )
        VALUES (
             $1
            ,$2
          )
        RETURNING news_id
        )
        INSERT INTO images (
            news_id
           ,img
           )
        VALUES (
             (SELECT news_id FROM insert_news)
            ,$3
           )
        ;`,


    updateNews: `
        WITH update_news AS (
        UPDATE news SET 
            title = $1
           ,body  = $2 
        WHERE 
            news_id = $3
        RETURNING news_id
        )
        UPDATE images SET 
            img = $4
        WHERE 
            news_id = (SELECT news_id FROM update_news)
        ;`,


    getNewsImages: `
        SELECT
             news.title   AS "newsTitle"
            ,news.body    AS "newsBody"   
            ,images.img      
        FROM
            news AS n           
            LEFT JOIN images AS i ON n.news_id = i.news_id   
        ;`,

/* eslint-enable */
};
