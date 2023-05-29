import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validations from './validations';

const useCreateDogs = () => {
  const dispatch = useDispatch();
  const [newDog, setNewDog] = useState({});
  const [dog, setDog] = useState({});
  const [temps, setTemps] = useState([]);
  const [ids, setIds] = useState([]);
  const [error, setError] = useState({
    name: '',
    height: '',
    weight: '',
    life_span: '',
    image: '',
    temperaments: '',
  });
  const { allTemperaments } = useSelector((state) => state);

  useEffect(() => {
    setError(validations(dog));
    setNewDog({
      name: dog.name,
      height: `${dog.minHeight} - ${dog.maxHeight}`,
      weight: `${dog.minWeight} - ${dog.maxWeight}`,
      life_span: `${dog.minLife_span} - ${dog.maxLife_span} years`,
      image: dog.image,
      temperaments: temps.map((temp) => temp.id),
    });
  }, [dog, temps]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDog({
      ...dog,
      [name]: value,
    });
  };

  const handleTemps = (event) => {
    const value = event.target.value;
    if (!ids.includes(+value)) {
      setIds([...ids, +value]);
      setTemps([
        ...temps,
        {
          id: +value,
          name: allTemperaments[value - 1].name,
        },
      ]);
    }
  };

  const handleDelete = (id) => {
    setIds(ids.filter((temp) => temp.id !== id));
    setTemps(temps.filter((temp) => temp.id !== id));
  };

  return {
    handleChange,
    handleTemps,
    handleDelete,
    temps,
    error,
    dog,
    newDog,
  };
};

export default useCreateDogs;
