import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { FEATURED_PRODUCTS } from '../../../constants/api';
import TextField from '@mui/material/TextField';

const ExampleSection = () => {
  const { id } = useParams();
  const example = FEATURED_PRODUCTS.find(
    (example) => example.id === id
  );
  const [isSubmitted, setIsSubmitted] = React.useState({
    data: {},
    status: false,
  });
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      numbers: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'numbers',
  });

  return (
    <div className="flex flex-row justify-between px-10 lg:px-20 my-10">
      <div className="flex-1 flex-col gap-y-5 justify-center items-start w-2/4">
        <h2 className="text-3xl">{example?.title}</h2>
        <p className="text-justify">{example?.description}</p>
        <p className="text-justify">{example?.note}</p>
      </div>
      <div className="flex flex-col gap-y-5 justify-center items-center w-2/4">
        <form
          onSubmit={handleSubmit((data) => {
            let result = example?.excute(data);
            console.log(result);
            setIsSubmitted({ data: result, status: true });
          })}
          onChange={() => setIsSubmitted({ status: false })}
          className="flex flex-col gap-y-5 w-3/4"
        >
          {fields.map((item, index) => (
            <div key={index} className="flex flex-row gap-5">
              <TextField
                id={`numbers${index}`}
                label="Outlined"
                variant="outlined"
                type="number"
                name={`numbers${index}`}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register(`numbers.${index}`, { required: true })}
              />
              <button
                type="button"
                onClick={() => {
                  remove(index);
                  setIsSubmitted({ status: false });
                }}
                className="bg-red-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-red-900"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex flex-row gap-5">
            <button
              type="button"
              onClick={() => {
                append({});
                setIsSubmitted({ status: false });
              }}
              className="bg-gray-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-gray-900"
            >
              Append
            </button>
            <button
              className="bg-purple-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-purple-900"
              type="submit"
            >
              Submit
            </button>
          </div>
          {isSubmitted.status && (
            <div>
              {' '}
              {Object.keys(isSubmitted.data).map((key, index) => {
                return (
                  <div key={index}>
                    <h2>
                      {key}: {isSubmitted.data[key]}
                    </h2>

                    <hr />
                  </div>
                );
              })}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ExampleSection;
