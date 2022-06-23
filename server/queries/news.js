const pool = require('../db')

class NewsService {
    getAllNews = async () => {
        try {
         const allNews = await pool.query(
            'SELECT * FROM news ORDER BY news_id',
          );
          return allNews.rows
        } catch (err) { 
          console.error(err.message);
        }
      };

      getOneNews = async (id) => {
        try {         
          const singleNews = await pool.query('SELECT * FROM news WHERE news_id = $1', [
            id,
          ]);
          return singleNews.rows[0];
        } catch (err) {
          console.error(err.message);
        }
      };

      createNews = async ({title, body}) => {
        try {
          const {rows: news}  = await pool.query('INSERT INTO news (title, body) VALUES($1, $2) RETURNING *', [
            title, body,
          ]);
          return news[0]
        } catch (err) {
          console.error(err.message);
        }
      };

      updateNews = async ({title, body, id}) => {
        try {
          const {rows: news} = await pool.query('UPDATE news SET title = $1, body = $2 WHERE news_id = $3', [
            title, body, id,
          ]);
          return news[0]
        } catch (err) {
          console.error(err.message);
        }
      };

}

module.exports = new NewsService()
