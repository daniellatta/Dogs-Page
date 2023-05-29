const validations = (dog) => {
  let error = {};
  if (dog.name === '' || (dog.minHeight && !dog.name?.length)) {
    error = {
      ...error,
      name: 'El perro debe tener un nombre',
    };
    return error;
  } else {
    error = {};
  }
  if (dog.name?.length > 25) {
    error = {
      ...error,
      name: 'Nombre muy largo',
    };
    return error;
  } else {
    error = {};
  }
  if (+dog.minHeight > +dog.maxHeight) {
    error = {
      ...error,
      height: 'La estatura minima no puede ser mayor que la maxima',
    };
    return error;
  } else {
    error = {};
  }
  if (+dog.minWeight > +dog.maxWeight) {
    error = {
      ...error,
      height: 'El peso minimo no puede ser mayor que el maximo',
    };
    return error;
  } else {
    error = {};
  }
  if (+dog.minLife_span > +dog.maxLife_span) {
    error = {
      ...error,
      life_span: 'La longevidad minima no puede ser mayor que la maxima',
    };
    return error;
  } else {
    error = {};
  }
  if (dog.image && !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(dog.image)) {
    error = {
      ...error,
      image: 'Ingrese una url valida aquí',
    };
    return error;
  } else {
    error = {};
  }
};

export default validations;
