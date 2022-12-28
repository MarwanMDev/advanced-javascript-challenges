import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { FEATURED_PRODUCTS } from '../../../constants/api';

const ExampleSection = () => {
  const { id } = useParams();
  const { register, control, handleSubmit } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const example = FEATURED_PRODUCTS.find(
    (example) => example.id === id
  );

  // const handleOnClick = (e) => {
  //   e.preventDefault();
  //   example.excute(1, 2);
  // };

  return (
    <div className="flex flex-row justify-between px-10 lg:px-20 my-10 h-96">
      <div className="flex flex-col gap-y-5 justify-center items-start w-2/4">
        <h2 className="text-3xl">{example?.title}</h2>
        <p className="text-justify">{example?.description}</p>
        <p className="text-justify">{example?.note}</p>
      </div>
      <div className="flex flex-col gap-y-5 justify-center items-center w-2/4">
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="flex flex-col gap-y-5"
        >
          {fields.map(({ id }, index) => (
            <div key={id} className="flex flex-row gap-5">
              <input
                type="number"
                className='"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
                {...register(`items.${index}.number`)}
              />

              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-red-900"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex flex-row gap-5">
            <button
              type="button"
              onClick={() => append({})}
              className="bg-gray-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-gray-900"
            >
              append
            </button>
            <button
              className="bg-purple-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-purple-900"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        {/* <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter array of numbers"
        /> */}
      </div>
    </div>
  );
};

export default ExampleSection;
