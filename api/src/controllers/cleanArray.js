const cleanArray = (dbData) => {
  const cleanData = dbData?.map((breed) => {
    return {
      id: breed?.id,
      name: breed?.name,
      height: {
        metric: breed?.height,
      },
      weight: {
        metric: breed?.weight,
      },
      life_span: breed?.life_span,
      image: {
        url: breed?.image,
      },
      temperament: breed?.Temperaments.map((temp) => temp.name).join(', '),
    };
  });
  return cleanData;
};

module.exports = cleanArray;
