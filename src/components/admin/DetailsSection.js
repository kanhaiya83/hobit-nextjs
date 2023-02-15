import { cloneDeep } from 'lodash';
import React from 'react'

const formatDateString = (val) => {
    val = new Date(val);
    return `${val.getFullYear()}-${`0${val.getMonth() + 1}`.slice(
      -2
    )}-${val.getDate()}`;
  };
const DetailsSection = ({formData,setFormData}) => {
    const changeHandler = (val, key) => {
        setFormData((prev) => {
          const clonedState = cloneDeep(prev);
          clonedState[key] = val;
          return clonedState;
        });
      };
  return (
    <div className='w-full'>
          <FormControl
              label={"Price(rupees)"}
              value={formData.price}
              onChange={(e) => {
                changeHandler(parseInt(e.target.value), "price");
              }}
              type={"number"}
            />
            <div class="border-b border-slate-500 my-2 w-full"></div>
            <DatePicker
              label={"Starting Date"}
              value={formData.startDate}
              onChange={(e) => {
                changeHandler(new Date(e.target.value).getTime(), "startDate");
              }}
              />
            <div class="border-b border-slate-500 my-2 w-full"></div>
            <FormControl
              label={"Instructor Name"}
              value={formData.instructor?.name}
              onChange={(e) => {
                setFormData((prev) => {
                  const clonedState = cloneDeep(prev);
                  clonedState.instructor.name = e.target.value;
                  return clonedState;
                });
              }}
            />
            <div class="border-b border-slate-500 my-2 w-full"></div>  <FormControl
              label={"Instructor Description"}
              value={formData.instructor?.description}
              onChange={(e) => {
                setFormData((prev) => {
                  const clonedState = cloneDeep(prev);
                  clonedState.instructor.description = e.target.value;
                  return clonedState;
                });
              }}
              isTextarea={true}
            />
            <div class="border-b border-slate-500 my-2 w-full"></div>
    </div>
  )
}

const FormControl = ({ label, value, onChange, type,isTextarea }) => {
    return (
      <div className="my-4 flex flex-col items-start w-full">
        <label className='block mb-1'>{label}</label>
        {isTextarea?
        <textarea
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="p-2  border-[#3b383a] border-2 text-white bg-transparent rounded-lg focus:outline-none w-full"
      />
        :<input
          type={type || "text"}
          value={value}
          onChange={onChange}
          className="p-2  border-[#3b383a] border-2 text-white bg-transparent rounded-lg focus:outline-none"
        />}
      </div>
    );
  };
  const DatePicker = ({ label, value, onChange }) => {
    return (
      <div className="my-4 flex flex-col items-start w-full">
        <label className='block mb-1'>{label}</label>
        <input
          type={"date"}
          onChange={onChange}
          value={formatDateString(value)}
          className="p-2 border-[#3b383a] border-2 text-white bg-transparent rounded-lg focus:outline-none"
        />
      </div>
    );
  };

export default DetailsSection