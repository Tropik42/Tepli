module.exports = {
  /* eslint-disable */
  getAllUsers: `
    SELECT
      user_id  AS "userId"
      ,user_email AS "userEmail"
      ,user_name AS "userName"
      ,is_admin AS "isAdmin"
    FROM 
      users 
    ORDER BY 
      user_id
  `,

  userLogin: `
    SELECT 
      user_id        AS "userId"
      ,user_name     AS "userName"
      ,is_admin      AS "isAdmin"
      ,user_password AS "userPassword"
    FROM 
      users 
    WHERE 
      user_email= $1
  `,
  /* eslint-enable */
  createUser: `
    INSERT INTO 
     users (user_email, user_name,user_password)
    VALUES ($1, $2, $3 )
    RETURNING 
       user_email AS "userEmail"
      ,user_name AS "userName"
      ,user_password AS "userPassword"
      ,user_id AS "userId"
      ,is_admin
  `,
};
