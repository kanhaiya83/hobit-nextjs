import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-100 text-slate-800 py-10 px-[5%] md:px-[10%]">
      <div className="w-full flex justify-start mb-3">
        <Image src="/images/logo.png" alt="" width={40} height={40} />
        <h2 className="uppercase text-3xl font-bold ml-2">HOBIT</h2>
      </div>
      <div className="grid grid-cols-2 gap-y-2 md:grid-cols-3 w-full mb-6">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold pb-2 border-primary-color border-b-2 mb-2 w-fit">
            Company
          </h3>
          <a href="https://hobit.in/about-us" className="text-sm mb-2">About Us</a>
          <a href="#" className="text-sm mb-2">Blog</a>
          <a href="#" className="text-sm mb-2">Careers</a>
          <a href="#" className="text-sm mb-2">Contact Us</a>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold pb-2 border-primary-color border-b-2 mb-2 w-fit">
            Legal
          </h3>
          <a href="https://hobit.in/cookies-policy" className="text-sm mb-2">Cookies Policy</a>
          <a href="https://hobit.in/privacy-policy" className="text-sm mb-2">Privacy Policy</a>
          <a href="https://hobit.in/terms-of-services" className="text-sm mb-2">Terms of Services</a>
          <a href="https://hobit.in/law-enforcement" className="text-sm mb-2">Law Enforcement</a>
        </div>
        <div className="flex flex-col col-span-2 md:col-auto">
            <h1 className="font-semibold pb-2 border-b-2 border-primary-color mb-2 w-fit">Install App</h1>
            <div className="flex w-full">
                <a href="https://play.google.com/store/apps/details?id=com.hobitb2c" className="mr-2">
                <Image src="/images/play-store.png" alt=""  className="h-10 rounded-lg"  width={160} height={40} />
                </a>
                <a href="https://apps.apple.com/in/app/hobit/id1536252998">
                <Image src="/images/app-store.png" alt=""  className="h-10 rounded-lg"  width={160} height={40} />
                </a>
            
            </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-start mb-6">
        <h1 className="text-lg mr-2">FOLLOW US ON</h1>
        <a href="https://www.facebook.com/OfficialHobitPage" className="mr-2"  target="_blank" rel="noreferrer">
        <Image src="/images/facebook.svg" alt="" width={32} height={32} />
        </a>
        <a href="https://www.linkedin.com/company/hobit-technology/" className="mr-2"  target="_blank" rel="noreferrer">
        <Image src="/images/linkedin.svg" alt="" width={32} height={32} />
        </a>
        <a href="https://instagram.com/hobit.in?igshid=YmMyMTA2M2Y=" className="mr-2"  target="_blank" rel="noreferrer">
        <Image src="/images/instagram.svg" alt="" width={32} height={32} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=917042841737" className="mr-2"  target="_blank" rel="noreferrer">
        <Image src="/images/whatsapp.svg" alt=""  width={32} height={32} />
        </a>
      </div>
        <h4 className="text-slate-600 font-medium w-full text-center md:text-left">© 2022 All rights reserved by Hobit Technologies Pvt. Ltd.</h4>
    </footer>
  );
};
export default Footer;
