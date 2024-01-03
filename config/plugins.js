module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: "drsdtnfln",
          api_key: "211191784612923",
          api_secret: "GihvXDUzEQh8KoiqroGRkHkyryU",
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });