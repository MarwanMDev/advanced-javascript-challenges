import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';

const PlusMinus = (props) => {
  let { example } = props;
  const [isSubmitted, setIsSubmitted] = React.useState({
    data: {},
    status: false,
  });
  const [loading, setLoading] = React.useState(false);
  const { register, reset, control, handleSubmit } = useForm({
    defaultValues: {
      numbers: [1, -1, '0'],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'numbers',
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
            {fields.map((item, index) => (
              <div key={index} className="flex flex-row gap-5 w-full">
                <TextField
                  id={`numbers${index}`}
                  label="Number"
                  variant="outlined"
                  type="number"
                  name={`numbers${index}`}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register(`numbers.${index}`, {
                    required: true,
                  })}
                />
                <button
                  type="button"
                  onClick={() => {
                    remove(index);
                    setIsSubmitted({ status: false });
                  }}
                  className="bg-red-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-red-900 transition ease-in-out delay-150 duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex flex-row flex-wrap gap-5 justify-between w-full">
              <button
                type="button"
                onClick={() => {
                  append({});
                  setIsSubmitted({ status: false });
                }}
                className="bg-gray-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-gray-900 w-full transition ease-in-out delay-150 duration-300"
              >
                Append
              </button>
              <button
                className="bg-purple-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-purple-900 w-full transition ease-in-out delay-150 duration-300"
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-red-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-red-900 w-full transition ease-in-out delay-150 duration-300"
                type="button"
                onClick={() => {
                  setIsSubmitted({ status: false });
                  reset();
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      {loading && (
        <div className="flex flex-row justify-center items-center w-full">
          <CircularProgress />
        </div>
      )}
      {isSubmitted.status && (
        <div className="flex flex-row justify-between px-10 lg:px-20 my-10 w-full">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="result table">
              <TableHead>
                <TableRow>
                  <TableCell>Positive</TableCell>
                  <TableCell>Negative</TableCell>
                  <TableCell>Zero</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  {Object.keys(isSubmitted.data).map((key, index) => {
                    return (
                      <TableCell
                        key={index}
                        component="th"
                        scope="row"
                      >
                        {isSubmitted.data[key]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
};

export default PlusMinus;
