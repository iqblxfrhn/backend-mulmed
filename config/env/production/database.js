module.exports = ({ env }) => ({
  Connection: {
    client: "postgres",
    Connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "strapi"),
      user: env("PGUSER", "strapi"),
      password: env("PGPASSWORD", "password"),
      ssl: env.bool(true),
    },
    Pool: { min: 0 },
  },
});
