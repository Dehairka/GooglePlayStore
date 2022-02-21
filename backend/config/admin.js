module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cebd49ae39d6d24e447945bd831a807c'),
  },
});
