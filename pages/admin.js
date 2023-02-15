import React, { useEffect, useState } from "react";
import Header from "../src/components/Header";
import LoginModal from "../src/components/LoginModal";
import { useAuthContext } from "../src/context/authContext";
import { db, logout } from "../src/utils/firebase";
import {
  ref,
  onValue,
  getStorage,
  update,
  set,
} from "firebase/database";
import { cloneDeep } from "lodash";
import { TeaserUpload, TestimonialUpload, ThumbnailUpload, VideoTestimonialUpload } from "../src/admin";
import { FormControlWrapper, VideoTestimonialFormControl } from "../src/admin/Form";
const formatDateString = (val) => {
  val = new Date(val);
  return `${val.getFullYear()}-${`0${val.getMonth() + 1}`.slice(
    -2
  )}-${val.getDate()}`;
};
const AdminPage = () => {
  const { user, isAuthenticated } = useAuthContext();
  const [pagesData, setPagesData] = useState([]);
  const [selectedPage, setSelectedPage] = useState(0);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (pagesData.length < 1) return;
    const newState = cloneDeep(pagesData[selectedPage]);
    console.log({ newState });
    setFormData(newState);
  }, [selectedPage, pagesData.length]);
  useEffect(() => {
    const pageRef = ref(db, "pages");
    onValue(pageRef, (snapshot) => {
      const data = snapshot.val();
      setPagesData(data);
    });
  }, []);
  useEffect(() => {
    if (
      isAuthenticated &&
      user.phoneNumber &&
      user.phoneNumber !== "+918080808080"
    ) {
      logout();
    }
  }, [isAuthenticated]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const changeHandler = (val, key) => {
    setFormData((prev) => {
      const clonedState = cloneDeep(prev);
      clonedState[key] = val;
      return clonedState;
    });
  };
  const handleSave = async () => {
    console.log("saving formData:", formData);
    setSaving(true);
    try {
      await update(ref(db), { "/pages/0": formData });
      setSaving(false);
      alert("Data saving saved successfully!!");
    } catch (e) {
      setSaving(false);

      alert("Some error occurred!");
      console.log(e);
    }
  };
  console.log(formData);
  return (
    <div className="bg-dark-secondary-color text-white min-w-screen min-h-screen pt-20 px-[10%]">
      <Header />
      <h1 className="text-4xl w-full text-center">Admin Page</h1>
      {pagesData.length ? (
        <>
          <label className="block mb-1 text-sm">Selected Activity</label>
          <select
            onChange={(e) => {
              setSelectedPage(e.target.value);
            }}
            value={selectedPage}
            className="text-black p-2"
          >
            {pagesData.map((p, i) => {
              return (
                <option value={i} key={p.campaign_id}>
                  {p.activity_name}
                </option>
              );
            })}
          </select>
          <div class="border-b border-slate-500 my-2 w-full"></div>

          <form onSubmit={handleSubmit}>
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
                changeHandler(new Date(e.target.value), "startDate");
              }}
            />
            <div class="border-b border-slate-500 my-2 w-full"></div>

            <FormControlWrapper label="Teaser">
              <a
                className="block text-lg text-blue-500 underline"
                href={formData?.teaser?.src}
                target="_blank"
                rel="noreferrer"
              >
                Watch Current
              </a>
              <TeaserUpload setFormData={setFormData} />
            </FormControlWrapper>
            <div class="border-b border-slate-500 my-2 w-full"></div>

            <FormControlWrapper label="Testimonials">
              <div className="flex gap-x-6 gap-y-8 flex-wrap items-stretch">
                {formData.testimonialsImages?.map((img, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        "flex flex-col justify-between items-center gap-3 w-40"
                      }
                    >
                      <div class="w-full relative pt-40 overflow-hidden bg-black">
                        <img
                          src={img}
                          alt=""
                          className="w-full absolute top-0 left-0"
                        />
                      </div>
                      <div className="flex flex-col">
                        <a
                          href={img}
                          target="_blank"
                          className="block text-lg text-blue-500 underline"
                          rel="noreferrer"
                        >
                          Visit
                        </a>
                        <button
                          className="bg-slate-700 mt-2 p-3 rounded"
                          onClick={() => {
                            setFormData((prev) => {
                              const clonedState = cloneDeep(prev);
                              clonedState.testimonialsImages =
                                clonedState.testimonialsImages.filter(
                                  (i) => i != img
                                );
                              return clonedState;
                            });
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <TestimonialUpload setFormData={setFormData} />
            </FormControlWrapper>
           <VideoTestimonialFormControl formData={formData} setFormData={setFormData}/>
            <button onClick={handleSave} className="bg-slate-800 p-3 rounded">
              {saving ? "Saving..." : "Save"}
            </button>
          </form>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};
const FormControl = ({ label, value, onChange, type }) => {
  return (
    <div className="my-4 flex flex-col items-start w-full">
      <label>{label}</label>
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="p-2 border-slate-700 border-2 text-black focus:outline-none"
      />
    </div>
  );
};
const DatePicker = ({ label, value, onChange }) => {
  return (
    <div className="my-4 flex flex-col items-start w-full">
      <label>{label}</label>
      <input
        type={"date"}
        onChange={onChange}
        value={formatDateString(value)}
        className="p-2 border-slate-700 border-2 text-black focus:outline-none"
      />
    </div>
  );
};
export default AdminPage;
