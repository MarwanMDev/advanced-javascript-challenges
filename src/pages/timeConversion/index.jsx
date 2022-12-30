import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

const TimeConversion = (pros) => {
  const { example } = pros;
  const [isSubmitted, setIsSubmitted] = React.useState({
    data: {},
    status: false,
  });
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: '12:01:00PM',
    },
  });

  return (
    <>
      <div className="flex flex-row justify-between px-10 lg:px-20 my-10">
        <div className="flex flex-col gap-y-5 items-start w-2/4">
          <h2 className="text-3xl">{example?.title}</h2>
          <p className="text-justify">{example?.description}</p>
          <p className="text-justify">{example?.note}</p>
        </div>
        <div className="flex flex-col gap-y-5 items-center w-2/4">
          <form
            onSubmit={handleSubmit((data) => {
              setLoading(true);
              let result = example?.execute(data);
              setIsSubmitted({
                data: result,
                status: true,
              });
              setLoading(false);
            })}
            onChange={() => setIsSubmitted({ status: false })}
            className="flex flex-col gap-y-5 w-4/5 justify-center items-center"
          >
            <TextField
              id="date"
              label="Date"
              variant="outlined"
              type="text"
              name="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('date', {
                pattern:
                  /^(1[0-2]|0?[1-9]):([0-5]?[0-9]):([0-5]?[0-9])AM|PM$/g,
                required: true,
              })}
            />
            {errors.date && (
              <p className="text-red-500">
                Please Check String format
              </p>
            )}

            <button
              className="bg-purple-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-purple-900 w-full transition ease-in-out delay-150 duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {loading && (
        <div className="flex flex-row justify-center items-center w-full">
          <CircularProgress />
        </div>
      )}
      {isSubmitted.status && (
        <div className="flex flex-row items-center con justify-center px-10 lg:px-20 my-10 w-full">
          <p className="text-3xl border border-white rounded w-2/4 h-24 text-center flex items-center justify-center">
            {isSubmitted.data}
          </p>
        </div>
      )}
    </>
  );
};

export default TimeConversion;
