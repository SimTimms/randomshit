import gql from 'graphql-tag';

export const PROFILE = gql`
  {
    profile {
      _id
      name
      summary
      lastOn
      badges {
        badgeType
      }
      profileBG
      profileImg
      autosave
      email
      creatorTrue
      creativeTrue
      paymentMethod
      available
      acceptsSpeculative
      acceptsRoyalties
      acceptsUnfunded
      onboarding
      facebook
      twitter
      website
      instagram
      linkedIn
      publicEmail
      skype
      phone
      sections {
        _id
        summary
        showreel
        type
        gallery {
          _id
          summary
          images {
            _id
            img
          }
        }
        notableProjects {
          _id
          summary
          name
          image
        }
        testimonials {
          _id
          name
          summary
          image
        }
      }
    }
  }
`;
