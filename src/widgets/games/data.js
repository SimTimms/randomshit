import gql from 'graphql-tag';

export const FEATURED_GAME_WIDGET = gql`
  {
    featuredGameWidget {
      _id
      name
      summary
      gltf
      bin
      js
      url
      artistName
      artistLink
      licenseLink
      copyrightDescription
      whereToBuyLink
    }
  }
`;

export const REMOVE_GAME = gql`
  mutation gameRemoveById($_id: MongoID!) {
    gameRemoveById(_id: $_id) {
      recordId
    }
  }
`;

export const POSTS_BY_GAME = gql`
  query postsByGame($_id: MongoID!) {
    postsByGame(_id: $_id) {
      name
      logo
      featureImage
      gltf
      bin
      js
      summary
      url
      showreel
      type
      approved
      user {
        _id
        name
        profileImg
      }
    }
  }
`;

export const GAME_BY_ID = gql`
  query gameById($_id: MongoID!) {
    gameById(_id: $_id) {
      _id
      name
      summary
      featureImage
      gltf
      bin
      js
      url
      price
      patreon
      artistName
      artistLink
      licenseLink
      copyrightDescription
      whereToBuyLink
      user {
        _id
        name
        profileImg
      }
      gamePart {
        _id
        name
        gltf
        js
        bin
        img
      }
      gamePost {
        name
        url
        video
        img
        summary
      }
    }
  }
`;

export const GAME_WIDGET = gql`
  {
    gameWidget {
      _id
      name
      summary
      featureImage
      gltf
      bin
      js
      url
      patreon
      price
      artistName
      artistLink
      licenseLink
      copyrightDescription
      whereToBuyLink
      user {
        _id
        name
      }
      gamePart {
        _id
        name
        gltf
        js
        bin
        img
      }
      gamePost {
        name
        url
        video
        img
        summary
      }
    }
  }
`;

export const MY_GAMES = gql`
  {
    myGames {
      _id
      name
      summary
      featureImage
      gltf
      js
      bin
      url
      showreel
      artistName
      artistLink
      licenseLink
      copyrightDescription
      whereToBuyLink
    }
  }
`;

export const CREATE_GAME = gql`
  mutation gameCreateOne(
    $name: String
    $summary: String
    $url: String
    $gltf: String
    $bin: String
    $js: String
    $artistName: String
    $artistLink: String
    $licenseLink: String
    $copyrightDescription: String
    $whereToBuyLink: String
    $featureImage: String
    $showreel: String
    $gamePart: [GameGamePartInput]
    $gamePost: [GameGamePostInput]
  ) {
    gameCreateOne(
      record: {
        name: $name
        summary: $summary
        url: $url
        gltf: $gltf
        bin: $bin
        js: $js
        showreel: $showreel
        gamePart: $gamePart
        gamePost: $gamePost
        featureImage: $featureImage
        artistName: $artistName
        artistLink: $artistLink
        licenseLink: $licenseLink
        copyrightDescription: $copyrightDescription
        whereToBuyLink: $whereToBuyLink
      }
    ) {
      recordId
    }
  }
`;

export const UPDATE_GAME = gql`
  mutation gameUpdateById(
    $_id: MongoID!
    $name: String
    $summary: String
    $url: String
    $gltf: String
    $bin: String
    $js: String
    $showreel: String
    $price: String
    $featureImage: String
    $artistName: String
    $artistLink: String
    $licenseLink: String
    $copyrightDescription: String
    $whereToBuyLink: String
    $gamePart: [GameGamePartInput]
    $gamePost: [GameGamePostInput]
  ) {
    gameUpdateById(
      record: {
        _id: $_id
        name: $name
        summary: $summary
        url: $url
        gltf: $gltf
        bin: $bin
        js: $js
        showreel: $showreel
        price: $price
        gamePart: $gamePart
        gamePost: $gamePost
        featureImage: $featureImage
        artistName: $artistName
        artistLink: $artistLink
        licenseLink: $licenseLink
        copyrightDescription: $copyrightDescription
        whereToBuyLink: $whereToBuyLink
      }
    ) {
      recordId
    }
  }
`;
