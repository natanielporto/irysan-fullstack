let locations: any = [];

const PostcodesService = () => {
  const index = async (postcode: any) => {
    if (locations.length <= 2) {
      locations.push(postcode);
      return locations;
    }

    locations.push(postcode);
    locations = locations.slice(1, 4);

    return locations;
  };

  return { index };
};

export default PostcodesService();
