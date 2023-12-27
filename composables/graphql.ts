export const queryPage = async (document: string, components: string | string[]): Promise<string> => {
  let query = `
        query {
            ${document} {
                data {
                    id
                    attributes {
                        title
                        slug
                        components {
    `;
  if (typeof components === 'string') {
    // If only one component is provided
    query += `
                                                  ${components}
                            `;
  } else if (Array.isArray(components)) {
    // If an array of components is provided
    for (let index = 0; index < components.length; index++) {
      const component = components[index];
      query += `
                                                  ${component}
                                                  
                              `;
    }
  }
  query += `
                        }
                    }
                }
            }
        }
      `;
  return query;
}

export const image = `
    image {
      data {
        attributes {
          url
        }
      }
    }
  `;

export const section = `
    ... on ComponentHomepageSection {
      title
      details
      iconGroup {
        title
        ${image}
      }
    }
  `;

export const hero = `
    ... on ComponentHomepageHero {
      hello
      name
      description
      ${image}
      button {
        links
        text
        variant
        ${image}
      }
    }
  `;