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
import { TeaserUpload, TestimonialUpload, ThumbnailUpload, VideoTestimonialUpload } from "../src/components/admin";
import { FormControlWrapper, VideoTestimonialFormControl } from "../src/components/admin/Form";
import Sidebar from "../src/components/admin/Sidebar";
import DetailsSection from "../src/components/admin/DetailsSection";
import TeaserSection from "../src/components/admin/TeaserSection";
import TestimonialsSection from "../src/components/admin/TestimonialsSection";
import VideoTestimonialsSection from "../src/components/admin/VideoTestimonialsSection";
import BackgroundImageSection from "../src/components/admin/BackgroundImageSection";

const AdminPage = () => {
  const [selectedPath,setSelectedPath] = useState("Details")
  const { user, isAuthenticated } = useAuthContext();
  const [pagesData, setPagesData] = useState([]);
  const [selectedPage, setSelectedPage] = useState(0);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (pagesData.length < 1) return;
    const newState = cloneDeep(pagesData[selectedPage]);
    setFormData(newState);
  }, [selectedPage, pagesData?.length]);
  useEffect(() => {
    const pageRef = ref(db, "pages");
    onValue(pageRef, (snapshot) => {
      const data = snapshot.val();
      if(!data || data.length===0)return;
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
  if(!isAuthenticated){
    return <div className="bg-dark-secondary-color text-white min-w-screen min-h-screen pt-20 px-[10%]">
    <Header />
    <h1 className="text-4xl w-full text-center mb-4">Admin Panel</h1>

    <h1 class="text-xl mt-[10%] w-full text-center">Please Login</h1>
    </div>
  }
  const pathComponents={
    "Details":<DetailsSection formData={formData} setFormData={setFormData}/>,
    "Teaser":<TeaserSection formData={formData} setFormData={setFormData}/>,
    "Background Image":<BackgroundImageSection formData={formData} setFormData={setFormData}/>,
    "Testimonials":<TestimonialsSection formData={formData} setFormData={setFormData}/>,
    "Video Testimonials":<VideoTestimonialsSection formData={formData} setFormData={setFormData}/>
  }
  return (
    <div className="bg-dark-primary-color text-white min-w-screen min-h-screen pt-24 px-[5%]">
      <Header />
      <h1 className="text-4xl w-full text-center mb-4">Admin Panel</h1>

      <div class="w-full h-full min-h-[80vh] flex gap-x-4">
        <div class="sidebar flex-1 bg-dark-secondary-color rounded-lg">
          <Sidebar selectedPath={selectedPath} setSelectedPath={setSelectedPath} selectedPage={selectedPage} setSelectedPage={setSelectedPage} pagesData={pagesData}/>
        </div>
        <div class="main-content flex-[4] relative  bg-dark-secondary-color rounded-lg px-4 pt-6 pb-20">
          <h1 className="text-3xl mb-4 w-full text-center">{selectedPath}</h1>
          {pagesData?.length ? pathComponents[selectedPath]:<h1 class="text-2xl mt-[10%] w-full text-center">Loading...</h1>}
          <button onClick={handleSave} className="bg-primary-color p-3 rounded absolute bottom-2 right-2">
              {saving ? "Saving..." : "Save"}
            </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
