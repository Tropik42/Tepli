module.exports = {
  /* eslint-disable */
  getAllUsers: `
    SELECT
      user_id  AS "userId"
      ,user_name AS "username"
      ,is_admin AS "isAdmin"
    FROM 
      users 
    ORDER BY 
      user_id
  `,

  createUser: `
    INSERT INTO 
     users (user_name,user_password)
    VALUES ($1, $2 )
    RETURNING 
      user_name AS "userName"
      ,user_password AS "userPassword"
      ,user_id AS "userId"
      ,is_admin
  `,

  userLogin: `
    SELECT 
      user_id        AS "userId"
      ,is_admin      AS "isAdmin"
      ,user_password AS "userPassword"
    FROM 
      users 
    WHERE 
      user_name = $1
  `,
  /* eslint-enable */
};
